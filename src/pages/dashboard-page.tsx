import { Clock3, Siren, Zap, ArrowRight } from '@/lib/icons'
import { Link } from 'react-router-dom'
import { alerts, dashboardStats, quickAccess, recentComparisons } from '@/data/mock-data'
import { EmptyStateCard, RiskAlertCard } from '@/components/shared/cards'
import { SectionHeading } from '@/components/shared/section-heading'
import { StatCard } from '@/components/shared/stat-card'
import { ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const quickIcons = [Zap, Clock3, Siren]

export function DashboardPage() {
  return (
    <div className="page-stack">
      <SectionHeading eyebrow="Dashboard" title="Clinical review operations at a glance" description="Monitor recent plan comparisons, identify caution areas quickly, and jump into matched-case or plan analysis workflows." actions={<ButtonLink to="/case-comparison">Review active case <ArrowRight size={16} /></ButtonLink>} />
      <div className="four-col-grid">
        {dashboardStats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
      </div>
      <div className="two-one-grid wide-left">
        <Card>
          <CardHeader>
            <CardTitle>Recent patient plan comparisons</CardTitle>
            <CardDescription>Illustrative worklist of recently reviewed plans and confidence scores.</CardDescription>
          </CardHeader>
          <CardContent className="stack-sm">
            {recentComparisons.map((item) => (
              <div key={item.patient} className="list-row">
                <div>
                  <div className="row-inline"><p className="compact-title">{item.patient}</p><Badge variant="slate">{item.technique}</Badge></div>
                  <p className="muted-text">{item.diagnosis}</p>
                </div>
                <div className="list-row__right">
                  <p className="compact-title">Confidence {item.confidence}%</p>
                  <p className="muted-text">{item.status}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick access</CardTitle>
            <CardDescription>Shortcuts into the most-used workflow areas.</CardDescription>
          </CardHeader>
          <CardContent className="stack-sm">
            {quickAccess.map((item, index) => {
              const Icon = quickIcons[index]
              return (
                <Link key={item.title} to={item.href} className="quick-link">
                  <div className="quick-link__icon"><Icon size={18} /></div>
                  <div>
                    <p className="compact-title">{item.title}</p>
                    <p className="muted-text">{item.description}</p>
                  </div>
                </Link>
              )
            })}
          </CardContent>
        </Card>
      </div>
      <div className="two-col-grid">
        <div className="stack-md">
          <SectionHeading title="Alerts & recommendations" description="Caution signals surfaced from plan variance, confidence changes, and cohort outliers." />
          {alerts.map((alert) => <RiskAlertCard key={alert.title} {...alert} />)}
        </div>
        <div className="stack-md">
          <SectionHeading title="Empty state example" description="A ready placeholder for queues without unresolved issues." />
          <EmptyStateCard />
        </div>
      </div>
    </div>
  )
}
