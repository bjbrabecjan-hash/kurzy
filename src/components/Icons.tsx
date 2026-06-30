type IconProps = { size?: number; className?: string }

const base = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  'aria-hidden': true,
})

export function CompassIcon({ size = 42, className }: IconProps) {
  return (
    <svg {...base(size, className)} viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="19" />
      <path d="m29.5 18.5-3.8 7.2-7.2 3.8 3.8-7.2 7.2-3.8Z" fill="currentColor" stroke="none" />
      <path d="M24 2v6M24 40v6M2 24h6M40 24h6" />
      <path d="m34 14 3-3M11 37l3-3" stroke="#d7192d" />
    </svg>
  )
}

export function ArrowIcon({ size = 20, className }: IconProps) {
  return <svg {...base(size, className)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

export function ExternalIcon({ size = 18, className }: IconProps) {
  return <svg {...base(size, className)}><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></svg>
}

export function CheckIcon({ size = 20, className }: IconProps) {
  return <svg {...base(size, className)}><path d="m5 12 4 4L19 6" /></svg>
}

export function ShieldIcon({ size = 22, className }: IconProps) {
  return <svg {...base(size, className)}><path d="M12 3 5 6v5c0 4.5 2.8 8.2 7 10 4.2-1.8 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
}

export function CardIcon({ size = 26, className }: IconProps) {
  return <svg {...base(size, className)}><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8" cy="11" r="2" /><path d="M5.5 16c.7-1.7 4.3-1.7 5 0M14 10h4M14 14h4" /></svg>
}

export function PassportIcon({ size = 26, className }: IconProps) {
  return <svg {...base(size, className)}><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="12" r="4" /><path d="M8 12h8M12 8c1 1.2 1.5 2.5 1.5 4S13 14.8 12 16M12 8c-1 1.2-1.5 2.5-1.5 4S11 14.8 12 16" /></svg>
}

export function MailIcon({ size = 26, className }: IconProps) {
  return <svg {...base(size, className)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
}
