import type {
  ExternalLinks,
  Project,
  SkillGroup,
  DigitalJourneyStep,
  LearningArea,
  ConnectCard,
  BlogDraft,
  Activity,
  Pillar
} from '../types';

/**
 * =========================================================================
 * 16. EXTERNAL URL CONFIGURATION (CENTRALIZED)
 * =========================================================================
 * Update your URLs here. Replace the 'REPLACE_WITH_MY_...' placeholders
 * with your actual profile and repository links.
 * =========================================================================
 */
export const EXTERNAL_LINKS: ExternalLinks = {
  GITHUB_URL: 'https://github.com/DoddiNavadeepReddy',
  HACKERRANK_URL: 'https://www.hackerrank.com/profile/dnreddy835',
  LEETCODE_URL: 'REPLACE_WITH_MY_LEETCODE_URL',
  LINKEDIN_URL: 'REPLACE_WITH_MY_LINKEDIN_URL',
  INSTAGRAM_URL: 'REPLACE_WITH_MY_INSTAGRAM_URL',
  BLOG_URL: 'REPLACE_WITH_MY_BLOG_URL',

  // Project repositories
  HACKERRANK_REPO_URL: 'https://github.com/DoddiNavadeepReddy/HackerRank-3rdSem-Algorithm-Portfolio',
  LEETCODE_REPO_URL: 'https://github.com/DoddiNavadeepReddy/leetcode-solutions',
  CRIMESHIELD_REPO_URL: '', // Provide if an actual repository URL exists
};

/**
 * Helper to test if an external URL is a real configured URL or a placeholder.
 */
export const isConfiguredUrl = (url?: string): boolean => {
  if (!url) return false;
  if (url.startsWith('REPLACE_WITH_MY_') || url === '') return false;
  return url.startsWith('http://') || url.startsWith('https://');
};

/**
 * =========================================================================
 * 1. PERSONAL PROFILE
 * =========================================================================
 */
export const PERSONAL_INFO = {
  name: 'Doddi Navadeep Reddy',
  role: 'Computer Science & Engineering Student',
  course: 'B.Tech – Computer Science and Engineering',
  university: 'REVA University',
  currentLevel: '2nd Year CSE Student',
  semester: '3rd Semester',
  location: 'Bengaluru, Karnataka, India',
  profileIntro:
    'I’m a 2nd-year Computer Science and Engineering student at REVA University, building practical skills in software development and cybersecurity. I’m currently learning Python, Java, web development, and problem solving through hands-on projects and coursework. I’m interested in exploring cybersecurity, software development, networking, and emerging technologies. I’m looking forward to building real-world projects, collaborating with others, and gaining practical industry experience.',
  aboutContent:
    'I’m a 2nd-year Computer Science and Engineering student at REVA University. I enjoy learning technology by building projects, solving programming problems, and experimenting with different development tools.\n\nMy current learning journey includes Python, Java, web development, algorithms, Git/GitHub, networking, cybersecurity, and IoT. I’m particularly interested in understanding how software and technology can be used to solve practical real-world problems.\n\nI believe in learning through implementation rather than only studying theory. My portfolio showcases my coding practice, academic projects, GitHub work, and continuous learning journey.',
  profileHighlights: [
    'CSE Student',
    'Python & Java',
    'Algorithmic Problem Solving',
    'Cybersecurity Interest',
    'IoT Projects',
    'Git & GitHub',
    'Web Development',
    'Continuous Learner'
  ],
  primaryInterests: [
    'Cybersecurity',
    'Software Development',
    'Networking',
    'Web Development',
    'Python',
    'Java',
    'Algorithms and Problem Solving',
    'IoT',
    'Emerging Technologies'
  ],
  hero: {
    mainHeading: 'BUILD. SOLVE. CREATE.',
    subheading: 'Computer Science Engineering Student • Developer • Problem Solver',
    supportingText:
      'Exploring software development, cybersecurity, algorithms, networking, IoT, and emerging technologies through practical projects.',
    dynamicTitles: [
      'Computer Science Engineering Student',
      'Cybersecurity Enthusiast',
      'Software Developer',
      'Algorithmic Problem Solver',
      'IoT Systems Explorer'
    ]
  },
  emailContact: 'navadeep.reddy@reva.edu.in'
};

/**
 * =========================================================================
 * FEATURED / GOLD SECTION: MY DIGITAL JOURNEY
 * =========================================================================
 */
export const DIGITAL_JOURNEY: DigitalJourneyStep[] = [
  {
    number: '01',
    title: 'LEARNING',
    items: ['Python', 'Java', 'Algorithms', 'Web Development'],
    description: 'Foundational programming in Python & Java, algorithmic complexity, and modern web application development.'
  },
  {
    number: '02',
    title: 'BUILDING',
    items: ['CrimeShield', 'IoT', 'Software Projects'],
    description: 'Hardware microcontroller systems with ESP32-CAM, GPS tracking, evidence pipelines, and full-stack software.'
  },
  {
    number: '03',
    title: 'SOLVING',
    items: ['HackerRank', 'LeetCode', 'Problem Solving'],
    description: 'Disciplined practice on core data structures, searching, sorting, and algorithmic problem-solving platforms.'
  },
  {
    number: '04',
    title: 'SHARING',
    items: ['GitHub', 'Personal Blog', 'Technical Work'],
    description: 'Open-source repositories, academic coursework documentation, structured project codebases, and technical notes.'
  },
  {
    number: '05',
    title: 'CONNECTING',
    items: ['LinkedIn', 'Instagram', 'Developer Community'],
    description: 'Collaborating with peers, connecting with educators and developers, and building professional presence.'
  }
];

/**
 * =========================================================================
 * 4. TECHNICAL SKILLS (GROUPED WITH LABELS)
 * =========================================================================
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 'Working Knowledge' },
      { name: 'Java', level: 'Learning' },
      { name: 'C/C++ fundamentals', level: 'Working Knowledge' }
    ]
  },
  {
    category: 'Web',
    skills: [
      { name: 'HTML', level: 'Working Knowledge' },
      { name: 'CSS', level: 'Working Knowledge' },
      { name: 'JavaScript', level: 'Working Knowledge' },
      { name: 'React', level: 'Learning' },
      { name: 'Vite', level: 'Working Knowledge' },
      { name: 'Node.js', level: 'Learning' },
      { name: 'Express.js', level: 'Learning' }
    ]
  },
  {
    category: 'Programming & CS',
    skills: [
      { name: 'Data Structures', level: 'Learning' },
      { name: 'Algorithms', level: 'Learning' },
      { name: 'Problem Solving', level: 'Working Knowledge' },
      { name: 'Object-Oriented Programming', level: 'Working Knowledge' },
      { name: 'DBMS fundamentals', level: 'Learning' }
    ]
  },
  {
    category: 'Cybersecurity & Networking',
    skills: [
      { name: 'Cybersecurity fundamentals', level: 'Exploring' },
      { name: 'Networking fundamentals', level: 'Learning' }
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 'Working Knowledge' },
      { name: 'GitHub', level: 'Working Knowledge' },
      { name: 'VS Code', level: 'Working Knowledge' },
      { name: 'Arduino IDE', level: 'Working Knowledge' }
    ]
  },
  {
    category: 'IoT',
    skills: [
      { name: 'ESP32-CAM', level: 'Working Knowledge' },
      { name: 'GPS', level: 'Working Knowledge' },
      { name: 'IoT system design', level: 'Learning' },
      { name: 'Embedded programming', level: 'Learning' }
    ]
  },
  {
    category: 'Cloud / Backend technologies explored',
    skills: [
      { name: 'Supabase', level: 'Learning' },
      { name: 'Cloud storage concepts', level: 'Exploring' },
      { name: 'REST APIs', level: 'Learning' },
      { name: 'Socket.IO', level: 'Learning' }
    ]
  }
];

/**
 * =========================================================================
 * 5. FEATURED PROJECTS
 * =========================================================================
 */
export const PROJECTS: Project[] = [
  {
    id: 'crimeshield',
    number: '01',
    title: 'CrimeShield – Smart Emergency Response System',
    type: 'IoT • Emergency Response • Security',
    category: 'iot',
    status: 'Flagship IoT Project',
    isFeatured: true,
    badge: 'FEATURED PROJECT',
    description:
      'An IoT-based smart emergency response system designed to support emergency situations through location tracking, image/video evidence collection, and real-time response workflows.',
    technologies: [
      'ESP32-CAM',
      'NEO-6M GPS',
      'Arduino IDE',
      'Embedded C / Arduino C++',
      'Node.js',
      'Express.js',
      'React + Vite',
      'TypeScript / JavaScript',
      'Socket.IO',
      'Supabase',
      'Cloud storage concepts'
    ],
    highlight:
      'Designed to capture evidence only after emergency activation rather than continuously, supporting a privacy-conscious approach.',
    highlights: [
      'Privacy-conscious capture triggered solely upon verified emergency activation',
      'Real-time geographic location tracking utilizing the NEO-6M GPS sensor',
      'Visual evidence acquisition via ESP32-CAM microcontroller module',
      'Real-time duplex communication workflow using Socket.IO, Node.js, and Supabase'
    ],
    repoUrl: EXTERNAL_LINKS.CRIMESHIELD_REPO_URL
  },
  {
    id: 'hackerrank-portfolio',
    number: '02',
    title: 'HackerRank – 3rd Semester Algorithm Portfolio',
    type: 'Python • Algorithms • Problem Solving',
    category: 'algorithms',
    status: 'Academic Algorithm Portfolio',
    isFeatured: false,
    description:
      'A structured coding portfolio containing solutions to algorithmic programming problems completed using Python, with complexity analysis and submission evidence.',
    problems: [
      'Mini-Max Sum',
      'Birthday Cake Candles',
      'Insertion Sort – Part 1',
      'Binary Search',
      'Mark and Toys'
    ],
    technologies: ['Python', 'Algorithms', 'Problem Solving', 'Git', 'GitHub'],
    repoUrl: EXTERNAL_LINKS.HACKERRANK_REPO_URL,
    hackerrankUrl: EXTERNAL_LINKS.HACKERRANK_URL,
    highlights: [
      'Comprehensive time & space asymptotic complexity analysis for each solution',
      'Verified submission evidence and clean code following PEP 8 conventions',
      'Systematic Git revision history documenting the step-by-step problem-solving process'
    ]
  },
  {
    id: 'leetcode-solutions',
    number: '03',
    title: 'LeetCode Solutions',
    type: 'Data Structures & Algorithms',
    category: 'algorithms',
    status: 'Active Coding Practice',
    isFeatured: false,
    description:
      'A growing collection of programming solutions created while practicing data structures, algorithms, arrays, strings, linked lists, stacks, and other core problem-solving concepts.',
    technologies: ['Python / Programming', 'Algorithms', 'Data Structures', 'GitHub'],
    repoUrl: EXTERNAL_LINKS.LEETCODE_REPO_URL,
    leetcodeUrl: EXTERNAL_LINKS.LEETCODE_URL,
    highlights: [
      'Taxonomy of core topics: Arrays, Strings, Linked Lists, Stacks, and Algorithmic Patterns',
      'Analytical focus on runtime optimization and space efficiency',
      'Continuous commits reflecting disciplined engineering and algorithm study'
    ]
  }
];

/**
 * =========================================================================
 * 7. CODING JOURNEY (PROBLEM SOLVING JOURNEY)
 * =========================================================================
 */
export const CODING_JOURNEY = {
  hackerRank: {
    title: 'HackerRank Algorithm Practice',
    subtitle: 'Python Algorithmic Solutions',
    profileUrl: EXTERNAL_LINKS.HACKERRANK_URL,
    badgeText: 'Badge Earned',
    items: [
      'Algorithm practice with structured Python implementations',
      '5 Algorithmic Problems: Mini-Max Sum, Birthday Cake Candles, Insertion Sort – Part 1, Binary Search, Mark and Toys',
      'Complexity analysis and verified accepted submission evidence',
      'Earned platform badge highlighting problem-solving consistency'
    ]
  },
  leetCode: {
    title: 'LeetCode Problem Solving',
    subtitle: 'Data Structures & Algorithmic Practice',
    profileUrl: EXTERNAL_LINKS.LEETCODE_URL,
    items: [
      'Regular coding practice across fundamental Computer Science topics',
      'Data structures: Arrays, Strings, Linked Lists, Stacks, and Queues',
      'Algorithms: Sorting, searching, two-pointer techniques, and greedy strategies',
      'Focus on optimal time and auxiliary space complexity'
    ]
  },
  gitHub: {
    title: 'GitHub Version Control & Codebase',
    subtitle: 'Public Coding Portfolio',
    profileUrl: EXTERNAL_LINKS.GITHUB_URL,
    items: [
      'Version control discipline with clear, atomic commit messages',
      'Structured repository organization and academic coursework documentation',
      'Public coding portfolio showcasing software and hardware projects',
      'Active learning journey tracked transparently in open-source'
    ]
  }
};

/**
 * =========================================================================
 * 8. EDUCATION
 * =========================================================================
 */
export const EDUCATION_DATA = {
  institution: 'REVA University',
  degree: 'B.Tech – Computer Science and Engineering',
  status: '2nd Year CSE Student | 3rd Semester',
  location: 'Bengaluru, Karnataka, India',
  timeline: '2024 – Present (Undergraduate)',
  summary:
    'Pursuing Computer Science and Engineering with an emphasis on strong programming fundamentals, algorithm design, computer networking, secure software principles, and hardware-software systems.',
  coreSubjects: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java & Python)',
    'Computer Architecture',
    'Discrete Mathematics',
    'Database Management Systems Fundamentals',
    'Computer Networks'
  ]
};

/**
 * =========================================================================
 * 9. LEARNING AREAS ("WHAT I'M EXPLORING")
 * =========================================================================
 */
export const LEARNING_AREAS: LearningArea[] = [
  {
    title: 'Cybersecurity',
    description: 'Learning security concepts, secure systems, and practical cybersecurity fundamentals.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Networking',
    description: 'Exploring computer networks, communication concepts, protocols, and network security.',
    icon: 'Network'
  },
  {
    title: 'Software Development',
    description: 'Building programming skills through Python, Java, web development, and practical projects.',
    icon: 'Code2'
  },
  {
    title: 'IoT',
    description: 'Exploring connected systems using microcontrollers, sensors, GPS, cameras, and cloud/backend technologies.',
    icon: 'Cpu'
  },
  {
    title: 'Algorithms',
    description: 'Improving problem-solving skills through HackerRank and LeetCode practice.',
    icon: 'Binary'
  },
  {
    title: 'Emerging Technologies',
    description: 'Exploring modern technologies and understanding how they can be applied to real-world problems.',
    icon: 'Sparkles'
  }
];

/**
 * =========================================================================
 * 10 & 12. CONNECT CARDS & PORTFOLIO SNAPSHOT
 * =========================================================================
 */
export const CONNECT_CARDS: ConnectCard[] = [
  {
    id: 'github',
    name: 'GitHub',
    description: 'My projects, source code, and development work.',
    url: EXTERNAL_LINKS.GITHUB_URL,
    buttonText: 'View GitHub',
    icon: 'Github',
    isConfigured: isConfiguredUrl(EXTERNAL_LINKS.GITHUB_URL)
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    description: 'My coding practice and problem-solving progress.',
    url: EXTERNAL_LINKS.LEETCODE_URL,
    buttonText: 'View LeetCode',
    icon: 'Code2',
    isConfigured: isConfiguredUrl(EXTERNAL_LINKS.LEETCODE_URL)
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    description: 'My algorithm practice and coding achievements.',
    url: EXTERNAL_LINKS.HACKERRANK_URL,
    buttonText: 'View HackerRank',
    icon: 'Award',
    isConfigured: isConfiguredUrl(EXTERNAL_LINKS.HACKERRANK_URL)
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'My professional profile and career journey.',
    url: EXTERNAL_LINKS.LINKEDIN_URL,
    buttonText: 'View LinkedIn',
    icon: 'Linkedin',
    isConfigured: isConfiguredUrl(EXTERNAL_LINKS.LINKEDIN_URL)
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'A glimpse into my interests and journey.',
    url: EXTERNAL_LINKS.INSTAGRAM_URL,
    buttonText: 'View Instagram',
    icon: 'Instagram',
    isConfigured: isConfiguredUrl(EXTERNAL_LINKS.INSTAGRAM_URL)
  },
  {
    id: 'blog',
    name: 'Personal Blog',
    description: 'My technical articles, learning notes, projects, and experiences.',
    url: EXTERNAL_LINKS.BLOG_URL,
    buttonText: 'View Blog',
    icon: 'BookOpen',
    isConfigured: isConfiguredUrl(EXTERNAL_LINKS.BLOG_URL)
  }
];

/**
 * =========================================================================
 * 11. PERSONAL BLOG (TECHNICAL NOTES & LEARNING JOURNEY)
 * =========================================================================
 */
export const BLOG_CATEGORIES = [
  'Programming',
  'Cybersecurity',
  'Algorithms',
  'Projects',
  'IoT',
  'Student Developer Journey'
];

export const BLOG_DRAFTS: BlogDraft[] = [
  {
    title: 'Building Privacy-First IoT Emergency Response: ESP32-CAM & GPS Architecture',
    category: 'IoT',
    status: 'Upcoming Article',
    readTime: '6 min read',
    summary:
      'A deep dive into selective-activation telemetry, integrating the ESP32-CAM and NEO-6M GPS modules without continuous intrusive streaming.'
  },
  {
    title: 'Algorithmic Problem Solving in Python: Key Takeaways from 3rd Semester Coursework',
    category: 'Algorithms',
    status: 'Upcoming Article',
    readTime: '5 min read',
    summary:
      'Analyzing time complexities, edge conditions, and invariant proofs across classic search, sort, and greedy algorithmic challenges.'
  },
  {
    title: 'Student Developer Journey: Balancing Coursework, GitHub, and Problem Solving',
    category: 'Student Developer Journey',
    status: 'Upcoming Article',
    readTime: '4 min read',
    summary:
      'Insights on learning through hands-on implementation, maintaining consistent Git version control, and building practical computer science competencies.'
  }
];

/**
 * =========================================================================
 * ACADEMIC ACTIVITIES & COURSEWORK MILESTONES
 * =========================================================================
 */
export const ACTIVITIES: Activity[] = [
  {
    number: '01',
    title: 'Programming & GitHub Foundation',
    summary: 'Core language proficiency and structured source code management.',
    details:
      'Establishing disciplined programming foundations in Python, Java, and C/C++. Organizing clean repository folder structures, comprehensive documentation, and systematic repository initialization on GitHub.',
    technologies: ['Python', 'Java', 'C/C++', 'GitHub']
  },
  {
    number: '02',
    title: 'Git Version Control & Branch Discipline',
    summary: 'Branching strategies, commit discipline, and repository synchronization.',
    details:
      'Hands-on mastery of essential version control workflows: creating atomic commits, managing feature branches, resolving merge states, and maintaining clean commit histories on GitHub.',
    technologies: ['Git CLI', 'Branching', 'Remote Sync']
  },
  {
    number: '03',
    title: 'Developer Tooling & Collaboration',
    summary: 'Developer tooling in VS Code for code authorship and collaborative pairing.',
    details:
      'Leveraging advanced IDE developer tooling: utilizing VS Code and Git workflows for granular code inspection, revision tracking, and peer collaboration on coursework.',
    technologies: ['VS Code', 'Git', 'Workflow Automation']
  },
  {
    number: '04',
    title: 'Algorithm Practice & Documented Progress',
    summary: 'Algorithmic problem solving and data structure optimization.',
    details:
      'Documenting and cataloging algorithmic solutions across key data structures with notes on asymptotic time and space complexities on HackerRank and LeetCode.',
    technologies: ['HackerRank', 'LeetCode', 'Complexity Analysis']
  }
];

export const CURRENT_GOAL: { statement: string; pillars: Pillar[] } = {
  statement:
    'I’m focused on strengthening my foundations in software development, cybersecurity, networking, and algorithms while continuing to build practical hardware and software projects.',
  pillars: [
    {
      title: 'Algorithmic Problem Solving',
      description: 'Strengthening algorithmic analysis, complexity proofs, and consistent challenge submissions.'
    },
    {
      title: 'Cybersecurity & Networking',
      description: 'Deepening comprehension of network protocols, threat models, and secure software development.'
    },
    {
      title: 'Software & Web Development',
      description: 'Building reliable full-stack and modular student software applications using modern tools.'
    },
    {
      title: 'IoT & Embedded Systems',
      description: 'Exploring edge microcontroller workflows with ESP32-CAM and sensor telemetries.'
    }
  ]
};

