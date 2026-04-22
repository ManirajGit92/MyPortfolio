import type { SiteContent } from '../models/site-content.model';

export const DEFAULT_SITE_CONTENT: SiteContent = {
  navbar: {
    brandName: 'Maniraj',
  },
  hero: {
    badgeText: 'Available for New Opportunities',
    name: 'Maniraj',
    titles: [
      'Senior Angular Developer',
      'Frontend Engineer',
      'UI Specialist',
      'Web Architect',
      'TypeScript Expert',
    ],
    tagline:
      'Building Scalable, Intelligent, and Beautiful Web Experiences that drive real business impact and delight users.',
    profileImage: 'assets/images/Maniraj.png',
    socialLinks: [
      { icon: 'ri-linkedin-fill', label: 'LinkedIn', href: 'https://linkedin.com/in/maniraj' },
      { icon: 'ri-github-fill', label: 'GitHub', href: 'https://github.com/maniraj' },
      { icon: 'ri-mail-fill', label: 'Email', href: 'mailto:maniraj@email.com' },
      { icon: 'ri-youtube-fill', label: 'YouTube', href: 'https://youtube.com' },
    ],
    stats: [
      { value: '5+', label: 'Years Exp' },
      { value: '15+', label: 'Projects' },
      { value: '10+', label: 'Technologies' },
    ],
    resumeUrl: '/assets/resume/maniraj-resume.pdf',
  },
  about: {
    profileImage: 'assets/images/Maniraj.png',
    stats: [
      { value: '5+', label: 'Years Experience', icon: 'ri-briefcase-line' },
      { value: '15+', label: 'Projects Delivered', icon: 'ri-code-box-line' },
      { value: '10+', label: 'Technologies', icon: 'ri-stack-line' },
      { value: '3+', label: 'Enterprise Clients', icon: 'ri-building-line' },
    ],
    interests: [
      { icon: 'ri-brain-line', label: 'Artificial Intelligence' },
      { icon: 'ri-git-branch-line', label: 'DevOps & Git' },
      { icon: 'ri-layout-masonry-line', label: 'UI Architecture' },
      { icon: 'ri-rocket-line', label: 'Scalable Systems' },
      { icon: 'ri-youtube-line', label: 'Tech Content' },
      { icon: 'ri-open-source-line', label: 'Open Source' },
    ],
  },
  skills: {
    categories: [
      {
        id: 'frontend',
        label: 'Frontend',
        icon: 'ri-layout-2-line',
        skills: [
          { name: 'Angular', icon: 'devicon-angularjs-plain', level: 95, color: '#dd0031' },
          { name: 'TypeScript', icon: 'devicon-typescript-plain', level: 92, color: '#3178c6' },
          { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 90, color: '#f7df1e' },
          { name: 'RxJS', icon: 'ri-flashlight-line', level: 88, color: '#b7178c' },
          { name: 'HTML5', icon: 'devicon-html5-plain', level: 95, color: '#e34f26' },
          { name: 'CSS3 / SCSS', icon: 'devicon-css3-plain', level: 90, color: '#264de4' },
          { name: 'Responsive Design', icon: 'ri-smartphone-line', level: 92, color: '#06b6d4' },
        ],
      },
      {
        id: 'backend',
        label: 'Backend & DB',
        icon: 'ri-server-line',
        skills: [
          { name: 'C#', icon: 'devicon-csharp-plain', level: 78, color: '#9b4f96' },
          { name: 'ASP.NET', icon: 'devicon-dot-net-plain', level: 72, color: '#512bd4' },
          { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain', level: 80, color: '#cc2927' },
          { name: 'Oracle DB', icon: 'devicon-oracle-original', level: 70, color: '#f80000' },
          { name: 'Firebase', icon: 'devicon-firebase-plain', level: 75, color: '#ffca28' },
        ],
      },
      {
        id: 'tools',
        label: 'Tools & DevOps',
        icon: 'ri-tools-line',
        skills: [
          { name: 'Git & GitHub', icon: 'devicon-git-plain', level: 90, color: '#f05032' },
          { name: 'VS Code', icon: 'devicon-vscode-plain', level: 95, color: '#007acc' },
          { name: 'Postman', icon: 'devicon-postman-plain', level: 85, color: '#ff6c37' },
          { name: 'Talend ETL', icon: 'ri-database-2-line', level: 72, color: '#6366f1' },
          { name: 'npm / Node', icon: 'devicon-npm-original-wordmark', level: 82, color: '#cb3837' },
        ],
      },
      {
        id: 'other',
        label: 'Other',
        icon: 'ri-lightbulb-line',
        skills: [
          { name: 'AI Concepts', icon: 'ri-brain-line', level: 65, color: '#a855f7' },
          { name: 'TensorFlow', icon: 'devicon-tensorflow-original', level: 50, color: '#ff6f00' },
          { name: 'Automation', icon: 'ri-robot-line', level: 70, color: '#06b6d4' },
          { name: 'Agile / Scrum', icon: 'ri-team-line', level: 85, color: '#6366f1' },
          { name: 'Component Design', icon: 'ri-layout-masonry-line', level: 92, color: '#22d3ee' },
        ],
      },
    ],
  },
  experience: {
    experiences: [
      {
        role: 'Senior Frontend Software Developer',
        company: 'Matchguide (Canada)',
        period: '2022 – Present',
        type: 'Full-Time',
        icon: 'ri-code-s-slash-line',
        color: '#6366f1',
        description:
          'Led frontend development for Matchguide, a cutting-edge staffing business platform serving Canadian markets. Architected scalable Angular solutions with reusable component systems, enhancing product quality and team velocity.',
        highlights: [
          'Migrated legacy Angular modules to latest Angular with standalone components',
          'Built configurable, reusable UI component library shared across 5+ modules',
          'Implemented performance optimizations reducing load time by 40%',
          'Collaborated with product and backend teams in Agile sprint cycles',
          'Established frontend coding standards and PR review processes',
        ],
        tech: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'REST APIs', 'Git'],
      },
      {
        role: 'Frontend Lead Developer',
        company: 'SI Systems',
        period: '2020 – 2022',
        type: 'Full-Time',
        icon: 'ri-team-line',
        color: '#06b6d4',
        description:
          'Led a frontend team across multiple enterprise application modules. Owned UI architecture decisions, mentored junior developers, and built the generic component library that became the foundation of the entire application.',
        highlights: [
          'Led team of 4 developers across CRM and reporting modules',
          'Designed and implemented generic reusable table, dialog, and form components',
          'Reduced development time by 35% through shared component architecture',
          'Integrated complex data visualization with charts and dashboards',
          'Coordinated with offshore and onshore teams for timely delivery',
        ],
        tech: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'SQL', 'C#'],
      },
      {
        role: 'Full-Stack Developer – Logistics Systems',
        company: 'Logistics Enterprise',
        period: '2018 – 2020',
        type: 'Full-Time',
        icon: 'ri-truck-line',
        color: '#a855f7',
        description:
          'Developed and maintained internal and external logistics web applications. Worked across the full stack with ETL pipelines, database management, and frontend dashboards for real-time logistics tracking.',
        highlights: [
          'Built AngularJS dashboards for logistics tracking and reporting',
          'Developed Talend ETL jobs for large-scale data integration pipelines',
          'Maintained Oracle database stored procedures and performance tuning',
          'Implemented Groovy/Grails REST services for backend integration',
          'Delivered customer-facing portal for shipment tracking',
        ],
        tech: ['AngularJS', 'Groovy', 'Grails', 'Talend ETL', 'Oracle', 'JavaScript'],
      },
    ],
  },
  projects: {
    filters: [
      { id: 'all', label: 'All Projects' },
      { id: 'frontend', label: 'Frontend' },
      { id: 'fullstack', label: 'Full-Stack' },
      { id: 'ai', label: 'AI & Data' },
      { id: 'tools', label: 'Tools' },
    ],
    projects: [
      {
        id: 1,
        title: 'Personal Life Tracking Dashboard',
        description:
          'An intelligent Angular app that visualizes personal life data from Google Sheets. Features analytics cards, interactive charts for fitness, skills, mindfulness, and relationship tracking — all in a beautiful responsive dashboard.',
        category: ['frontend', 'data'],
        tech: ['Angular', 'TypeScript', 'Google Sheets API', 'Chart.js', 'RxJS'],
        icon: 'ri-dashboard-3-line',
        color: '#6366f1',
        featured: true,
        githubUrl: 'https://github.com/maniraj',
        demoUrl: '#',
      },
      {
        id: 2,
        title: 'Angular Reusable UI Library',
        description:
          'A production-ready shared component library featuring configurable data tables, modal dialogs, form utilities, and custom directives. Used as the foundation across multiple enterprise projects for consistent UI delivery.',
        category: ['frontend', 'tools'],
        tech: ['Angular', 'TypeScript', 'SCSS', 'Storybook', 'npm'],
        icon: 'ri-layout-masonry-line',
        color: '#06b6d4',
        featured: true,
        githubUrl: 'https://github.com/maniraj',
        demoUrl: '#',
      },
      {
        id: 3,
        title: 'Git Command Visualization App',
        description:
          'An interactive graphical tool for learning Git through visual flow diagrams. Shows branches, commits, merges, and command relationships in real-time, perfect for developers at any level to master version control.',
        category: ['frontend', 'tools'],
        tech: ['Angular', 'TypeScript', 'D3.js', 'SCSS'],
        icon: 'ri-git-branch-line',
        color: '#f05032',
        featured: false,
        githubUrl: 'https://github.com/maniraj',
        demoUrl: '#',
      },
      {
        id: 4,
        title: 'Company AI Chatbot',
        description:
          'An AI-powered chatbot designed to handle company-specific and application-related queries. Enables employees to quickly find answers about company policies, tools, and internal systems through natural language interaction.',
        category: ['ai', 'fullstack'],
        tech: ['Angular', 'Python', 'OpenAI API', 'Firebase', 'NLP'],
        icon: 'ri-robot-2-line',
        color: '#a855f7',
        featured: true,
        githubUrl: 'https://github.com/maniraj',
        demoUrl: '#',
      },
      {
        id: 5,
        title: 'IT Training Institute Website',
        description:
          'Full-featured training institution web platform with course catalog, student enrollment, batch management, inquiry system, and admin dashboard. Built with Angular and Firebase as a complete business solution.',
        category: ['fullstack', 'frontend'],
        tech: ['Angular', 'Firebase', 'TypeScript', 'SCSS', 'Cloud Firestore'],
        icon: 'ri-graduation-cap-line',
        color: '#22c55e',
        featured: false,
        githubUrl: 'https://github.com/maniraj',
        demoUrl: '#',
      },
    ],
  },
  achievements: {
    achievements: [
      {
        icon: 'ri-trophy-line',
        color: '#f59e0b',
        title: 'Frontend Team Lead',
        description:
          'Successfully led frontend modules serving thousands of enterprise users across Canada and India.',
      },
      {
        icon: 'ri-layout-masonry-line',
        color: '#6366f1',
        title: 'Reusable Architecture Builder',
        description:
          'Built shared Angular component libraries adopted as the standard across multiple enterprise projects.',
      },
      {
        icon: 'ri-code-s-slash-line',
        color: '#06b6d4',
        title: 'Angular Expert',
        description:
          'Deep expertise in the complete Angular ecosystem — from AngularJS to latest Angular 17+ standalone components.',
      },
      {
        icon: 'ri-presentation-line',
        color: '#a855f7',
        title: 'Tech Conference Participant',
        description:
          'Attended major technology conferences in Delhi and Chennai, expanding domain knowledge and networking.',
      },
      {
        icon: 'ri-brain-line',
        color: '#22c55e',
        title: 'AI & DevOps Enthusiast',
        description:
          'Actively pursuing knowledge in AI (TensorFlow), DevOps practices, and automation to stay ahead of the curve.',
      },
      {
        icon: 'ri-book-open-line',
        color: '#f97316',
        title: 'Continuous Learner',
        description:
          '365-day learning mindset — consistently upskilling through projects, tutorials, and personal experimentation.',
      },
      {
        icon: 'ri-git-merge-line',
        color: '#ec4899',
        title: 'Git Mastery',
        description:
          'Advanced Git workflow expertise including branching strategies, code reviews, and CI/CD collaboration.',
      },
      {
        icon: 'ri-youtube-line',
        color: '#ef4444',
        title: 'Knowledge Sharer',
        description:
          'Passionate about sharing Angular knowledge through technical blogging, YouTube content, and peer mentoring.',
      },
    ],
  },
  testimonials: {
    testimonials: [
      {
        name: 'Ravi Sharma',
        role: 'Senior Backend Engineer',
        company: 'SI Systems',
        initials: 'RS',
        color: '#6366f1',
        quote:
          "Maniraj is one of the most talented Angular developers I've worked with. His ability to architect reusable component systems saved our team months of development time and significantly improved code consistency across the platform.",
      },
      {
        name: 'Priya Menon',
        role: 'Product Manager',
        company: 'Matchguide',
        initials: 'PM',
        color: '#06b6d4',
        quote:
          "Working with Maniraj was an absolute pleasure. He doesn't just write code—he thinks deeply about user experience and business impact. He proactively identified performance bottlenecks and resolved them before they became issues.",
      },
      {
        name: 'David Wilson',
        role: 'CTO',
        company: 'Logistics Enterprise',
        initials: 'DW',
        color: '#a855f7',
        quote:
          'Maniraj delivered our logistics dashboard well ahead of schedule. His cross-stack skills across AngularJS, Groovy, and Oracle were impressive. He was the glue that kept our technical team moving in the right direction.',
      },
      {
        name: 'Anitha Kumar',
        role: 'Tech Lead',
        company: 'Frontend Team',
        initials: 'AK',
        color: '#22c55e',
        quote:
          "Maniraj's passion for clean code and best practices is unparalleled. He mentored our junior developers with patience and clarity. His component library became the backbone of our entire frontend development workflow.",
      },
    ],
  },
  blog: {
    articles: [
      {
        title: 'Mastering Angular Standalone Components in 2024',
        excerpt:
          "A deep dive into Angular's standalone component architecture — how to structure, lazy-load, and optimize your app without NgModules.",
        category: 'Angular',
        categoryColor: '#dd0031',
        date: 'March 2024',
        readTime: '8 min read',
        icon: 'ri-article-line',
        url: '#',
      },
      {
        title: 'RxJS Operators Every Angular Developer Must Know',
        excerpt:
          'From switchMap to combineLatest — a practical guide on RxJS operators that will make your reactive Angular code cleaner and more predictable.',
        category: 'RxJS',
        categoryColor: '#b7178c',
        date: 'February 2024',
        readTime: '6 min read',
        icon: 'ri-flashlight-line',
        url: '#',
      },
      {
        title: 'Building a Reusable Angular Component Library',
        excerpt:
          'Step-by-step walkthrough of designing, building, and publishing a shared Angular component library for enterprise applications.',
        category: 'Architecture',
        categoryColor: '#6366f1',
        date: 'January 2024',
        readTime: '10 min read',
        icon: 'ri-layout-masonry-line',
        url: '#',
      },
      {
        title: 'Git Strategies for Frontend Teams',
        excerpt:
          'From GitFlow to trunk-based development — a practical guide on choosing and implementing the right Git branching strategy for your team.',
        category: 'DevOps',
        categoryColor: '#f05032',
        date: 'December 2023',
        readTime: '7 min read',
        icon: 'ri-git-branch-line',
        url: '#',
      },
      {
        title: 'Integrating AI into Angular Applications',
        excerpt:
          'Practical patterns for adding AI-powered features — chatbots, smart search, and recommendation engines — into Angular web applications.',
        category: 'AI',
        categoryColor: '#a855f7',
        date: 'November 2023',
        readTime: '9 min read',
        icon: 'ri-brain-line',
        url: '#',
      },
      {
        title: 'Performance Optimization in Angular: The Complete Guide',
        excerpt:
          'Everything you need to know about making Angular apps blazing fast — lazy loading, change detection strategy, bundle optimization, and more.',
        category: 'Performance',
        categoryColor: '#06b6d4',
        date: 'October 2023',
        readTime: '12 min read',
        icon: 'ri-speed-line',
        url: '#',
      },
    ],
  },
  contact: {
    contactLinks: [
      {
        icon: 'ri-mail-send-line',
        label: 'Email',
        value: 'maniraj@email.com',
        href: 'mailto:maniraj@email.com',
        color: '#6366f1',
      },
      {
        icon: 'ri-linkedin-fill',
        label: 'LinkedIn',
        value: 'linkedin.com/in/maniraj',
        href: 'https://linkedin.com/in/maniraj',
        color: '#0077b5',
      },
      {
        icon: 'ri-github-fill',
        label: 'GitHub',
        value: 'github.com/maniraj',
        href: 'https://github.com/maniraj',
        color: '#6e777e',
      },
      {
        icon: 'ri-map-pin-line',
        label: 'Location',
        value: 'India (Open to Remote & Relocation)',
        href: '#',
        color: '#06b6d4',
      },
    ],
  },
  resume: {
    name: 'Maniraj',
    title: 'Senior Angular Developer | Frontend Engineer',
    description:
      'My resume details 5+ years of frontend engineering experience, showcasing Angular expertise, enterprise project deliveries, leadership, and a deep passion for clean, scalable architecture.',
    highlights: [
      '5+ years of Angular development',
      'Enterprise & product company experience',
      'Frontend Architecture & Team Leadership',
      'Available for global opportunities',
    ],
    pdfUrl: '/assets/resume/maniraj-resume.pdf',
    pdfFileName: 'Maniraj-Resume.pdf',
    linkedinUrl: 'https://linkedin.com/in/maniraj',
  },
};
