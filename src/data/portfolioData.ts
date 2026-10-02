import type { Project, SkillGroup, Activity, Pillar } from '../types';

export const PERSONAL_INFO = {
  name: 'DODDI NAVADEEP REDDY',
  role: 'Computer Science & Engineering Student',
  institution: 'REVA University',
  location: 'Bengaluru, India',
  positioning: 'Developer • Cybersecurity Enthusiast • Problem Solver • Creative Technologist',
  heroIntro:
    'I’m a Computer Science and Engineering student at REVA University, interested in building practical software, exploring cybersecurity and intelligent systems, and continuously improving through projects and problem solving.',
  aboutBio: [
    'I am a Computer Science and Engineering student at REVA University, focused on building practical, reliable software and acquiring deep foundational knowledge in computer systems.',
    'My active learning journey centers around core software development, cybersecurity principles, computer networking fundamentals, and emerging architectures in Artificial Intelligence, Natural Language Processing, and Large Language Models.',
    'I believe in hands-on exploration: building hardware prototypes with IoT microcontrollers like the ESP32-CAM, designing modular academic software systems, maintaining a disciplined problem-solving habit on LeetCode, and studying the intersection of technology and finance as an emerging long-term domain.'
  ],
  interests: [
    'Software Development',
    'Cybersecurity',
    'Networking',
    'Artificial Intelligence',
    'NLP',
    'Large Language Models',
    'IoT Systems',
    'Databases',
    'Data Structures & Algorithms',
    'Web Development',
    'Systems',
    'Finance & Technology Intersection'
  ],
  githubUrl: 'https://github.com/DoddiNavadeepReddy',
  leetcodeRepoUrl: 'https://github.com/DoddiNavadeepReddy/leetcode-solutions',
  emailPlaceholder: 'navadeep.reddy@example.com'
};

export const PROJECTS: Project[] = [
  {
    id: 'crimeshield',
    number: '01',
    title: 'CrimeShield — Smart Emergency Response System',
    type: 'IoT / Emergency Response System',
    category: 'iot',
    status: 'Student Prototype',
    description:
      'A student IoT project designed to support emergency response by combining ESP32-CAM devices, GPS-based location acquisition, evidence capture, cloud storage, dashboard monitoring, and emergency communication.',
    technologies: [
      'ESP32-CAM',
      'NEO-6M GPS',
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Socket.IO',
      'Supabase',
      'Twilio',
      'Cloud Storage'
    ],
    highlights: [
      'Edge microcontroller evidence capture utilizing ESP32-CAM camera module sensors',
      'Real-time geographic coordinate retrieval using the NEO-6M GPS receiver',
      'Live bi-directional telemetry transmission between hardware client and dashboard via Socket.IO',
      'Cloud media pipeline integration with Supabase storage and Twilio emergency notification prototype'
    ]
  },
  {
    id: 'recsys',
    number: '02',
    title: 'E-Commerce Product Recommendation System',
    type: 'Academic / System Design Project',
    category: 'academic',
    status: 'System Design',
    description:
      'An academic system-design project focused on an e-commerce recommendation platform with modules for user profiling, product recommendation, product catalog, feedback analysis, search, and analytics.',
    technologies: [
      'Python',
      'Machine Learning',
      'System Design',
      'Data Pipelines',
      'SQL',
      'REST APIs'
    ],
    modules: [
      'User Profiling',
      'Product Recommendation Engine',
      'Product Catalog',
      'Feedback Analysis',
      'Search',
      'Analytics'
    ],
    highlights: [
      'Decoupled architecture separating interaction telemetry from catalog querying',
      'Multi-stage recommendation flow integrating feature-based matching and ranking',
      'Structured feedback analysis module examining explicit ratings and behavioral preferences',
      'Documented system schemas establishing clean API boundaries for search and catalog retrieval'
    ]
  },
  {
    id: 'leetcode',
    number: '03',
    title: 'LeetCode / DSA Solutions',
    type: 'Programming / Problem Solving',
    category: 'dsa',
    status: 'Active Repository',
    description:
      'A GitHub repository documenting programming and algorithm practice through LeetCode solutions, organized systematically by problem-solving topics, data structures, and algorithmic patterns.',
    technologies: [
      'C++',
      'Java',
      'Python',
      'Data Structures',
      'Algorithms',
      'Git'
    ],
    githubUrl: 'https://github.com/DoddiNavadeepReddy/leetcode-solutions',
    highlights: [
      'Organized topic taxonomy: Arrays, Two Pointers, Sliding Window, Trees, Graphs, and DP',
      'Analytical focus on optimal time complexity and auxiliary space efficiency',
      'Systematic Git commits capturing continuous progression and pattern recognition'
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming',
    skills: ['C', 'C++', 'Java', 'Python']
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Node.js', 'Express.js']
  },
  {
    category: 'Database',
    skills: ['SQL', 'Supabase']
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'GitLens']
  },
  {
    category: 'Cybersecurity & Networks',
    skills: ['Cybersecurity fundamentals', 'Networking fundamentals']
  },
  {
    category: 'Artificial Intelligence',
    skills: ['NLP', 'Large Language Models', 'Artificial Intelligence concepts']
  },
  {
    category: 'IoT & Embedded',
    skills: ['ESP32', 'ESP32-CAM', 'GPS integration']
  }
];

export const ACTIVITIES: Activity[] = [
  {
    number: '01',
    title: 'Programming and GitHub Foundation',
    summary: 'Core language proficiency and structured source code management.',
    details:
      'Establishing disciplined programming foundations in C, C++, Java, and Python. Organizing clean repository folder structures, comprehensive documentation, and systematic initialization on GitHub.',
    technologies: ['C/C++', 'Python', 'Java', 'GitHub']
  },
  {
    number: '02',
    title: 'Git and GitHub Setup / Version Control',
    summary: 'Branching strategies, commit discipline, and repository synchronization.',
    details:
      'Hands-on mastery of essential version control workflows: creating atomic commits, managing feature branches, resolving merge states, and maintaining clean commit histories on GitHub.',
    technologies: ['Git CLI', 'Branching', 'Remote Sync']
  },
  {
    number: '03',
    title: 'GitLens and Live Share Collaboration',
    summary: 'Developer tooling in VS Code for code authorship and collaborative pairing.',
    details:
      'Leveraging advanced IDE developer tooling: utilizing GitLens for granular authorship inspection, line history, and revision tracking, alongside Visual Studio Live Share for peer pair programming.',
    technologies: ['VS Code', 'GitLens', 'Live Share']
  },
  {
    number: '04',
    title: 'LeetCode Practice Repository and Documented Progress',
    summary: 'Algorithmic problem solving and data structure optimization.',
    details:
      'Documenting and cataloging algorithmic solutions across key data structures (trees, graphs, heaps, dynamic programming) with notes on time and space complexities.',
    technologies: ['LeetCode', 'DSA', 'Complexity Analysis']
  }
];

export const CURRENT_GOAL: { statement: string; pillars: Pillar[] } = {
  statement:
    'I’m focused on strengthening my foundations in software development, cybersecurity, networking, AI, and systems while continuing to build practical projects. I’m also exploring the intersection of technology and finance as a long-term area of interest.',
  pillars: [
    {
      title: 'Systems & Algorithmic Rigor',
      description: 'Strengthening low-level systems understanding, memory concepts, and core data structure implementations.'
    },
    {
      title: 'Cybersecurity & Networking',
      description: 'Deepening comprehension of network protocols, TCP/IP fundamentals, threat models, and secure software practices.'
    },
    {
      title: 'AI, NLP & Large Language Models',
      description: 'Exploring intelligent system workflows, language model architectures, and applied retrieval systems.'
    },
    {
      title: 'Technology & Finance Intersection',
      description: 'Studying transaction ledgers, distributed architecture concepts, and quantitative computing paradigms.'
    }
  ]
};
