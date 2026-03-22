import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/app-shell'
import { AdminPage } from '@/pages/admin-page'
import { CaseComparisonPage } from '@/pages/case-comparison-page'
import { DashboardPage } from '@/pages/dashboard-page'
import { ExplainabilityPage } from '@/pages/explainability-page'
import { GlobalInsightsPage } from '@/pages/global-insights-page'
import { LandingPage } from '@/pages/landing-page'
import { PlanAnalysisPage } from '@/pages/plan-analysis-page'

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/case-comparison" element={<CaseComparisonPage />} />
          <Route path="/plan-analysis" element={<PlanAnalysisPage />} />
          <Route path="/global-insights" element={<GlobalInsightsPage />} />
          <Route path="/explainability" element={<ExplainabilityPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
