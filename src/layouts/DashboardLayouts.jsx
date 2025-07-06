import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Outlet } from 'react-router-dom'; // ⬅️ Import Outlet
import LandingFooter from '../components/landingPage/LandingFooter';

function DashboardLayouts() {
  return (
    <DashboardLayout>
      <PageContainer>
        <Outlet /> {/* ⬅️ Render routed page content here */}
      </PageContainer>
      <LandingFooter />
    </DashboardLayout>
  );
}

export default DashboardLayouts;
