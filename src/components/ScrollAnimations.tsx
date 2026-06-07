'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Fade-in on scroll
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll<HTMLElement>('.fi');
    elements.forEach((el, i) => {
      const delayMs = (i % 4) * 60;

      el.style.transitionDelay = `${delayMs}ms`;
      obs.observe(el);
    });

    // Role toggle
    const deBtn = document.getElementById('de-btn');
    const daBtn = document.getElementById('da-btn');

    daBtn?.addEventListener('click', function () {
      deBtn?.classList.remove('active');
      daBtn.classList.add('active');
      alert('Data Analyst version coming soon! Currently showing the Data Engineer profile.');
    });

    deBtn?.addEventListener('click', function () {
      daBtn?.classList.remove('active');
      deBtn.classList.add('active');
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id], .hero');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let cur = '';
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 80) {
          cur = s.id;
        }
      });
      navLinks.forEach((a) => {
        const href = (a as HTMLAnchorElement).getAttribute('href');
        if (href === '#' + cur) {
          (a as HTMLElement).style.color = 'var(--teal)';
        } else {
          (a as HTMLElement).style.color = '';
        }
      });
    });

    return () => {
      obs.disconnect();
    };
  }, []);

  return null;
}
