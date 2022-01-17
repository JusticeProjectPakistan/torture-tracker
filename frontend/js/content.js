// timeline urls
let tlURL = {
  en: `https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?theme=${window.location.href}css/timeline.css&source=1RTAaPXhXk20dgXLVdxJdK_aSICMAi_LPeCytplb04Is&font=Default&lang=en&initial_zoom=2&height=650`,
  ur: `https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?theme=${window.location.href}css/timeline.css&source=1XZbvATRzvOmybFHf7KSUKfG_mcUKB_jHrhrxkLmvtjE&font=Default&lang=ur&initial_zoom=2&height=650`
}

// default copy for website
let defaultCopy = [{
    en: `
    <div id="language-button"> <input type='button' value="اردو میں دیکھیں"></div>
    <h2 class="title">Tracking Torture</h2>
    <hr class="title-bar">
    <h5 class="subtitle">Uncovering Human Rights Violations by Pakistani Authorities</h5>
    `,
    ur: `
    <div id="language-button"> <input type='button' value="View in English"></div>
    <h2 class="title">تشدد کا سراغ لگانا</h2>
    <hr class="title-bar">
    <h5 class="subtitle">پاکستانی حکام کی جانب سے انسانی حقوق کی خلاف ورزیوں کا پردہ فاش</h5>
    `
  },
  {
    en: `
    <div class="slide" id="slide1">
    <div class="narration-question">
        <div class='chapeau'>What is the <span class='chapeau-accent'>problem</span>?</div>
        <p>Police brutality and torture are widespread and systematic in Pakistan. The violence takes many forms. Police beat victims, hang them by their arms or feet for hours on end, force them to witness the torture of others, and strip them
            naked and parade them in public, damaging their basic human dignity. This conduct amounts to torture. In Pakistan, there has been a lack of documentation that would allow for a rigorous assessment of the prevalence of torture by
            the police.</p>
        <p>See their methods by moving right using the breadcrumbs above, arrow keys, or swiping.</p>
    </div>
    </div>
    <div class="slide" id="method1"></div>
    <div class="slide" id="method2"></div>
    <div class="slide" id="method3"></div>
    <div class="slide" id="method4"></div>
    <div class="slide" id="method5"></div>
    <div class="slide" id="method6"></div>
    <div class="slide" id="method7"></div>
    <div class="slide" id="method8"></div>
    `,
    ur: `
    <div class="slide" id="slide1">
    <div class="narration-question">
        <div class='chapeau'><span class='chapeau-accent'>مسئلہ</span> کیا ہے؟</div>
        <p> پاکستان میں قانون نافذ کرنے والے اداروں کے ہاتھوں ٹارچر اور غیر انسانی سلوک عام ہے تاہم اس بارے میں مستند اعداد و شمار عام شہریوں کے لیے دستیاب نہیں۔ تفتیش، معلومات حاصل کرنے یا برآمدگی کے لیے ٹارچر کی مختلف اقسام اور طریقے استعمال کیے جاتے ہیں جن میں مار پیٹ، الٹا لٹکانا، دوسروں پر ٹارچر دیکھنے پر مجبور کرنا، بے لباس کرنا یا تذلیل کرنا، نیند، خوراک اور روشنی سے محروم رکھنا عام ہیں۔ </p>
        <p> ٹارچر سے متعلق مزید جاننے کے لیے دائیں جانب سوائپ کریں۔</p> 
    </div>
    </div>
    <div class="slide" id="method1"></div>
    <div class="slide" id="method2"></div>
    <div class="slide" id="method3"></div>
    <div class="slide" id="method4"></div>
    <div class="slide" id="method5"></div>
    <div class="slide" id="method6"></div>
    <div class="slide" id="method7"></div>
    <div class="slide" id="method8"></div>
    `
  },
  {
    en: `
    <div class="slide" id="main"></div>
    `,
    ur: `
    <div class="slide" id="main"></div>
    `
  },
  {
    en: makeQuestion(
      "How do we ",
      "progress",
      "?",
      `<iframe src='${tlURL.en}' width='100%' height='100%' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0' style='height:60vh;'></iframe>`
    ),
    ur: makeQuestion(
      "ہم کس طرح ",
      " ترقی کریں",
      "؟",
      `<iframe src='${tlURL.ur}' width='100%' height='100%' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0' style='height:60vh;'></iframe>`
    )
  },
  {
    en: makeQuestion(
      "What needs to ",
      "change",
      "?",
      `<p>The Pakistani government has, on many occasions, has expressed its commitment to legislate against the use of torture. The Senate of Pakistan has passed a bill which should now be tabled in the National Assembly. This bill will not only protect ordinary citizens from the use of torture but also provides a mechanism to punish those who use it.</p>
      <p>Along with legislation, increased resources and training should be provided to law enforcement officers, so that law and order is maintained and the crime rate is decreased without the use of torture.</p>`
    ),
    ur: makeQuestion(
      "کیا ",
      "بدلنا",
      " چاہیے؟",
      `<p>پاکستانی حکومت متعدد مواقع پر ٹارچر کے خلاف قانون سازی کا عزم ظاہر کر چکی ہے۔ اس سلسلے میں ایوان بالا سے ایک قانون منظور کرایا جا چکا ہے جسے فی الفور قومی اسمبلی میں پیش کیا جانا چاہیئے۔ یہ قانون عام شہریوں کو ٹارچر سے تحفظ فراہم کرنے کے ساتھ ساتھ، ٹارچر کے مرتکب سرکاری اہلکاروں کو سزا دلانے کا بھی باعث بنے گا۔ </p>
      <p>قانون سازی کے ساتھ ساتھ قانون نافذ کرنے والے اہلکاروں کی تربیت اور ان کے لیے دستیاب وسائل میں اضافہ بھی ضروری ہے تاکہ امن و امان کے قیام اور جرائم کی روک تھام کے لیے ٹارچر کے استعمال کا جواز ختم کیا جا سکے۔</p>`
    )
  },
  {
    en: makeQuestion(
      "How can you stay ",
      "informed",
      "?",
      `<p>Public access to accurate and updated information regarding torture is extremely important.</p>
      <p>This database by Justice Project Pakistan is a much-needed initiative. The statistics gathered regarding torture in this database include those organisations working against the use of torture, the reported incidences, the researchers and the perpetrators and will increase public awareness about these human rights violations.</p>
      <p>To provide information about incidents of torture, please click on the link below and fill out the form.</p>
      <p id="survey-info"><a class="link" href="html/survey.html" target="_blank" rel="noopener noreferrer">Survey Form</a>, <a class="link" href="html/faq.html" target="_blank" rel="noopener noreferrer">FAQ</a></p>`
    ),
    ur: makeQuestion(
      "آپ کیسے ",
      "باخبر",
      " رہ سکتے ہیں؟",
      `<p>ٹارچر سے متعلق درست اور معتبر معلومات عام کرنا نہایت اہم ہے۔ جسٹس پراجیکٹ پاکستان کا یہ ڈیٹا بیس اس ضمن میں ایک اہم پیش رفت ہے۔ ٹارچر سے متعلق جمع کیے گئے اعدادوشمار اس برائی کے خلاف کام کرنے والے کارکنان، وکلاء، محققین اور سرکاری اہلکاروں کے ساتھ ساتھ عام شہریوں میں شعور بیدار کرنے کا بھی باعث بنیں گے۔</p>
      <p>ٹارچر کے واقعات سے متعلق معلومات فراہم کرنے کے لیے اس لنک پر کلک کیجیے۔</p>
      <p id="survey-info"><a class="link" href="html/survey.html" target="_blank" rel="noopener noreferrer">سروے فارم</a>, <a class="link" href="html/faq.html" target="_blank" rel="noopener noreferrer">FAQ</a></p>`
    )
  },
];

// make narrative question
function makeQuestion(tBeg, tMid, tEnd, body) {
  let format = `
    <div class="narration-question">
        <div class='chapeau'>${tBeg}<span class='chapeau-accent'>${tMid}</span>${tEnd}</div>
        <div>
            ${body}
        </div>
    </div>
    `
  return format;
}

// per slide special attributes
let attrs = [
  { class: "section fp-auto-height-responsive" }, // empty if defaults are ok
  { class: "section fp-auto-height-responsive" },
  { class: "section fp-auto-height-responsive", id: "tortureVis" },
  { class: "section fp-auto-height-responsive", id: "timeline" },
  { class: "section fp-auto-height-responsive" },
  { class: "section fp-auto-height-responsive" },
  { class: "section fp-auto-height-responsive" },
  { class: "section fp-auto-height-responsive" },
  { class: "section fp-auto-height-responsive" },
];

let copy = defaultCopy; // Changable based on browser attributes.  Eg: (s,m,l screen, orientation, mobile vs laptop, etc.)
function getContent() {
  return copy.map((d, i) => {
        let curAttr = attrs[i];
        let keys = [...new Set(Object.keys(curAttr).concat(['id', 'class']))];
        let a = keys.map(d => { return ` ${d}=${(d in curAttr)?`"${curAttr[d]}"`:`"section${i}"`}`}).join("");

      let html = d[globalThis.lang]; // set default
      if (!html)
        html = d.en;

      return `
        <div ${a}>
          ${html}
        </div>
        `
    });
}

let visText = {
  totalcases:{
    en:'<div id="total">Total Cases: <b id="value"></b></span></div>',
    ur:'<div id="total">کل کیسز: <b id="value"></b></span></div>'
  },
  total:{
    en:'Total',
    ur:'کل'
  },
  cases:{
    en:'Cases',
    ur:'مقدمات'
  },
  torturein:{
    en:'Torture in',
    ur:'میں تشدد'
  },
  filterby:{
    en:"<div id='select' class='meta-select'>Filter by: </div>",
    ur:"<div id='select' class='meta-select'>&nbsp;کی طرف سے فلٹر: </div>"
  },
  mapInfoText:{
    en:'Select or hover on a district for totals.',
    ur:'ٹوٹل کے لیے ضلع کو منتخب کریں یا ہوور کریں۔'
  },
}

let selectCategories = {
  region:{
    en:'Province',
    ur:'صوبہ'
  },
  gender:{
    en:'Gender',
    ur:'صنف'
  },
  education:{
    en:'Education',
    ur:'تعلیم'
  },
  religion:{
    en:'Religion',
    ur:'مذہب'
  },
  ethnicity:{
    en:'Ethnicity',
    ur:'نسل'
  },
  reason:{
    en:'Reason',
    ur:'وجہ'
  },
  outcome:{
    en:'Outcome',
    ur:'نتیجہ'
  },
  incident_type:{
    en:'Incident',
    ur:'واقعہ'
  },
  place:{
    en:'Location',
    ur:'مقام'
  },
  during:{
    en:'During',
    ur:'دوران'
  },
  torture_type:{
    en:'Torture',
    ur:'اذیت'
  },
  torture_methods:{
    en:'Methods',
    ur:'طریقے'
  },
  force:{
    en:'Force',
    ur:'اقتدار'
  },
  action:{
    en:'Penalty',
    ur:'جرمانہ'
  },
  date:{
    en:'Year',
    ur: 'سال'
  }
};

// the keys are from the Name column in the data dictionary
let surveyHelpText = {
  mlc_conducted:{
    en:{
      header:`MLC`,
      body:`A Medico-Legal Certificate (MLC) is defined as “any case of injury or ailment where, the attending doctor after observing history and clinical examination, considers that investigations by law enforcement Agencies are warranted to ascertain circumstances and fix responsibility regarding the said injury or ailment according to the law”.`
    },
    ur:{
      header:`میڈیکو لیگل سرٹیفیکیٹ`,
      body:`میڈیکو لیگل سرٹیفیکیٹ مجاز ڈاکٹر کی جانب سے جاری کیا گیا ایسا سرٹیفیکیٹ ہے جس میں طبی معائنے کے بعد متاثرہ فرد کو لگنے والی چوٹ، زخم یا نشان کو مزید قانونی کارروائی کا متقاضی قرار دیا گیا ہو`
    }
  },
  reason:{
    en:{
      header:`Definition of Torture`,
      body:`The term "torture" means any act by which severe pain or suffering, whether physical or mental, is intentionally inflicted on a person for such purposes as obtaining from him or a third person information or a confession, punishing him for an act he or a third person has committed or is suspected of having committed, or intimidating or coercing him or a third person, or for any reason based on discrimination of any kind, when such pain or suffering is inflicted by or at the instigation of or with the consent or acquiescence of a public official or other person acting in an official capacity.`
    },
    ur:{
      header:`ـایذارسانی کی وجہ`,
      body:`کوئی بھی سرکاری ملازم خود یا کسی اور کے ذریعے جان بوجھ کر تکلیف دے یا اذیت پہنچائے تو یہ ٹارچر کہلائے گا۔ ٹارچر جسمانی بھی ہو سکتا ہے اور نفسیاتی بھی اور جرم سے متعلق معلومات حاصل کرنے، اعتراف جرم کرانے، سزا دینے یا کسی بھی اور وجہ سے ہو سکتا ہے۔`
    }
  },
  incident_type:{
    en:{
      header:`Types of Torture`,
      body:`<p>According to international standards for protection, torture can be inflicted not only via physical violence, but also through acts that produce severe physical, psychological or moral suffering in the victim.</p>
      <p><b>Physical torture</b> is when injury is intentionally inflicted to a person's body.</p>
      <p><b>Psychological torture</b> means "severe mental pain or suffering" caused by the threat of, or actual, administration of "procedures calculated to disrupt profoundly the senses or personality".</p>
      <p><b>Sexual Torture</b> or <b>Cultural Humiliation</b></p>`
    },
    ur:{
      header:`ٹارچر کی نوعیت`,
      body:`<p>ٹارچر صرف جسمانی ہی نہیں بلکہ نفسیاتی (جیسے قید تنہائی میں رکھنا، سونے نہ دینا یا کھانا پینا بند کرنا وغیرہ) یا جنسی نوعیت کا بھی ہو سکتا ہے۔ سرکاری اہلکاروں کی جانب سے تذلیل آمیز سلوک کی بعض صورتیں (جیسے بے لباس کر دینا) بھی ٹارچر کہلا سکتے ہیں۔ </p>`
    }
  },
  during:{
    en:{
      header:`Custody, Arrest and Detention`,
      body:`<p><b>Custody:</b> Act of holding an accused or convicted person in criminal proceedings, beginning with the arrest of that person by law enforcement officials.</p>
      <p><b>Arrest:</b> Placing a person in custody or under restraint for investigation of a criminal charge or to prevent him or her from committing an offense.</p>
      <p><b>Detention:</b> Detention means depriving a person of personal liberty except as a result of conviction for an offence.</p>`
    },
    ur:{
      header:`ٹارچر کب ہوا؟`,
      body:`<p><b>تحول میں لینا:</b> گرفتاری کے بعد ہوچھ گچھ اور تفتیش کی غرض سے تحویل میں لینا ۔</p>
      <p><b>گرفتارکرنا:</b> مجرمانہ الزام کی تفتیش یا پچھ گچھ کے لیے، یا امن عامہ برقرار رکھنے کے لیے کسی شخص کو پکڑنا</p>
      <p><b>حراست:</b> عدالت کی جانب سے جرم کی سزا کے علاوہ کسی بھی وجہ سے کسی فرد کو قید کرنا</p>`
    }
  },
  torture_methods:{
    en:{
      header:`Methods of Torture`,
      body:`<p><b>Chittar</b> is a leather strap, about a meter long, used to whip victims. The Chittar causes severe bruising, lacerations, and scars.</p>
      <p><b>Cheera</b> is a stretching technique where perpetrators make a victim sit and then stretch the victim’s legs apart, either suddenly or gradually. Often, the perpetrator is behind the victim with a knee on his back and pulling the victim’s head by the hair. </p>
      <p><b>Danda</b> is a thick wooden stick routinely carried by police officers and used to beat victims.</p>
      <p><b>Dolli</b> is a technique in which perpetrators tie one of the victim’s wrists to his opposite foot. The perpetrators then hang a one or two kilogram weight around the victim’s neck and make him walk or run long distances.</p>
      <p><b>Falaka/Falanaga</b> is when the perpetrators beat the soles of the victim’s feet with a wooden stick. Because feet have a large number of nerve endings, this torture method can be particularly painful. It can produce chronic pain and makes walking difficult.</p>
      <p><b>Manji</b></p><p>1. Perpetrators put the victim on a bed with his legs tied on one end, then place a second bed on top of the victim. They stretch the victim’s arms over the top of the second bed and tie his hands to his feet, leaving his body suspended in the middle.</p> <p>2. Perpetrators tie the victim’s right arm and leg to a manji and his left arm and leg to a second parallel manji. They pull the two manjis apart, stretching the body and forcing his joints to sustain the entire body;s weight.</p><p></p>
      <p><b>Roola/Roller</b> Perpetrators make the victim lie down, facing up, and place a roola- a long thick wooden stick or bamboo-  on top of him. A perpetrator sits or stands on either side of the stick to weigh it down. The other perpetrators push or pull the rod over the victim's body, crushing him and causing severe pain.</p>
      <p><b>Strappado</b> Perpetrators time victim’s hands behind his back. They tie a rope around his wrists and suspend him, hanging him above the floor. Strappado can cause both arms to dislocate. </p>`
    },
    ur:{
      header:`ٹارچر کا طریق کار`,
      body:`<p><b>چھتر</b></p><p> چھتر ایک میٹر لمبا چمڑے کا پٹہ ہوتا ہے. چھترول کے نتیجے میں جسم پر شدید چوٹیں، زخم اور نشان پڑ سکتے ہیں۔</p>
      <p><b>چیرا</b></p><p>چیرا یا ٹانگوں کو مخالف سمتوں میں یک دم یا دھیرے دھیرے کھینچنا شدید تکلیف کا باعث بنتا ہے۔ مزید اذیت دینے کے لیے ملزم کی پشت پر گٹھنا رکھ کر بال بھی کھینچے جاتے ہیں تاکہ ٹانگوں پر دباو میں اضافہ کیا جا سکے۔</p>
      <p><b>ڈنڈا</b></p><p>قانون نافذ کرنے والے اہلکار عموماً لکڑی یا بانس کی ایک سوٹی یا ڈنڈا ساتھ رکھتے ہیں جسے مار پیٹ کے لیے استعمال کیا جاتا ہے۔</p>
      <p><b>ڈولی</b></p><p> کلائی کو پاؤں سے باندھ کر زیرِحراست فرد کی گردن میں ایک یا دو کلو گرام کا وزن ڈال دیا جاتا ہے اور اسے بھاگنے یا چلنے پر مجبور کیا جاتا ہے۔ اس عمل کو ڈولی کہا جاتا ہے۔ </p>
      <p><b>فلاکہ</b></p><p> پیروں کے تلووں کو بید کی چھڑی سے پیٹنا فلاکہ یا فلانگہ کہلاتا ہے۔ اس نوعیت کا ٹارچر نشان نہیں چھوڑتا اور شدید تکلیف کا باعث بنتا ہے۔ فلاکہ متاثرہ فرد کے لیے مستقل درد اور چلنے پھرنے سے معذوری کا باعث بن سکتا ہے۔</p>
      <p><b>منجی</b></p> <p>زیر حراست فرد کی ٹانگیں چارپائی سے باندھ دی جاتی ہیں اور ایک اور چارپائی اس کے اوپر دھر دی جاتی ہے۔ زیرحراست فرد کے بازو دوسری چارپائی کے اوپر سے باندھ دیئے جاتے ہیں، دباؤ بڑھانے کے لیے ہاتھ رسی کے ذریعے پیروں کے ساتھ بندھ دیئے جاتے ہیں۔ </p><p>ملزم کے ہاتھ پاوں دو مختلف چارپائیوں سے باندھ کر اسے درمیان میں لٹکا دیا جاتا ہے۔ اذیت دینے کے لیے دونوں چارپائیوں کو متضاد سمتوں میں کھینچا جاتا ہے سج سے جوڑوں پر شدید دباو پڑتا ہے۔</p>
      <p><b>رولا</b></p><p>زیرحراست فرد کو پشت کے بل لٹا دیا جاتا ہے اور ایک موٹا بانس یا لکڑی کا ڈنڈا ن کے اوپر رکھ دیا جاتا ہے۔ وزن بڑھانے کے لیے ایک اہلکار ڈنڈے پر بیٹھ جاتا ہے یا کھڑا ہو جاتا ہے اور دو اہلکار اس ڈنڈے کو آگے پیچھے دھکیلتے ہیں۔ یہ طریقہ جسم بالخصوص رانوں کو کچل کر رکھ دیتا ہے۔ اس عمل کے اثرات دیر پا ہو سکتے ہیں جن میں شدید اذیت اور دباو کے باعث متاثرہ مظلوم کو چلنے پھرنے میں مشکلات اور جنسی صلاحیت میں کمی  شامل ہیں</p>
      <p><b>رسي باندھ کر لٹکانے کي سزا</b></p><p>زیر حراست فرد کے ہاتھ اس کی پشت پر باندھ دیے جاتے ہیں اور اس کی کلائی کے گرد رسی باندھ کر  لٹکا دیا جاتا ہے۔ اس طریقے سے کندھوں پر شدید دباو پڑتا ہے اور بازووں کے جوڑ ہل جاتے ہیں۔ مزید تکلیف دینے کے لیے متاثرہ مظلوم کے گلے میں وزن بھی لٹکا دیا جاتا ہے۔</p>`
    }
  },
  rank:{
    en:{
      header:`Public Servant`,
      body:`According to Pakistan Penal Code, 1860 Section 21, every person who is in actual or purported possession of the public office,whatever legal defect there may be in that person’s right to hold that position. In doing so, it applies not only to police officials, but to all public servants, and therefore has a wide ambit.`
    },
    ur:{
      header:`ٹارچر کرنے والے کا عہد`,
      body:`پاکستان پینل کوڈ، 1860 کے سیکشن 21 کے مطابق کوئی بھی فرد جو کسی بھی سرکاری عہدے پر فائز ہو یا کسی بھی حیثیت میں کارسرکار سرانجام دے رہا ہوں سرکاری اہلکار کہلائے گا۔`
    }
  },
};

export {getContent, visText, selectCategories, surveyHelpText}