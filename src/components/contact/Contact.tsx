'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Opportunity for ${encodeURIComponent(name)}`;
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:biswasabhi93@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>06 —</span> Contact
      </div>
      <h2 className={styles['sec-title']}>
        Let's build something <span className={styles['sec-title-hl']}>reliable.</span>
      </h2>
      <div className={`${styles['contact-grid']} fi`}>
        <div>
          <p className={styles['contact-intro']}>
            I'm actively interviewing for junior data engineer roles. If you're hiring, or know someone who is, I'd
            love to hear from you.
          </p>
          <form className={styles['contact-form']} onSubmit={handleSubmit}>
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label className={styles['form-label']}>Name</label>
                <input
                  className={styles['form-input']}
                  type="text"
                  placeholder="Jane Recruiter"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className={styles['form-group']}>
                <label className={styles['form-label']}>Email</label>
                <input
                  className={styles['form-input']}
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className={styles['form-group']}>
              <label className={styles['form-label']}>Message</label>
              <textarea
                className={styles['form-textarea']}
                placeholder="Tell me about the role, the team, or what you're building…"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className={styles['form-submit']}>
              <i className="ti ti-send"></i> Send message
            </button>
          </form>
        </div>
        <div className={styles['contact-info']}>
          <a href="tel:+919646156493" className={styles['contact-info-item']}>
            <div className={styles['ci-icon']}>
              <i className="ti ti-phone"></i>
            </div>
            <div>
              <div className={styles['ci-lbl']}>Phone</div>
              <div className={styles['ci-val']}>+91 9646156493</div>
            </div>
          </a>
          <a href="mailto:biswasabhi93@gmail.com" className={styles['contact-info-item']}>
            <div className={styles['ci-icon']}>
              <i className="ti ti-mail"></i>
            </div>
            <div>
              <div className={styles['ci-lbl']}>Email</div>
              <div className={styles['ci-val']}>biswasabhi93@gmail.com</div>
            </div>
          </a>
          <a href="https://linkedin.com/in/abhipriyo-biswas" target="_blank" className={styles['contact-info-item']}>
            <div className={styles['ci-icon']}>
              <i className="ti ti-brand-linkedin"></i>
            </div>
            <div>
              <div className={styles['ci-lbl']}>LinkedIn</div>
              <div className={styles['ci-val']}>linkedin.com/in/abhipriyo-biswas</div>
            </div>
          </a>
          <a href="https://github.com/MeBiswas" target="_blank" className={styles['contact-info-item']}>
            <div className={styles['ci-icon']}>
              <i className="ti ti-brand-github"></i>
            </div>
            <div>
              <div className={styles['ci-lbl']}>GitHub</div>
              <div className={styles['ci-val']}>github.com/MeBiswas</div>
            </div>
          </a>
          <div className={styles['contact-info-item']}>
            <div className={styles['ci-icon']}>
              <i className="ti ti-map-pin"></i>
            </div>
            <div>
              <div className={styles['ci-lbl']}>Location</div>
              <div className={styles['ci-val']}>Ludhiana, Punjab, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
