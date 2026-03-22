import { ArrowDownRight, ArrowRight, ArrowUpRight } from '@/lib/icons'
import type { Stat } from '@/data/mock-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const trendIcon = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  neutral: ArrowRight,
}

const trendVariant = {
  up: 'success',
  down: 'danger',
  neutral: 'slate',
} as const

export function StatCard({ stat }: { stat: Stat }) {
  const Icon = trendIcon[stat.trend]
  return (
    <Card>
      <CardHeader className="card__header--inline">
        <div>
          <p className="muted-label">{stat.label}</p>
          <CardTitle className="stat-card__value">{stat.value}</CardTitle>
        </div>
        <Badge variant={trendVariant[stat.trend]} className="badge--with-icon"><Icon size={14} /> {stat.trend}</Badge>
      </CardHeader>
      <CardContent>
        <p className="muted-text">{stat.delta}</p>
      </CardContent>
    </Card>
  )
}
