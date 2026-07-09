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
    skills: ['React.js', 'Next.js', 'Angular.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'FAST API', 'REST APIs', 'GraphQL', 'JSON', 'Postman', 'JWT', 'OAuth2', 'Integrations'],
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
    title: 'Big Data & Workflow',
    skills: ['Apache Airflow', 'Apache Spark'],
  },
  {
    title: 'Cloud',
    skills: ['AWS (S3, Glue)', 'GCP BigQuery', 'Azure'],
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
