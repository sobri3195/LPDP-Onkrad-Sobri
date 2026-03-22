export type NavItem = {
  title: string
  href: string
  description: string
}

export type Stat = {
  label: string
  value: string
  delta: string
  trend: 'up' | 'down' | 'neutral'
}

export type SimilarCase = {
  id: string
  diagnosis: string
  stage: string
  technique: string
  region: string
  similarity: number
  localControl: number
  toxicity: 'Low' | 'Moderate' | 'Elevated'
  note: string
}

export const navItems: NavItem[] = [
  { title: 'Landing', href: '/', description: 'Product overview and safety framing' },
  { title: 'Dashboard', href: '/dashboard', description: 'Operational monitoring and alerts' },
  { title: 'Case Comparison', href: '/case-comparison', description: 'Real-time comparison against matched cases' },
  { title: 'Plan Analysis', href: '/plan-analysis', description: 'Dosimetry and quality review' },
  { title: 'Global Insights', href: '/global-insights', description: 'Population-level trends and filters' },
  { title: 'Explainability', href: '/explainability', description: 'Transparency, confidence, and audit trail' },
  { title: 'Admin', href: '/admin', description: 'Dataset health and model versioning' },
]

export const dashboardStats: Stat[] = [
  { label: 'Plans reviewed today', value: '28', delta: '+12% vs yesterday', trend: 'up' },
  { label: 'Median match confidence', value: '92.4%', delta: '+2.1% this week', trend: 'up' },
  { label: 'Plans needing caution', value: '4', delta: '1 awaiting physician review', trend: 'neutral' },
  { label: 'Dataset uptime', value: '99.97%', delta: 'Stable across 30 days', trend: 'up' },
]

export const recentComparisons = [
  { patient: 'RC-2417', diagnosis: 'Nasopharyngeal carcinoma', technique: 'VMAT', confidence: 94, status: 'Recommended review of parotid sparing' },
  { patient: 'RC-2418', diagnosis: 'Cervical cancer', technique: 'IMRT', confidence: 91, status: 'Aligned with matched cohort' },
  { patient: 'RC-2419', diagnosis: 'Prostate adenocarcinoma', technique: 'SBRT', confidence: 88, status: 'Check rectal dose hotspot' },
  { patient: 'RC-2420', diagnosis: 'Breast cancer', technique: '3D-CRT', confidence: 95, status: 'No major variance detected' },
]

export const alerts = [
  {
    title: 'Left parotid mean dose above top-quartile benchmark',
    detail: 'Current plan is 2.8 Gy above median of matched successful cases. Consider beam angle refinement.',
    severity: 'Elevated',
  },
  {
    title: 'Confidence interval widened after anatomy update',
    detail: 'Repeat contour validation recommended before final peer review.',
    severity: 'Moderate',
  },
]

export const patientSummary = {
  id: 'RC-2417',
  age: 52,
  diagnosis: 'Locally advanced nasopharyngeal carcinoma',
  stage: 'T3N2M0',
  performanceStatus: 'ECOG 1',
  technique: 'VMAT with adaptive replanning',
  treatingIntent: 'Curative',
  physician: 'Dr. Maya Santoso, MD',
}

export const treatmentPlan = {
  prescription: '70 Gy / 33 fractions',
  targetCoverage: 97.8,
  conformityIndex: 1.09,
  homogeneityIndex: 0.11,
  qualityScore: 91,
  benchmarkRank: 'Top 18% among matched cases',
  optimizationAreas: [
    'Reduce left parotid mean dose by ~2-3 Gy',
    'Re-check upper neck coverage on fraction 12 adaptive set',
    'Document rationale for brainstem planning margin exception',
  ],
}

export const similarCases: SimilarCase[] = [
  { id: 'NPC-1082', diagnosis: 'Nasopharyngeal carcinoma', stage: 'III', technique: 'VMAT', region: 'Singapore', similarity: 96, localControl: 93, toxicity: 'Low', note: 'Adaptive replan at week 3 improved OAR balance.' },
  { id: 'NPC-0874', diagnosis: 'Nasopharyngeal carcinoma', stage: 'III', technique: 'IMRT', region: 'Japan', similarity: 94, localControl: 91, toxicity: 'Moderate', note: 'Comparable nodal burden with strong coverage consistency.' },
  { id: 'NPC-1430', diagnosis: 'Nasopharyngeal carcinoma', stage: 'IVA', technique: 'VMAT', region: 'Netherlands', similarity: 92, localControl: 89, toxicity: 'Low', note: 'Lower xerostomia after optimization of contralateral parotid.' },
  { id: 'NPC-0991', diagnosis: 'Nasopharyngeal carcinoma', stage: 'III', technique: 'Tomotherapy', region: 'South Korea', similarity: 90, localControl: 90, toxicity: 'Moderate', note: 'Maintained target coverage with tighter posterior avoidance.' },
]

export const outcomeSeries = [
  { month: '0', currentPlan: 91, matchedCohort: 88, bestQuartile: 94 },
  { month: '6', currentPlan: 89, matchedCohort: 85, bestQuartile: 92 },
  { month: '12', currentPlan: 87, matchedCohort: 82, bestQuartile: 90 },
  { month: '24', currentPlan: 83, matchedCohort: 78, bestQuartile: 86 },
]

export const doseDistribution = [
  { structure: 'PTV70', planned: 97.8, benchmark: 97.1 },
  { structure: 'Brainstem Dmax', planned: 49.2, benchmark: 50.1 },
  { structure: 'Spinal cord Dmax', planned: 39.8, benchmark: 41.6 },
  { structure: 'Left parotid mean', planned: 28.4, benchmark: 25.6 },
  { structure: 'Right parotid mean', planned: 22.1, benchmark: 23.8 },
]

export const organRiskMetrics = [
  { organ: 'Brainstem', value: '49.2 Gy', status: 'Within range' },
  { organ: 'Spinal cord', value: '39.8 Gy', status: 'Within range' },
  { organ: 'Left parotid', value: '28.4 Gy', status: 'Watchlist' },
  { organ: 'Mandible', value: '58.1 Gy', status: 'Within range' },
]

export const globalFilters = {
  cancerTypes: ['Nasopharyngeal', 'Breast', 'Prostate', 'Cervix', 'Lung'],
  stages: ['I', 'II', 'III', 'IVA'],
  ages: ['18-39', '40-54', '55-69', '70+'],
  techniques: ['VMAT', 'IMRT', 'SBRT', '3D-CRT', 'Tomotherapy'],
  regions: ['APAC', 'Europe', 'North America', 'Middle East'],
}

export const trendData = [
  { label: 'APAC', survival: 88, toxicityFree: 74, sample: 1480 },
  { label: 'Europe', survival: 86, toxicityFree: 77, sample: 1330 },
  { label: 'North America', survival: 87, toxicityFree: 79, sample: 1215 },
  { label: 'Middle East', survival: 84, toxicityFree: 71, sample: 640 },
]

export const heatmapData = [
  { segment: 'Stage II / VMAT', score: 91 },
  { segment: 'Stage III / VMAT', score: 88 },
  { segment: 'Stage III / IMRT', score: 84 },
  { segment: 'Stage IVA / VMAT', score: 80 },
  { segment: 'Stage IVA / Tomotherapy', score: 83 },
  { segment: 'Stage II / IMRT', score: 86 },
]

export const explainabilityFactors = [
  { factor: 'Primary tumor site geometry', weight: 28, detail: 'Spatial shape and adjacency most strongly influenced the match.' },
  { factor: 'Nodal involvement pattern', weight: 21, detail: 'Bilateral level II/III burden aligned closely with successful cases.' },
  { factor: 'Dose-volume histogram profile', weight: 19, detail: 'Target coverage and OAR sparing ratios matched the top cohort.' },
  { factor: 'Adaptive replanning timing', weight: 14, detail: 'Week-3 adaptation pattern improved cohort similarity.' },
  { factor: 'Patient age / performance', weight: 10, detail: 'Demographic similarity increased confidence stability.' },
  { factor: 'Concurrent chemotherapy schema', weight: 8, detail: 'Treatment context aligned with comparable curative protocols.' },
]

export const auditTrail = [
  { step: 'Data ingestion', status: 'Completed', note: 'DICOM RT set synced from planning system 08:10 UTC.' },
  { step: 'Feature extraction', status: 'Completed', note: '128 plan features and 14 clinical variables normalized.' },
  { step: 'Case matching', status: 'Completed', note: '4,212 comparable records evaluated using similarity ensemble.' },
  { step: 'Physician validation', status: 'Pending', note: 'Final interpretation requires clinician sign-off.' },
]

export const datasetStatus = [
  { name: 'Curated cases', value: '42,318', meta: 'Across 23 partner centers' },
  { name: 'Last ETL refresh', value: '22 Mar 2026 • 06:00 UTC', meta: '2 pending source feeds' },
  { name: 'Model version', value: 'RC-AI 2.4.1', meta: 'Validated on 11 external cohorts' },
  { name: 'Access policy', value: 'Role-based', meta: 'Admin, physicist, clinician placeholders ready' },
]

export const quickAccess = [
  { title: 'Open current case review', description: 'Continue RC-2417 comparison and physician notes.', href: '/case-comparison' },
  { title: 'Inspect plan quality', description: 'Review OAR metrics and optimization opportunities.', href: '/plan-analysis' },
  { title: 'Explore cohort trends', description: 'Compare outcomes by stage, age, and region.', href: '/global-insights' },
]
