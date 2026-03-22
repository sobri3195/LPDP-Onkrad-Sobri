import React from 'react'

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number }

const createIcon = (children: React.ReactNode) => React.forwardRef<SVGSVGElement, IconProps>(function Icon({ size = 20, color = 'currentColor', strokeWidth = 2, className, ...rest }, ref) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  )
})

export const HeartPulse = createIcon(<><path d="M19.5 13.57 16 17 12 21 8 17 4.5 13.5 4 8.5 7.5 5 12 7.5 16.5 5 20 8.5 19.5 13.57" /><path d="M3 12h4l2-3 3 6 2-4h7" /></>)
export const DatabaseZap = createIcon(<><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3 2.5 0 4.8-.4 6.2-1.1" /><path d="m19 16 3-3-3-3" /><path d="M22 13h-6" /></>)
export const FileBarChart2 = createIcon(<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 14v3" /><path d="M12 10v7" /><path d="M16 12v5" /></>)
export const Globe2 = createIcon(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" /></>)
export const BrainCircuit = createIcon(<><circle cx="9" cy="9" r="2" /><circle cx="15" cy="9" r="2" /><circle cx="9" cy="15" r="2" /><path d="M11 9h2" /><path d="M9 11v2" /><path d="M15 11v4" /><path d="M11 15h4" /><path d="m6 6-2-2" /><path d="m18 6 2-2" /><path d="m4 20 2-2" /></>)
export const ShieldCheck = createIcon(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></>)
export const LayoutDashboard = createIcon(<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="10" width="7" height="11" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></>)
export const Bell = createIcon(<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 0 0 4 0" /></>)
export const Menu = createIcon(<><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>)
export const Search = createIcon(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.35-3.35" /></>)
export const ShieldAlert = createIcon(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></>)
export const X = createIcon(<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>)
export const ArrowDownRight = createIcon(<><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>)
export const ArrowRight = createIcon(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>)
export const ArrowUpRight = createIcon(<><path d="M7 17V7h10" /><path d="M7 7 17 17" /></>)
export const Activity = createIcon(<path d="M22 12h-4l-3 9-6-18-3 9H2" />)
export const AlertTriangle = createIcon(<><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0" /><path d="M12 9v4" /><path d="M12 17h.01" /></>)
export const CheckCircle2 = createIcon(<><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>)
export const Database = createIcon(<><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>)
export const FileStack = createIcon(<><rect x="5" y="4" width="12" height="14" rx="2" /><path d="M9 8h4" /><path d="M9 12h4" /><path d="M7 20h12" /></>)
export const Sparkles = createIcon(<><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 3 .8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8L19 3Z" /><path d="m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" /></>)
export const Stethoscope = createIcon(<><path d="M11 2v8a3 3 0 1 1-6 0V7" /><path d="M18 2v8a4 4 0 1 1-8 0" /><circle cx="18" cy="16" r="2" /><path d="M20 16h1" /></>)
export const ChevronDown = createIcon(<path d="m6 9 6 6 6-6" />)
export const Check = createIcon(<path d="M20 6 9 17l-5-5" />)
export const Workflow = createIcon(<><rect x="3" y="4" width="6" height="6" rx="1" /><rect x="15" y="4" width="6" height="6" rx="1" /><rect x="9" y="14" width="6" height="6" rx="1" /><path d="M9 7h6" /><path d="M12 10v4" /></>)
export const Clock3 = createIcon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /></>)
export const Siren = createIcon(<><path d="M8 18h8" /><path d="M10 18v-6a2 2 0 0 1 4 0v6" /><path d="M5 18h14" /><path d="m8 5-2-2" /><path d="m16 5 2-2" /><path d="M12 2v2" /></>)
export const Zap = createIcon(<path d="M13 2 3 14h7l-1 8 10-12h-7z" />)
