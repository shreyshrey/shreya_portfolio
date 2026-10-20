// Sourced from Shreya Vashist's CV. Edit this file to update experience content.
// `slug` becomes the URL at /experience/<slug>, so keep it unique and URL-safe.
//
// A normal entry is one job. A `group` entry (e.g. Accenture) bundles several
// roles held at the same company into one folder, with each role listed under
// `roles` — the archive renders it as a single folder that opens into a
// subfolder of its roles, each still linking to its own /experience/<slug> page.
export const experiences = [
  {
    slug: 'independent-consultant',
    code: 'FILE_01',
    company: 'Self-Employed',
    period: 'Mar 2026 — Present',
    location: 'Remote',
    tone: '#4c4a33',
    group: true,
    // Freelance work covers more than one engagement, so it opens as its own
    // nested archive rather than a single detail page. Both roles below are
    // drawn from the real CV content — add more real engagements here as
    // they come up; don't fill this with placeholder clients.
    roles: [
      {
        slug: 'independent-rag-chatbots',
        code: 'FILE_01.1',
        role: 'RAG Chatbot Development — Early-Stage Startups',
        summary:
          "Built RAG-based chatbots for early-stage startups, each embedded directly into the client's existing application.",
        responsibilities: [
          "Built RAG-based chatbots for 3 early-stage startups using LangChain and LlamaIndex, each embedded into the client's existing application, resulting in positive client feedback.",
        ],
        skills: ['LangChain', 'LlamaIndex', 'RAG'],
      },
      {
        slug: 'independent-girlswhoml',
        code: 'FILE_01.2',
        role: 'ML/AI Training & Mentorship — GirlsWhoML',
        summary:
          'Ongoing ML/AI training and mentorship for GirlsWhoML, an international non-profit education platform for college students.',
        responsibilities: [
          'Deliver ongoing ML/AI training for GirlsWhoML, an international non-profit education platform for college students, including training teachers to lead sessions.',
          "Promoted to Deputy Head at GirlsWhoML and now part of the core team expanding the program's reach.",
        ],
        skills: ['Training & Mentorship', 'Curriculum Design'],
      },
    ],
  },
  {
    slug: 'dragonfly',
    code: 'FILE_02',
    company: 'Dragonfly',
    role: 'AI Strategist',
    period: 'Sep 2025 — Mar 2026',
    location: 'Remote',
    tone: '#5b4a3a',
    summary:
      'Shaped AI strategy for warehouse operations, designing an in-house RAG chat tool and mentoring engineers on ML approach.',
    responsibilities: [
      'Identified 2 high-impact opportunities for applying AI in warehouse operations and inventory management, including a chat-based inventory dashboard, presenting findings directly to the CEO.',
      "Designed and implemented an in-house RAG-based chat tool on top of the client's existing application, enabling staff to query inventory status conversationally instead of manual lookup.",
      'Mentored 3 junior engineers on ML model selection and delivered recurring brown-bag sessions to a ~20-person team on RAG and foundational ML/AI concepts.',
    ],
    skills: ['AI Strategy', 'RAG', 'Mentorship'],
  },
  {
    slug: 'datacamp',
    code: 'FILE_03',
    company: 'DataCamp',
    role: 'AI & Machine Learning Content Developer',
    period: 'Jun 2024 — Nov 2024',
    location: 'London',
    tone: '#39473f',
    summary:
      'Designed hands-on ML/AI courses and projects for learners ranging from beginner to practitioner level.',
    responsibilities: [
      'Built 6 hands-on projects using PyTorch, Hugging Face, and OpenAI API covering applied topics such as deep learning for cybersecurity and ML for trading.',
      'Designed 4 courses on topics including GitHub Copilot, Hugging Face, and FastAPI, alongside supporting tutorials, learning paths, and assessments.',
      'Managed relationships with external subject matter experts and instructors to ensure consistent content delivery.',
      'Monitored learner feedback for 1 month post-launch using star ratings and sentiment analysis, increasing learner satisfaction by 20%.',
    ],
    skills: ['PyTorch', 'Hugging Face', 'OpenAI API', 'Content Design'],
  },
  {
    slug: 'accenture',
    code: 'FILE_04',
    company: 'Accenture',
    period: 'Feb 2019 — Jun 2024',
    location: 'Newcastle',
    tone: '#2f3530',
    group: true,
    roles: [
      {
        slug: 'accenture-ai-engineer',
        code: 'FILE_04.1',
        role: 'AI Engineer / Full Stack Developer',
        summary:
          'Built end-to-end AI pipelines on AWS, taking proofs-of-concept into client production solutions.',
        responsibilities: [
          'Built an end-to-end AI pipeline on AWS (Lambda, Textract, Comprehend, Step Functions) to extract and process unstructured data into automated summarisation, topic modelling, and keyword extraction using Hugging Face models, achieving a 20% increase in accuracy and 15% reduction in processing time versus baseline.',
          'Implemented an MLOps pipeline over time to monitor model progress, which was adopted by multiple teams.',
          "Delivered a proof-of-concept (including NLP) that was adopted into the client's larger production solution, resulting in a signed deal.",
        ],
        skills: ['AWS', 'Hugging Face', 'NLP', 'MLOps'],
      },
      {
        slug: 'accenture-data-scientist',
        code: 'FILE_04.2',
        role: 'Data Scientist / AWS Developer',
        summary:
          'Built dashboards and automated deployment proofs-of-concept that were adopted into standard team practice.',
        responsibilities: [
          'Built a dashboard and reporting pipeline using Cloudera, PySpark, Grafana, InfluxDB, and Prometheus to analyse and visualise outage data (~400K records) within a 3-day deadline; the approach was adopted by multiple teams.',
          'Built a proof-of-concept for automated model deployment on AWS, which was adopted into standard team practice.',
        ],
        skills: ['AWS', 'PySpark', 'Grafana', 'Cloudera'],
      },
      {
        slug: 'accenture-ml-engineer',
        code: 'FILE_04.3',
        role: 'Machine Learning Engineer',
        summary: 'Built computer vision and NLP pipelines for compliance document classification.',
        responsibilities: [
          'Built an end-to-end ML pipeline to classify compliance documents, using computer vision (Azure, AWS Textract/Recognition) to extract text from scanned documents, increasing data processing efficiency by 75%.',
          'Iterated on NLP classification models, comparing model architectures, applying spaCy tokenisation, and using data augmentation to expand training data, in collaboration with cross-functional teams.',
        ],
        skills: ['Azure', 'AWS', 'spaCy', 'Computer Vision'],
      },
      {
        slug: 'accenture-application-developer',
        code: 'FILE_04.4',
        role: 'Application Developer',
        summary: 'Designed solutions to process millions of data points and oversaw zero-downtime production transitions.',
        responsibilities: [
          'Designed and developed solutions to efficiently process up to 3 million data points, reducing processing time by 40%.',
          'Implemented Python scripts for data corrections, achieving a 99% success rate in first-time correction.',
          'Oversaw transition of multiple projects to production, with zero downtime for end-users.',
        ],
        skills: ['Python', 'AWS', 'Data Processing'],
      },
    ],
  },
]

// Flattened, ordered list used for lookups and prev/next navigation — a
// group's roles are expanded in place, inheriting the parent's company,
// period, and location unless a role overrides them.
const flatExperiences = experiences.flatMap((exp) =>
  exp.group
    ? exp.roles.map((role) => ({
        company: exp.company,
        period: exp.period,
        location: exp.location,
        tone: exp.tone,
        ...role,
      }))
    : [exp],
)

export function getExperienceBySlug(slug) {
  return flatExperiences.find((exp) => exp.slug === slug)
}

export function getAdjacentExperience(slug) {
  const index = flatExperiences.findIndex((exp) => exp.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? flatExperiences[index - 1] : null,
    next: index < flatExperiences.length - 1 ? flatExperiences[index + 1] : null,
  }
}
