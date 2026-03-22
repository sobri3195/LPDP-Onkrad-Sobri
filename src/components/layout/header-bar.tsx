import { Bell, Menu, Search, ShieldAlert } from '@/lib/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function HeaderBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="header-bar">
      <div className="header-bar__left">
        <Button variant="outline" size="sm" className="header-bar__menu" onClick={onMenuClick}>
          <Menu size={16} /> Menu
        </Button>
        <div className="header-bar__search-wrap">
          <Search className="header-bar__search-icon" size={16} />
          <Input className="header-bar__search" placeholder="Search patient ID, diagnosis, cohort..." />
        </div>
      </div>
      <div className="header-bar__right">
        <Badge variant="warning" className="header-bar__badge">Clinical decision-support only</Badge>
        <Button variant="outline" size="sm"><ShieldAlert size={16} /> Validation disclaimer</Button>
        <button type="button" className="header-bar__bell"><Bell size={16} /><span className="header-bar__dot" /></button>
      </div>
    </header>
  )
}
