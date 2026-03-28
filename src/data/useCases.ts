export type UseCase = {
  id: 'sales' | 'ops' | 'support' | 'security'
  label: string
  title: string
  subtitle: string
  bullets: string[]
  kpi: string
  workflowItems: { status: 'blue' | 'green'; title: string; body: string }[]
}

export const useCases: UseCase[] = [
  {
    id: 'sales',
    label: 'Sales',
    title: 'Lead Follow-up & Booking',
    subtitle: 'Capture inbound leads and follow up instantly — no more manual chasing or missed opportunities.',
    bullets: [
      'Website form → HubSpot + Sheets updated in seconds',
      'Personalized auto-reply with scheduling link dispatched <60s',
      'Lead scoring and smart routing to the right rep',
      'Slack alerts for high-priority prospects with full context',
    ],
    kpi: 'Typical result: 3× more calls booked per week',
    workflowItems: [
      { status: 'blue', title: 'New Lead Captured', body: 'website-form → HubSpot + Sheets updated automatically' },
      { status: 'green', title: 'Auto Follow-up Sent', body: 'Personalized email + calendar link in <60 seconds' },
      { status: 'blue', title: 'Rep Notified via Slack', body: 'Score 87 → pinged in #sales-alerts with full context' },
    ],
  },
  {
    id: 'ops',
    label: 'Operations',
    title: 'Admin Work & Data Entry',
    subtitle: 'Stop copying data between tools. Let automation handle the repetitive plumbing.',
    bullets: [
      'Sync data across Sheets, CRM, and Airtable automatically',
      'Auto-generate reports and executive summaries',
      'Approval workflows with full audit trail',
      'Weekly KPI reports sent automatically every Monday',
    ],
    kpi: 'Typical result: 8+ hours saved per person, weekly',
    workflowItems: [
      { status: 'blue', title: 'Data Sync Triggered', body: 'Invoice received → Sheets, Notion, accounting updated' },
      { status: 'green', title: 'Weekly Report Generated', body: 'Monday 8am: KPI digest sent to leadership automatically' },
      { status: 'blue', title: 'Approval Routed', body: 'Budget >$500 → Finance CC\'d, log entry created' },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    title: 'Customer Replies',
    subtitle: 'Draft faster, respond consistently, and keep humans in control of every escalation.',
    bullets: [
      'AI-drafted replies from approved templates',
      'Inbound message summarization and intelligent tagging',
      'Auto-routing by topic, urgency, or account tier',
      'Human escalation triggers with full conversation context',
    ],
    kpi: 'Typical result: 60% faster first response time',
    workflowItems: [
      { status: 'blue', title: 'Message Received', body: 'Parsed → tagged "billing", priority HIGH, Enterprise tier' },
      { status: 'green', title: 'Draft Prepared', body: 'AI draft from approved template — queued for agent review' },
      { status: 'blue', title: 'Escalation Triggered', body: '2nd contact in 24h → senior rep notified with full history' },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    title: 'Safe Automation',
    subtitle: 'Automation that earns trust. Every workflow is designed to reduce operational risk, not introduce it.',
    bullets: [
      'Least-privilege access — only what is strictly needed',
      'Full audit logs and change tracking on every action',
      'Human approval gates for all sensitive or financial actions',
      'Privacy-first design with safe error fallbacks',
    ],
    kpi: 'Typical result: secure company-wide rollout in under 4 weeks',
    workflowItems: [
      { status: 'blue', title: 'Permission Scoped', body: 'Read-only granted — write actions require explicit approval' },
      { status: 'green', title: 'Audit Log Entry', body: 'Action: export | bot | 09:42 EST | Status: logged' },
      { status: 'blue', title: 'Fallback Activated', body: 'API timeout → workflow paused, ops team alerted immediately' },
    ],
  },
]
