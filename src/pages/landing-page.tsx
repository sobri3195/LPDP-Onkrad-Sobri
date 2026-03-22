import { CheckCircle2, ShieldAlert, Sparkles, Workflow, ArrowRight } from '@/lib/icons'
import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'
import { ButtonLink } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const featureCards = [
  {
    title: 'Real-time plan comparison',
    description: 'Benchmark each radiotherapy plan against thousands of clinically similar cases with clear rationale and similarity scoring.',
    icon: Workflow,
  },
  {
    title: 'Explainable AI support',
    description: 'Surface why a case matched, which variables mattered most, and where confidence becomes less certain.',
    icon: Sparkles,
  },
  {
    title: 'Patient-friendly communication',
    description: 'Generate hope-oriented visuals and plain-language talking points that stay grounded in clinician-led counseling.',
    icon: CheckCircle2,
  },
]

export function LandingPage() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-grid">
          <div className="stack-lg">
            <Badge variant="default" className="hero-badge">AI-powered radiation therapy planning support</Badge>
            <div className="stack-md">
              <h1 className="hero-title">RadioCurate AI helps clinicians compare treatment plans with global evidence in real time.</h1>
              <p className="hero-copy">Review plan quality, compare expected outcomes, and explain the reasoning behind radiotherapy choices with a modern decision-support workspace designed for oncology teams.</p>
            </div>
            <div className="button-row">
              <ButtonLink to="/dashboard" size="lg">Open dashboard <ArrowRight size={16} /></ButtonLink>
              <ButtonLink to="/case-comparison" variant="outline" size="lg">See case comparison</ButtonLink>
            </div>
            <div className="disclaimer-box">
              <p className="disclaimer-box__title">Important clinical context</p>
              <p>RadioCurate AI is a clinical decision-support interface only. It is not a final diagnosis system and does not replace physician, physicist, or multidisciplinary review.</p>
            </div>
          </div>
          <div className="stack-md">
            <Card>
              <CardHeader>
                <CardTitle>How it works</CardTitle>
                <CardDescription>Data-driven support from intake to explainability.</CardDescription>
              </CardHeader>
              <CardContent className="stack-md">
                <div><p className="compact-title">1. Ingest and normalize</p><p className="muted-text">DICOM RT plans and structured clinical variables are harmonized into comparable features.</p></div>
                <div><p className="compact-title">2. Match against similar cases</p><p className="muted-text">Similarity engine compares current anatomy, plan geometry, and treatment context to curated successful plans.</p></div>
                <div><p className="compact-title">3. Explain and communicate</p><p className="muted-text">Clinicians review transparent drivers, caution signals, and patient-friendly hope narratives.</p></div>
              </CardContent>
            </Card>
            <Card className="card card--dark">
              <CardHeader>
                <CardTitle className="card__title card__title--light">Trust & safety</CardTitle>
                <CardDescription className="card__description card__description--light">Built to frame AI as supportive, traceable, and reviewable.</CardDescription>
              </CardHeader>
              <CardContent className="stack-md">
                <div className="icon-copy"><ShieldAlert size={16} className="icon-copy__icon icon-copy__icon--cyan" /><p>Every page reinforces validation by medical professionals.</p></div>
                <div className="icon-copy"><ShieldAlert size={16} className="icon-copy__icon icon-copy__icon--cyan" /><p>Explainability and audit views are first-class parts of the product.</p></div>
                <div className="icon-copy"><ShieldAlert size={16} className="icon-copy__icon icon-copy__icon--cyan" /><p>Dummy data included for demos without exposing protected health information.</p></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="stack-md">
        <SectionHeading eyebrow="Capabilities" title="Purpose-built for radiation oncology review workflows" description="A clean, responsive dashboard ecosystem for plan benchmarking, cohort exploration, and explainable patient communication." />
        <div className="three-col-grid">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="feature-icon"><Icon size={20} /></div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="two-one-grid">
        <Card>
          <CardHeader>
            <CardTitle>Clinical safety framing</CardTitle>
            <CardDescription>RadioCurate AI supports review, discussion, and documentation—not autonomous treatment decisions.</CardDescription>
          </CardHeader>
          <CardContent className="two-col-grid">
            <div className="soft-panel"><p className="compact-title">Supportive role</p><p className="muted-text">AI insights highlight similarities, potential optimization areas, and communication support, but final judgment remains with qualified medical professionals.</p></div>
            <div className="soft-panel"><p className="compact-title">Auditability</p><p className="muted-text">Matched-case logic, confidence signals, and pipeline status are visible for governance and internal validation workflows.</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Deploy-ready</CardTitle>
            <CardDescription>Optimized for a modern Vercel deployment pipeline.</CardDescription>
          </CardHeader>
          <CardContent className="stack-sm muted-text">
            <p>• React + Vite foundation with TSX components</p>
            <p>• Responsive medical dashboard layout</p>
            <p>• Reusable UI building blocks inspired by shadcn/ui patterns</p>
            <p>• Ready for deployment to Vercel</p>
          </CardContent>
        </Card>
      </section>

      <footer className="footer-panel">
        <div>
          <p className="compact-title">RadioCurate AI</p>
          <p className="muted-text">Radiotherapy planning support with transparent AI assistance.</p>
        </div>
        <p className="muted-text">Not a replacement for physician judgment or institutional review.</p>
      </footer>
    </div>
  )
}
