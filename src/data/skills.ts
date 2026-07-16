export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Bash'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Angular.js', 'React Native', 'Redux', 'Redux-Thunk', 'Zustand', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'jQuery', 'Responsive Design', 'Component-Based Architecture'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'FAST API', 'REST APIs', 'GraphQL', 'JSON', 'Postman', 'JWT', 'OAuth2', 'Integrations', 'Layered API Architecture', 'Redis (Caching)'],
  },
  {
    title: 'Data Engineering',
    skills: ['ETL Pipelines', 'dbt', 'Data Modeling', 'Data Warehousing', 'Batch Processing', 'Idempotent Upserts', 'Data Quality'],
  },
  {
    title: 'Data Analytics',
    skills: ['Data Analysis', 'Data Visualization', 'Dashboards', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'KPIs'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Advanced SQL',
    skills: ['Window Functions', 'CTEs', 'Joins', 'Indexing', 'Query Optimization'],
  },
  {
    title: 'Testing & Quality',
    skills: ['Unit Testing', 'Jest', 'Enzyme', 'React Testing Library', 'Debugging', 'Production Issue Resolution', 'Error Handling', 'Logging', 'Code Coverage'],
  },
  {
    title: 'Big Data & Workflow',
    skills: ['Apache Airflow', 'Apache Spark'],
  },
  {
    title: 'Cloud',
    skills: ['GCP (BigQuery, Secret Manager, Cloud Logging)', 'Docker', 'Git', 'GitHub', 'Jenkins (CI/CD)'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'Jupyter', 'VS Code'],
  },
  {
    title: 'Libraries',
    skills: ['Pandas', 'NumPy', 'REST APIs', 'JSON Parsing'],
  },
];
