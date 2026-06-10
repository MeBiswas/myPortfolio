'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section className={`${styles.section} ${styles['section-alt']}`} id="about">
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>01 —</span> About
      </div>
      {/* <h2 className={styles['sec-title']}>
        From shipping production apps
        <br />
        to shipping <span className={styles['sec-title-hl']}>production data.</span>
      </h2>
      <div className={`${styles['about-grid']} fi`}>
        <div>
          <div className={styles['about-bio']}>
            <p>
              I spent 7+ years building production-grade applications across full stack, frontend, and mobile —
              at companies like <strong className={styles['about-bio-strong']}>TELUS Digital</strong> and <strong className={styles['about-bio-strong']}>Etelligens Technologies</strong>. I
              learned what it takes to design systems that don&apos;t break in front of real users.
            </p>
            <p className={styles['about-bio-p']}>
              Now I&apos;m channelling that engineering rigour into data. I&apos;m pursuing an <em className={styles['about-bio-em']}>MSc in Data Science</em> at
              Central University of Haryana, and building real ETL pipelines, data warehouses, and analytics systems
              with Python, SQL, PostgreSQL and Apache Airflow.
            </p>
            <p className={styles['about-bio-p']}>I care about idempotency, data quality, modular architecture, and pipelines that you can trust at 3 AM.</p>
          </div>
          <div className={styles['about-meta-grid']}>
            <div className={styles['meta-cell']}>
              <div className={styles['meta-cell-lbl']}>Name</div>
              <div className={styles['meta-cell-val']}>Abhipriyo Biswas</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['meta-cell-lbl']}>Location</div>
              <div className={styles['meta-cell-val']}>Ludhiana, Punjab, India</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['meta-cell-lbl']}>Education</div>
              <div className={styles['meta-cell-val']}>MSc Data Science, &apos;26</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['meta-cell-val-open']}>Open to work</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['meta-cell-lbl']}>Languages</div>
              <div className={styles['meta-cell-val']}>English · Hindi · Punjabi · Bengali</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['meta-cell-lbl']}>Open to</div>
              <div className={styles['meta-cell-val']}>Remote · Hybrid · On-site</div>
            </div>
          </div>
        </div>
        <div className={styles['profile-block']}>
          <div className={styles['terminal-header']}>
            <span style={{ background: '#FF5F57' }}></span>
            <span style={{ background: '#FEBC2E' }}></span>
            <span style={{ background: '#28C840' }}></span>
          </div>
          <div className={styles['terminal-content']}>
            <div className={styles['terminal-content-first']}>
              <span style={{ color: 'var(--teal)' }}>$</span>{' '}
              <span style={{ color: '#7DD3FC' }}>cat</span> profile.json
            </div>
            <div style={{ color: 'var(--text3)' }}>{'{'}  </div>
            <div className={styles.indent}>
              <span style={{ color: '#86EFAC' }}>&quot;role&quot;</span>:{' '}
              <span style={{ color: '#FCA5A5' }}>&quot;Junior Data Engineer&quot;</span>,
            </div>
            <div className={styles.indent}>
              <span style={{ color: '#86EFAC' }}>&quot;stack&quot;</span>: [
              <span style={{ color: '#FCA5A5' }}>
                &quot;Python&quot;
              </span>,
              <span style={{ color: '#FCA5A5' }}>
                &quot;SQL&quot;
              </span>,
              <span style={{ color: '#FCA5A5' }}>
                &quot;Airflow&quot;
              </span>
              ],
            </div>
            <div className={styles.indent}>
              <span style={{ color: '#86EFAC' }}>&quot;db&quot;</span>: [
              <span style={{ color: '#FCA5A5' }}>
                &quot;PostgreSQL&quot;
              </span>,
              <span style={{ color: '#FCA5A5' }}>
                &quot;MySQL&quot;
              </span>
              ],
            </div>
            <div className={styles.indent}>
              <span style={{ color: '#86EFAC' }}>&quot;cloud&quot;</span>: [
              <span style={{ color: '#FCA5A5' }}>
                &quot;AWS&quot;
              </span>,
              <span style={{ color: '#FCA5A5' }}>
                &quot;GCP&quot;
              </span>,
              <span style={{ color: '#FCA5A5' }}>
                &quot;Azure&quot;
              </span>
              ],
            </div>
            <div className={styles.indent}>
              <span style={{ color: '#86EFAC' }}>&quot;experience&quot;</span>:{' '}
              <span style={{ color: '#93C5FD' }}>&quot;7+ years&quot;</span>,
            </div>
            <div className={styles.indent}>
              <span style={{ color: '#86EFAC' }}>&quot;open_to_work&quot;</span>:{' '}
              <span style={{ color: '#6EE7B7' }}>true</span>
            </div>
            <div style={{ color: 'var(--text3)' }}>{'}'}</div>
            <div style={{ marginTop: '8px' }}>
              <span style={{ color: 'var(--teal)' }}>$</span>{' '}
              <span style={{ color: '#7DD3FC' }}>echo</span>{' '}
              <span style={{ color: '#FCA5A5' }}>&quot;Ready to build.&quot;</span>
            </div>
            <div className={styles.cursor}>
              Ready to build.<span className={styles.blink}></span>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles['about-grid']}>
        <h2 className={styles['sec-title']}>From shipping production apps to shipping production data.</h2>
        <div className={styles['about-bio']}>
          <p>I spent 7+ years building production-grade applications across full stack, frontend, and mobile — at companies like TELUS Digital and Etelligens Technologies. I learned what it takes to design systems that don&apos;t break in front of real users.</p>
          <p>
            Now I&apos;m channeling that engineering rigor into data. I&apos;m pursuing an
            <span> MSc in Data Science </span>
            at Central University of Haryana, and building real ETL pipelines, data warehouses, and analytics systems with Python, SQL, PostgreSQL, and Apache Airflow.
          </p>
          <p>I care about idempotency, data quality, modular architecture, and pipelines that you can trust at 3 AM.</p>
        </div>
      </div>
    </section>
  );
}
