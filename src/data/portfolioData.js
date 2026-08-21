export const NAV_LINKS = [
  { label: "Home", href: "#home", testid: "nav-home-link" },
  { label: "About", href: "#about", testid: "nav-about-link" },
  { label: "Education", href: "#education", testid: "nav-education-link" },
  { label: "Skills", href: "#skills", testid: "nav-skills-link" },
  { label: "Projects", href: "#projects", testid: "nav-projects-link" },
  {
    label: "Certifications",
    href: "#certifications",
    testid: "nav-certifications-link",
  },
  { label: "Contact", href: "#contact", testid: "nav-contact-link" },
];
export const HERO = {
  name: ["Hatun", "Alazwari"],
  tagline: "Computer Science Student | AI & Technology Enthusiast",
  intro:
    "A Computer Science student passionate about technology, programming, artificial intelligence, and creating meaningful digital experiences.",
  stats: [
    {
      label: "Focus",
      value: "Technology & Artificial Intelligence",
    },
    {
      label: "Degree",
      value: "B.S. Computer Science",
    },
    {
      label: "Interests",
      value: "Programming • AI • Software",
    },
  ],
};

export const ABOUT = {
  label: "About Me",
  headline: "Curious about technology. Driven to build.",
  body:
    "I'm Hatun — a Computer Science student who enjoys exploring different areas of technology and turning ideas into practical digital experiences. I’m constantly learning, experimenting with new tools, and building projects that help me grow as a developer.",
  chapters: [
    {
      number: "01",
      title: "Computer Science",
      description:
        "Building a strong foundation in programming, algorithms, data structures, software development, and problem solving.",
    },
    {
      number: "02",
      title: "Technology & AI",
      description:
        "Exploring artificial intelligence and modern technologies while learning how intelligent systems can solve real-world problems.",
    },
    {
      number: "03",
      title: "Building & Learning",
      description:
        "Learning through projects, technical bootcamps, experimentation, and hands-on challenges across different areas of technology.",
    },
  ],
  highlights: [
    "Computer Science Student",
    "Technology Enthusiast",
    "AI Explorer",
    "Continuous Learner",
  ],
};

export const SKILLS = {
  label: "Skills",
  headline: "Technical toolkit",
  categories: [
    {
      id: "core",
      name: "Programming & Technology",
      testid: "skill-tab-core",
      items: [
        {
          name: "Python",
          level: 90,
          badge: "Core",
          desc: "Programming, problem solving, data handling",
        },
        {
          name: "JavaScript",
          level: 80,
          badge: "Web",
          desc: "Modern JavaScript and interactive interfaces",
        },
        {
          name: "Artificial Intelligence",
          level: 82,
          badge: "Interest",
          desc: "AI concepts, intelligent systems, experimentation",
        },
        {
          name: "Data Structures & Algorithms",
          level: 84,
          badge: "CS",
          desc: "Problem solving, algorithms, computational thinking",
        },
      ],
    },
    {
      id: "tools",
      name: "Web & Tools",
      testid: "skill-tab-tools",
      items: [
        {
          name: "HTML & CSS",
          level: 90,
          badge: "Frontend",
          desc: "Responsive layouts and modern UI design",
        },
        {
          name: "React",
          level: 75,
          badge: "Web",
          desc: "Component-based interfaces and modern frontend development",
        },
        {
          name: "Git & GitHub",
          level: 85,
          badge: "Workflow",
          desc: "Version control and collaborative development",
        },
        {
          name: "Figma",
          level: 70,
          badge: "Design",
          desc: "Interface concepts and visual design exploration",
        },
      ],
    },
  ],
};

export const MARQUEE_ITEMS = [
  "Artificial Intelligence",
  "Computer Science",
  "Software Development",
  "Python",
  "Web Development",
  "Machine Learning",
  "Technology",
  "Creative Problem Solving",
];

export const PROJECTS = {
  label: "Featured Projects",
  headline: "Things I've built",

  items: [
    {
      id: "fraud-eye",
      index: "01",
      title: "FraudEye",
      category: "Artificial Intelligence",
      tag: "AI Project",

      description:
        "An intelligent project exploring how artificial intelligence can be used to identify suspicious patterns and support fraud detection.",

      highlights: [
        "Explores AI-based fraud detection",
        "Focuses on identifying suspicious patterns",
        "Built as a practical artificial intelligence project",
      ],

      tech: [
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
      ],

      image: "/src/assets/fraudeye.jpeg",

      github: "https://github.com/itshatun",
      demo: "#",

      modal: {
        problem:
          "Fraud detection involves identifying unusual patterns and distinguishing potentially suspicious activity from normal behavior.",

        solution:
          "The project explores how artificial intelligence and data-driven approaches can help analyze patterns and support automated fraud detection.",
      },
    },

    {
      id: "nanogpt",
      index: "02",
      title: "NanoGPT",
      category: "Artificial Intelligence",
      tag: "AI Exploration",

      description:
        "A hands-on exploration of how modern generative AI models work, focusing on the foundations behind transformer-based architectures.",

      highlights: [
        "Explores transformer architecture concepts",
        "Hands-on model experimentation",
        "Focuses on understanding AI from the inside",
      ],

      tech: [
        "Python",
        "PyTorch",
        "Transformers",
      ],

      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",

      github: "https://github.com/itshatun",
      demo: "#",

      modal: {
        problem:
          "Modern AI systems can feel like black boxes without understanding the concepts and components behind them.",

        solution:
          "Built an educational implementation to explore the core ideas behind transformer-based language models and understand how they process information.",
      },
    },
  ],
};

export const CERTIFICATIONS = {
  label: "Learning",
  headline: "Training & certifications",

  items: [
    {
      title: "NLP Bootcamp",
      issuer: "Technical Training",
      date: "2026",
      description:
        "Hands-on training experience covering natural language processing concepts and practical text-based AI techniques.",
      badge: "Completed",
    },

  {
  title: "AI Agents",
  issuer: "Artificial Intelligence Pioneers",
  date: "2026",
  description:
    "Completed the AI Agents bootcamp as part of the Summer Pioneers Program, gaining practical AI knowledge and hands-on experience.",
  badge: "Completed",
},

    {
      title: "EYOUTH Learning Plan",
      issuer: "IBM SkillsBuild X AI Pioneers",
      date: "2026",
      description:
        "Successfully completed the EYOUTH Learning Plan through IBM SkillsBuild.",
      badge: "Completed",
    },

    {
      title: "C# 102",
      issuer: "Satr | Tuwaiq Academy",
      date: "2026",
      description:
        "Completed an introductory C# course covering fundamental programming concepts.",
      badge: "Completed",
    },

    {
      title: "Robotics & Arduino with Artificial Intelligence",
      issuer: "Satr | Tuwaiq Academy",
      date: "2026",
      description:
        "Completed an intermediate course exploring robotics, Arduino, and artificial intelligence.",
      badge: "Completed",
    },

    {
      title: "Introduction to the Internet of Things",
      issuer: "Satr | Tuwaiq Academy",
      date: "2026",
      description:
        "Completed an introductory course covering the fundamentals of Internet of Things technologies.",
      badge: "Completed",
    },

    {
      title: "C++ 102",
      issuer: "Satr | Tuwaiq Academy",
      date: "2026",
      description:
        "Completed an introductory C++ course covering fundamental programming concepts.",
      badge: "Completed",
    },

    {
      title: "Fundamentals of Robotics & Arduino",
      issuer: "Satr | Tuwaiq Academy",
      date: "2026",
      description:
        "Completed an introductory course covering the fundamentals of robotics and Arduino.",
      badge: "Completed",
    },

    {
      title: "Introduction to Programming",
      issuer: "Satr | Tuwaiq Academy",
      date: "2026",
      description:
        "Completed an introductory programming course covering fundamental programming concepts.",
      badge: "Completed",
    },
  ],
};

export const EDUCATION = {
  label: "Education",
  headline: "Academic foundation",
  degree: "Bachelor of Science in Computer Science",
  institution: "Taif University",
  period: "In Progress",
  focus:
    "Programming • Data Structures • Algorithms • Software Engineering • Artificial Intelligence",
  note: "Computer Science Student",
};

export const ACHIEVEMENTS = [
  {
    year: "2026",
    title: "AI & Technology Training",
    desc:
      "Participated in hands-on technical training and explored practical applications of artificial intelligence.",
  },
  {
    year: "2026",
    title: "NLP Bootcamp",
    desc:
      "Completed a practical NLP bootcamp as part of my broader technical learning journey.",
  },
  {
    year: "2026",
    title: "Personal Projects",
    desc:
      "Continuously building and experimenting with software, AI, and web development projects.",
  },
];

export const CONTACT = {
  label: "Contact",
  headline: "Let's build something amazing.",
  subline:
    "I'm always interested in learning, building, and connecting with people who are passionate about technology.",

  email: "cs.hatun1@gmail.com",

  linkedin:
    "https://www.linkedin.com/in/hatun-alazwari-1a06a83b1/",

  github:
    "https://github.com/itshatun",
};