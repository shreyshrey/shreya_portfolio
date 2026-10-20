// Skill content lives here, separate from the rendering/layout logic.
// Add or edit items freely — the topology graph lays itself out from this data.

export const skillCategories = [
  {
    id: 'languages',
    code: 'NODE_01',
    label: 'Languages & Core Engineering',
    items: ['Python', 'TypeScript', 'SQL', 'NoSQL'],
  },
  {
    id: 'ml-ai',
    code: 'NODE_02',
    label: 'ML / AI & NLP',
    items: [
      'PyTorch',
      'Hugging Face',
      'OpenAI API',
      'LLMs',
      'RAG',
      'NLP',
      'spaCy',
      'NLTK',
      'scikit-learn',
      'pandas',
      'NumPy',
      'Computer Vision',
      'MLOps',
    ],
  },
  {
    id: 'cloud',
    code: 'NODE_03',
    label: 'Cloud & Infrastructure',
    items: ['AWS', 'Microsoft Azure'],
  },
  {
    id: 'data-eng',
    code: 'NODE_04',
    label: 'Data Engineering & Visualisation',
    items: ['Cloudera', 'PySpark', 'Grafana', 'InfluxDB', 'Prometheus'],
  },
  {
    id: 'devops',
    code: 'NODE_05',
    label: 'DevOps & Engineering Practice',
    items: ['GitLab', 'Docker', 'CI/CD', 'Unit/Integration/E2E Testing', 'Code Review', 'Microservices'],
  },
]
