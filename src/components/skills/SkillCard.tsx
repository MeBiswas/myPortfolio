import styles from './Skills.module.css';

interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className={styles['skills-card']}>
      <h3 className={styles['skill-title']}>{title}</h3>
      <div className={styles['skills']}>
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
