import React from 'react'
import { Card, Badge, ProgressBar } from './ui'
import type { AssessmentRecord, RiskFactor, ScreeningRecommendation } from '../data'

export function StatCard({ label, value, helper, tone = 'brand' }: { label: string; value: string; helper: string; tone?: 'brand' | 'success' | 'warning' | 'danger' }) {
  return (
    <Card className="gr-stat-card">
      <Badge tone={tone}>{label}</Badge>
      <h3>{value}</h3>
      <p>{helper}</p>
    </Card>
  )
}

export function RiskScoreCard({ score, level, summary }: { score: number; level: string; summary: string }) {
  const angle = Math.round((score / 100) * 360)
  return (
    <Card className="gr-risk-score-card">
      <div className="gr-score-ring" style={{ background: `conic-gradient(var(--gr-danger) ${angle}deg, rgba(148, 163, 184, 0.16) ${angle}deg)` }}>
        <div>
          <strong>{score}</strong>
          <span>/100</span>
        </div>
      </div>
      <div className="gr-risk-score-copy">
        <Badge tone="danger">{level} risk</Badge>
        <h3>Overall risk score</h3>
        <p>{summary}</p>
      </div>
    </Card>
  )
}

export function RiskFactorCard({ factor }: { factor: RiskFactor }) {
  const tone = factor.trend === 'Improving' ? 'success' : factor.trend === 'Worsening' ? 'danger' : 'warning'
  return (
    <Card className="gr-factor-card">
      <div className="gr-factor-header">
        <div>
          <Badge tone="brand">{factor.category}</Badge>
          <h3>{factor.title}</h3>
        </div>
        <Badge tone={tone}>{factor.trend}</Badge>
      </div>
      <p>{factor.detail}</p>
      <ProgressBar value={factor.score} label={factor.impact} />
    </Card>
  )
}

export function ExposureSummaryCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h3>{title}</h3>
      <ul className="gr-bullet-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </Card>
  )
}

export function LifestyleProfileCard({ metrics }: { metrics: Array<{ label: string; value: number; note: string }> }) {
  return (
    <Card>
      <h3>Lifestyle profile</h3>
      <div className="gr-profile-metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="gr-mini-metric">
            <div className="gr-mini-metric-head">
              <span>{metric.label}</span>
              <strong>{metric.value}%</strong>
            </div>
            <ProgressBar value={metric.value} />
            <p>{metric.note}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export function ScreeningRecommendationCard({ item }: { item: ScreeningRecommendation }) {
  const tone = item.priority === 'High priority' ? 'danger' : item.priority === 'Planned' ? 'warning' : 'brand'
  return (
    <Card className="gr-screening-card">
      <div className="gr-factor-header">
        <div>
          <h3>{item.name}</h3>
          <p>{item.rationale}</p>
        </div>
        <Badge tone={tone}>{item.priority}</Badge>
      </div>
      <dl className="gr-detail-grid">
        <div><dt>Age / timing</dt><dd>{item.ageWindow}</dd></div>
        <div><dt>Cadence</dt><dd>{item.cadence}</dd></div>
        <div><dt>Preparation</dt><dd>{item.preparation}</dd></div>
        <div><dt>Referral guidance</dt><dd>{item.referral}</dd></div>
      </dl>
    </Card>
  )
}

export function EducationInsightCard({ title, body, tag }: { title: string; body: string; tag: string }) {
  return (
    <Card>
      <Badge tone="success">{tag}</Badge>
      <h3>{title}</h3>
      <p>{body}</p>
    </Card>
  )
}

export function TrendChartCard({ title, data }: { title: string; data: AssessmentRecord[] }) {
  const max = Math.max(...data.map((item) => item.score), 100)
  const points = data.map((item, index) => `${(index / (data.length - 1 || 1)) * 100},${100 - (item.score / max) * 100}`).join(' ')
  return (
    <Card>
      <div className="gr-chart-head">
        <div>
          <h3>{title}</h3>
          <p>Visualisasi perubahan risiko preventif dari waktu ke waktu.</p>
        </div>
      </div>
      <svg viewBox="0 0 100 100" className="gr-line-chart" role="img" aria-label={title}>
        <polyline fill="none" stroke="rgba(99,102,241,.25)" strokeWidth="2" points="0,100 100,100" />
        <polyline fill="none" stroke="url(#trendGradient)" strokeWidth="3" points={points} />
        <defs>
          <linearGradient id="trendGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="gr-chart-labels">
        {data.map((item) => <span key={item.month}>{item.month}</span>)}
      </div>
    </Card>
  )
}

export function ExplainabilityCard({ title, description, confidence }: { title: string; description: string; confidence: string }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="gr-note-box">{confidence}</div>
    </Card>
  )
}

export function AlertCard({ title, description, tone }: { title: string; description: string; tone: 'success' | 'warning' | 'danger' }) {
  return (
    <Card className={`gr-inline-alert gr-inline-alert-${tone}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  )
}

export function TimelineCard({ items }: { items: Array<{ step: string; detail: string; owner: string }> }) {
  return (
    <Card>
      <h3>Recommendation traceability</h3>
      <div className="gr-timeline">
        {items.map((item) => (
          <div key={item.step} className="gr-timeline-item">
            <strong>{item.step}</strong>
            <p>{item.detail}</p>
            <span>{item.owner}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

export function PreventionChecklistCard({ items }: { items: string[] }) {
  return (
    <Card>
      <h3>Prevention checklist</h3>
      <ul className="gr-check-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </Card>
  )
}

export function CohortInsightCard({ title, metric, description }: { title: string; metric: string; description: string }) {
  return (
    <Card>
      <Badge tone="brand">Population insight</Badge>
      <h3>{title}</h3>
      <strong className="gr-emphasis">{metric}</strong>
      <p>{description}</p>
    </Card>
  )
}

export function DatasetStatusCard({ label, value, helper }: { label: string; value: string; helper: string }) {
  return (
    <Card className="gr-dataset-card">
      <p>{label}</p>
      <h3>{value}</h3>
      <span>{helper}</span>
    </Card>
  )
}
