import SurveyUtil from "./survey.js"
import { mergeDeep, pGet, pSet } from "./util.js"
import "../../backend/js/entry.js"
import { rootUrl } from "./common.js"

// AWS IAM XMLHTTPREQ
let url = rootUrl + '/incident';
let lang = navigator.language.startsWith('ur') ? 'ur' : 'en';

// GET SECRET KEYS
function getKeys() {
  let accessKeyId = $('#iam-id').val()
  let secretAccessKey = $('#iam-secret').val()
  if (accessKeyId == '' || secretAccessKey == '')
    return false
  return { accessKeyId, secretAccessKey }
}

// XMLHTTPREQUEST w UI Reporting on error
async function uiFetch(cfg) {

  let keys = getKeys();
  if (!keys) {
    if (!cfg.quietUI)
      errModal("USER HAS BLANK KEYS", "IAM User or Secret is empty.")
    cfg.rvFcn();
    return;
  }

  function errModal(admMsg, usrMsg) {
    var errorModal = new bootstrap.Modal(document.getElementById('error-modal')); // ERROR MODAL
    console.error(admMsg);
    $('#error-modal #error-status').html(usrMsg);
    errorModal.show();
    cfg.rvFcn();
  }

  try {
    const aws = new aws4fetch.AwsClient({...keys, ...cfg, retries: 3 });
    const response = await aws.fetch(cfg.url, { method: cfg.method, body: JSON.stringify(cfg.body) })
    console.log(response);
    if (response.status >= 200 && response.status <= 205) {
      if (response.status == 200 && !('method' in cfg)) {
        cfg.rvFcn(await response.json());
      } else {
        cfg.rvFcn();
      }
    } else {
      errModal('AWS Fetch ERROR:' + response, response.status);
      cfg.rvFcn();
    }
  } catch (error) {
    errModal('AWS Fetch CORS ERROR', 'Cross-Origin Error');
    cfg.rvFcn();
  }
}

// SETUP MODAL
$('#login-button').click(login)
$('#login').submit(function(event) { event.preventDefault(); });
let loginData = ['iam-id', 'iam-secret'];
loginData.forEach(d => {
  $('#' + d).val((history.state || {})[d] || '')
});

function login() {
  let accessKeyId = $('#iam-id').val()
  let secretAccessKey = $('#iam-secret').val()
    // history.pushState({ 'iam-id': accessKeyId, 'iam-secret': secretAccessKey }, '') // use if pwd save fails
  history.pushState({}, ''); // on Chrome this triggers pwd save
}


// AWS SUBMIT
let surveyOp;

function awsCall(obj) {
  let data = obj.getAllValues();

  let awsCfg;
  if (surveyOp == 'create') {
    awsCfg = {
      method: 'POST',
      body: {
        data,
        lang
      },
      rvFcn: d => {
        console.log("ROW CREATE", data, d);
        $table.bootstrapTable('refresh');
      },
      url
    };
  }
  if (surveyOp == 'update') {
    let pk = $table.bootstrapTable('getSelections')[0].pk; // partition key;
    data.pk = pk;
    // handler: get pk entry, compare, write new
    // awsCfg = {
    //   method: 'PUT',
    //   body: {
    //     data,
    //     lang
    //   },
    //   rvFcn: d => {
    //     console.log("ROW PUT (update)", data, d);
    //     $table.bootstrapTable('refresh');
    //   },
    //   url: url + '/' + pk
    // };
    awsCfg = {
      method: 'POST',
      body: {
        data,
        lang
      },
      rvFcn: d => {
        console.log("ROW REPLACE", data, d);
        $table.bootstrapTable('refresh');
      },
      url
    };
  }
  uiFetch(awsCfg)
}

// SURVEY
let surveyCfg = {
  title: "Torture Incident Survey.",
  completedHtml: "<h3>Survey Submitted</h3>",
  onComplete: awsCall,
  onAfterRenderQuestionInput: (d, e) => {
    if (e.question.name == "date" && e.question.value == undefined) // surveyjs bug fix: fails to use default value
      e.question.value = "1970-01-01";
  },
  lang,
  isIntake: false
};
let survey = new SurveyUtil();
survey.init(surveyCfg);
var surveyModal = new bootstrap.Modal(document.getElementById('survey-modal'));

// TOOLBAR BUTTONS
window.buttons = function() {
  return {
    btnNewRow: {
      text: 'New Row',
      icon: 'fa fa-user-plus',
      event: (function() {
        surveyOp = 'create';
        survey.clear();
        surveyModal.show();
      }).bind(this),
      attributes: {
        title: 'Create a new row'
      }
    },
    btnEditRow: {
      text: 'Edit Row',
      icon: 'fas fa-user-edit',
      event: (function() {
        surveyOp = 'update';
        let body = $table.bootstrapTable('getSelections')[0];
        if (!body) return;

        // open survey
        survey.clear();
        survey.surveyObj.mergeData(body);
        surveyModal.show();
      }).bind(this),
      attributes: {
        title: 'Edit selected row'
      }
    },
    btnDeleteRow: {
      text: 'Delete Row',
      icon: 'fas fa-user-minus',
      event: function() {
        let pk = $table.bootstrapTable('getSelections')[0].pk; // partition key;
        let opts = {
          rvFcn: d => {
            console.log("ROW DELETE", pk, d);
            $table.bootstrapTable('refresh');
          },
          method: 'DELETE',
          url: url + '/' + pk
        };
        uiFetch(opts);
      },
      attributes: {
        title: 'Delete selected row'
      }
    },
    // btnUpdate: {
    //   text: 'Update the aggregate',
    //   icon: 'bi bi-box-arrow-in-up',
    //   event: function() {
    //     alert('Do some stuff to e.g. search all users which has logged in the last week')
    //   },
    //   attributes: {
    //     title: 'Update the aggregate website values'
    //   }
    // },
    btnView: {
      text: 'View changes',
      icon: 'fas fa-eye',
      event: function() {
        let agg = { en: aggregate('en'), ur: aggregate('ur') }
        if (!agg.en || !agg.ur) {
          alert('No reviewed rows loaded. Please refresh.');
          return;
        }
        let data = JSON.stringify({}); // GITHUB BUG: URL TOO LONG.  SEND IT THROUGH "window".
        // Needed for localhost /torture-tracker
        let viewURL = `${window.location.protocol}//${window.location.host}/frontend/?vis-data=${data}`;
        console.log("Viewing:", agg[lang]); // TEST before aws update 
        let viewWindow = window.open(encodeURI(viewURL), '_blank');
        viewWindow.window.visData = agg[lang]; // send data this way instead of url
        viewWindow.window.visDataEn = agg.en;
        viewWindow.window.visDataUr = agg.ur;
      },
      attributes: {
        title: 'View and update aggregates'
      }
    }
  }
}

// INIT TABLE
var $table = $('#table')
let colNames = survey.getLayout().Main.map(d => { return { name: d.Name } });

$('#table tr').append('<th data-radio="true" data-force-hide="true" ></th>');
colNames.forEach(d => $('#table tr').append(`<th data-field="${d.name}" data-sortable="true" data-filter-control="input">${d.name}</th>`));
$('[data-field="incidents"]')
  .attr("data-formatter", "JSON.stringify")
  .attr("data-visible", "false")
  .attr("data-tableexport-display", "always");
// .attr("data-width", "1000").attr("data-width-unit", "px");


$(function() {
  $table.bootstrapTable({
    // exportHiddenCells: true,
    // exportDataType: "all",
    exportTypes: ['json', 'csv'],
    exportOptions: {
      exportHiddenCells: true,
      onTableExportBegin: d => $table.bootstrapTable('showColumn', 'incidents'),
      onTableExportEnd: d => $table.bootstrapTable('hideColumn', 'incidents'),
    },
    // data: incidents
    responseHandler: function(res) {
      globalThis.resultData = res;
      return res[lang]
    }
  })
})

// DISABLE BUTTONS IF NO SELECTION
// data-events="operateEvent" on the column is broken (disables getselections)
// poll instead.
let pollButtons;
setInterval(function() {
  let checked = $('[name="btSelectItem"]:checked').val() == 'on';
  if (!pollButtons) pollButtons = $('[name="btnEditRow"], [name="btnDeleteRow"]');
  if (checked)
    pollButtons.removeClass('disabled');
  else
    pollButtons.addClass('disabled');
}, 500);

// SYNC (scan) request
let firstLoad = true;
window.ajaxRequest = function(params) {
  let cfg = {
    url,
    quietUI: firstLoad, // no errors on start
    rvFcn: d => params.success(d || { en: [], ur: [] }), // LastEvaluatedKey
  };
  firstLoad = false;
  uiFetch(cfg);
}

// CREATE AGGREGATES
let layout = globalThis.schema.layout;

function makePaths(d) {
  // add full path
  return layout[d].map(e => {
    return {...e, Path: { root: d, category: e.Name } }
  })
}

// if new, create path otherwise incriment
function bump(obj, path) {
  let pn = path.split('.'); //pathnames
  let bn = pn.pop(); // basename
  pn.forEach(p => {
    if (!(p in obj)) obj[p] = {};
    obj = obj[p];
  });
  obj[bn] = bn in obj ? obj[bn] + 1 : 1;
}

function aggregate(lang) {
  let sparseAggregate = {};
  let data = globalThis.resultData[lang]; //$table.bootstrapTable('getData');
  data = data.filter(d => (d.region || '').length && d.status == "reviewed");
  if (!data.length)
    return false;

  console.log('Creating Aggregates');
  let categories = Object.keys(layout).flatMap(d => makePaths(d))
    .filter(d => ['single', 'multiple'].includes(d.Input) && d.Name != 'status')
    .map(d => d.Path);

  let flatObjs = { Main: data };
  // flattened by incident
  flatObjs.Incident = data.flatMap(d => d.incidents.map(e => { return {...e, region: d.region } }));;
  // flattened by perpetrator
  flatObjs.Perpetrator = flatObjs.Incident.flatMap(d => d.perpetrators.map(e => { return {...e, region: d.region } }));

  flatObjs.Main.forEach(d => { // update country totals
    let province = d.region.split('~')[0];
    bump(sparseAggregate, `pakistan.region.${province}`);
    bump(sparseAggregate, `pakistan.total.value`);
    bump(sparseAggregate, `${province}.region.${province}`);
  });

  categories.forEach(d => { // update province / district totals
    flatObjs[d.root].forEach(e => {
      let province = e.region.split('~')[0];
      if (d.category in e) // which regions have which categories
        bump(sparseAggregate, `${province}.total.category.${d.category}`);

      let val = e[d.category];

      if (!Array.isArray(val))
        val = [val].filter(d => d); // make everything an array / filter undefined

      val.forEach(f => { // bump value
        let keyname;
        if (d.category == "region") // correct naming for region category
          keyname = f.split('~')[0];
        bump(sparseAggregate, `${e.region}.${d.category}.${keyname?keyname:f}`);
        // bump(sparseAggregate, `${province}.${d.category}.${f}`);
        bump(sparseAggregate, `pakistan.total.category.${d.category}`); // country instances per category
      });
    });
  });

  return sparseAggregate;
}