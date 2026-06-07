'use client';

import styles from './Experience.module.css';

export default function Experience() {
  const experiences = [
    {
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

  return (
    <section className={styles.section} id="experience">
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>04 —</span> Experience
      </div>
      <h2 className={styles['sec-title']}>Where I've worked.</h2>

      <div className={styles['exp-list']} style={{ marginTop: '48px' }}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles['exp-item']} style={index === experiences.length - 1 ? { paddingBottom: '0' } : {}}>
            <div className={styles['exp-spine']}>
              <div className={`${styles['exp-dot']} ${exp.filled ? styles['exp-dot-filled'] : ''}`}></div>
              {index < experiences.length - 1 && <div className={styles['exp-line']}></div>}
            </div>
            <div className={styles['exp-card']}>
              <div className={styles['exp-hd']}>
                <div className={styles['exp-role']}>{exp.role}</div>
                <span className={styles['exp-date']}>{exp.dates}</span>
              </div>
              <div className={styles['exp-co']}>
                <i className={`ti ti-building ${styles['exp-co-icon']}`}></i> {exp.company} · {exp.location}
              </div>
              <ul className={styles['exp-bullets']}>
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className={styles['exp-bullets-item']}>{bullet}</li>
                ))}
              </ul>
              <div className={styles['exp-tech']}>
                {exp.tech.map((tag, i) => (
                  <span key={i} className={styles['tech-tag']}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
