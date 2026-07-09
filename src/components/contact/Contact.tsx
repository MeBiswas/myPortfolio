'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
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
        <span className={styles['sec-num']}>07 —</span> Contact
      </div>
      <h2 className={styles['sec-title']}>
        Let&apos;s build something <span className={styles['sec-title-hl']}>reliable</span>
      </h2>
      <div className={styles['contact-grid']}>
        <div className={styles['contact-form-wrapper']}>
          <p className={styles['contact-intro']}>
            I&apos;m actively interviewing for junior data engineer roles. If you&apos;re hiring, or know someone who is, I&apos;d
            love to hear from you.
          </p>

          <form className={styles['contact-form']} onSubmit={handleSubmit}>
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label className={styles['form-label']}>Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  placeholder="Jane Recruiter"
                  className={styles['form-input']}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className={styles['form-group']}>
                <label className={styles['form-label']}>Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  placeholder="you@company.com"
                  className={styles['form-input']}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className={styles['form-group']}>
              <label className={styles['form-label']}>Message</label>
              <textarea
                required
                value={formData.message}
                className={styles['form-textarea']}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about the role, the team, or what you're building…"
              ></textarea>
            </div>
            <button type="submit" className={styles['form-submit']}>
              <Send size={14} color='#0d1117' /> Send message
            </button>
          </form>
        </div>

        <a href="mailto:biswasabhi93@gmail.com" className={styles['contact-info-email']}>
          <Mail size={14} color='oklch(78% 0.17 165)' />
          <div className={styles['ci-val-email']}>biswasabhi93@gmail.com</div>
        </a>
        <div className={styles['contact-info']}>
          <a href="tel:+919646156493" className={styles['contact-info-item']}>
            <Phone size={14} color='oklch(78% 0.17 165)' />
            <div className={styles['ci-val']}>+91 9646156493</div>
          </a>
          <a href="https://linkedin.com/in/abhipriyo-biswas" target="_blank" className={styles['contact-info-item']}>
            <div className={styles['ci-icon']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <div className={styles['ci-val']}>linkedin.com/in/abhipriyo-biswas</div>
          </a>
          <a href="https://github.com/MeBiswas" target="_blank" className={styles['contact-info-item']}>
            <div className={styles['ci-icon']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </div>
            <div className={styles['ci-val']}>github.com/MeBiswas</div>
          </a>
          <div className={styles['contact-info-item']}>
            <MapPin size={14} color='oklch(78% 0.17 165)' />
            <div className={styles['ci-val']}>Ludhiana, Punjab, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}
