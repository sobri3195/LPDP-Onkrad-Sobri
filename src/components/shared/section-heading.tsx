import type { ReactNode } from 'react'

export function SectionHeading({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
        <h1 className="section-heading__title">{title}</h1>
        {description ? <p className="section-heading__description">{description}</p> : null}
      </div>
      {actions ? <div className="section-heading__actions">{actions}</div> : null}
    </div>
  )
}
