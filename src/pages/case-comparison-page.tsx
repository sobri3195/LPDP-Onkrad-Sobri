import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExplainabilityCard, HopeVisualizationCard, MatchConfidenceCard, OutcomeChartCard, PatientSummaryCard, RiskAlertCard, SearchableSimilarCases, TreatmentPlanCard } from '@/components/shared/cards'
import { SectionHeading } from '@/components/shared/section-heading'
import { alerts, explainabilityFactors, outcomeSeries, patientSummary, similarCases, treatmentPlan } from '@/data/mock-data'

export function CaseComparisonPage() {
  return (
    <div className="page-stack">
      <SectionHeading eyebrow="Case comparison" title="RC-2417 compared against globally similar successful plans" description="Review patient context, matched-case evidence, explainable confidence signals, and a patient-facing hope narrative in one workspace." />
      <Tabs defaultValue="patient">
        <TabsList>
          <TabsTrigger value="patient">Patient</TabsTrigger>
          <TabsTrigger value="plan">Plan</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          <TabsTrigger value="explainability">Explainability</TabsTrigger>
        </TabsList>
        <TabsContent value="patient" className="stack-md">
          <div className="two-one-grid wide-left">
            <PatientSummaryCard patient={patientSummary} />
            <MatchConfidenceCard score={94} />
          </div>
          <HopeVisualizationCard />
        </TabsContent>
        <TabsContent value="plan" className="stack-md">
          <div className="two-one-grid wide-left">
            <TreatmentPlanCard plan={treatmentPlan} />
            <div className="stack-md">{alerts.map((alert) => <RiskAlertCard key={alert.title} {...alert} />)}</div>
          </div>
        </TabsContent>
        <TabsContent value="outcomes" className="stack-md">
          <OutcomeChartCard data={outcomeSeries} />
          <SearchableSimilarCases cases={similarCases} />
        </TabsContent>
        <TabsContent value="explainability" className="stack-md">
          <ExplainabilityCard factors={explainabilityFactors} />
          <div className="disclaimer-box">
            <p className="disclaimer-box__title">Validation note</p>
            <p>These insights are supportive only and must be validated by qualified medical professionals before any treatment decision or patient communication.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
