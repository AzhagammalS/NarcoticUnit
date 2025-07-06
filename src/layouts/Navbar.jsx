// src/components/Navbar.js
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import DashboardLayouts from './DashboardLayouts'; // You must create this
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import TopicIcon from '@mui/icons-material/Topic';
import InfoIcon from '@mui/icons-material/Info';

const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'mafiainfo', title: 'Mafia Info', icon: <InfoIcon /> },
  { segment: 'newmafia', title: 'New Mafia', icon: <GroupAddIcon /> },
  { segment: 'mafiamember', title: 'Accused', icon: <PersonAddIcon /> },
  { segment: 'mafiachart', title: 'Mafia Chart', icon: <AccountTreeIcon /> },
  { segment: 'iSInputs', title: 'iS Inputs', icon: <SettingsRemoteIcon /> },
  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <TopicIcon />,
    // children: [
    //   { segment: 'Yearly', title: 'Yearly', icon: <DescriptionIcon /> },
    //   { segment: 'Monthly', title: 'Traffic', icon: <DescriptionIcon /> },
    // ],
  },
];

// MUI theme setup
const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: { colorSchemeSelector: 'class' },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Converts route segments like 'dashboard' to `/dashboard`
function getPathFromSegment(segment) {
  return '/' + segment.toLowerCase();
}

export default function Navbar({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Simulate router for AppProvider
  const router = React.useMemo(() => ({
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate: (path) => navigate(path),
  }), [location, navigate]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        logo: <img src={logo} alt="Logo"  />,
        title: 'Enforcement Directorate CID Unit', // Optional: change "Toolpad" text next to logo
  }}
    >
      <DashboardLayouts>
        {children}
      </DashboardLayouts>
    </AppProvider>
  );
}
