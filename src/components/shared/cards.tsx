import type { ReactNode } from 'react'
import { Activity, AlertTriangle, CheckCircle2, Database, FileStack, ShieldCheck, Sparkles, Stethoscope } from '@/lib/icons'
import type { SimilarCase } from '@/data/mock-data'
import { formatDecimal } from '@/lib/utils'
import { Alert } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'

export function PatientSummaryCard({ patient }: { patient: { id: string; age: number; diagnosis: string; stage: string; performanceStatus: string; technique: string; treatingIntent: string; physician: string } }) {
  const entries = [
    ['Patient ID', patient.id],
    ['Age', `${patient.age} years`],
    ['Diagnosis', patient.diagnosis],
    ['Stage', patient.stage],
    ['Performance', patient.performanceStatus],
    ['Technique', patient.technique],
    ['Intent', patient.treatingIntent],
    ['Lead physician', patient.physician],
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle className="card-title--icon"><Stethoscope size={18} /> Patient summary</CardTitle>
        <CardDescription>Core clinical context used to anchor cohort matching and planning review.</CardDescription>
      </CardHeader>
      <CardContent className="metrics-grid">
        {entries.map(([label, value]) => <Metric key={label} label={label} value={value} />)}
      </CardContent>
    </Card>
  )
}

export function TreatmentPlanCard({ plan }: { plan: { prescription: string; targetCoverage: number; conformityIndex: number; homogeneityIndex: number; optimizationAreas: string[]; benchmarkRank: string } }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="card-title--icon"><Activity size={18} /> Current treatment plan</CardTitle>
        <CardDescription>Dosimetric highlights and optimization opportunities before physician approval.</CardDescription>
      </CardHeader>
      <CardContent className="stack-md">
        <div className="metrics-grid">
          <Metric label="Prescription" value={plan.prescription} />
          <Metric label="Benchmark rank" value={plan.benchmarkRank} />
          <Metric label="Conformity index" value={formatDecimal(plan.conformityIndex, 2)} />
          <Metric label="Homogeneity index" value={formatDecimal(plan.homogeneityIndex, 2)} />
        </div>
        <div>
          <div className="row-between"><span className="muted-text">Target coverage</span><strong>{plan.targetCoverage}%</strong></div>
          <Progress value={plan.targetCoverage} />
        </div>
        <div className="stack-sm">
          <p className="card-subtitle">Suggested optimization areas</p>
          {plan.optimizationAreas.map((item) => <Alert key={item}>{item}</Alert>)}
        </div>
      </CardContent>
    </Card>
  )
}

export function SimilarCaseCard({ caseItem }: { caseItem: SimilarCase }) {
  const riskVariant = caseItem.toxicity === 'Low' ? 'success' : caseItem.toxicity === 'Moderate' ? 'warning' : 'danger'
  return (
    <Card className="card--compact">
      <CardContent className="stack-md">
        <div className="row-wrap-between">
          <div>
            <div className="row-inline">
              <h3 className="compact-title">{caseItem.id}</h3>
              <Badge variant="slate">{caseItem.region}</Badge>
            </div>
            <p className="muted-text">{caseItem.diagnosis} · Stage {caseItem.stage} · {caseItem.technique}</p>
          </div>
          <Badge variant="default">Similarity {caseItem.similarity}%</Badge>
        </div>
        <div className="metrics-grid metrics-grid--two">
          <Metric label="2-year local control" value={`${caseItem.localControl}%`} />
          <Metric label="Toxicity profile" value={<Badge variant={riskVariant}>{caseItem.toxicity}</Badge>} />
        </div>
        <p className="muted-text">{caseItem.note}</p>
      </CardContent>
    </Card>
  )
}

export function MatchConfidenceCard({ score }: { score: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="card-title--icon"><Sparkles size={18} /> Match confidence</CardTitle>
        <CardDescription>Composite similarity score derived from anatomy, dosimetry, disease stage, and treatment context.</CardDescription>
      </CardHeader>
      <CardContent className="stack-md centered-block">
        <div>
          <p className="score-display">{score}%</p>
          <p className="muted-text">High-confidence alignment with matched successful cohort.</p>
        </div>
        <Progress value={score} className="progress--lg" />
        <div className="metrics-grid metrics-grid--three">
          <Metric label="Anatomy" value="High" />
          <Metric label="Dosimetry" value="High" />
          <Metric label="Treatment context" value="Moderate" />
        </div>
      </CardContent>
    </Card>
  )
}

export function OutcomeChartCard({ data }: { data: Array<{ month: string; currentPlan: number; matchedCohort: number; bestQuartile: number }> }) {
  const width = 600
  const height = 220
  const padding = 24
  const max = 100
  const x = (index: number) => padding + (index * (width - padding * 2)) / Math.max(data.length - 1, 1)
  const y = (value: number) => height - padding - ((value / max) * (height - padding * 2))
  const linePath = (key: 'currentPlan' | 'matchedCohort' | 'bestQuartile') => data.map((item, index) => `${index === 0 ? 'M' : 'L'} ${x(index)} ${y(item[key])}`).join(' ')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Outcome comparison chart</CardTitle>
        <CardDescription>Illustrative probability trends against matched cohort and top quartile reference.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="chart">
          <svg viewBox={`0 0 ${width} ${height}`} className="chart__svg" role="img" aria-label="Outcome comparison chart">
            {[20, 40, 60, 80].map((value) => <line key={value} x1={padding} x2={width - padding} y1={y(value)} y2={y(value)} className="chart__grid" />)}
            <path d={linePath('currentPlan')} className="chart__line chart__line--primary" />
            <path d={linePath('matchedCohort')} className="chart__line chart__line--secondary" />
            <path d={linePath('bestQuartile')} className="chart__line chart__line--success" />
            {data.map((item, index) => <circle key={item.month} cx={x(index)} cy={y(item.currentPlan)} r="4" className="chart__point" />)}
          </svg>
          <div className="chart__legend">
            <span><i className="legend-dot legend-dot--primary" /> Current plan</span>
            <span><i className="legend-dot legend-dot--secondary" /> Matched cohort</span>
            <span><i className="legend-dot legend-dot--success" /> Best quartile</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function QualityScoreCard({ score, benchmark }: { score: number; benchmark: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plan quality score</CardTitle>
        <CardDescription>Aggregated plan performance benchmarked to matched successful plans.</CardDescription>
      </CardHeader>
      <CardContent className="stack-md">
        <div className="row-wrap-between align-end">
          <div>
            <p className="score-display">{score}</p>
            <p className="muted-text">out of 100</p>
          </div>
          <Badge variant="success">{benchmark}</Badge>
        </div>
        <Progress value={score} className="progress--lg" />
      </CardContent>
    </Card>
  )
}

export function ExplainabilityCard({ factors }: { factors: Array<{ factor: string; weight: number; detail: string }> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="card-title--icon"><ShieldCheck size={18} /> Explainability signals</CardTitle>
        <CardDescription>Top variables contributing to cohort matching and confidence.</CardDescription>
      </CardHeader>
      <CardContent className="stack-md">
        {factors.map((factor) => (
          <div key={factor.factor} className="soft-panel">
            <div className="row-wrap-between">
              <p className="compact-title">{factor.factor}</p>
              <Badge variant="slate">{factor.weight}% weight</Badge>
            </div>
            <Progress value={factor.weight} />
            <p className="muted-text">{factor.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function HopeVisualizationCard() {
  return (
    <Card className="card--gradient">
      <CardHeader>
        <CardTitle>Hope visualization</CardTitle>
        <CardDescription>A patient-friendly framing to support conversations about why the plan shows promise.</CardDescription>
      </CardHeader>
      <CardContent className="stack-md">
        <div className="metrics-grid metrics-grid--three">
          <Metric label="Patients with similar profiles" value="4,212" />
          <Metric label="Comparable plans with strong control" value="83%" />
          <Metric label="Expected explainability confidence" value="Transparent" />
        </div>
        <div className="soft-panel soft-panel--white">
          <p className="copy-block">This plan resembles many previously successful treatments in people with similar disease stage and anatomy. That does not guarantee the same outcome, but it helps clinicians explain why the plan appears strong and where they are watching carefully.</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function RiskAlertCard({ title, detail, severity }: { title: string; detail: string; severity: string }) {
  const variant = severity === 'Elevated' ? 'danger' : severity === 'Moderate' ? 'warning' : 'slate'
  return (
    <Card>
      <CardContent className="risk-alert">
        <div className="risk-alert__icon"><AlertTriangle size={18} /></div>
        <div className="stack-sm">
          <div className="row-wrap-between">
            <p className="compact-title">{title}</p>
            <Badge variant={variant}>{severity}</Badge>
          </div>
          <p className="muted-text">{detail}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function FilterPanel({ title, description, filters }: { title?: string; description?: string; filters: Array<{ label: string; control: ReactNode }> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title ?? 'Filters'}</CardTitle>
        <CardDescription>{description ?? 'Refine the cohort, ranking, and chart views with structured controls.'}</CardDescription>
      </CardHeader>
      <CardContent className="filters-grid">
        {filters.map((filter) => (
          <div key={filter.label} className="stack-sm">
            <label className="field-label">{filter.label}</label>
            {filter.control}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function DatasetStatusCard({ item }: { item: { name: string; value: string; meta: string } }) {
  return (
    <Card>
      <CardContent className="dataset-card">
        <div className="dataset-card__icon"><Database size={18} /></div>
        <div>
          <p className="muted-label">{item.name}</p>
          <p className="dataset-card__value">{item.value}</p>
          <p className="muted-text">{item.meta}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function SearchableSimilarCases({ cases }: { cases: SimilarCase[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="card-title--icon"><FileStack size={18} /> Search matched cases</CardTitle>
        <CardDescription>Use dummy search input to demonstrate discoverability and clinician workflows.</CardDescription>
      </CardHeader>
      <CardContent className="stack-md">
        <Input placeholder="Search by case ID, region, or technique" />
        <div className="stack-md">
          {cases.map((caseItem) => <SimilarCaseCard key={caseItem.id} caseItem={caseItem} />)}
        </div>
      </CardContent>
    </Card>
  )
}

export function DistributionHeatmapCard({ data }: { data: Array<{ segment: string; score: number }> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Outcome distribution heatmap</CardTitle>
        <CardDescription>Illustrative cohort performance bands by stage and delivery technique.</CardDescription>
      </CardHeader>
      <CardContent className="heatmap-grid">
        {data.map((item) => (
          <div key={item.segment} className="heatmap-cell" style={{ opacity: Math.max(0.45, item.score / 100) }}>
            <p className="compact-title">{item.segment}</p>
            <p className="muted-text">Composite score: {item.score}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function TrendChartCard({ data }: { data: Array<{ label: string; survival: number; toxicityFree: number; sample: number }> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Regional trend charts</CardTitle>
        <CardDescription>Mock outcomes, toxicity-free survival, and sample size trends across regions.</CardDescription>
      </CardHeader>
      <CardContent className="bar-chart">
        {data.map((item) => (
          <div key={item.label} className="bar-chart__group">
            <div className="bar-chart__bars">
              <div className="bar-chart__bar bar-chart__bar--primary" style={{ height: `${item.survival}%` }} />
              <div className="bar-chart__bar bar-chart__bar--success" style={{ height: `${item.toxicityFree}%` }} />
            </div>
            <p className="bar-chart__label">{item.label}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function EmptyStateCard() {
  return (
    <Card className="card--dashed">
      <CardContent className="empty-state">
        <CheckCircle2 size={38} className="empty-state__icon" />
        <div>
          <p className="compact-title">No unresolved blockers</p>
          <p className="muted-text">This placeholder empty state is ready for future workflow queues or approvals.</p>
        </div>
        <Button variant="outline">Create placeholder workflow</Button>
      </CardContent>
    </Card>
  )
}

function Metric({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="metric-tile">
      <p className="metric-tile__label">{label}</p>
      <div className="metric-tile__value">{value}</div>
    </div>
  )
}
