import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

// Public Pages
import { Home } from '../pages/public/Home';
import { AboutPage } from '../pages/public/AboutPage';
import { WhyJoinPage } from '../pages/public/WhyJoinPage';
import { StudentVoicesPage } from '../pages/public/StudentVoicesPage';
import { ExplorePage } from '../pages/public/ExplorePage';
import { ContactPage } from '../pages/public/ContactPage';
import { LoginPage } from '../pages/public/LoginPage';
import { SignupPage } from '../pages/public/SignupPage';

// Student Pages
import { StudentDashboard } from '../pages/student/StudentDashboard';
import { StudentOpportunities } from '../pages/student/StudentOpportunities';
import { StudentCampaignDetails } from '../pages/student/StudentCampaignDetails';
import { StudentApplications } from '../pages/student/StudentApplications';
import { StudentActivity } from '../pages/student/StudentActivity';
import { StudentAchievements } from '../pages/student/StudentAchievements';
import { StudentCommunity } from '../pages/student/StudentCommunity';
import { StudentProfile } from '../pages/student/StudentProfile';
import { StudentNotifications } from '../pages/student/StudentNotifications';
import { StudentSettings } from '../pages/student/StudentSettings';

// Company Pages
import { CompanyDashboard } from '../pages/company/CompanyDashboard';
import { CompanyCampaigns } from '../pages/company/CompanyCampaigns';
import { CreateCampaign } from '../pages/company/CreateCampaign';
import { CompanyStudents } from '../pages/company/CompanyStudents';
import { CompanyApplications } from '../pages/company/CompanyApplications';
import { CompanyActivity } from '../pages/company/CompanyActivity';
import { CompanyAnalytics } from '../pages/company/CompanyAnalytics';
import { CompanyProfile } from '../pages/company/CompanyProfile';
import { CompanySettings } from '../pages/company/CompanySettings';

// Admin Pages
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { AdminStudents } from '../pages/admin/AdminStudents';
import { AdminCompanies } from '../pages/admin/AdminCompanies';
import { AdminCampaigns } from '../pages/admin/AdminCampaigns';
import { AdminApplications } from '../pages/admin/AdminApplications';
import { AdminActivity } from '../pages/admin/AdminActivity';
import { AdminApprovals } from '../pages/admin/AdminApprovals';
import { AdminAnalytics } from '../pages/admin/AdminAnalytics';
import { AdminSettings } from '../pages/admin/AdminSettings';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/why-join" element={<WhyJoinPage />} />
      <Route path="/student-voices" element={<StudentVoicesPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Student Panel Routes */}
      <Route path="/student/dashboard" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
      <Route path="/student/opportunities" element={<ProtectedRoute allowedRoles={['student']}><StudentOpportunities /></ProtectedRoute>} />
      <Route path="/student/campaigns" element={<ProtectedRoute allowedRoles={['student']}><StudentOpportunities /></ProtectedRoute>} />
      <Route path="/student/campaigns/:id" element={<ProtectedRoute allowedRoles={['student']}><StudentCampaignDetails /></ProtectedRoute>} />
      <Route path="/student/applications" element={<ProtectedRoute allowedRoles={['student']}><StudentApplications /></ProtectedRoute>} />
      <Route path="/student/activity" element={<ProtectedRoute allowedRoles={['student']}><StudentActivity /></ProtectedRoute>} />
      <Route path="/student/achievements" element={<ProtectedRoute allowedRoles={['student']}><StudentAchievements /></ProtectedRoute>} />
      <Route path="/student/community" element={<ProtectedRoute allowedRoles={['student']}><StudentCommunity /></ProtectedRoute>} />
      <Route path="/student/profile" element={<ProtectedRoute allowedRoles={['student']}><StudentProfile /></ProtectedRoute>} />
      <Route path="/student/notifications" element={<ProtectedRoute allowedRoles={['student']}><StudentNotifications /></ProtectedRoute>} />
      <Route path="/student/settings" element={<ProtectedRoute allowedRoles={['student']}><StudentSettings /></ProtectedRoute>} />

      {/* Company Panel Routes */}
      <Route path="/company/dashboard" element={<ProtectedRoute allowedRoles={['company']}><CompanyDashboard /></ProtectedRoute>} />
      <Route path="/company/campaigns" element={<ProtectedRoute allowedRoles={['company']}><CompanyCampaigns /></ProtectedRoute>} />
      <Route path="/company/campaigns/create" element={<ProtectedRoute allowedRoles={['company']}><CreateCampaign /></ProtectedRoute>} />
      <Route path="/company/campaigns/:id" element={<ProtectedRoute allowedRoles={['company']}><CompanyCampaigns /></ProtectedRoute>} />
      <Route path="/company/students" element={<ProtectedRoute allowedRoles={['company']}><CompanyStudents /></ProtectedRoute>} />
      <Route path="/company/applications" element={<ProtectedRoute allowedRoles={['company']}><CompanyApplications /></ProtectedRoute>} />
      <Route path="/company/activity" element={<ProtectedRoute allowedRoles={['company']}><CompanyActivity /></ProtectedRoute>} />
      <Route path="/company/analytics" element={<ProtectedRoute allowedRoles={['company']}><CompanyAnalytics /></ProtectedRoute>} />
      <Route path="/company/profile" element={<ProtectedRoute allowedRoles={['company']}><CompanyProfile /></ProtectedRoute>} />
      <Route path="/company/settings" element={<ProtectedRoute allowedRoles={['company']}><CompanySettings /></ProtectedRoute>} />

      {/* Admin Panel Routes */}
      <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/students" element={<ProtectedRoute allowedRoles={['admin']}><AdminStudents /></ProtectedRoute>} />
      <Route path="/admin/companies" element={<ProtectedRoute allowedRoles={['admin']}><AdminCompanies /></ProtectedRoute>} />
      <Route path="/admin/campaigns" element={<ProtectedRoute allowedRoles={['admin']}><AdminCampaigns /></ProtectedRoute>} />
      <Route path="/admin/applications" element={<ProtectedRoute allowedRoles={['admin']}><AdminApplications /></ProtectedRoute>} />
      <Route path="/admin/activity" element={<ProtectedRoute allowedRoles={['admin']}><AdminActivity /></ProtectedRoute>} />
      <Route path="/admin/approvals" element={<ProtectedRoute allowedRoles={['admin']}><AdminApprovals /></ProtectedRoute>} />
      <Route path="/admin/analytics" element={<ProtectedRoute allowedRoles={['admin']}><AdminAnalytics /></ProtectedRoute>} />
      <Route path="/admin/settings" element={<ProtectedRoute allowedRoles={['admin']}><AdminSettings /></ProtectedRoute>} />

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
