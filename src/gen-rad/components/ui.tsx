import React, { useMemo, useState } from 'react'

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn('gr-card', className)}>{children}</section>
}

export function Badge({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'brand' | 'success' | 'warning' | 'danger' }) {
  return <span className={cn('gr-badge', `gr-badge-${tone}`)}>{children}</span>
}

export function Button({
  children,
  href,
  variant = 'primary',
}: {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}) {
  const className = cn('gr-button', `gr-button-${variant}`)

  if (href) {
    return <a className={className} href={href}>{children}</a>
  }

  return <button type="button" className={className}>{children}</button>
}

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  return (
    <div className="gr-progress-wrap">
      {label ? <div className="gr-progress-label"><span>{label}</span><strong>{value}%</strong></div> : null}
      <div className="gr-progress-track">
        <div className="gr-progress-fill" style={{ width: `${Math.max(0, Math.min(value, 100))}%` }} />
      </div>
    </div>
  )
}

export function Alert({
  title,
  description,
  tone = 'warning',
}: {
  title: string
  description: string
  tone?: 'success' | 'warning' | 'danger'
}) {
  return (
    <div className={cn('gr-alert', `gr-alert-${tone}`)}>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export function SkeletonList() {
  return (
    <div className="gr-skeleton-list" aria-hidden="true">
      {[1, 2, 3].map((item) => (
        <div className="gr-skeleton-card" key={item}>
          <div className="gr-skeleton-line gr-skeleton-line-lg" />
          <div className="gr-skeleton-line" />
          <div className="gr-skeleton-line gr-skeleton-line-sm" />
        </div>
      ))}
    </div>
  )
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card className="gr-empty-state">
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  )
}

export function Tabs({
  tabs,
  defaultValue,
}: {
  tabs: Array<{ label: string; value: string; content: React.ReactNode }>
  defaultValue?: string
}) {
  const initial = useMemo(() => defaultValue ?? tabs[0]?.value ?? '', [defaultValue, tabs])
  const [active, setActive] = useState(initial)
  const current = tabs.find((tab) => tab.value === active) ?? tabs[0]

  return (
    <div className="gr-tabs">
      <div className="gr-tab-list" role="tablist" aria-label="Gen-Rad Guardian tabs">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={tab.value === current?.value}
            className={cn('gr-tab-trigger', tab.value === current?.value && 'active')}
            onClick={() => setActive(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="gr-tab-panel">{current?.content}</div>
    </div>
  )
}
