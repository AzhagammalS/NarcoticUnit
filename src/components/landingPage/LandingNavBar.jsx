import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Box, CssBaseline, Divider, Drawer,
  IconButton, List, ListItem, ListItemButton,
  ListItemText, Toolbar, Typography, Button
} from '@mui/material';
import { createTheme, ThemeProvider, CssBaseline as MuiCssBaseline } from '@mui/material';
import Bedtime from '@mui/icons-material/Bedtime';
import LightMode from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Other Department Inputs', path: '/otherdepartmentinputs' },
  { label: 'Contact', path: '/contact' }
];

function LandingNavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mode, setMode] = React.useState('light');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(
    () => createTheme({
      palette: { mode }
    }),
    [mode]
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Enforcement Directorate CID Unit
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <MuiCssBaseline />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav"
          sx={{
            backgroundColor: mode === 'light' ? '#1976d2' : '#333',
            boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}
            >
              Enforcement Directorate CID Unit
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  sx={{ color: '#fff' }}
                  component={Link}
                  to={item.path}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton onClick={toggleMode} color="inherit">
                {mode === 'dark' ? <LightMode /> : <Bedtime />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}

LandingNavBar.propTypes = {
  window: PropTypes.func,
};

export default LandingNavBar;
