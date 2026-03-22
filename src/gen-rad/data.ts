export type RiskLevel = 'Low' | 'Moderate' | 'High'

export type AssessmentRecord = {
  month: string
  score: number
  lifestyle: number
  exposure: number
  adherence: number
}

export type RiskFactor = {
  title: string
  category: 'Lifestyle' | 'Exposure' | 'Family history' | 'Behavior'
  impact: string
  score: number
  trend: 'Improving' | 'Stable' | 'Worsening'
  detail: string
}

export type ScreeningRecommendation = {
  name: string
  priority: 'High priority' | 'Planned' | 'Watchlist'
  ageWindow: string
  cadence: string
  preparation: string
  rationale: string
  referral: string
}

export const productHighlights = [
  {
    title: 'Preventive AI triage',
    description: 'Menggabungkan pola gaya hidup, paparan lingkungan, riwayat keluarga, dan perilaku kesehatan untuk mengidentifikasi risiko kanker yang meningkat secara dini.',
  },
  {
    title: 'Explainable risk communication',
    description: 'Setiap skor diturunkan menjadi faktor kontribusi, confidence note, dan saran tindak lanjut agar mudah dipahami tim klinis maupun pengguna.',
  },
  {
    title: 'Screening support, not diagnosis',
    description: 'Platform menonjolkan batasan sistem: hasil hanya suportif, edukatif, dan wajib divalidasi oleh tenaga medis profesional.',
  },
]

export const statCards = [
  { label: 'Active risk score', value: '72 / 100', helper: 'Tier: elevated', tone: 'danger' },
  { label: 'Top actionable factors', value: '5', helper: '2 membaik dalam 30 hari', tone: 'warning' },
  { label: 'Screening window', value: '14 hari', helper: 'Mammography + low-dose CT review', tone: 'brand' },
  { label: 'Education adherence', value: '81%', helper: 'Checklist completed', tone: 'success' },
]

export const activeRiskFactors: RiskFactor[] = [
  {
    title: 'Paparan asap rokok pasif',
    category: 'Exposure',
    impact: '+16 risk points',
    score: 82,
    trend: 'Worsening',
    detail: 'Paparan rutin di rumah dan tempat kerja meningkatkan kebutuhan edukasi protektif serta evaluasi lingkungan.',
  },
  {
    title: 'Riwayat keluarga kanker payudara',
    category: 'Family history',
    impact: '+14 risk points',
    score: 74,
    trend: 'Stable',
    detail: 'Riwayat ibu dan tante kandung mendorong skrining lebih awal dan konsultasi risiko herediter.',
  },
  {
    title: 'Aktivitas fisik rendah',
    category: 'Lifestyle',
    impact: '+11 risk points',
    score: 66,
    trend: 'Improving',
    detail: 'Rata-rata aktivitas moderat baru 70 menit/minggu, masih di bawah target preventif 150 menit.',
  },
  {
    title: 'Paparan partikulat perkotaan',
    category: 'Exposure',
    impact: '+9 risk points',
    score: 61,
    trend: 'Stable',
    detail: 'Tinggal di koridor lalu lintas padat dengan indeks kualitas udara fluktuatif.',
  },
]

export const assessmentHistory: AssessmentRecord[] = [
  { month: 'Oct', score: 78, lifestyle: 66, exposure: 84, adherence: 48 },
  { month: 'Nov', score: 76, lifestyle: 64, exposure: 82, adherence: 58 },
  { month: 'Dec', score: 74, lifestyle: 60, exposure: 80, adherence: 63 },
  { month: 'Jan', score: 73, lifestyle: 58, exposure: 80, adherence: 71 },
  { month: 'Feb', score: 72, lifestyle: 55, exposure: 78, adherence: 79 },
  { month: 'Mar', score: 72, lifestyle: 53, exposure: 77, adherence: 81 },
]

export const recentAssessments = [
  { label: 'Lifestyle reassessment', date: '18 Mar 2026', status: 'Completed', score: '72/100' },
  { label: 'Exposure survey refresh', date: '10 Mar 2026', status: 'Completed', score: '77/100' },
  { label: 'Family history review', date: '03 Mar 2026', status: 'Needs validation', score: 'Pending' },
]

export const alerts = [
  {
    title: 'High-priority preventive review',
    description: 'Gabungan riwayat keluarga dan paparan pasif menempatkan pengguna pada tier elevated untuk skrining payudara dan paru.',
    tone: 'danger',
  },
  {
    title: 'Behavior milestone reached',
    description: 'Pengurangan konsumsi makanan ultra-proses sebesar 22% dalam 6 minggu membantu menurunkan risiko yang dapat dimodifikasi.',
    tone: 'success',
  },
  {
    title: 'Clinical validation required',
    description: 'Semua rekomendasi skrining dan rujukan pada halaman ini harus dikonfirmasi oleh dokter sebelum dijalankan.',
    tone: 'warning',
  },
]

export const educationCards = [
  {
    title: 'Modifiable risk focus',
    body: 'Tidur, aktivitas fisik, nutrisi, paparan asap, dan kepatuhan kontrol kesehatan adalah area prioritas perubahan 90 hari.',
    tag: 'Actionable',
  },
  {
    title: 'Non-modifiable risk focus',
    body: 'Usia, jenis kelamin, dan riwayat keluarga membantu menyesuaikan intensitas skrining serta diskusi genetik klinis.',
    tag: 'Baseline',
  },
  {
    title: 'Preventive coaching',
    body: 'Materi dikurasi untuk membantu memahami alasan di balik rekomendasi, bukan menggantikan konsultasi dokter.',
    tag: 'Education',
  },
]

export const screeningRecommendations: ScreeningRecommendation[] = [
  {
    name: 'Mammography & breast clinic review',
    priority: 'High priority',
    ageWindow: 'Start now • review annually',
    cadence: 'Within 14 days',
    preparation: 'Bawa riwayat keluarga, hasil imaging terdahulu, dan catatan perubahan gejala bila ada.',
    rationale: 'Riwayat keluarga tingkat pertama ditambah faktor gaya hidup memerlukan validasi klinis dini.',
    referral: 'Arahkan ke klinik bedah onkologi / radiologi payudara untuk penilaian berbasis risiko.',
  },
  {
    name: 'Low-dose CT eligibility discussion',
    priority: 'Planned',
    ageWindow: 'Clinical review this quarter',
    cadence: 'Shared decision-making',
    preparation: 'Verifikasi intensitas paparan rokok pasif, gejala respirasi, dan faktor okupasional.',
    rationale: 'Paparan inhalasi kronis meningkatkan urgensi diskusi skrining paru pada populasi tertentu.',
    referral: 'Konsultasi ke pulmonologi / klinik berhenti merokok untuk evaluasi kelayakan.',
  },
  {
    name: 'Lifestyle medicine follow-up',
    priority: 'Watchlist',
    ageWindow: 'Monthly coaching',
    cadence: '30-day check-in',
    preparation: 'Lengkapi food diary, target aktivitas, dan log kualitas tidur.',
    rationale: 'Sebagian besar penurunan skor jangka pendek berasal dari faktor perilaku yang dapat dimodifikasi.',
    referral: 'Program edukasi preventif, gizi, dan exercise coaching.',
  },
]

export const preventionChecklist = [
  'Capai 150 menit aktivitas fisik moderat per minggu.',
  'Tetapkan area rumah bebas asap rokok dan ventilasi silang aktif.',
  'Jadwalkan konsultasi klinis untuk verifikasi riwayat keluarga risiko tinggi.',
  'Pertahankan pola makan tinggi serat, buah, dan sayuran >= 5 porsi/hari.',
  'Dokumentasikan gejala baru, perubahan berat badan, atau perdarahan abnormal.',
]

export const mythVsFact = [
  {
    myth: 'Risk score tinggi berarti sudah pasti menderita kanker.',
    fact: 'Skor hanya menunjukkan kebutuhan evaluasi preventif yang lebih cepat, bukan diagnosis.',
  },
  {
    myth: 'Jika tidak ada gejala maka skrining tidak penting.',
    fact: 'Deteksi dini justru paling efektif sebelum gejala muncul, terutama pada kelompok risiko meningkat.',
  },
  {
    myth: 'Riwayat keluarga tidak dapat diimbangi oleh perubahan perilaku.',
    fact: 'Faktor herediter tetap penting, tetapi risiko total dapat diturunkan dengan modifikasi paparan dan perilaku.',
  },
]

export const explainabilityItems = [
  {
    title: 'Why elevated risk?',
    description: 'Model menimbang kontribusi terbesar dari riwayat keluarga, paparan asap rokok pasif, dan kepatuhan aktivitas fisik yang masih rendah.',
    confidence: 'Confidence note: moderate-high, karena 92% field terisi dan riwayat keluarga telah diverifikasi sebagian.',
  },
  {
    title: 'What changed recently?',
    description: 'Penurunan skor 6 poin selama 6 bulan didorong oleh peningkatan olahraga dan perbaikan pola makan.',
    confidence: 'Confidence note: moderate, data self-report masih membutuhkan sinkronisasi wearable untuk akurasi aktivitas.',
  },
  {
    title: 'Why screening priority is not diagnosis',
    description: 'Prioritas skrining dibuat dari akumulasi faktor risiko dan guideline preventif, bukan dari bukti tumor atau hasil biopsi.',
    confidence: 'Safety note: semua rekomendasi harus divalidasi oleh dokter yang memahami konteks klinis lengkap.',
  },
]

export const auditTrail = [
  { step: 'Data intake', detail: 'Lifestyle, exposure, and family history questionnaire completed.', owner: 'User + care navigator' },
  { step: 'Risk engine v2.4', detail: 'Feature weighting applied with preventive calibration profile.', owner: 'AI service' },
  { step: 'Screening ruleset', detail: 'Priority mapping generated from age, family history, and modifiable factors.', owner: 'Clinical policy layer' },
  { step: 'Human validation', detail: 'Pending physician review before external referral is finalized.', owner: 'Oncology prevention team' },
]

export const cohortDistribution = [
  { label: 'Low risk', value: 34, tone: 'success' },
  { label: 'Moderate risk', value: 46, tone: 'warning' },
  { label: 'High risk', value: 20, tone: 'danger' },
]

export const cohortInsights = [
  {
    title: 'Urban exposure cluster',
    metric: '31% of cohort',
    description: 'Paparan polusi lalu lintas dan asap pasif tetap menjadi driver risiko populasi terbesar.',
  },
  {
    title: 'Behavior improvement responders',
    metric: '18-point avg drop',
    description: 'Kelompok yang mengikuti coaching nutrisi + aktivitas menunjukkan penurunan skor tercepat.',
  },
  {
    title: 'Family history escalation',
    metric: '12% flagged',
    description: 'Pengguna dengan riwayat keluarga tingkat pertama paling sering memerlukan validasi skrining dini.',
  },
]

export const datasetStatus = [
  { label: 'Profiles monitored', value: '4,281', helper: 'Updated daily' },
  { label: 'Missing field rate', value: '6.4%', helper: 'Below 8% threshold' },
  { label: 'Model version', value: 'v2.4.1', helper: 'Preventive calibration active' },
  { label: 'Access control', value: 'Role-based', helper: 'Placeholder for enterprise SSO' },
]

export const quickActions = [
  'Review high-priority screening guidance',
  'Download shareable clinician summary',
  'Open preventive education bundle',
  'Compare current score vs prior month',
]

export const profileSummary = {
  name: 'Alya Rahman',
  age: 42,
  location: 'Jakarta metropolitan area',
  occupation: 'Operations manager',
  riskLevel: 'Moderate' as RiskLevel,
  summary: 'Pengguna dengan kombinasi risiko herediter dan paparan lingkungan kronis, namun menunjukkan respons baik terhadap intervensi perilaku preventif.',
}
