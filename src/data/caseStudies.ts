export type CaseStudy = {
  slug: string
  title: string
  client: string
  category: 'Sales' | 'Operations' | 'Support' | 'Security'
  result: string
  excerpt: string
  challenge: string
  solution: string
  outcome: string[]
  tools: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'property-management-email-ai-agent',
    title: 'How a Property Management Firm Automated Intelligent Email Replies',
    client: 'National Property Management Co.',
    category: 'Operations',
    result: '85% of emails auto-drafted',
    excerpt: 'A property management firm was overwhelmed by inbound tenant and owner emails. We built an n8n workflow blueprint featuring AI classification, CRM enrichment, and RAG-powered response drafting.',
    challenge: 'The operations team spent hours every day manually triaging inbound emails, looking up tenant records in their CRM, and writing repetitive responses for maintenance requests, leasing inquiries, and account updates.',
    solution: 'We architected a comprehensive n8n workflow. The system triggers on new emails, enriches the data via CRM integrations, classifies the intent using AI, retrieves specific property knowledge via RAG, and automatically drafts an accurate, context-aware reply for human review.',
    outcome: [
      '85% of inbound emails categorised and drafted automatically',
      'Average response time dropped from 12 hours to 15 minutes',
      'Operations team saved 20+ hours per week on email triage',
      'Zero hallucination due to strict RAG retrieval boundaries',
    ],
    tools: ['n8n', 'OpenAI', 'CRM API', 'Gmail', 'Vector Database'],
  },
  {
    slug: 'neurobotik-faq-rag-assistant',
    title: 'Enterprise-Grade Strict RAG for Neurobotik FAQ & Status Board',
    client: 'Neurobotik',
    category: 'Support',
    result: 'Zero hallucination guaranteed',
    excerpt: 'For a high-stakes demo, Neurobotik needed an FAQ RAG assistant that strictly adhered to provided content without hallucinating, coupled with a robust project status tracker.',
    challenge: 'Neurobotik needed automated support using LLMs, but they required absolute certainty that the bot would not hallucinate answers outside of their official FAQ. Additionally, they needed a separate flow linking natural language queries to dynamic project status updates in Google Sheets.',
    solution: 'We engineered a two-part n8n automation. First, a strict FAQ RAG pipeline with safety guardrails to enforce citation-only responses. Second, a Google Sheets integration module that performed complex date calculations, lookups, and status logging without writing custom code.',
    outcome: [
      '100% adherence to approved FAQ content',
      'Seamless natural language lookup for project delivery dates',
      'Live logging of all interactions back to Google Sheets',
      'Successful enterprise demo deployment',
    ],
    tools: ['n8n', 'Google Sheets', 'LLM Agents', 'Vector Store'],
  },
  {
    slug: 'project-lumina-whatsapp-hybrid-bot',
    title: 'Project Lumina: Secure WhatsApp Lead Capture & AI Recommendations',
    client: 'Healthcare Retail Innovator',
    category: 'Sales',
    result: 'End-to-end automated funnel',
    excerpt: 'Project Lumina required a WhatsApp Hybrid-Bot to capture inbound leads, enforce consent, run AI safety guardrails, and generate OTC recommendations while adhering to strict privacy compliance.',
    challenge: 'Sales and onboarding were bottlenecked by manual messaging. They needed a conversational AI on WhatsApp that could handle initial triage, provide safe over-the-counter (OTC) recommendations, and route users to payment gateways securely.',
    solution: 'We initialized a complex WhatsApp-to-n8n pipeline. The Hybrid-Bot receives messages, verifies user consent, classifies intent, and runs safety guardrails before generating educational responses. If approved, it routes the user to a payment link and stores the lead data securely.',
    outcome: [
      'Fully autonomous top-of-funnel lead capture via WhatsApp',
      'Secure, strictly-bounded AI educational recommendations',
      'Seamless handoff to payment and support teams',
      'Strict adherence to data privacy and safety guardrails',
    ],
    tools: ['WhatsApp Business API', 'n8n', 'Payment Gateway', 'AI Guardrails'],
  },
]
