import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { VerifyOtpPage } from './pages/VerifyOtpPage';
import { DashboardPage } from './pages/DashboardPage';
import { AppLayout } from './components/layout/AppLayout';
import { ClientManagementPage } from './pages/ClientManagementPage';
import { CaskListingPage } from './pages/CaskListingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <DashboardPage />
            </AppLayout>
          }
        />
        <Route
          path="/client-management"
          element={
            <AppLayout>
              <ClientManagementPage />
            </AppLayout>
          }
        />
        <Route
          path="/cask-listing"
          element={
            <AppLayout>
              <CaskListingPage />
            </AppLayout>
          }
        />
        <Route
          path="/cask-valuation-results"
          element={
            <AppLayout>
              <CaskListingPage />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
