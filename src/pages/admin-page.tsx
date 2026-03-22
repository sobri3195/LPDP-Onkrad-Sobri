import { datasetStatus } from '@/data/mock-data'
import { DatasetStatusCard } from '@/components/shared/cards'
import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AdminPage() {
  return (
    <div className="page-stack">
      <SectionHeading eyebrow="Admin / data management" title="Dataset health, pipeline readiness, and access placeholders" description="A clean operational surface for dataset summary, ingestion monitoring, model versioning, and future governance controls." />
      <div className="four-col-grid">
        {datasetStatus.map((item) => <DatasetStatusCard key={item.name} item={item} />)}
      </div>
      <div className="two-col-grid">
        <Card>
          <CardHeader>
            <CardTitle>Import / update status</CardTitle>
            <CardDescription>Pipeline indicators and placeholder operational notes.</CardDescription>
          </CardHeader>
          <CardContent className="stack-sm">
            <div className="soft-panel">
              <div className="row-wrap-between"><p className="compact-title">DICOM feed ingestion</p><Badge variant="success">Healthy</Badge></div>
              <p className="muted-text">14 source centers synced in the last 24 hours.</p>
            </div>
            <div className="soft-panel">
              <div className="row-wrap-between"><p className="compact-title">Feature store refresh</p><Badge variant="warning">2 pending</Badge></div>
              <p className="muted-text">Awaiting validation on two external cohort uploads.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Access control placeholders</CardTitle>
            <CardDescription>Prepared placeholders for identity, permissions, and audit governance.</CardDescription>
          </CardHeader>
          <CardContent className="stack-sm muted-text">
            <p>• Administrator: pipeline monitoring, version promotion, data governance approvals.</p>
            <p>• Clinician: case review, explainability interpretation, patient communication tools.</p>
            <p>• Medical physicist: dosimetric validation, optimization notes, QA sign-off.</p>
            <p>• Observer / auditor: read-only traceability access.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
