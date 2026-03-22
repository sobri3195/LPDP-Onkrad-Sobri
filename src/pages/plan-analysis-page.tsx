import { alerts, doseDistribution, organRiskMetrics, treatmentPlan } from '@/data/mock-data'
import { QualityScoreCard, RiskAlertCard } from '@/components/shared/cards'
import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function PlanAnalysisPage() {
  return (
    <div className="page-stack">
      <SectionHeading eyebrow="Treatment plan analysis" title="Dose distribution, OAR metrics, and benchmark review" description="A production-ready plan analysis page with quality scoring, comparative metrics, and targeted optimization suggestions." />
      <div className="two-one-grid narrow-left">
        <QualityScoreCard score={treatmentPlan.qualityScore} benchmark={treatmentPlan.benchmarkRank} />
        <Card>
          <CardHeader>
            <CardTitle>Dose distribution summary</CardTitle>
            <CardDescription>Current plan metrics compared against matched successful cohort benchmarks.</CardDescription>
          </CardHeader>
          <CardContent className="stack-sm">
            {doseDistribution.map((item) => (
              <div key={item.structure} className="list-row list-row--compact">
                <p className="compact-title">{item.structure}</p>
                <p className="muted-text">Planned: {item.planned}{item.structure.includes('PTV') ? '%' : ' Gy'}</p>
                <p className="muted-text">Benchmark: {item.benchmark}{item.structure.includes('PTV') ? '%' : ' Gy'}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="two-one-grid wide-left">
        <Card>
          <CardHeader>
            <CardTitle>Organ-at-risk metrics</CardTitle>
            <CardDescription>Highlights where the current plan falls inside or near benchmark thresholds.</CardDescription>
          </CardHeader>
          <CardContent className="two-col-grid">
            {organRiskMetrics.map((metric) => (
              <div key={metric.organ} className="metric-tile">
                <div className="row-wrap-between">
                  <p className="compact-title">{metric.organ}</p>
                  <Badge variant={metric.status === 'Watchlist' ? 'warning' : 'success'}>{metric.status}</Badge>
                </div>
                <p className="muted-text">{metric.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="stack-md">
          <Card>
            <CardHeader>
              <CardTitle>Suggested optimization areas</CardTitle>
              <CardDescription>Current plan focus areas prior to sign-off.</CardDescription>
            </CardHeader>
            <CardContent className="stack-sm">
              {treatmentPlan.optimizationAreas.map((item) => <div key={item} className="soft-panel">{item}</div>)}
            </CardContent>
          </Card>
          {alerts.map((alert) => <RiskAlertCard key={alert.title} {...alert} />)}
        </div>
      </div>
    </div>
  )
}
