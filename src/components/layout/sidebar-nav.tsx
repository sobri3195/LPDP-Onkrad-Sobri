import { BrainCircuit, DatabaseZap, FileBarChart2, Globe2, HeartPulse, LayoutDashboard, ShieldCheck } from '@/lib/icons'
import { NavLink } from 'react-router-dom'
import { navItems } from '@/data/mock-data'
import { cn } from '@/lib/utils'

const icons = [HeartPulse, LayoutDashboard, BrainCircuit, FileBarChart2, Globe2, ShieldCheck, DatabaseZap] as const

export function SidebarNav({ mobile = false }: { mobile?: boolean }) {
  return (
    <aside className={cn('sidebar', mobile && 'sidebar sidebar--mobile')}>
      <div className="sidebar__brand">
        <div className="sidebar__brand-icon"><HeartPulse size={24} /></div>
        <div>
          <p className="sidebar__brand-title">RadioCurate AI</p>
          <p className="sidebar__brand-subtitle">Radiotherapy planning support</p>
        </div>
      </div>

      <nav className="sidebar__nav">
        {navItems.map((item, index) => {
          const Icon = icons[index]
          return (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => cn('sidebar__link', isActive && 'sidebar__link--active')}>
              <div className="sidebar__link-icon"><Icon size={16} /></div>
              <div>
                <p className="sidebar__link-title">{item.title}</p>
                <p className="sidebar__link-description">{item.description}</p>
              </div>
            </NavLink>
          )
        })}
      </nav>

      <div className="sidebar__notice">
        <p className="sidebar__notice-title">Supportive AI only</p>
        <p>All recommendations require clinician, physicist, and institutional validation before use.</p>
      </div>
    </aside>
  )
}
