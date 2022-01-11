// timeline urls
let tlURL = {
  en: `https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?theme=${window.location.href}css/timeline.css&source=1RTAaPXhXk20dgXLVdxJdK_aSICMAi_LPeCytplb04Is&font=Default&lang=en&initial_zoom=2&height=650`,
  ur: `https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?theme=${window.location.href}css/timeline.css&source=1XZbvATRzvOmybFHf7KSUKfG_mcUKB_jHrhrxkLmvtjE&font=Default&lang=ur&initial_zoom=2&height=650`
}

// default copy for website
let defaultCopy = [{
    en: `
    <h2 class="title">Tracking Torture</h2>
    <hr class="title-bar">
    <h5 class="subtitle">Uncovering Human Rights Violations by Pakistani Authorities</h5>
    `,
    ur: `
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

// let lang = navigator.language.startsWith('ur') ? 'ur' : 'en';
// document.body.setAttribute('lang', lang);

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
    en:'Select a state for more specific results.',
    ur:'مزید مخصوص نتائج کے لیے ریاست کا انتخاب کریں۔'
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
  }
};

export {getContent, visText, selectCategories}