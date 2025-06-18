export type Language = 'en' | 'ru' | 'uk';

export interface Translations {
  // Navigation
  home: string;
  about: string;
  github: string;
  projects: string;
  community: string;
  contact: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  contactButton: string;

  // About Section
  aboutTitle: string;
  developerProfile: string;
  aboutDescription: string;
  yearsExperience: string;
  projectsCompleted: string;
  techStack: string;

  // GitHub Section
  githubTitle: string;
  repositories: string;
  stars: string;
  followers: string;
  viewProfile: string;

  // Projects Section
  projectsTitle: string;
  demo: string;
  code: string;
  live: string;
  beta: string;
  new: string;
  experimental: string;

  // Telegram Section
  telegramTitle: string;
  communityDescription: string;
  codeReviews: string;
  codeReviewsDesc: string;
  networking: string;
  networkingDesc: string;
  techInsights: string;
  techInsightsDesc: string;
  joinTelegram: string;
  freeToJoin: string;

  // Contact Section
  contactTitle: string;
  contactDescription: string;
  availableForWork: string;

  // Footer
  footerText: string;
  systemOnline: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    github: 'GitHub',
    projects: 'Projects',
    community: 'Community',
    contact: 'Contact',

    // Hero Section
    heroTitle: 'DMYTRO TORONCHENKO',
    heroSubtitle: 'React Developer, solving problems with code',
    contactButton: '⌨ Contact',

    // About Section
    aboutTitle: 'About.exe',
    developerProfile: '👨‍🚀 Developer Profile',
    aboutDescription: 'Experienced React developer with 5+ years in frontend development. Specializing in modern web applications with focus on performance, user experience, and clean code architecture. Passionate about emerging technologies and continuous learning.',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    techStack: '💻 Tech Stack',

    // GitHub Section
    githubTitle: 'GitHub.profile',
    repositories: 'repositories',
    stars: 'stars',
    followers: 'followers',
    viewProfile: '🐙 View Profile',

    // Projects Section
    projectsTitle: 'Projects.showcase',
    demo: 'Demo',
    code: 'Code',
    live: 'Live',
    beta: 'Beta',
    new: 'New',
    experimental: 'Experimental',

    // Telegram Section
    telegramTitle: 'Community.join',
    communityDescription: 'Join our exclusive Telegram community for React developers and tech enthusiasts!',
    codeReviews: 'Code Reviews',
    codeReviewsDesc: 'Get feedback on your projects and help others improve their code',
    networking: 'Networking',
    networkingDesc: 'Connect with like-minded developers and build lasting professional relationships',
    techInsights: 'Tech Insights',
    techInsightsDesc: 'Stay updated with latest trends, tools, and best practices in development',
    joinTelegram: '✈️ Join Telegram',
    freeToJoin: 'Free to join • Active moderation • Weekly tech talks',

    // Contact Section
    contactTitle: 'Contact.connect',
    contactDescription: 'Ready to collaborate? Let\'s build something amazing together!',
    availableForWork: 'Available for freelance projects and full-time opportunities',

    // Footer
    footerText: '© 2025 Dmytro Toronchenko.',
    systemOnline: 'System Online'
  },
  ru: {
    // Navigation
    home: 'Главная',
    about: 'Обо мне',
    github: 'GitHub',
    projects: 'Проекты',
    community: 'Сообщество',
    contact: 'Контакты',

    // Hero Section
    heroTitle: 'ДМИТРО ТОРОНЧЕНКО',
    heroSubtitle: 'React-разработчик, решаю проблемы с помощью кода',
    contactButton: '⌨ Связаться',

    // About Section
    aboutTitle: 'Обо_мне.exe',
    developerProfile: '👨‍🚀 Профиль разработчика',
    aboutDescription: 'Опытный React-разработчик с 5+ годами опыта в frontend-разработке. Специализируюсь на современных веб-приложениях с фокусом на производительность, пользовательский опыт и чистую архитектуру кода. Увлечен новыми технологиями и постоянным обучением.',
    yearsExperience: 'Лет опыта',
    projectsCompleted: 'Проектов завершено',
    techStack: '💻 Технологический стек',

    // GitHub Section
    githubTitle: 'GitHub.профиль',
    repositories: 'репозиториев',
    stars: 'звезд',
    followers: 'подписчиков',
    viewProfile: '🐙 Посмотреть профиль',

    // Projects Section
    projectsTitle: 'Проекты.витрина',
    demo: 'Демо',
    code: 'Код',
    live: 'Работает',
    beta: 'Бета',
    new: 'Новый',
    experimental: 'Экспериментальный',

    // Telegram Section
    telegramTitle: 'Сообщество.присоединиться',
    communityDescription: 'Присоединяйтесь к нашему эксклюзивному Telegram-сообществу для React-разработчиков и технических энтузиастов!',
    codeReviews: 'Ревью кода',
    codeReviewsDesc: 'Получайте обратную связь по своим проектам и помогайте другим улучшать их код',
    networking: 'Нетворкинг',
    networkingDesc: 'Знакомьтесь с единомышленниками и стройте долгосрочные профессиональные отношения',
    techInsights: 'Технические инсайты',
    techInsightsDesc: 'Будьте в курсе последних трендов, инструментов и лучших практик разработки',
    joinTelegram: '✈️ Вступить в Telegram',
    freeToJoin: 'Бесплатно • Активная модерация • Еженедельные технические беседы',

    // Contact Section
    contactTitle: 'Контакты.подключение',
    contactDescription: 'Готовы к сотрудничеству? Давайте создадим что-то удивительное вместе!',
    availableForWork: 'Доступен для фриланс-проектов и постоянной работы',

    // Footer
    footerText: '© 2025 Дмитрий Торонченко.',
    systemOnline: 'Система онлайн'
  },
  uk: {
    // Navigation
    home: 'Головна',
    about: 'Про мене',
    github: 'GitHub',
    projects: 'Проєкти',
    community: 'Спільнота',
    contact: 'Контакти',

    // Hero Section
    heroTitle: 'ДМИТРО ТОРОНЧЕНКО',
    heroSubtitle: 'React-розробник, вирішую проблеми за допомогою коду',
    contactButton: '⌨ Зв\'язатись',

    // About Section
    aboutTitle: 'Про_мене.exe',
    developerProfile: '👨‍🚀 Профіль розробника',
    aboutDescription: 'Досвідчений React-розробник з 5+ роками досвіду у frontend-розробці. Спеціалізуюся на сучасних веб-додатках з фокусом на продуктивність, користувацький досвід та чисту архітектуру коду. Захоплююся новими технологіями та постійним навчанням.',
    yearsExperience: 'Років досвіду',
    projectsCompleted: 'Проєктів завершено',
    techStack: '💻 Технологічний стек',

    // GitHub Section
    githubTitle: 'GitHub.профіль',
    repositories: 'репозиторіїв',
    stars: 'зірок',
    followers: 'підписників',
    viewProfile: '🐙 Переглянути профіль',

    // Projects Section
    projectsTitle: 'Проєкти.вітрина',
    demo: 'Демо',
    code: 'Код',
    live: 'Працює',
    beta: 'Бета',
    new: 'Новий',
    experimental: 'Експериментальний',

    // Telegram Section
    telegramTitle: 'Спільнота.приєднатись',
    communityDescription: 'Приєднуйтесь до нашої ексклюзивної Telegram-спільноти для React-розробників та технічних ентузіастів!',
    codeReviews: 'Рев\'ю коду',
    codeReviewsDesc: 'Отримуйте зворотний зв\'язок щодо ваших проєктів та допомагайте іншим покращувати їх код',
    networking: 'Нетворкінг',
    networkingDesc: 'Знайомтесь з однодумцями та будуйте довгострокові професійні стосунки',
    techInsights: 'Технічні інсайти',
    techInsightsDesc: 'Будьте в курсі останніх трендів, інструментів та найкращих практик розробки',
    joinTelegram: '✈️ Вступити в Telegram',
    freeToJoin: 'Безкоштовно • Активна модерація • Щотижневі технічні бесіди',

    // Contact Section
    contactTitle: 'Контакти.підключення',
    contactDescription: 'Готові до співпраці? Давайте створимо щось дивовижне разом!',
    availableForWork: 'Доступний для фріланс-проєктів та постійної роботи',

    // Footer
    footerText: '© 2025 Дмитро Торонченко.',
    systemOnline: 'Система онлайн'
  }
};

export function useTranslation(language: Language): Translations {
  return translations[language];
}