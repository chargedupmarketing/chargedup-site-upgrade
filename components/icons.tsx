export function LightningBoltIcon(props: React.SVGProps<SVGSVGElement>){
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
    </svg>
  )
}

export function HighTechAIIcon(props: React.SVGProps<SVGSVGElement>){
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {/* Main AI Brain/Processor */}
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
      {/* Circuit Board Base */}
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"/>
      {/* Circuit Lines */}
      <path d="M7 7H17V9H7V7Z"/>
      <path d="M7 11H17V13H7V11Z"/>
      <path d="M7 15H17V17H7V15Z"/>
      {/* Connection Nodes */}
      <circle cx="9" cy="8" r="1"/>
      <circle cx="15" cy="8" r="1"/>
      {/* Additional Tech Elements */}
      <path d="M9 16H15V18H9V16Z"/>
      <circle cx="12" cy="17" r="0.5"/>
    </svg>
  )
}
