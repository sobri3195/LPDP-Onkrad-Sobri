import { CheckCircle2, Clock3, ShieldAlert } from '@/lib/icons'
import { auditTrail, explainabilityFactors } from '@/data/mock-data'
import { ExplainabilityCard } from '@/components/shared/cards'
import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ExplainabilityPage() {
  return (
    <div className="page-stack">
      <SectionHeading eyebrow="Explainability & audit" title="Transparent matching logic, confidence framing, and audit trail" description="Clarify why the current case matched, which factors mattered, and where clinician validation remains essential." />
      <div className="two-one-grid wide-left">
        <ExplainabilityCard factors={explainabilityFactors} />
        <Card>
          <CardHeader>
            <CardTitle>Model transparency notes</CardTitle>
            <CardDescription>High-level explanation of how confidence should be interpreted.</CardDescription>
          </CardHeader>
          <CardContent className="stack-md muted-text">
            <div className="icon-copy"><CheckCircle2 size={16} className="icon-copy__icon icon-copy__icon--green" /><p>Confidence reflects cohort similarity and stability of matched features—not certainty of clinical outcome.</p></div>
            <div className="icon-copy"><ShieldAlert size={16} className="icon-copy__icon icon-copy__icon--amber" /><p>Lower confidence can arise from limited cohort representation, unusual anatomy, or missing follow-up depth.</p></div>
            <div className="icon-copy"><Clock3 size={16} className="icon-copy__icon icon-copy__icon--blue" /><p>Audit timestamps and dataset versions should be reviewed whenever new data ingestion changes the recommendation context.</p></div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Audit trail</CardTitle>
          <CardDescription>Placeholder timeline documenting key pipeline and review events for governance.</CardDescription>
        </CardHeader>
        <CardContent className="stack-sm">
          {auditTrail.map((item) => (
            <div key={item.step} className="list-row">
              <div>
                <p className="compact-title">{item.step}</p>
                <p className="muted-text">{item.note}</p>
              </div>
              <Badge variant={item.status === 'Pending' ? 'warning' : 'success'}>{item.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="disclaimer-box">
        <p className="disclaimer-box__title">Validation disclaimer</p>
        <p>This interface is a supportive planning and communication aid. It is not a substitute for physician judgment, peer review, quality assurance, or institutional protocol compliance.</p>
      </div>
    </div>
  )
}
