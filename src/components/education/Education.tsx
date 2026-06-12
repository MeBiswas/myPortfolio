'use client';

import { School } from 'lucide-react';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className={`${styles.section}`} id="education">
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
            <div className={styles['edu-card']}>
              <div className={styles['edu-icon']} style={{ background: 'rgba(0,200,150,0.1)', color: 'var(--teal)' }}>
                <School size={14} color='oklch(78% 0.17 165)' />
              </div>
              <div>
                <div className={styles['edu-deg']}>M.Sc. Data Science</div>
                <div className={styles['edu-inst']}>Central University of Haryana, Mahendergarh</div>
                <div className={styles['edu-date']}>Jul 2024 — Jun 2026 (expected)</div>
                <div style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '5px' }}>
                  Data Engineering · Big Data Systems · DB Management · ML · Statistics
                </div>
              </div>
            </div>
            <div className={styles['edu-card']}>
              <div className={styles['edu-icon']} style={{ background: 'var(--bg4)', color: 'var(--text3)' }}>
                <School size={14} color='oklch(78% 0.17 165)' />
              </div>
              <div>
                <div className={styles['edu-deg']}>B.A. Computer Science</div>
                <div className={styles['edu-inst']}>Lovely Professional University</div>
                <div className={styles['edu-date']}>Dec 2020 — Apr 2024</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles['edu-header']}>Certifications &amp; Languages</div>
          <div className={styles['certs-list']}>
            <div className={styles['cert-card']}>
              <div className={styles['cert-left']}>
                <div className={styles['cert-ico']} style={{ background: 'rgba(0,200,150,0.1)' }}>
                  🐍
                </div>
                <div>
                  <div className={styles['cert-name']}>Python (Basic)</div>
                  <div className={styles['cert-by']}>HackerRank</div>
                </div>
              </div>
              <span className={`${styles['cert-status']} ${styles['cs-earned']}`}>Earned</span>
            </div>
            <div className={styles['cert-card']}>
              <div className={styles['cert-left']}>
                <div className={styles['cert-ico']} style={{ background: 'rgba(59,130,246,0.1)' }}>
                  🗄️
                </div>
                <div>
                  <div className={styles['cert-name']}>SQL (Basic)</div>
                  <div className={styles['cert-by']}>HackerRank</div>
                </div>
              </div>
              <span className={`${styles['cert-status']} ${styles['cs-earned']}`}>Earned</span>
            </div>
            <div className={`${styles['cert-card']} ${styles.dashed}`}>
              <div className={styles['cert-left']}>
                <div className={styles['cert-ico']} style={{ background: 'rgba(245,158,11,0.1)' }}>
                  ⚙️
                </div>
                <div>
                  <div className={styles['cert-name']}>dbt Fundamentals</div>
                  <div className={styles['cert-by']}>dbt Labs</div>
                </div>
              </div>
              <span className={`${styles['cert-status']} ${styles['cs-progress']}`}>In progress</span>
            </div>
            <div className={`${styles['cert-card']} ${styles.dashed}`}>
              <div className={styles['cert-left']}>
                <div className={styles['cert-ico']} style={{ background: 'rgba(245,158,11,0.1)' }}>
                  ✈️
                </div>
                <div>
                  <div className={styles['cert-name']}>Airflow Fundamentals</div>
                  <div className={styles['cert-by']}>Astronomer Academy</div>
                </div>
              </div>
              <span className={`${styles['cert-status']} ${styles['cs-progress']}`}>In progress</span>
            </div>
            <div className={`${styles['cert-card']} ${styles.dashed}`}>
              <div className={styles['cert-left']}>
                <div className={styles['cert-ico']} style={{ background: 'var(--bg4)' }}>
                  ☁️
                </div>
                <div>
                  <div className={styles['cert-name']}>AWS Cloud Practitioner Essentials</div>
                  <div className={styles['cert-by']}>AWS Skill Builder</div>
                </div>
              </div>
              <span className={`${styles['cert-status']} ${styles['cs-planned']}`}>Planned</span>
            </div>
          </div>
          <div className={styles['languages-box']}>
            <div className={styles['edu-header']} style={{ marginBottom: '8px' }}>
              Spoken Languages
            </div>
            <div className={styles['chips']}>
              <span className={styles.chip}>English</span>
              <span className={styles.chip}>Hindi</span>
              <span className={styles.chip}>Punjabi</span>
              <span className={styles.chip}>Bengali</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
