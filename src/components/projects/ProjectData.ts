import { Project } from '../../types';
import { CodeXml } from 'lucide-react';
import { Database } from 'lucide-react';
import { Workflow } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 'coinpulse',
    title: 'CoinPulse',
    subtitle: 'Crypto Market ETL Platform',
    year: 2026,
    icon: Database,
    highlights: [
      'Production-grade end-to-end ETL pipeline ingesting CoinGecko market data into PostgreSQL warehouse.',
      'Automated daily extraction & transformation across 100+ cryptocurrency assets.',
      'Idempotent upserts with primary-key conflict handling for data integrity.',
      'Orchestrated with Apache Airflow DAGs in a Dockerized environment.',
    ],
    technologies: [
      'Python',
      'PostgreSQL',
      'Airflow',
      'Docker',
      'REST API',
    ],
  },
  {
    id: 'logpulse',
    title: 'LogPulse',
    subtitle: 'Application Log Analytics Pipeline',
    year: 2026,
    icon: Workflow,
    highlights: [
      'Scalable batch pipeline transforming unstructured logs into structured relational records.',
      'Field extraction, parsing, and validation for analytics-ready datasets.',
      'SQL-based KPI dashboards for request volume, status distribution, and error trends.',
      'Normalized schemas and indexing strategies for efficient querying.',
    ],
    technologies: [
      'Python',
      'PostgreSQL',
      'Batch Processing',
      'SQL Analytics',
    ],
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    subtitle: 'ML Data Pipeline',
    year: 2025,
    icon: CodeXml,
    highlights: [
      'End-to-end preprocessing and feature engineering on 1M+ transactional records.',
      'Data cleaning, normalization, SMOTE resampling to address class imbalance.',
      'Automated transformation workflows producing standardized model-ready datasets.',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Feature Engineering',
    ],
  },
];