export default function LogoStrip() {
  return (
    <div className="py-[36px] px-5 lg:px-8 border-b border-border">
      <div className="max-w-[1140px] mx-auto flex items-center gap-[10px] flex-wrap justify-center">
        <span className="font-sans text-[13px] text-text3 font-medium whitespace-nowrap mr-1">Connects with:</span>
        <div className="py-[7px] px-4 border border-border rounded-lg text-[13px] font-semibold text-text3 bg-white flex items-center gap-[6px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2.5" fill="#34A853"/><path d="M2 6h8M6 2v8" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg>
          Google Workspace
        </div>
        <div className="py-[7px] px-4 border border-border rounded-lg text-[13px] font-semibold text-text3 bg-white flex items-center gap-[6px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2.5" fill="#611f69"/><circle cx="6" cy="6" r="2.5" stroke="white" strokeWidth="1.4"/></svg>
          Slack
        </div>
        <div className="py-[7px] px-4 border border-border rounded-lg text-[13px] font-semibold text-text3 bg-white flex items-center gap-[6px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2.5" fill="#FF7A59"/><path d="M3 6h6M6 3v6" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg>
          HubSpot
        </div>
        <div className="py-[7px] px-4 border border-border rounded-lg text-[13px] font-semibold text-text3 bg-white flex items-center gap-[6px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2.5" fill="#FCB400"/><path d="M2 4h8M2 6h8M2 8h5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg>
          Airtable
        </div>
        <div className="py-[7px] px-4 border border-border rounded-lg text-[13px] font-semibold text-text3 bg-white flex items-center gap-[6px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2.5" fill="#000"/><path d="M3 3h6v6H3z" stroke="white" strokeWidth="1.4"/></svg>
          Notion
        </div>
        <div className="py-[7px] px-4 border border-border rounded-lg text-[13px] font-semibold text-text3 bg-white flex items-center gap-[6px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2.5" fill="#0052CC"/><path d="M6 2L2 6l4 4M6 2l4 4-4 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Jira
        </div>
        <div className="py-[7px] px-4 border border-border rounded-lg text-[13px] font-semibold text-text3 bg-white flex items-center gap-[6px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2.5" fill="#217346"/><path d="M2 3h5v6H2zM7 6h3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
          Salesforce
        </div>
        <span className="text-[13px] text-text3 font-semibold">+ 500 more tools</span>
      </div>
    </div>
  )
}
