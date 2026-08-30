'use client';

import { School } from 'lucide-react';
import styles from './Education.module.css';
import { education, languages, certifications } from '@/data/education';

const statusClassMap = {
  Earned: styles['cs-earned'],
  'In progress': styles['cs-progress'],
  Planned: styles['cs-planned'],
};

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>06 —</span> Education &amp; Certifications
      </div>

      <h2 className={styles['sec-title']}>
        Qualifications &amp; <span className={styles['sec-title-hl']}>credentials</span>
      </h2>

      <div className={`${styles['edu-certs-grid']} fi`}>
        <div>
          <div className={styles['edu-header']}>Education</div>
          <div className={styles['edu-list']}>
            {education.map((item) => (
              <div key={`${item.degree}-${item.institution}`} className={styles['edu-card']}>
                <div className={styles['edu-icon']} style={{ background: 'rgba(0,200,150,0.1)', color: 'var(--teal)' }}>
                  <School size={14} color='oklch(78% 0.17 165)' />
                </div>
                <div>
                  <div className={styles['edu-deg']}>{item.degree}</div>
                  <div className={styles['edu-inst']}>{item.institution}</div>
                  <div className={styles['edu-date']}>{item.date}</div>
                  {item.details && item.details.length > 0 && (
                    <div style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '5px' }}>
                      {item.details.join(' · ')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className={styles['edu-header']}>Certifications &amp; Languages</div>

          <div className={styles['certs-list']}>
            {certifications.map((cert) => (
              <div
                key={`${cert.name}-${cert.provider}`}
                className={`${styles['cert-card']} ${cert.dashed ? styles.dashed : ''}`}
              >
                <div className={styles['cert-left']}>
                  <div className={styles['cert-ico']} style={{ background: cert.iconBg }}>
                    {cert.icon}
                  </div>
                  <div>
                    <div className={styles['cert-name']}>{cert.name}</div>
                    <div className={styles['cert-by']}>{cert.provider}</div>
                  </div>
                </div>
                <span className={`${styles['cert-status']} ${statusClassMap[cert.status]}`}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>

          <div className={styles['languages-box']}>
            <div className={styles['edu-header']} style={{ marginBottom: '8px' }}>
              Spoken Languages
            </div>
            <div className={styles['chips']}>
              {languages.map((language) => (
                <span key={language} className={styles.chip}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
