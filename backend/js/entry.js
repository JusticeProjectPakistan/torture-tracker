// Schema / layout dictionary for the survey & backend 
let layout = { // one row in the backend db
  "Main": [{
      "Page-en": "Victim",
      "Page-ur": "متاثرہ فرد",
      "Name": "pk",
      "Required": true,
      "Input": "string",
      "Type": "number",
      "Description-en": "AWS Partition Key",
      "Values-en": "{\"visible\": false}"
    },
    {
      "Name": "status",
      "Required": true,
      "Input": "single",
      "Type": "string",
      "maxLen": 15,
      "Description-en": "Submission Status",
      "Values-en": "unreviewed, reviewed",
      "Description-ur": "جمع کرانے کی حیثیت",
      "Values-ur": "unreviewed, reviewed"
    },
    {
      "Name": "first_name",
      "Required": true,
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "minLen": 1,
      "maxLen": 15,
      "Description-en": "First Name",
      "Description-ur": "پہلا نام"
    },
    {
      "Name": "last_name",
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "minLen": 1,
      "maxLen": 15,
      "Description-en": "Last Name",
      "Description-ur": "آخری نام"
    },
    {
      "Name": "email",
      "Intake": true,
      "Input": "string",
      "Type": "email",
      "maxLen": 30,
      "Description-en": "Email",
      "Description-ur": "ای میل"
    },
    {
      "Name": "phone",
      "Required": true,
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "maxLen": 30,
      "Description-en": "Phone",
      "Description-ur": "فون نمبر"
    },
    {
      "Name": "born",
      "Intake": true,
      "Input": "date",
      "Type": "date",
      "Description-en": "Birth Date",
      "Values-en": "DD-MM-YYYY",
      "Description-ur": "تاریخ پیدائش"
    },
    {
      "Name": "age",
      "Intake": true,
      "Input": "string",
      "Type": "number",
      "Description-en": "Age",
      "Description-ur": "عمر"
    },
    {
      "Name": "gender",
      "Required": true,
      "Intake": true,
      "Input": "single",
      "Type": "code",
      "Description-en": "Gender",
      "Values-en": "female, male, transgender, other",
      "Description-ur": "جنس",
      "Values-ur": "عورت، مرد، خواجه سرا، اس کے علاوہ"
    },
    {
      "Name": "gender_other",
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{gender}='other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "education",
      "Intake": true,
      "Input": "single",
      "Type": "code",
      "Description-en": "Education Level",
      "Values-en": "unknown, none, primary, middle, matric/O-levels, intermediate/A-levels, graduation, masters, madrasa, dars-e-nizami, other",
      "Description-ur": "تعلیمی قابلیت",
      "Values-ur": "نامعلوم، کوئی نہیں، پرائمری سکول، ثانوی اسکول، برطانوی ثانوی تعلیم سند یا میٹرک، انٹرمیڈیٹ، گریجویشن، ماسٹرز، مدرسہ، درس نظامی، کچھ اور"
    },
    {
      "Name": "education_other",
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{education}='other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "occupation",
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "maxLen": 25,
      "Description-en": "Occupation",
      "Description-ur": "پیشہ"
    },
    {
      "Name": "caste",
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "Caste",
      "Description-ur": "ذات"
    },
    {
      "Name": "religion",
      "Intake": true,
      "Input": "single",
      "Type": "code",
      "Description-en": "Religion",
      "Values-en": "unknown, muslim, hindu, christian, ahmadiyya, sikh, other",
      "Description-ur": "مذہب",
      "Values-ur": "نامعلوم، مسلم، ہندو، عیسائی، احمدیہ، سکھ، اس کے علاوہ کچھ اور"
    },
    {
      "Name": "religion_other",
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{religion}='other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "ethnicity",
      "Input": "single",
      "Type": "code",
      "Description-en": "Ethnicity",
      "Values-en": "unknown, punjabi, pashtun, sindhi, saraiki, muhajir, baloch, other",
      "Description-ur": "نسل",
      "Values-ur": "نامعلوم، پنجابی، پشتون، سندھی، سرائیکی، مہاجر‎، بلوچ، اس کے علاوہ کچھ اور"
    },
    {
      "Name": "ethnicity_other",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{ethnicity}='other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Page-en": "Detail",
      "Page-ur": "تفصیل",
      "Name": "hosp_med",
      "Input": "single",
      "Type": "boolean",
      "Description-en": "Was hospitalization or medical care needed",
      "Values-en": "false,true",
      "Description-ur": "کیا طبی امداد کی ضرورت تھی؟",
      "Values-ur": "صحیح، غلط"
    },
    {
      "Name": "reason",
      "Input": "multiple",
      "Type": "code-array",
      "Description-en": "Reason for torture",
      "Values-en": "unknown, confession, information, recovery, other",
      "Description-ur": "ایذارسانی کی وجہ",
      "Values-ur": "نامعلوم، اعتراف، معلومات، برآمدگی،  اس کے علاوہ کچھ اور"
    },
    {
      "Name": "reason_other",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{reason} contains 'other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "region",
      "Input": "single",
      "Type": "string",
      "Description-en": "Region",
      "Values-en": "*Regions",
      "Description-ur": "علاقے کا نام",
      "Values-ur": "*Regions"
    },
    {
      "Name": "rep_name",
      "Input": "string",
      "Type": "string",
      "minLen": 3,
      "maxLen": 40,
      "Description-en": "Representative Name",
      "Description-ur": "عوامی نمائندے کا نام"
    },
    {
      "Name": "have_documents",
      "Input": "single",
      "Type": "string",
      "Description-en": "Do you have any supporting documents?",
      "Values-en": "yes,no",
      "Description-ur": "کیا واقعے سے متعلق آپ کے پاس کسی قسم کی دستاویزات ہیں؟",
      "Values-ur": "ہاں، نہیں"
    },
    {
      "Name": "complaint_filed",
      "Input": "single",
      "Type": "boolean",
      "Description-en": "Was a complaint filed",
      "Values-en": "false,true",
      "Description-ur": "کیا ٹارچر کی شکایت درج کرائی گئی؟",
      "Values-ur": "صحیح، غلط"
    },
    {
      "Name": "complaint_date",
      "Input": "date",
      "Type": "date",
      "Description-en": "Complaint date",
      "Values-en": "DD-MM-YYYY",
      "Description-ur": "شکایت درج کرانے کی تاریخ",
      "Values-ur": "دن؍مہینہ؍سال"
    },
    {
      "Name": "mlc_conducted",
      "Intake": true,
      "Input": "single",
      "Type": "boolean",
      "Description-en": "Did a medical practitioner examine you?",
      "Values-en": "yes,no",
      "Description-ur": "کیا ایم ایل سی کرائی گئی؟",
      "Values-ur": "ہاں، نہیں"
    },
    {
      "Name": "mlc_law",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "Under what section of the law was the MLC ordered?",
      "Description-ur": "ایم ایل سی کو قانون کی کس دفعہ کے تحت کرایا گیا؟"
    },
    {
      "Name": "mlc_reason_notfiled",
      "Input": "string",
      "Type": "string",
      "maxLen": 40,
      "Description-en": "Reason for not having an MLC",
      "Description-ur": "ایم ایل سی نہ کرائے جانے کی وجہ؟"
    },
    {
      "Name": "outcome",
      "Input": "single",
      "Type": "code",
      "Description-en": "Outcome of the complaint",
      "Values-en": "unknown, compromise, pending, perpetrator punished, out of court settlement",
      "Description-ur": "شکایت کا کیا نتیجہ نکلا؟",
      "Values-ur": "نامعلوم، سمجھوتہ، زیر التوا،  سزا، صلح"
    },
    {
      "Page-en": "Incident",
      "Page-ur": "واقعہ",
      "Name": "incidents",
      "Intake": true,
      "Input": "array",
      "Type": "array",
      "maxLen": 10,
      "Description-en": "Incident Descriptions",
      "Values-en": "Incident",
      "Description-ur": "واقعہ کی تفصیل",
      "Values-ur": "واقعہ"
    }
  ],
  "Incident": [{
      "Name": "date",
      "Required": true,
      "Intake": true,
      "Input": "date",
      "Type": "date",
      "Description-en": "What is the date of the incident?",
      "Values-en": "DD-MM-YYYY",
      "Description-ur": "واقعہ کی تاریخ",
      "Values-ur": "دن؍مہینہ؍سال"
    },
    {
      "Name": "incident_type",
      "Intake": true,
      "Input": "single",
      "Type": "code",
      "Description-en": "What was the type of the incident?",
      "Values-en": "unknown, torture, custodial death, custodial rape, other",
      "Description-ur": "واقعے کی نوعیت",
      "Values-ur": "نامعلوم، تشدد، حراستی موت، دوران حراست ریپ، دیگر"
    },
    {
      "Name": "incident_type_other",
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{panel.incident_type}='other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "place",
      "Intake": true,
      "Input": "single",
      "Type": "code",
      "Description-en": "Where did the incident occur?",
      "Values-en": "unknown, police lockup, private torture cell, detention centres, internment camp, check post, other",
      "Description-ur": "ٹارچر کس جگہ کیا گیا؟",
      "Values-ur": "نامعلوم، پولیس لاک اپ، نجی ٹارچر سیل، حراستی مرکز، حراستی کیمپ، چیک پوسٹ، دیگر"
    },
    {
      "Name": "place_other",
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{panel.place}='other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "during",
      "Input": "single",
      "Type": "code",
      "Description-en": "At what stage were you tortured?",
      "Values-en": "unknown, arrest, interrogation and investigation, search or checking, imprisonment, other",
      "Description-ur": "ٹارچر کب ہوا؟",
      "Values-ur": "نامعلوم، گرفتاری، پوچھ گچھ اور تفتیش، تلاشی، قید، دیگر"
    },
    {
      "Name": "during_other",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{panel.during}='other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "torture_type",
      "Input": "multiple",
      "Type": "code-array",
      "Description-en": "What was the type of torture?",
      "Values-en": "unknown, physical, psychological, cultural humiliation, sexual violence, unlawful detention, other",
      "Description-ur": "ٹارچر کی نوعیت",
      "Values-ur": "نامعلوم، جسمانی، نفسیاتی، ثقافتی ذلت، جنسی تشدد، غیر قانونی حراست، دیگر"
    },
    {
      "Name": "torture_type_other",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{panel.torture_type} contains 'other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "torture_methods",
      "Input": "multiple",
      "Type": "code-array",
      "Description-en": "What method of torture was used?",
      "Values-en": "unknown, beating, cheera, chittar, danda, dolli, falaka, jack, manji, rolla, roller, strappado, sleep deprivation, water boarding, solitary confinement, light deprivation, sexual violence, witness to torture, other",
      "Description-ur": "ٹارچر کا طریق کار",
      "Values-ur": "نامعلوم، مار، چڑا، چتر، ڈنڈا، ڈولی، تلووں پر بید سے مارنا، فلاکہ، مانجھی، رولہ، رولر، رسی سے باندھ کر لٹکانے کی سزا، نیند کی محرومی، واٹر بورڈنگ، قید تنہائی، مسلسل اندھیرے میں رکھنا، جنسی تشدد، ٹارچر دیکھنے پر مجبور کرنا، دیگر"
    },
    {
      "Name": "torture_methods_other",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{panel.torture_methods} contains 'other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "perpetrators",
      "Input": "array",
      "Type": "array",
      "maxLen": 10,
      "Description-en": "What was the perpetrators description?",
      "Values-en": "Perpetrator",
      "Description-ur": "مجرم کی شکل و صورت اور وردی کیسی تھی؟",
      "Values-ur": "ٹارچر کے مرتکب اہلکار سے متعلق بتائیے"
    }
  ],
  "Perpetrator": [{
      "Name": "force",
      "Intake": true,
      "Input": "single",
      "Type": "code",
      "Description-en": "Law Inforcement Agency",
      "Values-en": "unknown, Police, Counter Terrorism Department , Jail Officials, FIA, Elite Force, Traffic Police, Punjab Dolphin Force, Rangers, FC, Military, other",
      "Description-ur": "ٹارچر کا ذمہ دار ادارہ",
      "Values-ur": "نامعلوم، پولیس، سررشتہِ تحقیقاتِ جرائم، جیل حکام، وفاقی تحقیقاتی ادارہ، ایلیٹ فورس، ٹریفک پولیس، پنجاب ڈولفن پولیس، رینجرز، ایف سی، فوج،  اس کے علاوہ کوئی اور"
    },
    {
      "Name": "force_other",
      "Intake": true,
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{panel.force}='other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "action",
      "Input": "single",
      "Type": "code",
      "Description-en": "Action taken against perpetrator",
      "Values-en": "unknown, temporary suspension, permanent suspension, transfer, demotion, other",
      "Description-ur": "ٹارچر کرنے والے کے خلاف کیا کارروائی کی گئی؟",
      "Values-ur": "نامعلوم، عارضی معطلی، مستقل معطلی، منتقلی، تنزلی،  دیگر"
    },
    {
      "Name": "action_other",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "If \"other\", please specify",
      "Values-en": "{\"visibleIf\": \"{panel.action}='other'\"}",
      "Description-ur": "اگر کچھ اور ہے تو، براہ مہربانی وضاحت کریں"
    },
    {
      "Name": "rank",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "Rank of the perpetrator",
      "Description-ur": "ٹارچر کرنے والے کا عہدہ"
    },
    {
      "Name": "posting",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "Place of posting",
      "Description-ur": "ٹارچر کے مرتکب اہلکار کا افسر"
    },
    {
      "Name": "superior",
      "Input": "string",
      "Type": "string",
      "maxLen": 20,
      "Description-en": "Perpetrator's immediate superior",
      "Description-ur": "ٹارچر کے مرتکب اہلکار کا افسر"
    }
  ],
  "Regions": [{
      "S": 12,
      "Province": "Capital Territory",
      "District": "Islamabad",
      "DN": 212
    },
    {
      "S": 0,
      "Province": "Northern Areas",
      "District": "Chilas",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Northern Areas",
      "District": "Gilgit",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Northern Areas",
      "District": "Gilgit (Tribal Territory)",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Northern Areas",
      "District": "Kargil",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Northern Areas",
      "District": "Kupwara (Gilgit Wazarat)",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Northern Areas",
      "District": "Ladakh (Leh)",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Azad Kashmir",
      "District": "Bagh",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Azad Kashmir",
      "District": "Bhimber",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Azad Kashmir",
      "District": "Kotli",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Azad Kashmir",
      "District": "Mirpur",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Azad Kashmir",
      "District": "Muzaffarabad",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Azad Kashmir",
      "District": "Neelum",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Azad Kashmir",
      "District": "Poonch",
      "DN": 0
    },
    {
      "S": 0,
      "Province": "Azad Kashmir",
      "District": "Sudhnati",
      "DN": 0
    },
    {
      "S": 1,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Abbottabad",
      "DN": 101
    },
    {
      "S": 2,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Bajur",
      "DN": 102
    },
    {
      "S": 3,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Bannu",
      "DN": 103
    },
    {
      "S": 4,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Batagram",
      "DN": 104
    },
    {
      "S": 5,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Bunair",
      "DN": 105
    },
    {
      "S": 6,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Charsada",
      "DN": 106
    },
    {
      "S": 7,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Chitral",
      "DN": 107
    },
    {
      "S": 8,
      "Province": "Khyber Pakhtunkhawa",
      "District": "D. I. Khan",
      "DN": 108
    },
    {
      "S": 9,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Hangu",
      "DN": 109
    },
    {
      "S": 10,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Haripur",
      "DN": 110
    },
    {
      "S": 11,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Karak",
      "DN": 111
    },
    {
      "S": 12,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Khyber",
      "DN": 112
    },
    {
      "S": 13,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Kohat",
      "DN": 113
    },
    {
      "S": 14,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Kohistan",
      "DN": 114
    },
    {
      "S": 15,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Kurram",
      "DN": 115
    },
    {
      "S": 16,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Lakki Marwat",
      "DN": 116
    },
    {
      "S": 17,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Lower Dir",
      "DN": 117
    },
    {
      "S": 18,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Malakand",
      "DN": 118
    },
    {
      "S": 19,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Mansehra",
      "DN": 119
    },
    {
      "S": 20,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Mardan",
      "DN": 120
    },
    {
      "S": 21,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Mohmand",
      "DN": 121
    },
    {
      "S": 22,
      "Province": "Khyber Pakhtunkhawa",
      "District": "North Waziristan",
      "DN": 122
    },
    {
      "S": 23,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Nowshera",
      "DN": 123
    },
    {
      "S": 24,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Orakzai",
      "DN": 124
    },
    {
      "S": 25,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Peshawar",
      "DN": 125
    },
    {
      "S": 26,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Shangla",
      "DN": 126
    },
    {
      "S": 27,
      "Province": "Khyber Pakhtunkhawa",
      "District": "South Waziristan",
      "DN": 127
    },
    {
      "S": 28,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Swabi",
      "DN": 128
    },
    {
      "S": 29,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Swat",
      "DN": 129
    },
    {
      "S": 30,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Tank",
      "DN": 130
    },
    {
      "S": 31,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Tor Garh",
      "DN": 131
    },
    {
      "S": 32,
      "Province": "Khyber Pakhtunkhawa",
      "District": "Upper Dir",
      "DN": 132
    },
    {
      "S": 1,
      "Province": "Punjab",
      "District": "Attock",
      "DN": 201
    },
    {
      "S": 2,
      "Province": "Punjab",
      "District": "Bahawalnagar",
      "DN": 202
    },
    {
      "S": 3,
      "Province": "Punjab",
      "District": "Bahawalpur",
      "DN": 203
    },
    {
      "S": 4,
      "Province": "Punjab",
      "District": "Bhakhar",
      "DN": 204
    },
    {
      "S": 5,
      "Province": "Punjab",
      "District": "Chakwal",
      "DN": 205
    },
    {
      "S": 6,
      "Province": "Punjab",
      "District": "Chiniot",
      "DN": 206
    },
    {
      "S": 7,
      "Province": "Punjab",
      "District": "D. G. Khan",
      "DN": 207
    },
    {
      "S": 8,
      "Province": "Punjab",
      "District": "Faisalabad",
      "DN": 208
    },
    {
      "S": 9,
      "Province": "Punjab",
      "District": "Gujranwala",
      "DN": 209
    },
    {
      "S": 10,
      "Province": "Punjab",
      "District": "Gujrat",
      "DN": 210
    },
    {
      "S": 11,
      "Province": "Punjab",
      "District": "Hafizabad",
      "DN": 211
    },
    {
      "S": 13,
      "Province": "Punjab",
      "District": "Jehlum",
      "DN": 213
    },
    {
      "S": 14,
      "Province": "Punjab",
      "District": "Jhang",
      "DN": 214
    },
    {
      "S": 15,
      "Province": "Punjab",
      "District": "Kasur",
      "DN": 215
    },
    {
      "S": 16,
      "Province": "Punjab",
      "District": "Khanewal",
      "DN": 216
    },
    {
      "S": 17,
      "Province": "Punjab",
      "District": "Khushab",
      "DN": 217
    },
    {
      "S": 18,
      "Province": "Punjab",
      "District": "Lahore",
      "DN": 218
    },
    {
      "S": 19,
      "Province": "Punjab",
      "District": "Layyah",
      "DN": 219
    },
    {
      "S": 20,
      "Province": "Punjab",
      "District": "Lodhran",
      "DN": 220
    },
    {
      "S": 21,
      "Province": "Punjab",
      "District": "Mandi Bahauddin",
      "DN": 221
    },
    {
      "S": 22,
      "Province": "Punjab",
      "District": "Mianwali",
      "DN": 222
    },
    {
      "S": 23,
      "Province": "Punjab",
      "District": "Multan",
      "DN": 223
    },
    {
      "S": 24,
      "Province": "Punjab",
      "District": "Muzaffar Garh",
      "DN": 224
    },
    {
      "S": 25,
      "Province": "Punjab",
      "District": "Nankana Sahib",
      "DN": 225
    },
    {
      "S": 26,
      "Province": "Punjab",
      "District": "Narowal"
    },
    {
      "S": 27,
      "Province": "Punjab",
      "District": "Okara",
      "DN": 227
    },
    {
      "S": 28,
      "Province": "Punjab",
      "District": "Pakpattan",
      "DN": 228
    },
    {
      "S": 29,
      "Province": "Punjab",
      "District": "Rahim Yar Khan",
      "DN": 229
    },
    {
      "S": 30,
      "Province": "Punjab",
      "District": "Rajanpur",
      "DN": 230
    },
    {
      "S": 31,
      "Province": "Punjab",
      "District": "Rawalpindi",
      "DN": 231
    },
    {
      "S": 32,
      "Province": "Punjab",
      "District": "Sahiwal",
      "DN": 232
    },
    {
      "S": 33,
      "Province": "Punjab",
      "District": "Sargodha",
      "DN": 233
    },
    {
      "S": 34,
      "Province": "Punjab",
      "District": "Sheikhupura",
      "DN": 234
    },
    {
      "S": 35,
      "Province": "Punjab",
      "District": "Sialkot",
      "DN": 235
    },
    {
      "S": 36,
      "Province": "Punjab",
      "District": "T.T. Singh",
      "DN": 236
    },
    {
      "S": 37,
      "Province": "Punjab",
      "District": "Vehari",
      "DN": 237
    },
    {
      "S": 1,
      "Province": "Sindh",
      "District": "Badin",
      "DN": 301
    },
    {
      "S": 2,
      "Province": "Sindh",
      "District": "Dadu",
      "DN": 302
    },
    {
      "S": 3,
      "Province": "Sindh",
      "District": "Ghotki",
      "DN": 303
    },
    {
      "S": 4,
      "Province": "Sindh",
      "District": "Hyderabad",
      "DN": 304
    },
    {
      "S": 5,
      "Province": "Sindh",
      "District": "Jacobabad",
      "DN": 305
    },
    {
      "S": 6,
      "Province": "Sindh",
      "District": "Jamshoro",
      "DN": 306
    },
    {
      "S": 7,
      "Province": "Sindh",
      "District": "Karachi Central",
      "DN": 307
    },
    {
      "S": 8,
      "Province": "Sindh",
      "District": "Karachi East",
      "DN": 308
    },
    {
      "S": 9,
      "Province": "Sindh",
      "District": "Karachi Malir",
      "DN": 309
    },
    {
      "S": 10,
      "Province": "Sindh",
      "District": "Karachi South",
      "DN": 310
    },
    {
      "S": 11,
      "Province": "Sindh",
      "District": "Karachi West",
      "DN": 311
    },
    {
      "S": 12,
      "Province": "Sindh",
      "District": "Kashmore",
      "DN": 312
    },
    {
      "S": 13,
      "Province": "Sindh",
      "District": "Khairpur",
      "DN": 313
    },
    {
      "S": 14,
      "Province": "Sindh",
      "District": "Korangi",
      "DN": 314
    },
    {
      "S": 15,
      "Province": "Sindh",
      "District": "Larkana",
      "DN": 315
    },
    {
      "S": 16,
      "Province": "Sindh",
      "District": "Matiari",
      "DN": 316
    },
    {
      "S": 17,
      "Province": "Sindh",
      "District": "Mir Pur Khas",
      "DN": 317
    },
    {
      "S": 18,
      "Province": "Sindh",
      "District": "Nowshero Feroze",
      "DN": 318
    },
    {
      "S": 19,
      "Province": "Sindh",
      "District": "Sanghar",
      "DN": 319
    },
    {
      "S": 20,
      "Province": "Sindh",
      "District": "Shahdadkot",
      "DN": 320
    },
    {
      "S": 21,
      "Province": "Sindh",
      "District": "Shaheed Banazir Abad",
      "DN": 321
    },
    {
      "S": 22,
      "Province": "Sindh",
      "District": "Shikarpur",
      "DN": 322
    },
    {
      "S": 23,
      "Province": "Sindh",
      "District": "Sujawal",
      "DN": 323
    },
    {
      "S": 24,
      "Province": "Sindh",
      "District": "Sukkur",
      "DN": 324
    },
    {
      "S": 25,
      "Province": "Sindh",
      "District": "Tando Allah Yar",
      "DN": 325
    },
    {
      "S": 26,
      "Province": "Sindh",
      "District": "Tando Muhammad Khan",
      "DN": 326
    },
    {
      "S": 27,
      "Province": "Sindh",
      "District": "Tharparkar",
      "DN": 327
    },
    {
      "S": 28,
      "Province": "Sindh",
      "District": "Thatta",
      "DN": 328
    },
    {
      "S": 29,
      "Province": "Sindh",
      "District": "Umer Kot",
      "DN": 329
    },
    {
      "S": 1,
      "Province": "Balochistan",
      "District": "Awaran",
      "DN": 401
    },
    {
      "S": 2,
      "Province": "Balochistan",
      "District": "Barkhan",
      "DN": 402
    },
    {
      "S": 3,
      "Province": "Balochistan",
      "District": "Chagai",
      "DN": 403
    },
    {
      "S": 4,
      "Province": "Balochistan",
      "District": "Dera Bugti",
      "DN": 404
    },
    {
      "S": 5,
      "Province": "Balochistan",
      "District": "Duki",
      "DN": 405
    },
    {
      "S": 6,
      "Province": "Balochistan",
      "District": "Gwadar",
      "DN": 406
    },
    {
      "S": 7,
      "Province": "Balochistan",
      "District": "Harnai",
      "DN": 407
    },
    {
      "S": 8,
      "Province": "Balochistan",
      "District": "Jaffarabad",
      "DN": 408
    },
    {
      "S": 9,
      "Province": "Balochistan",
      "District": "Jhal Magsi",
      "DN": 409
    },
    {
      "S": 10,
      "Province": "Balochistan",
      "District": "Kachhi/Bolan",
      "DN": 410
    },
    {
      "S": 11,
      "Province": "Balochistan",
      "District": "Kalat",
      "DN": 411
    },
    {
      "S": 12,
      "Province": "Balochistan",
      "District": "Kech/Turbat",
      "DN": 412
    },
    {
      "S": 13,
      "Province": "Balochistan",
      "District": "Kharan",
      "DN": 413
    },
    {
      "S": 14,
      "Province": "Balochistan",
      "District": "Khuzdar",
      "DN": 414
    },
    {
      "S": 15,
      "Province": "Balochistan",
      "District": "Kohlu",
      "DN": 415
    },
    {
      "S": 16,
      "Province": "Balochistan",
      "District": "Lasbela",
      "DN": 416
    },
    {
      "S": 17,
      "Province": "Balochistan",
      "District": "Loralai",
      "DN": 417
    },
    {
      "S": 18,
      "Province": "Balochistan",
      "District": "Mastung",
      "DN": 418
    },
    {
      "S": 19,
      "Province": "Balochistan",
      "District": "Musa Khel",
      "DN": 419
    },
    {
      "S": 20,
      "Province": "Balochistan",
      "District": "Nasirabad/Tamboo",
      "DN": 420
    },
    {
      "S": 21,
      "Province": "Balochistan",
      "District": "Nushki",
      "DN": 421
    },
    {
      "S": 22,
      "Province": "Balochistan",
      "District": "Panjgoor",
      "DN": 422
    },
    {
      "S": 23,
      "Province": "Balochistan",
      "District": "Pishin",
      "DN": 423
    },
    {
      "S": 24,
      "Province": "Balochistan",
      "District": "Qilla Abdullah",
      "DN": 424
    },
    {
      "S": 25,
      "Province": "Balochistan",
      "District": "Qilla Saifullah",
      "DN": 425
    },
    {
      "S": 26,
      "Province": "Balochistan",
      "District": "Quetta",
      "DN": 426
    },
    {
      "S": 27,
      "Province": "Balochistan",
      "District": "Shaheed Sikandar Abad",
      "DN": 427
    },
    {
      "S": 28,
      "Province": "Balochistan",
      "District": "Sherani",
      "DN": 428
    },
    {
      "S": 29,
      "Province": "Balochistan",
      "District": "Sibbi",
      "DN": 429
    },
    {
      "S": 30,
      "Province": "Balochistan",
      "District": "Sohbatpur",
      "DN": 430
    },
    {
      "S": 31,
      "Province": "Balochistan",
      "District": "Washuk",
      "DN": 431
    },
    {
      "S": 32,
      "Province": "Balochistan",
      "District": "Zhob",
      "DN": 432
    },
    {
      "S": 33,
      "Province": "Balochistan",
      "District": "Ziarat",
      "DN": 433
    }
  ]
}

// Replace Urdu comma
let sections = ['Main', 'Incident', 'Perpetrator'];
sections.forEach(d => layout[d].forEach(e => {
  if (typeof e["Values-ur"] == 'string')
    e["Values-ur"] = e["Values-ur"].replace(/،/g, ',');
}));

// FOR BROWSER
// if (!("module" in globalThis))
//   globalThis.module = { exports: {} };

if (!("schema" in globalThis))
  globalThis.schema = {};
globalThis.schema.layout = layout;
// export { layout as default };