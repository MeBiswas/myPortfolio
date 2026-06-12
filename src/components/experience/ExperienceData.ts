import { Experience } from '../../types';

export const experiences: Experience[] = [
    {
        id: 'telus',
        role: 'Full Stack Developer / Contractor',
        company: 'TELUS Digital',
        location: 'Remote, Noida, India',
        dates: 'Aug 2021 — Dec 2025',
        bullets: [
        'Integrated REST APIs and processed structured application data used by internal enterprise systems.',
        'Optimised backend data processing logic and SQL queries — improved response time by 20% across key workflows.',
        'Collaborated in Agile sprints using Git-based version control; zero critical incidents across 2 years of production deployments.',
        'Applied performance tuning and modular architecture to codebases serving thousands of enterprise users.',
        ],
        tech: ['Python', 'SQL', 'REST APIs', 'Git', 'Agile'],
        filled: true,
    },
    {
        id: 'etelligens',
        role: 'Frontend Developer',
        company: 'Etelligens Technologies',
        location: 'Remote, Noida, India',
        dates: 'Dec 2020 — Dec 2025',
        bullets: [
        'Built production-grade React.js and AngularJS applications for 5+ client projects, consuming backend APIs and optimising data-driven UI performance.',
        'Consistently delivered features on schedule across distributed Agile teams in remote environments.',
        ],
        tech: ['React.js', 'AngularJS', 'APIs', 'Agile'],
        filled: false,
    },
    {
        id: 'globiz',
        role: 'Mobile Application Developer',
        company: 'Globiz Technology Inc.',
        location: 'Remote, Ludhiana, India',
        dates: 'Jun 2020 — Dec 2020',
        bullets: [
        'Developed hybrid mobile applications using React Native, consuming RESTful APIs and integrating structured backend data into performant mobile UIs.',
        ],
        tech: ['React Native', 'REST APIs', 'Mobile'],
        filled: false,
    },
    {
        id: 'promatics',
        role: 'Web Designer → Associate Frontend Developer',
        company: 'Promatics Technologies Pvt. Ltd.',
        location: 'Ludhiana, India',
        dates: 'Aug 2018 — May 2020',
        bullets: [
        'Promoted from Web Designer to Associate Frontend Developer within one year based on technical performance.',
        'Contributed to frontend development across multiple client-facing web projects.',
        ],
        tech: ['HTML/CSS', 'JavaScript', 'UI Design'],
        filled: false,
    },
];