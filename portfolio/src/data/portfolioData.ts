import { NavItem, Skill, Tool, Certification, Experience, Contact } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Experience', href: 'experience' },
  { label: 'Contact', href: 'contact' },
];

export const skills: Skill[] = [
  {
    category: 'Technical Skills',
    items: [
      'Python (Beginner)',
      'Linux',
      'SQL',
      'SIEM & IDS Tools',
      'Networking & System Administration',
      'HTML, CSS (Responsive Design)',
      'JAVA'
    ],
  },
];

export const tools: Tool[] = [
  {
    category: 'Tools & Platforms',
    items: [
      'Google Workspace',
      'MS Office',
      'Git & GitHub',
      'Coursera',
      'freeCodeCamp',
      'Great Learning'
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    year: '2023',
    link: 'https://www.coursera.org/account/accomplishments/specialization/S5YBNBF3RVB7'
  },
  {
    title: 'Google IT Support Certificate',
    issuer: 'Google / Coursera',
    year: '2022',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/TD94Z45GBHH7'
  },
  {
    title: 'Ethical Hacking',
    issuer: 'Great Learning',
    year: '2023',
    link: 'https://www.mygreatlearning.com/certificate/SGCXXLPM'
  },
  {
    title: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    year: '2023',
    link: 'https://www.freecodecamp.org/certification/umeshbatalvi/scientific-computing-with-python-v7'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2022',
    link: 'https://www.freecodecamp.org/certification/umeshbatalvi/responsive-web-design'
  }
];

export const experiences: Experience[] = [
  {
    title: 'Warehouse Operative',
    company: 'Royal Mail',
    period: '2023 – Present',
    description: [
      'Processed, packed, and inspected high-volume shipments',
      'Collaborated in team environment under strict deadlines',
      'Applied problem-solving skills to optimize workflow'
    ]
  },
  {
    title: 'Warehouse Operative',
    company: 'DPD',
    period: '2022 – 2023',
    description: [
      'Maintained QA while exceeding order dispatch targets',
      'Coordinated with team members to ensure timely deliveries',
      'Adapted to changing priorities in a fast-paced environment'
    ]
  },
  {
    title: 'Data Administrator',
    company: 'Fintor Services',
    period: 'Nov 2020 – Sep 2022',
    description: [
      'Entered and processed customer data for computer systems',
      'Conducted audits and prepared reports for decision-making',
      'Managed office equipment and resource procurement'
    ]
  }
];

export const contactInfo: Contact = {
  email: 'umeshu47778@gmail.com',
  phone: '07721682530',
  location: 'Leicester, UK',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/celestialcracker',
      icon: 'Github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/umesh-67385a22a',
      icon: 'Linkedin'
    }
  ]
};

export const aboutMe = {
  education: [
    {
      degree: 'BSc Computer Science',
      institution: 'De Montfort University',
      period: '2022–2025'
    },
    {
      degree: 'A-Levels',
      institution: 'St. Francis School',
      period: '2020–2021'
    }
  ],
  languages: ['English', 'Hindi', 'Punjabi'],
  softSkills: ['Problem-solving', 'Teamwork', 'Communication', 'Time Management']
};