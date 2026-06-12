'use client';

import { Experience } from '../../types';
import { Building2 } from 'lucide-react';
import styles from './Experience.module.css';

interface TimelineProps {
  index: number;
  length: number;
  exp: Experience;
}

export default function Timeline({exp, length, index}: TimelineProps) {
  return (
    <div className="timeline">
      <div key={index} className={styles['exp-item']} style={index === length - 1 ? { paddingBottom: '0' } : {}}>
        <div className={styles['exp-spine']}>
          <div className={`${styles['exp-dot']} ${exp.filled ? styles['exp-dot-filled'] : ''}`}></div>
          {index < length - 1 && <div className={styles['exp-line']}></div>}
        </div>
        <div className={styles['exp-card']}>  
          <div className={styles['exp-hd']}>
            <div className={styles['exp-role']}>{exp.role}</div>
            <span className={styles['exp-date']}>{exp.dates}</span>
          </div>
          <div className={styles['exp-co']}>
            <Building2 size={13} color='#4a5e72'/>
            <span className={styles['company-name']}>{exp.company}</span> · {exp.location}
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
    </div>
  );
}
