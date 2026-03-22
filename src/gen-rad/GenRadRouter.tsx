import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  AdminInsightsPage,
  DashboardPage,
  EducationPage,
  ExplainabilityPage,
  GenRadLandingPage,
  MonitoringPage,
  ProfilePage,
  RecommendationsPage,
} from './pages'

export default function GenRadRouter() {
  return (
    <Routes>
      <Route index element={<GenRadLandingPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="recommendations" element={<RecommendationsPage />} />
      <Route path="monitoring" element={<MonitoringPage />} />
      <Route path="education" element={<EducationPage />} />
      <Route path="explainability" element={<ExplainabilityPage />} />
      <Route path="admin" element={<AdminInsightsPage />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  )
}
