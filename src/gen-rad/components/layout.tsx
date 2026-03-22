import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Badge } from './ui'

const navItems = [
  { to: '/projects/gen-rad-guardian', label: 'Landing' },
  { to: '/projects/gen-rad-guardian/dashboard', label: 'Dashboard' },
  { to: '/projects/gen-rad-guardian/profile', label: 'Risk Profile' },
  { to: '/projects/gen-rad-guardian/recommendations', label: 'Screening' },
  { to: '/projects/gen-rad-guardian/monitoring', label: 'Monitoring' },
  { to: '/projects/gen-rad-guardian/education', label: 'Education' },
  { to: '/projects/gen-rad-guardian/explainability', label: 'Explainability' },
  { to: '/projects/gen-rad-guardian/admin', label: 'Admin' },
]

export function SidebarNav() {
  return (
    <aside className="gr-sidebar">
      <Link to="/projects/gen-rad-guardian" className="gr-brand-mark">
        <div className="gr-brand-orb" />
        <div>
          <strong>Gen-Rad Guardian</strong>
          <span>Preventive cancer risk platform</span>
        </div>
      </Link>
      <div className="gr-sidebar-disclaimer">
        <Badge tone="warning">Supportive use only</Badge>
        <p>Bukan diagnosis dan bukan pengganti keputusan klinis dokter.</p>
      </div>
      <nav className="gr-sidebar-nav" aria-label="Gen-Rad Guardian navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to.endsWith('guardian')} className={({ isActive }) => isActive ? 'active' : ''}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export function HeaderBar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="gr-header-bar">
      <div>
        <p className="gr-eyebrow">AI-powered screening support</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="gr-header-actions">
        <Badge tone="danger">Clinical review required</Badge>
        <Link to="/projects" className="gr-header-link">← Kembali ke Karya Sobri</Link>
      </div>
    </header>
  )
}

export function AppShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="gr-shell">
      <SidebarNav />
      <div className="gr-shell-main">
        <HeaderBar title={title} subtitle={subtitle} />
        <div className="gr-shell-content">{children}</div>
      </div>
    </div>
  )
}
