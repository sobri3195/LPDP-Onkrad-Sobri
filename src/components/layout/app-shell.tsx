import { useState, type PropsWithChildren } from 'react'
import { X } from '@/lib/icons'
import { SidebarNav } from './sidebar-nav'
import { HeaderBar } from './header-bar'
import { Button } from '@/components/ui/button'

export function AppShell({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false)

  return (
    <div className="app-shell">
      <SidebarNav />
      {open ? (
        <div className="mobile-drawer" onClick={() => setOpen(false)}>
          <div className="mobile-drawer__panel" onClick={(event) => event.stopPropagation()}>
            <div className="mobile-drawer__top">
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}><X size={16} /></Button>
            </div>
            <SidebarNav mobile />
          </div>
        </div>
      ) : null}
      <div className="app-shell__main">
        <HeaderBar onMenuClick={() => setOpen(true)} />
        <main className="app-shell__content">{children}</main>
      </div>
    </div>
  )
}
