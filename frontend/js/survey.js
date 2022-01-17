import "../../backend/js/entry.js"
import { surveyHelpText } from "./content.js"

let layout = globalThis.schema.layout;

class SurveyUtil {
  constructor() {

    this.valPrep = {
      single: (this.singlePrep).bind(this),
      multiple: (this.multiPrep).bind(this)
    }

    Survey
      .StylesManager
      .applyTheme("modern");
  }

  getLayout() {
    return layout;
  }

  // Build Survey
  init(cfg) {
    let { submitFcn } = cfg;
    this.lang = cfg.lang;
    // this.colNames = [];

    // Check if we are doing the short form or not
    let urlSearchParams = new URLSearchParams(window.location.search);
    this.isIntake = urlSearchParams.get("allQuestions") == null;
    if ('isIntake' in cfg) // override
      this.isIntake = cfg.isIntake

    // SURVEY ROOTS
    let paginated = {
      title: cfg.title,
      "completedHtml": cfg.completedHtml,
      showProgressBar: "top",
      "pages": [],
      "showQuestionNumbers": "on",
    };

    let json = paginated;

    //   let opts = {
    //     rvFcn: d => console.log("SURVEY POST", sender.data, d),
    //     method: 'POST',
    //     body: { data: sender.data, lang: navigator.language.split('-')[0] },
    //     url: cfg.url
    //   };
    //   submitFcn(opts);
    //   // this.aws.call('submitSurvey', { data: sender.data, lang: navigator.language.split('-')[0] }); // en, ur
    // }).bind(this);
    // function test(s, options) {
    //   // console.log(options);

    this.addItems(json, json.pages, json.pages, layout, layout.Main)
    this.surveyObj = this.render("surveyContainer", json, { onComplete: cfg.onComplete, onAfterRenderQuestionInput: cfg.onAfterRenderQuestionInput });

  }

  clear() {
    this.surveyObj.clear();
  }

  render(el, json, handlers) {
    Survey.surveyLocalization.locales["ur"] = this.getUrdu();
    Survey.surveyLocalization.localeNames["ur"] = "Urdu";
    let survey = new Survey.Model(json);
    if (this.lang == 'ur') {
      survey.locale = 'ur';
      document.body.style.direction = "rtl"; // enable if requested
    }

    Object.keys(handlers).forEach(d => {
      survey[d].add(handlers[d]);
    })

    survey.render(el);
    return survey;
  }

  addPanelDynamic(elements, d) {
    let element = {
      "type": "paneldynamic",
      "name": d.Name,
      "title": d["Description-" + this.lang],
      "renderMode": "list",
      "templateTitle": `${d["Values-" + this.lang]} #{panelIndex}`,
      "templateElements": [],
      "panelCount": 1,
      "minPanelCount": 1,
      // "panelAddText": `Add New ${d["Values-" + this.lang]}`,
      // "panelRemoveText": `Remove ${d["Values-" + this.lang]}`,
    }
    if (this.lang == 'en') {
      element.panelAddText = `Add New ${d["Values-" + this.lang]}`;
      element.panelRemoveText = `Remove ${d["Values-" + this.lang]}`;
    }
    if (this.lang == 'ur') {
      element.panelAddText = `ایک اور ${d["Values-" + this.lang]}`;
      element.panelRemoveText = `حذف کریں ${d["Values-" + this.lang]}`;
    }

    if (parseInt(d.maxLen)) element.maxPanelCount = parseInt(d.maxLen);
    elements.push(element);
    return element.templateElements;
  }

  addItems(fn, pages, elements, templates, rows, indent) {
    let type = indent < 0 ? 'filter' : 'survey';

    // this.colNames.push(...rows.map(d => d.Name));

    if (!indent) indent = 0;

    let choicesByUrl = (function(d, item) {
      let val = this.valPrep[d.Input](d);
      if (val[0].startsWith('*')) {
        // item.choicesByUrl = {
        //   "url": `/jpp-prototype/data/Web Project Data Dictionary - ${val[0].slice(1)}.json`
        // }
        item.choices = layout[val[0].slice(1)].map(d => d.Province + '~' + d.District);
      } else {
        item.choices = val;
      }
    }).bind(this);

    rows.forEach(d => {
      let item;

      // indent == -1 for filter build
      if (indent >= 0 && d['Page-' + this.lang] != undefined && d['Page-' + this.lang].length) {
        let page = {
          title: d['Page-' + this.lang],
          "name": d['Page-' + this.lang],
          "elements": [],
        };
        pages.push(page);
        elements = page.elements;
      }

      if (d.Input == 'single' && type == "survey") {
        item = {
          type: "dropdown",
          name: d.Name,
          title: d["Description-" + this.lang],
          // optionsCaption: "Select...", // otherwise gets from localization
          colCount: 0,
        }

        // if it needs parsing
        if (typeof(d["Values-" + this.lang]) == 'string')
          choicesByUrl(d, item);
      }

      if (d.Input == 'string' && type == "survey") {
        item = {
          type: "text",
          name: d.Name,
          title: d["Description-" + this.lang],
          pplaceHolder: "Type Here",
          colCount: 0,
        }

        if (d['Values-en']) item = {...item, ...JSON.parse(d['Values-en']) };
        if (d.Type == "email") item.inputType = "email";
        if (d.Type == "number") item.inputType = "number";
        if (parseInt(d.maxLen)) item.maxLength = parseInt(d.maxLen);

      }

      if (d.Type == 'date') {
        let def = new Date("01/01/1970");
        let now = new Date();
        var diff = now.getTime() - def.getTime();
        var daysDelta = parseInt(diff / (1000 * 60 * 60 * 24));

        item = {
          type: "text",
          inputType: "date",
          name: d.Name,
          title: d["Description-" + this.lang],
          defaultValueExpression: `today(-${daysDelta})`,
          colCount: 0,
          maxValueExpression: "today(-1)"
        }
      }

      if (d.Input == 'multiple' || (d.Input == "single" && type == "filter")) {
        item = {
          "type": "tagbox",
          name: d.Name,
          title: d["Description-" + this.lang],
        }
        choicesByUrl(d, item);
      }

      if (type == "survey") {
        if (item) {
          item.indent = indent;
          if ((!this.isIntake) && item.name == "phone")
            item.isRequired = false;
          else
            item.isRequired = d.Required;
          // item.maxWidth = "50vh";
          if (this.isIntake)
            item.visible = d.Intake || false;

          elements.push(item);
        }

        if (d.Input == 'array') {
          let newElements = this.addPanelDynamic(elements, d);
          let newRows = templates[d["Values-en"]];
          this.addItems(d["Values-" + this.lang], pages, newElements, templates, newRows, indent + 1);
        }
      }

      //   if (type == "filter") {
      //     if (item) elements.push(item);
      //     if (d.Input == 'array') {
      //       let newRows = templates[d["Values-en"]];
      //       this.addItems(d["Values-" + this.lang], pages, elements, templates, newRows, indent);
      //     }

      //     if (item && d.Input == "date") { // add extra date fields
      //       item.minWidth = "1vw";
      //       let range = {
      //         type: "dropdown",
      //         name: `${d.Name}-range`,
      //         title: "+/-",
      //         // optionsCaption: "+/-", // otherwise gets from localization
      //         colCount: 0,
      //         choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      //         minWidth: "1vw",
      //         startWithNewLine: false
      //       };
      //       let units = {
      //         type: "dropdown",
      //         name: `${d.Name}-units`,
      //         title: "Term",
      //         // optionsCaption: "time", // otherwise gets from localization
      //         colCount: 0,
      //         choices: ["days", "weeks", "months", "years"],
      //         minWidth: "1vw",
      //         // width: "10vw",
      //         startWithNewLine: false
      //       };
      //       elements.push(range, units);
      //     }
      //   }
    });
  }


  singlePrep(d) {
    let vals = d['Values-' + this.lang].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter).split(',').map(d => `"${d.trim()}"`);
    return JSON.parse(`[${vals.join(',')}]`)
  }

  multiPrep(d) {
    let vals = d['Values-' + this.lang].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter).split(',').map(d => `"${d.trim()}"`);
    return JSON.parse(`[${vals.join(',')}]`)
  }

  // Use survey framework as filter UI when we have enough data
  // filterUI() {
  //   let promise = new Promise((function(resolveFcn, rejectFcn) {
  //     let build = (function(dataObj) {
  //       var json = {
  //         questions: [],
  //         "focusFirstQuestionAutomatic": false,
  //         "showQuestionNumbers": "off"
  //       }

  //       this.addItems(json, json.questions, json.questions, dataObj.template, dataObj.template.Main, -1);
  //       resolveFcn(json);


  //       // DEPROCATED FOR LACK OF DATA


  //       // this.surveyObj = this.render("filters", json, { onComplete: setFilters });
  //       this.filterJSON = json;
  //     }).bind(this);

  //     let setFilters = (function(d) {
  //       console.log(d);
  //     }).bind(this);

  //     let searchParam = undefined;
  //     this.data.loadSurvey(searchParam, build);
  //   }.bind(this)));

  //   return promise;
  // }
  getUrdu() {
    return {
      addPanel: "ایک اور",
      removePanel: "حذف کریں",
      pagePrevText: "پچھلا",
      pageNextText: "اگلا",
      completeText: "مکمل",
      previewText: "دیکهنا",
      editText: "ترمیم",
      startSurveyText: "شروع کریں",
      otherItemText: "دیگر (بیان کریں)",
      noneItemText: "کوئی نہیں",
      selectAllItemText: "تمام منتخب کریں",
      progressText: "صفحہ {0} از {1}",
      panelDynamicProgressText: "ریکارڈ {0} {1}",
      questionsProgressText: " سوالات کا جواب دیا۔ {0}/{1}",
      emptySurvey: "سروے میں کوئی نظر آنے والا صفحہ یا سوال نہیں ہے۔",
      completingSurvey: "سروے مکمل کرنے کے لیے آپ کا شکریہ!",
      completingSurveyBefore: "ہمارے ریکارڈ سے پتہ چلتا ہے کہ آپ پہلے ہی یہ سروے مکمل کر چکے ہیں۔",
      loadingSurvey: "...سروے لوڈ کر رہا ہے",
      optionsCaption: "...منتخب کریں ",
      value: "value",
      requiredError: "براہ کرم سوال کا جواب دیں۔",
      requiredErrorInPanel: "براہ کرم کم از کم ایک سوال کا جواب دیں۔",
      requiredInAllRowsError: "براہ کرم تمام قطاروں میں سوالات کے جوابات دیں۔",
      numericError: "اس کا جواب عدد میں ہونا چاہئے۔",
      minError: "عدد صفر سے کم نہیں ہونی چاہئے",
      maxError: "عدد صفر سے زیادہ نہیں ہونی چاہیے",
      textMinLength: "براہ کرم کم از کم صفر حروف درج کریں۔",
      textMaxLength: "براہ کرم صفر سے زیادہ حروف درج نہ کریں۔",
      textMinMaxLength: "براہ کرم کم از کم صفر اور ایک سے زیادہ حروف درج کریں۔",
      minRowCountError: "براہ کرم کم از کم صفر صفیں بھریں۔",
      minSelectError: "براہ کرم کم از کم صفر مختلف حالتیں منتخب کریں۔",
      maxSelectError: "براہ کرم صفر سے زیادہ متغیرات منتخب نہ کریں۔",
      numericMinMax: "صفر' کم از کم ایک اور زیادہ سے زیادہ دو ہونا چاہیے'",
      numericMin: "صفر' کم از کم ایک ہونا چاہیے'",
      numericMax: "صفر زیادہ سے زیادہ ایک ہونا چاہیے",
      invalidEmail: "برائے مہربانی درست ای میل ایڈریس لکھیں",
      invalidExpression: " کلام: {0} کو 'درست' لوٹنا چاہیے۔",
      urlRequestError: "درخواست نے غلطی '{0}' لوٹائی۔ {1}",
      urlGetChoicesError: "درخواست نے خالی ڈیٹا واپس کر دیا۔ یا 'راستہ' پراپرٹی غلط ہے۔",
      exceedMaxSize: "فائل کا سائز {0} سے زیادہ نہیں ہونا چاہیے.",
      otherRequiredError: "براہ کرم دوسری عدد درج کریں۔ ",
      uploadingFile: "آپ کی فائل اپ لوڈ ہو رہی ہے۔ براہ کرم چند سیکنڈ انتظار کریں اور دوبارہ کوشش کریں۔",
      loadingFile: "..لوڈ ہو رہا ہے۔",
      chooseFile: "..فائلیں منتخب کریں۔ ",
      noFileChosen: "کوئی فائل منتخب نہیں کی گئی ",
      fileDragAreaPlaceholder: "یہاں فائل ڈراپ کریں یا فائل کو لوڈ کرنے کے لیے نیچے والے بٹن پر کلک کریں۔",
      confirmDelete: "کیا آپ ریکارڈ حذف کرنا چاہتے ہیں؟",
      keyDuplicationError: "یہ عدد منفرد ہونی چاہیے۔",
      addColumn: "کالم شامل کریں۔",
      addRow: "قطار شامل کریں۔",
      removeRow: "مٹائے",
      emptyRowsText: "کوئی قطار نہیں ہیں۔ ",
      addPanel: "نیا شامل کریں",
      removePanel: "مٹائے",
      choices_Item: "آئٹم",
      matrix_column: "کالم۔",
      matrix_row: "قطار۔",
      multipletext_itemname: "عبارت",
      savingData: "...نتائج کو سرور پر محفوظ کیا جا رہا ہے",
      savingDataError: "ایک خرابی پیش آگئی اور ہم نتائج کو محفوظ نہیں کر سکے۔",
      savingDataSuccess: "نتائج کامیابی سے محفوظ ہو گئے۔",
      saveAgainButton: "دوبارہ کوشش کریں",
      timerMin: "منٹ",
      timerSec: "سیکنڈ",
      timerSpentAll: "آپ نے اس صفحے پر {0} اور مجموعی طور پر {1} خرچ کیا ہے۔",
      timerSpentPage: "آپ نے اس صفحے پر {0} خرچ کیا ہے۔",
      timerSpentSurvey: "آپ نے مجموعی طور پر {0} خرچ کیا ہے۔",
      timerLimitAll: "آپ نے اس صفحے پر {0} میں سے {1} اور مجموعی طور پر {2} میں سے {3} خرچ کیے ہیں۔",
      timerLimitPage: "آپ نے اس صفحے پر {0} میں سے {0} خرچ کیا ہے۔",
      timerLimitSurvey: "آپ نے کل {1} میں سے {1} خرچ کیا ہے۔",
      cleanCaption: "صاف",
      clearCaption: "صاف",
      signaturePlaceHolder: "یہاں سائن کریں۔",
      chooseFileCaption: "فائل منتخب کریں",
      removeFileCaption: "اس فائل کو ہٹائے۔",
      booleanCheckedLabel: "جی ہاں",
      booleanUncheckedLabel: "نہیں",
      confirmRemoveFile: "کیا آپ واقعی اس فائل کو ہٹانا چاہتے ہیں: {0}؟",
      confirmRemoveAllFiles: "کیا آپ تمام فائلیں ہٹانا چاہتے ہیں؟",
      questionTitlePatternText: "سوال کا عنوان۔",
      modalCancelButtonText: "منسوخ کریں",
      modalApplyButtonText: "درخواست دیں",
    };
  }
}

let lang = navigator.language.startsWith('ur') ? 'ur' : 'en';

function awsSubmit(obj) {
  let data = obj.getAllValues();

  let url = "https://12cao4lu68.execute-api.us-east-1.amazonaws.com/production/v1/submitSurvey";
  let awsCfg = {
    method: 'POST',
    body: JSON.stringify({
      data,
      lang
    })

  };

  const aws = new aws4fetch.AwsClient({
    accessKeyId: 'none',
    secretAccessKey: 'none',
    retries: 3
  });
  console.log('Submitting survey', data)

  function errModal(admMsg, usrMsg) {
    var errorModal = new bootstrap.Modal(document.getElementById('error-modal')); // ERROR MODAL
    console.error(admMsg);
    $('#error-modal #error-status').html(usrMsg);
    errorModal.show();
    // cfg.rvFcn();
  }

  async function call(url, opts) {
    const response = await aws.fetch(url, opts);

    if (response.status != 201) {
      errModal('AWS Fetch ERROR:' + response, response.status);
    }
    return response;
  }

  call(url, awsCfg);
}

// see onAfterRenderQuestionInput
function modQI(ev, el) {

  let e = $(el.htmlElement).parent().parent().parent();
  // some have the name a level up
  let n = e.attr('name') || $(el.htmlElement).parent().parent().attr('name');

  let href = `./info.html#${n}`;
  let dir = lang == 'ur' ? 'left' : 'right';
  let style = `text-decoration: none;float: ${dir}; color:#222;`;

  // set up help text when available
  e.find('.sv-title').each(function(e) {
    if (n in surveyHelpText) {
      let element = $.parseHTML(`<div class="far fa-question-circle" style="${style}"></div>`)
      $(this).prepend(element);
      $(element).on('click', function(e) { // opens help text modal
        var modal = new bootstrap.Modal(document.getElementById('helptext-modal'));
        if (lang == 'ur')
          $('#helptext-modal .modal-header button').css("margin", "-.5rem");
        $('#helptext-modal .modal-title').html(surveyHelpText[n][lang].header);
        $('#helptext-modal .modal-body').html(surveyHelpText[n][lang].body);
        modal.show();
      })
    }
  });

  // move dropdown arrows left
  // $(".sv-dropdown").css('background-position', 'left .1em top 50%, 0 0')
  $("[type='date']").css('background-image', 'unset')
}

$('#helptext-modal').attr("lang", lang);

let surveyCfg = {
  title: "Torture Incident Survey.",
  completedHtml: "<h3>Thank you for your submission.</h3> <h5>We would be happy to send you more information, hear about a case referral, or get you involved!</h5><h6 style='cursor: pointer; transform:translateY(3rem);''>You may now close this tab.</h6>",
  onComplete: awsSubmit,
  onAfterRenderQuestionInput: modQI,
  lang
};

let survey = new SurveyUtil();
survey.init(surveyCfg);

export { SurveyUtil as default };