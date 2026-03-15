export type Locale = "en" | "mn" | "ja";

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    testimonials: string;
    contact: string;
  };
  loader: { title: string; subtitle: string; wait: string};
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    tabs: { about: string; education: string; interests: string };
    bio: string;
    passionTitle: string;
    interestsIntro: string;
    education: {
      degree: string;
      university: string;
      years: string;
      cert: string;
      academy: string;
      certYear: string;
    };
    infoLabels: {
      name: string;
      email: string;
      location: string;
      availability: string;
    };
    availabilityValue: string;
     cvDownload: string
  };
  stats: {
    yearsInJapan: string;
    languages: string;
    projects: string;
    countries: string;
  };
 hero: {
  greeting: string
  role: string
  cta: string
  contact: string
  scrollDown: string
  welcome: string
  bio: string
  typeSequence: string[]  // ← ЭНЭ МӨРИЙГ НЭМЭХ
}
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    frontend: string;
    backend: string;
    tools: string;
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    all: string;
    frontend: string;
    fullstack: string;
    demo: string;
    code: string;
    viewAll: string;
  };
  experience: {
    sectionTitle: string;
    sectionSubtitle: string;
    work: string;
    education: string;
    achievements: string;
  };
  testimonials: { sectionTitle: string; sectionSubtitle: string };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    infoTitle: string;
    infoSubtitle: string;
    formTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sendAnother: string;
    successTitle: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    quickLinks: string;
    contactInfo: string;
    rights: string;
    builtWith: string;
    builtWithTech: string;
  };

  // portfolio-config өгөгдлүүд
  personalInfo: {
    title: string;
    bio: string;
    longBio: string;
    availability: string;
    location: string;
  };
  interests: string[];
  contactInfoLabels: { email: string; phone: string; location: string };
  experiences: Array<{
    title: string;
    company: string;
    description: string;
    achievements: string[];
  }>;
  testimonialContents: Array<{ content: string }>;
}

const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  loader: {
    title: "Ariunjargal's",
    subtitle: "Portfolio",
    wait: "Just a minute",
  },
  about: {
    sectionTitle: "About Me",
    sectionSubtitle: "Get to know me better",
    tabs: { about: "About", education: "Education", interests: "Interests" },
    bio: "I am a versatile professional with experience in restaurant management, office administration, and now pursuing a career in full stack development. With a background in economic management from Nagaoka University in Japan, I bring a unique perspective to problem-solving and project development. My journey in web development started recently, and I'm excited to combine my diverse experience with new technical skills.",
    passionTitle: "A passionate Full Stack Developer based in Tokyo, Japan",
    interestsIntro: "When I'm not coding, you can find me:",
    education: {
      degree: "Bachelor of Economic Management",
      university: "Nagaoka University",
      years: "2020 - 2023",
      cert: "FullStack Developer Certification",
      academy: "Pinecone Academy",
      certYear: "2025",
    },
    infoLabels: {
      name: "Name:",
      email: "Email:",
      location: "Location:",
      availability: "Availability:",
    },
    availabilityValue: "Currently studying, open to opportunities",
     cvDownload: "CV Download", 
  },
  stats: {
    yearsInJapan: "Years in Japan",
    languages: "Languages",
    projects: "Projects",
    countries: "Countries Lived In",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    cta: "View Projects",
    contact: "Contact Me",
    scrollDown: "Scroll Down",
    welcome: "WELCOME TO MY PORTFOLIO",
    bio: "A passionate Full Stack Developer with international experience, currently enhancing my skills at Pinecone Academy.",
    typeSequence: [
    "I build web applications",
    "I create user experiences",
    "I develop solutions",
    "I design APIs",
    "I'm a fast learner",
  ],
  },
  skills: {
    sectionTitle: "My",
    sectionSubtitle:
      "I've worked with a variety of technologies. Here are my main areas of expertise:",
    frontend: "Frontend",
    backend: "Backend",
    tools: "DevOps & Tools",
  },
  projects: {
    sectionTitle: "My Projects",
    sectionSubtitle:
      "Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.",
    all: "All",
    frontend: "Frontend",
    fullstack: "Full Stack",
    demo: "Live Demo",
    code: "Code",
    viewAll: "View All Projects",
  },
  experience: {
    sectionTitle: "Experience & Education",
    sectionSubtitle: "My professional journey and educational background",
    work: "Work",
    education: "Education",
    achievements: "Key Achievements:",
  },
  testimonials: {
    sectionTitle: "Client Testimonials",
    sectionSubtitle: "Here's what people are saying about working with me",
  },
  contact: {
    sectionTitle: "Contact",
    sectionSubtitle: "Get in touch",
    infoTitle: "Contact Information",
    infoSubtitle:
      "Feel free to reach out through any of these channels. I'm always open to new projects or collaborations.",
    formTitle: "Send a Message",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    namePlaceholder: "John Doe",
    emailPlaceholder: "john@example.com",
    subjectPlaceholder: "Project Inquiry",
    messagePlaceholder: "I'd like to discuss a project...",
    send: "Send Message",
    sending: "Processing...",
    sendAnother: "Send Another Message",
    successTitle: "Message Sent!",
    successMessage:
      "Thank you for reaching out. I'll get back to you as soon as possible.",
    errorMessage: "Failed to send message. Please try again.",
  },
  footer: {
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    rights: "All rights reserved.",
    builtWith: "Built with",
    builtWithTech: "Next.js & Tailwind",
  },
  personalInfo: {
    title: "Full Stack Developer",
    bio: "A passionate Full Stack Developer with international experience, currently enhancing my skills at Pinecone Academy.",
    longBio:
      "I am a versatile professional with experience in restaurant management, office administration, and now pursuing a career in full stack development. With a background in economic management from Nagaoka University in Japan, I bring a unique perspective to problem-solving and project development. My journey in web development started recently, and I'm excited to combine my diverse experience with new technical skills.",
    availability: "Currently studying, open to opportunities",
    location: "Tokyo, Japan",
  },
  interests: [
    "Learning new technologies",
    "International travel",
    "Languages and cultures",
    "Photography",
    "Outdoor activities",
  ],
  contactInfoLabels: { email: "Email", phone: "Phone", location: "Location" },
  experiences: [
    {
      title: "Full Stack Developer Student",
      company: "Pinecone Academy",
      description:
        "Currently studying full stack development, focusing on modern web technologies and best practices.",
      achievements: [
        "Learning MERN stack (MongoDB, Express, React, Node.js)",
        "Building responsive and interactive web applications",
        "Collaborating with peers on group projects",
        "Developing full-stack applications with TypeScript and Next.js",
      ],
    },
    {
      title: "Office Manager",
      company: "Atula International Trust Co., Ltd.",
      description:
        "Provided administrative and operational support for international trade and import-related activities.",
      achievements: [
        "Assisted with import operations and international trade documentation",
        "Provided multilingual customer support in Japanese, English, and Mongolian",
        "Performed data entry, updates, and record management",
        "Supported preparation and organization of business documents",
        "Handled email correspondence with clients and partners",
      ],
    },
    {
      title: "Restaurant Manager",
      company: "Gindako Highball Restaurant",
      description:
        "Managed daily operations of a restaurant, including staff supervision, customer service, and inventory management.",
      achievements: [
        "Supervised a team of 10+ staff members",
        "Improved customer satisfaction ratings",
        "Optimized inventory management processes",
        "Implemented marketing strategies to increase customer base",
      ],
    },
    {
      title: "Bachelor's Degree in Economic Management",
      company: "Nagaoka University",
      description:
        "Studied Economic Management with a focus on business administration and international economics.",
      achievements: [
        "Completed coursework in business management, economics, and finance",
        "Participated in international student programs",
        "Developed analytical and problem-solving skills",
        "Gained cross-cultural communication experience",
      ],
    },
    {
      title: "University Student",
      company: "Citi University",
      description: "Studied at Citi University in Mongolia.",
      achievements: [
        "Completed foundational coursework",
        "Participated in student activities",
      ],
    },
    {
      title: "High School Student",
      company: "NUM Lycee Baigali-Ekh High School",
      description:
        "Completed high school education with a focus on general studies.",
      achievements: [
        "Graduated with good academic standing",
        "Participated in extracurricular activities",
      ],
    },
  ],
  testimonialContents: [
    {
      content:
        "Ariunjargal is a dedicated student who consistently demonstrates a strong work ethic and eagerness to learn. Their attention to detail and problem-solving skills are impressive, and they're always willing to help fellow students.",
    },
    {
      content:
        "Working with Arii was a pleasure. They brought organization and efficiency to our office operations and were always professional and friendly. Their ability to manage multiple tasks while maintaining quality is remarkable.",
    },
    {
      content:
        "Ariunjargal was an exceptional manager who consistently delivered high-quality service. Their leadership skills and attention to customer satisfaction helped our restaurant thrive. They have a natural talent for team management.",
    },
  ],
};

const mn: Translations = {
  nav: {
    home: "Нүүр",
    about: "Тухай",
    skills: "Чадварууд",
    projects: "Төслүүд",
    experience: "Туршлага",
    testimonials: "Сэтгэгдэл",
    contact: "Холбоо барих",
  },
  loader: {
    title: "Ариунжаргал-ийн",
    subtitle: "Портфолио сайт",
    wait: "Түр хүлээнэ үү",
  },
  about: {
    sectionTitle: "Миний тухай",
    sectionSubtitle: "Намайг илүү сайн таньж мэд",
    tabs: { about: "Тухай", education: "Боловсрол", interests: "Сонирхол" },
    bio: "Би ресторан удирдлага, оффисын захиргааны чиглэлээр ажиллаж туршлага хуримтлуулсан бөгөөд одоо full stack хөгжүүлэгчийн карьераа хөгжүүлж байна. Японы Нагаока их сургуульд эдийн засгийн удирдлагын чиглэлээр суралцсан туршлагаараа асуудал шийдвэрлэх, төсөл хэрэгжүүлэхэд өвөрмөц хандлагаар хандана. Веб хөгжүүлэлтийн аялал минь саяхан эхэлсэн бөгөөд олон талт туршлагаа шинэ техникийн чадваруудтай хослуулахдаа маш их урам зоригтой байна.",
    passionTitle: "Токио, Японд суурилсан Full Stack хөгжүүлэгч",
    interestsIntro: "Кодлохгүй үедээ намайг хаанаас олох вэ:",
    education: {
      degree: "Эдийн засгийн удирдлагын бакалавр",
      university: "Нагаока Их Сургууль",
      years: "2020 - 2023",
      cert: "Full Stack Хөгжүүлэгчийн Сертификат",
      academy: "Pinecone Academy",
      certYear: "2025",
    },
    infoLabels: {
      name: "Нэр:",
      email: "Имэйл:",
      location: "Байршил:",
      availability: "Боломж:",
    },
    availabilityValue: "Одоо суралцаж байгаа, боломж хайж байна",
    cvDownload: "CV татах", 
  },
  stats: {
    yearsInJapan: "Жил Японд",
    languages: "Хэл",
    projects: "Төсөл",
    countries: "Амьдарсан улс",
  },
  hero: {
    greeting: "Сайн уу, би",
    role: "Full Stack Хөгжүүлэгч",
    cta: "Төслүүд үзэх",
    contact: "Холбоо барих",
    scrollDown: "Доош гүйлгэх",
    welcome: "МИНИЙ ПОРТФОЛИОД ТАВТАЙ МОРИЛНО УУ",
    bio: "Олон улсын туршлагатай Full Stack хөгжүүлэгч бөгөөд Pinecone Academy-д чадвараа нэмэгдүүлж байна.",
    typeSequence: [
    "Би веб аппликейшн бүтээдэг",
    "Би хэрэглэгчийн туршлага бүтээдэг",
    "Би шийдлүүд хөгжүүлдэг",
    "Би API зохион бүтээдэг",
    "Би хурдан суралцдаг",
  ],
  },
  skills: {
    sectionTitle: "Миний",
    sectionSubtitle:
      "Би олон технологитой ажилласан. Эндээс үндсэн чадваруудаа харуулж байна:",
    frontend: "Фронтэнд",
    backend: "Бэкэнд",
    tools: "Хэрэгслүүд",
  },
  projects: {
    sectionTitle: "Миний Төслүүд",
    sectionSubtitle:
      "Сүүлийн үеийн төслүүдийн зарим нь. Тус бүр тодорхой асуудал шийдэх эсвэл шинэ технологи судлах зорилгоор бүтээгдсэн.",
    all: "Бүгд",
    frontend: "Фронтэнд",
    fullstack: "Full Stack",
    demo: "Демо үзэх",
    code: "Код",
    viewAll: "Бүх төслүүдийг үзэх",
  },
  experience: {
    sectionTitle: "Туршлага & Боловсрол",
    sectionSubtitle: "Миний мэргэжлийн замнал ба боловсролын дэвсгэр",
    work: "Ажил",
    education: "Боловсрол",
    achievements: "Гол амжилтууд:",
  },
  testimonials: {
    sectionTitle: "Сэтгэгдлүүд",
    sectionSubtitle: "Надтай хамтран ажилласан хүмүүсийн санал бодол",
  },
  contact: {
    sectionTitle: "Холбоо барих",
    sectionSubtitle: "Надтай холбогдоорой",
    infoTitle: "Холбоо барих мэдээлэл",
    infoSubtitle:
      "Дурын сувгаар надтай холбоо бариарай. Шинэ төсөл, хамтын ажиллагаанд үргэлж нээлттэй байна.",
    formTitle: "Мессеж илгээх",
    name: "Нэр",
    email: "Имэйл",
    subject: "Гарчиг",
    message: "Мессеж",
    namePlaceholder: "Таны нэр",
    emailPlaceholder: "таны@имэйл.com",
    subjectPlaceholder: "Төслийн санал",
    messagePlaceholder: "Төслийн талаар ярилцмаар байна...",
    send: "Мессеж илгээх",
    sending: "Илгээж байна...",
    sendAnother: "Дахин мессеж илгээх",
    successTitle: "Мессеж илгээгдлээ!",
    successMessage: "Холбоо барьсанд баярлалаа. Аль болох хурдан хариу өгнө.",
    errorMessage: "Мессеж илгээхэд алдаа гарлаа. Дахин оролдоно уу.",
  },
  footer: {
    quickLinks: "Хурдан холбоосууд",
    contactInfo: "Холбоо барих",
    rights: "Бүх эрх хуулиар хамгаалагдсан.",
    builtWith: "Бүтээгдсэн",
    builtWithTech: "Next.js & Tailwind ашиглан",
  },
  personalInfo: {
    title: "Full Stack Хөгжүүлэгч",
    bio: "Олон улсын туршлагатай Full Stack хөгжүүлэгч бөгөөд Pinecone Academy-д чадвараа нэмэгдүүлж байна.",
    longBio:
      "Би ресторан удирдлага, оффисын захиргааны чиглэлээр ажиллаж туршлага хуримтлуулсан бөгөөд одоо full stack хөгжүүлэгчийн карьераа хөгжүүлж байна. Японы Нагаока их сургуульд эдийн засгийн удирдлагын чиглэлээр суралцсан туршлагаараа асуудал шийдвэрлэх, төсөл хэрэгжүүлэхэд өвөрмөц хандлагаар хандана.",
    availability: "Одоо суралцаж байгаа, боломж хайж байна",
    location: "Токио, Япон",
  },
  interests: [
    "Шинэ технологи судлах",
    "Олон улс аялах",
    "Хэл, соёлыг судлах",
    "Фото зураг",
    "Гадаа үйл ажиллагаа",
  ],
  contactInfoLabels: { email: "Имэйл", phone: "Утас", location: "Байршил" },
  experiences: [
    {
      title: "Full Stack Хөгжүүлэгчийн Сурагч",
      company: "Pinecone Academy",
      description:
        "Орчин үеийн веб технологи болон шилдэг практикт анхаарлаа хандуулан full stack хөгжүүлэлт судалж байна.",
      achievements: [
        "MERN stack (MongoDB, Express, React, Node.js) судлаж байна",
        "Responsive болон интерактив веб аппликейшн бүтээж байна",
        "Багийн төслүүдэд хамтран ажиллаж байна",
        "TypeScript болон Next.js ашиглан full-stack аппликейшн хөгжүүлж байна",
      ],
    },
    {
      title: "Оффисын Менежер",
      company: "Atula International Trust Co., Ltd.",
      description:
        "Олон улсын худалдаа болон импорттой холбоотой үйл ажиллагааг захиргааны болон үйл ажиллагааны дэмжлэгээр хангасан.",
      achievements: [
        "Импортын үйл ажиллагаа болон олон улсын худалдааны баримт бичигт туслалцаа үзүүлсэн",
        "Япон, Англи, Монгол хэлээр олон хэлт хэрэглэгчийн дэмжлэг үзүүлсэн",
        "Мэдээлэл оруулах, шинэчлэх, бүртгэл удирдах ажлыг хийсэн",
        "Бизнесийн баримт бичгийг бэлтгэх, зохион байгуулахад туслалцаа үзүүлсэн",
        "Харилцагч, түншүүдтэй имэйлээр харилцаа тогтоосон",
      ],
    },
    {
      title: "Ресторан Менежер",
      company: "Gindako Highball Restaurant",
      description:
        "Ресторанны өдөр тутмын үйл ажиллагааг удирдан зохион байгуулсан, ажилтнуудыг хянах, хэрэглэгчид үйлчлэх, нөөц удирдах ажлыг гүйцэтгэсэн.",
      achievements: [
        "10+ ажилтнаас бүрдсэн багийг удирдан зохион байгуулсан",
        "Хэрэглэгчийн сэтгэл ханамжийн үнэлгээг дээшлүүлсэн",
        "Нөөц удирдлагын процессыг оновчтой болгосон",
        "Хэрэглэгчийн баазыг нэмэгдүүлэх маркетингийн стратегийг хэрэгжүүлсэн",
      ],
    },
    {
      title: "Эдийн засгийн удирдлагын бакалаврын зэрэг",
      company: "Нагаока Их Сургууль",
      description:
        "Бизнесийн удирдлага болон олон улсын эдийн засагт анхаарлаа хандуулан эдийн засгийн удирдлагыг судалсан.",
      achievements: [
        "Бизнесийн удирдлага, эдийн засаг, санхүүгийн хичээлийн ажлыг дүүргэсэн",
        "Олон улсын оюутны хөтөлбөрт оролцсон",
        "Аналитик болон асуудал шийдвэрлэх чадварыг хөгжүүлсэн",
        "Соёл хоорондын харилцааны туршлага олж авсан",
      ],
    },
    {
      title: "Их Сургуулийн Оюутан",
      company: "Сити Их Сургууль",
      description: "Монгол улсын Сити Их Сургуульд суралцсан.",
      achievements: [
        "Үндсэн хичээлийн ажлыг дүүргэсэн",
        "Оюутны үйл ажиллагаанд оролцсон",
      ],
    },
    {
      title: "Ахлах Сургуулийн Сурагч",
      company: "НУМ Лицей Байгаль-Эх Ахлах Сургууль",
      description:
        "Ерөнхий боловсролд анхаарлаа хандуулан ахлах сургуулийн боловсролоо дүүргэсэн.",
      achievements: [
        "Сайн академик үзүүлэлттэйгээр төгссөн",
        "Сургуулийн гадуурх үйл ажиллагаанд оролцсон",
      ],
    },
  ],
  testimonialContents: [
    {
      content:
        "Ариунжаргал бол ажлын хүч чармайлт, суралцах хүслийг тогтмол харуулдаг чармайлттай сурагч. Нарийн анхаарал, асуудал шийдвэрлэх чадвар нь гайхалтай бөгөөд хамт олондоо туслахдаа үргэлж бэлэн байдаг.",
    },
    {
      content:
        "Ариитай хамт ажиллах нь таатай байсан. Тэр оффисын үйл ажиллагаанд зохион байгуулалт, үр ашгийг авчирч, үргэлж мэргэжлийн болон найрсаг байсан. Чанарыг хадгалахын зэрэгцээ олон ажлыг удирдах чадвар нь гайхалтай.",
    },
    {
      content:
        "Ариунжаргал бол тогтмол өндөр чанартай үйлчилгээ үзүүлдэг онцгой менежер байсан. Удирдлагын чадвар болон хэрэглэгчийн сэтгэл ханамжид анхаарал хандуулсан нь манай рестораныг цэцэглэн хөгжихөд тусалсан.",
    },
  ],
};

const ja: Translations = {
  nav: {
    home: "ホーム",
    about: "私について",
    skills: "スキル",
    projects: "プロジェクト",
    experience: "経験",
    testimonials: "お客様の声",
    contact: "お問い合わせ",
  },
  loader: {
    title: "アリウンジャラガルの",
    subtitle: "ポートフォリオ",
    wait: "少々お待ちください",
  },
  about: {
    sectionTitle: "私について",
    sectionSubtitle: "もっと知ってください",
    tabs: { about: "について", education: "学歴", interests: "趣味・関心" },
    bio: "レストラン管理やオフィス事務の経験を持ち、現在はフルスタック開発者としてのキャリアを追求しています。日本の長岡大学で経済経営を学んだ背景から、問題解決やプロジェクト開発に独自の視点をもたらします。Web開発の旅は最近始まったばかりで、多様な経験を新しい技術スキルと組み合わせることにとても興奮しています。",
    passionTitle: "東京在住の情熱的なフルスタック開発者",
    interestsIntro: "コーディング以外の時間は：",
    education: {
      degree: "経済経営学士",
      university: "長岡大学",
      years: "2020年 - 2023年",
      cert: "フルスタック開発者認定",
      academy: "Pinecone Academy",
      certYear: "2025年",
    },
    infoLabels: {
      name: "氏名：",
      email: "メール：",
      location: "所在地：",
      availability: "状況：",
    },
    availabilityValue: "現在学習中、機会を探しています",
    cvDownload: "履歴書ダウンロード"
  },
  stats: {
    yearsInJapan: "日本在住年数",
    languages: "言語",
    projects: "プロジェクト",
    countries: "居住国数",
  },
  hero: {
    greeting: "こんにちは、私は",
    role: "フルスタック開発者",
    cta: "プロジェクトを見る",
    contact: "お問い合わせ",
    scrollDown: "スクロールダウン",
    welcome: "ポートフォリオへようこそ",
    bio: "国際的な経験を持つ情熱的なフルスタック開発者として、現在Pinecone Academyでスキルを向上させています。",
    typeSequence: [
    "Webアプリを開発しています",
    "ユーザー体験を創造しています",
    "ソリューションを構築しています",
    "APIを設計しています",
    "素早く学習しています",
  ],
  },
  skills: {
    sectionTitle: "私の",
    sectionSubtitle:
      "様々な技術を使った経験があります。主な専門分野をご紹介します：",
    frontend: "フロントエンド",
    backend: "バックエンド",
    tools: "ツール & DevOps",
  },
  projects: {
    sectionTitle: "プロジェクト",
    sectionSubtitle:
      "最近のプロジェクトの一部です。それぞれ特定の問題を解決したり、新しい技術を探求するために作られました。",
    all: "すべて",
    frontend: "フロントエンド",
    fullstack: "フルスタック",
    demo: "デモを見る",
    code: "コード",
    viewAll: "すべてのプロジェクトを見る",
  },
  experience: {
    sectionTitle: "経験・学歴",
    sectionSubtitle: "私のキャリアと学歴の歩み",
    work: "職歴",
    education: "学歴",
    achievements: "主な実績：",
  },
  testimonials: {
    sectionTitle: "お客様の声",
    sectionSubtitle: "一緒に働いた方々からの評価",
  },
  contact: {
    sectionTitle: "お問い合わせ",
    sectionSubtitle: "気軽にご連絡ください",
    infoTitle: "連絡先情報",
    infoSubtitle:
      "いずれかのチャンネルからご連絡ください。新しいプロジェクトやコラボレーションに常にオープンです。",
    formTitle: "メッセージを送る",
    name: "お名前",
    email: "メールアドレス",
    subject: "件名",
    message: "メッセージ",
    namePlaceholder: "お名前を入力",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "プロジェクトのご依頼",
    messagePlaceholder: "メッセージを入力...",
    send: "送信する",
    sending: "送信中...",
    sendAnother: "別のメッセージを送る",
    successTitle: "送信完了！",
    successMessage:
      "ご連絡ありがとうございます。できるだけ早くご返信いたします。",
    errorMessage: "送信に失敗しました。もう一度お試しください。",
  },
  footer: {
    quickLinks: "クイックリンク",
    contactInfo: "連絡先",
    rights: "全著作権所有。",
    builtWith: "制作：",
    builtWithTech: "Next.js & Tailwind",
  },
  personalInfo: {
    title: "フルスタック開発者",
    bio: "国際的な経験を持つ情熱的なフルスタック開発者として、現在Pinecone Academyでスキルを向上させています。",
    longBio:
      "レストラン管理やオフィス事務の経験を持ち、現在はフルスタック開発者としてのキャリアを追求しています。日本の長岡大学で経済経営を学んだ背景から、問題解決やプロジェクト開発に独自の視点をもたらします。",
    availability: "現在学習中、機会を探しています",
    location: "東京、日本",
  },
  interests: [
    "新しい技術を学ぶ",
    "海外旅行",
    "言語と文化",
    "写真撮影",
    "アウトドア活動",
  ],
  contactInfoLabels: { email: "メール", phone: "電話", location: "所在地" },
  experiences: [
    {
      title: "フルスタック開発者学生",
      company: "Pinecone Academy",
      description:
        "現代のウェブ技術とベストプラクティスに焦点を当て、フルスタック開発を学んでいます。",
      achievements: [
        "MERNスタック（MongoDB、Express、React、Node.js）を学習中",
        "レスポンシブでインタラクティブなWebアプリを構築中",
        "グループプロジェクトでチームメンバーと協力",
        "TypeScriptとNext.jsを使用したフルスタックアプリを開発中",
      ],
    },
    {
      title: "オフィスマネージャー",
      company: "Atula International Trust Co., Ltd.",
      description:
        "国際貿易および輸入関連業務の管理・運営サポートを提供しました。",
      achievements: [
        "輸入業務および国際貿易書類のサポート",
        "日本語、英語、モンゴル語での多言語カスタマーサポートを提供",
        "データ入力、更新、記録管理を実施",
        "ビジネス文書の準備・整理をサポート",
        "取引先・パートナーとのメール対応を担当",
      ],
    },
    {
      title: "レストランマネージャー",
      company: "銀だこハイボール酒場",
      description:
        "スタッフ管理、顧客サービス、在庫管理を含むレストランの日常業務を管理しました。",
      achievements: [
        "10名以上のスタッフチームを監督",
        "顧客満足度の評価を向上",
        "在庫管理プロセスを最適化",
        "顧客基盤を拡大するマーケティング戦略を実施",
      ],
    },
    {
      title: "経済経営学士号",
      company: "長岡大学",
      description: "ビジネス管理と国際経済に焦点を当て、経済経営を学びました。",
      achievements: [
        "ビジネス管理、経済、財務のコースワークを修了",
        "国際学生プログラムに参加",
        "分析力と問題解決能力を開発",
        "異文化コミュニケーション経験を積む",
      ],
    },
    {
      title: "大学生",
      company: "シティ大学",
      description: "モンゴルのシティ大学で学びました。",
      achievements: ["基礎コースワークを修了", "学生活動に参加"],
    },
    {
      title: "高校生",
      company: "NUM Lycee バイガリ-エフ高校",
      description: "一般教育に焦点を当て、高校教育を修了しました。",
      achievements: ["優秀な学業成績で卒業", "課外活動に参加"],
    },
  ],
  testimonialContents: [
    {
      content:
        "アリウンジャラガルは、強い職業倫理と学ぶ意欲を常に示す献身的な学生です。細部への注意と問題解決スキルは印象的で、仲間の学生を助けることを常にいとわない。",
    },
    {
      content:
        "アリーと一緒に働くのは喜びでした。彼女はオフィス業務に整理整頓と効率をもたらし、常にプロフェッショナルで親切でした。品質を維持しながら複数のタスクを管理する能力は素晴らしい。",
    },
    {
      content:
        "アリウンジャラガルは、常に高品質なサービスを提供する卓越したマネージャーでした。リーダーシップスキルと顧客満足への注意が、レストランの繁栄に貢献しました。",
    },
  ],
};

export const translations: Record<Locale, Translations> = { en, mn, ja };
