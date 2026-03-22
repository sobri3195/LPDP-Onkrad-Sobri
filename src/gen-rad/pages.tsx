import React from 'react'
import { Link } from 'react-router-dom'
import {
  activeRiskFactors,
  alerts,
  assessmentHistory,
  auditTrail,
  cohortDistribution,
  cohortInsights,
  datasetStatus,
  educationCards,
  explainabilityItems,
  mythVsFact,
  preventionChecklist,
  productHighlights,
  profileSummary,
  quickActions,
  recentAssessments,
  screeningRecommendations,
  statCards,
} from './data'
import { AppShell } from './components/layout'
import {
  AlertCard,
  CohortInsightCard,
  DatasetStatusCard,
  EducationInsightCard,
  ExplainabilityCard,
  ExposureSummaryCard,
  LifestyleProfileCard,
  PreventionChecklistCard,
  RiskFactorCard,
  RiskScoreCard,
  ScreeningRecommendationCard,
  StatCard,
  TimelineCard,
  TrendChartCard,
} from './components/feature-cards'
import { Alert, Badge, Button, Card, EmptyState, SkeletonList, Tabs } from './components/ui'

export function GenRadLandingPage() {
  return (
    <div className="gr-landing-page">
      <section className="gr-hero">
        <div className="gr-hero-copy">
          <Badge tone="brand">New product on Karya Sobri</Badge>
          <h1>Gen-Rad Guardian</h1>
          <p className="gr-hero-tagline">
            AI-powered cancer risk management platform untuk analisis pola hidup, paparan lingkungan, riwayat keluarga, dan perilaku kesehatan.
          </p>
          <p>
            Dirancang sebagai platform penilaian risiko preventif dan dukungan skrining dini dengan visualisasi risiko yang mudah dipahami, edukasi personal, serta panduan rujukan awal.
          </p>
          <div className="gr-hero-actions">
            <Button href="/projects/gen-rad-guardian/dashboard">Open product demo</Button>
            <Button href="/projects" variant="secondary">Back to portfolio</Button>
          </div>
        </div>
        <Card className="gr-hero-panel">
          <Badge tone="warning">Important safety context</Badge>
          <h3>Supportive, educational, and clinically validated workflows</h3>
          <p>
            Platform ini bukan sistem diagnosis, bukan pengganti dokter, dan bukan mesin rekomendasi terapi definitif.
            Semua output wajib divalidasi secara klinis sebelum menjadi keputusan pelayanan.
          </p>
          <div className="gr-hero-metrics">
            <div><strong>8</strong><span>Main pages</span></div>
            <div><strong>20+</strong><span>Reusable UI blocks</span></div>
            <div><strong>1</strong><span>Preventive operating model</span></div>
          </div>
        </Card>
      </section>

      <section className="gr-section">
        <div className="gr-section-heading">
          <p className="gr-eyebrow">Platform value</p>
          <h2>Built for preventive oncology workflows</h2>
        </div>
        <div className="gr-grid gr-grid-3">
          {productHighlights.map((item) => (
            <Card key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="gr-section">
        <div className="gr-section-heading">
          <p className="gr-eyebrow">Feature system</p>
          <h2>Dashboard-centric experience</h2>
        </div>
        <div className="gr-grid gr-grid-4">
          {['Risk assessment dashboard', 'Personal risk profile', 'Screening recommendation', 'Trend & monitoring', 'Education & prevention', 'Explainability & audit', 'Population insights', 'Loading + empty states'].map((item) => (
            <Card key={item} className="gr-feature-pill">
              <p>{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="gr-section">
        <Alert
          title="Clinical disclaimer"
          description="Outputs from Gen-Rad Guardian are designed for preventive support, education, and screening prioritization. Final decisions require professional clinical validation."
          tone="warning"
        />
      </section>

      <section className="gr-section gr-footer-cta">
        <div>
          <h2>Ready for startup MVP or health-tech showcase</h2>
          <p>Responsive layout, reusable components, mock data, and Vercel-friendly Vite structure are included in this product demo.</p>
        </div>
        <div className="gr-hero-actions">
          <Button href="/projects/gen-rad-guardian/dashboard">Launch dashboard</Button>
          <Button href="/contact" variant="ghost">Discuss collaboration</Button>
        </div>
      </section>
    </div>
  )
}

export function DashboardPage() {
  return (
    <AppShell title="Risk Assessment Dashboard" subtitle="Ringkasan cepat risiko pengguna, faktor aktif, prioritas skrining, dan aksi preventif berikutnya.">
      <div className="gr-grid gr-grid-4">
        {statCards.map((item) => <StatCard key={item.label} {...item} />)}
      </div>
      <div className="gr-grid gr-grid-2-wide">
        <RiskScoreCard score={72} level="Elevated" summary="Kombinasi faktor herediter dan paparan lingkungan memerlukan tindak lanjut preventif terarah." />
        <Card>
          <h3>Quick actions</h3>
          <ul className="gr-check-list">
            {quickActions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Card>
      </div>
      <div className="gr-grid gr-grid-3">
        {alerts.map((item) => <AlertCard key={item.title} {...item} />)}
      </div>
      <div className="gr-grid gr-grid-2-wide">
        <Card>
          <h3>Top active risk factors</h3>
          <div className="gr-stack-md">
            {activeRiskFactors.slice(0, 3).map((factor) => <RiskFactorCard key={factor.title} factor={factor} />)}
          </div>
        </Card>
        <Card>
          <h3>Recent assessments</h3>
          <div className="gr-table-list">
            {recentAssessments.map((item) => (
              <div key={item.label} className="gr-table-row">
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.date}</span>
                </div>
                <div>
                  <Badge tone={item.status === 'Completed' ? 'success' : 'warning'}>{item.status}</Badge>
                  <p>{item.score}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  )
}

export function ProfilePage() {
  return (
    <AppShell title="Personal Risk Profile" subtitle="Profil risiko personal dengan penjelasan faktor gaya hidup, paparan, riwayat keluarga, dan langkah preventif berikutnya.">
      <div className="gr-grid gr-grid-2-wide">
        <Card>
          <Badge tone="brand">User summary</Badge>
          <h2>{profileSummary.name}</h2>
          <p>{profileSummary.age} tahun • {profileSummary.location} • {profileSummary.occupation}</p>
          <p>{profileSummary.summary}</p>
        </Card>
        <RiskScoreCard score={72} level={profileSummary.riskLevel} summary="Explainable AI menunjukkan kombinasi faktor yang masih bisa dimitigasi melalui intervensi preventif." />
      </div>
      <div className="gr-grid gr-grid-3">
        <LifestyleProfileCard
          metrics={[
            { label: 'Activity', value: 53, note: 'Perlu peningkatan durasi aktivitas mingguan.' },
            { label: 'Nutrition', value: 74, note: 'Asupan serat membaik, gula tambahan menurun.' },
            { label: 'Sleep', value: 62, note: 'Kualitas tidur belum konsisten pada hari kerja.' },
          ]}
        />
        <ExposureSummaryCard title="Environmental exposure factors" items={['Paparan asap rokok pasif di rumah.', 'Kualitas udara lingkungan urban fluktuatif.', 'Paparan okupasional rendah terhadap bahan kimia industri.']} />
        <ExposureSummaryCard title="Family history summary" items={['Ibu: kanker payudara usia 51 tahun.', 'Tante kandung: kanker ovarium.', 'Belum ada hasil konseling genetik formal.']} />
      </div>
      <div className="gr-grid gr-grid-2-wide">
        <Card>
          <h3>Risk score breakdown</h3>
          <div className="gr-stack-md">
            {activeRiskFactors.map((factor) => <RiskFactorCard key={factor.title} factor={factor} />)}
          </div>
        </Card>
        <Card>
          <h3>Recommended next actions</h3>
          <div className="gr-stack-md">
            {educationCards.map((item) => <EducationInsightCard key={item.title} {...item} />)}
          </div>
        </Card>
      </div>
    </AppShell>
  )
}

export function RecommendationsPage() {
  return (
    <AppShell title="Screening Recommendation" subtitle="Saran skrining yang dipersonalisasi, pemetaan prioritas, jendela waktu, dan panduan rujukan.">
      <Alert
        title="Screening decisions require clinical validation"
        description="Halaman ini hanya mendukung prioritisasi dan edukasi. Keputusan skrining final wajib ditetapkan bersama dokter dan guideline yang berlaku."
        tone="warning"
      />
      <div className="gr-grid gr-grid-3">
        {screeningRecommendations.map((item) => <ScreeningRecommendationCard key={item.name} item={item} />)}
      </div>
      <div className="gr-grid gr-grid-2-wide">
        <Card>
          <h3>Risk tier mapping</h3>
          <div className="gr-tier-map">
            <div><Badge tone="success">Low</Badge><p>Routine education and annual prevention review.</p></div>
            <div><Badge tone="warning">Moderate</Badge><p>Targeted coaching + primary care validation.</p></div>
            <div><Badge tone="danger">High</Badge><p>Accelerated screening conversation and specialist referral.</p></div>
          </div>
        </Card>
        <PreventionChecklistCard items={preventionChecklist} />
      </div>
    </AppShell>
  )
}

export function MonitoringPage() {
  return (
    <AppShell title="Trend & Monitoring" subtitle="Pemantauan risiko dari waktu ke waktu, kemajuan perubahan perilaku, dan milestone preventif.">
      <div className="gr-grid gr-grid-2-wide">
        <TrendChartCard title="Risk score over time" data={assessmentHistory} />
        <Card>
          <h3>Behavior change progress</h3>
          <div className="gr-stack-md">
            {assessmentHistory.slice(-3).map((item) => (
              <div key={item.month} className="gr-behavior-row">
                <div>
                  <strong>{item.month}</strong>
                  <p>Adherence {item.adherence}%</p>
                </div>
                <div className="gr-behavior-pill">Lifestyle {item.lifestyle}%</div>
                <div className="gr-behavior-pill">Exposure {item.exposure}%</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="gr-grid gr-grid-3">
        <Card>
          <h3>Preventive milestones</h3>
          <ul className="gr-check-list">
            <li>Smoke-free home policy drafted.</li>
            <li>Nutrition coach onboarding completed.</li>
            <li>Primary care review booked for April 2026.</li>
          </ul>
        </Card>
        <SkeletonList />
        <EmptyState title="Wearable sync placeholder" description="Integrasi data perangkat wearable belum diaktifkan pada demo ini, sehingga beberapa trend masih berasal dari self-report." />
      </div>
    </AppShell>
  )
}

export function EducationPage() {
  return (
    <AppShell title="Education & Prevention" subtitle="Konten edukasi personal, checklist preventif, FAQ, serta myth vs fact yang mudah dipahami.">
      <div className="gr-grid gr-grid-3">
        {educationCards.map((item) => <EducationInsightCard key={item.title} {...item} />)}
      </div>
      <div className="gr-grid gr-grid-2-wide">
        <PreventionChecklistCard items={preventionChecklist} />
        <Card>
          <h3>FAQ & myth vs fact</h3>
          <div className="gr-stack-md">
            {mythVsFact.map((item) => (
              <div key={item.myth} className="gr-myth-card">
                <p><strong>Myth:</strong> {item.myth}</p>
                <p><strong>Fact:</strong> {item.fact}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  )
}

export function ExplainabilityPage() {
  return (
    <AppShell title="Explainability & Audit" subtitle="Transparansi model, variabel kontribusi utama, confidence note, dan jejak rekomendasi.">
      <Tabs
        tabs={[
          {
            label: 'Why this risk?',
            value: 'risk',
            content: <div className="gr-grid gr-grid-3">{explainabilityItems.map((item) => <ExplainabilityCard key={item.title} {...item} />)}</div>,
          },
          {
            label: 'Traceability',
            value: 'trace',
            content: <TimelineCard items={auditTrail} />,
          },
          {
            label: 'Safety note',
            value: 'safety',
            content: (
              <Card>
                <h3>Model transparency section</h3>
                <p>Gen-Rad Guardian memakai scoring preventif berbasis aturan dan pembobotan fitur untuk mendukung edukasi risiko.</p>
                <p>Confidence turun jika data self-report tidak lengkap, dan sistem tidak mengonsumsi hasil histopatologi atau diagnosis definitif.</p>
                <Alert title="Safety disclaimer" description="Tidak ada rekomendasi terapi definitif dihasilkan oleh demo ini. Semua output bersifat suportif dan membutuhkan validasi klinis profesional." tone="danger" />
              </Card>
            ),
          },
        ]}
      />
    </AppShell>
  )
}

export function AdminInsightsPage() {
  return (
    <AppShell title="Admin / Population Insights" subtitle="Distribusi risiko populasi, analisis kohort, kesehatan dataset, dan placeholder kontrol akses.">
      <div className="gr-grid gr-grid-4">
        {datasetStatus.map((item) => <DatasetStatusCard key={item.label} {...item} />)}
      </div>
      <div className="gr-grid gr-grid-2-wide">
        <Card>
          <h3>Aggregate risk distribution</h3>
          <div className="gr-stack-md">
            {cohortDistribution.map((item) => (
              <div key={item.label}>
                <div className="gr-progress-label"><span>{item.label}</span><strong>{item.value}%</strong></div>
                <div className="gr-progress-track">
                  <div className={`gr-progress-fill gr-progress-${item.tone}`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <TrendChartCard title="Cohort risk trend monitoring" data={assessmentHistory} />
      </div>
      <div className="gr-grid gr-grid-3">
        {cohortInsights.map((item) => <CohortInsightCard key={item.title} {...item} />)}
      </div>
      <Card>
        <h3>Access control placeholders</h3>
        <p>Enterprise SSO, audit log exports, dan approval workflow belum dihubungkan pada demo ini namun disiapkan sebagai area ekspansi MVP.</p>
        <div className="gr-hero-actions">
          <Button href="/projects/gen-rad-guardian/explainability">Review model governance</Button>
          <Button href="/contact" variant="secondary">Discuss implementation</Button>
        </div>
      </Card>
    </AppShell>
  )
}

export function GenRadShowcaseTeaser() {
  return (
    <Card className="gr-showcase-teaser">
      <div>
        <Badge tone="brand">Featured product</Badge>
        <h3>Gen-Rad Guardian</h3>
        <p>Platform AI preventif untuk manajemen risiko kanker, edukasi skrining dini, explainability, dan population insights.</p>
      </div>
      <div className="gr-hero-actions">
        <Link to="/projects/gen-rad-guardian" className="gr-button gr-button-primary">Lihat landing page</Link>
        <Link to="/projects/gen-rad-guardian/dashboard" className="gr-button gr-button-secondary">Buka demo dashboard</Link>
      </div>
    </Card>
  )
}
