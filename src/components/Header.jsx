// src/components/Header.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  useTheme,
  alpha,
  Tooltip,
} from '@mui/material';
import {
  Home as HomeIcon,
  Info as InfoIcon,
  GitHub as GitHubIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Memory as ChipIcon,
} from '@mui/icons-material';

function Header({ darkMode, toggleTheme }) {
  const theme = useTheme();
  const [activeNav, setActiveNav] = useState('home');

  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Suthankan1/hardware', '_blank');
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: darkMode
          ? 'rgba(30, 30, 30, 0.85)'
          : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${alpha(
          darkMode ? '#ffffff' : '#000000',
          0.1
        )}`,
        boxShadow: darkMode
          ? '0 2px 20px rgba(0, 0, 0, 0.3)'
          : '0 2px 20px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, md: 4 },
          minHeight: '70px',
        }}
      >
        {/* Logo/Brand */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 700,
            background: darkMode
              ? 'linear-gradient(45deg, #64b5f6, #42a5f5)'
              : 'linear-gradient(45deg, #1976d2, #1565c0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: 'none',
            letterSpacing: '-0.5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          RoverXplorer
        </Typography>

        {/* Navigation Menu */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            background: darkMode
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.03)',
            borderRadius: '25px',
            padding: '8px',
            border: `1px solid ${alpha(
              darkMode ? '#ffffff' : '#000000',
              0.08
            )}`,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Button
            startIcon={<HomeIcon />}
            onClick={() => handleNavClick('home')}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 600,
              px: 2.5,
              py: 1,
              color: darkMode
                ? activeNav === 'home'
                  ? '#ffffff'
                  : 'rgba(255, 255, 255, 0.7)'
                : activeNav === 'home'
                ? '#000000'
                : 'rgba(0, 0, 0, 0.7)',
              background:
                activeNav === 'home'
                  ? darkMode
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(0, 0, 0, 0.08)'
                  : 'transparent',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              '&:hover': {
                background: darkMode
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            Home
          </Button>

          <Button
            startIcon={<InfoIcon />}
            onClick={() => handleNavClick('about')}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 600,
              px: 2.5,
              py: 1,
              color: darkMode
                ? activeNav === 'about'
                  ? '#ffffff'
                  : 'rgba(255, 255, 255, 0.7)'
                : activeNav === 'about'
                ? '#000000'
                : 'rgba(0, 0, 0, 0.7)',
              background:
                activeNav === 'about'
                  ? darkMode
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(0, 0, 0, 0.08)'
                  : 'transparent',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              '&:hover': {
                background: darkMode
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            About
          </Button>

          <Button
            startIcon={<ChipIcon />}
            onClick={() => handleNavClick('chipmasters')}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 600,
              px: 2.5,
              py: 1,
              color: darkMode
                ? activeNav === 'chipmasters'
                  ? '#ffffff'
                  : 'rgba(255, 255, 255, 0.7)'
                : activeNav === 'chipmasters'
                ? '#000000'
                : 'rgba(0, 0, 0, 0.7)',
              background:
                activeNav === 'chipmasters'
                  ? darkMode
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(0, 0, 0, 0.08)'
                  : 'transparent',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              '&:hover': {
                background: darkMode
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            ChipMasters
          </Button>
        </Box>

        {/* Right side actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* GitHub Link */}
          <Tooltip title="View on GitHub" arrow>
            <IconButton
              onClick={handleGitHubClick}
              sx={{
                width: 45,
                height: 45,
                borderRadius: '50%',
                background: darkMode
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.05)',
                border: `1px solid ${alpha(
                  darkMode ? '#ffffff' : '#000000',
                  0.1
                )}`,
                color: darkMode ? '#ffffff' : '#000000',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                '&:hover': {
                  background: darkMode
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-2px) scale(1.05)',
                  boxShadow: darkMode
                    ? '0 8px 25px rgba(255, 255, 255, 0.1)'
                    : '0 8px 25px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>

          {/* Theme Toggle */}
          <Tooltip title={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`} arrow>
            <IconButton
              onClick={toggleTheme}
              sx={{
                width: 45,
                height: 45,
                borderRadius: '50%',
                background: darkMode
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.05)',
                border: `1px solid ${alpha(
                  darkMode ? '#ffffff' : '#000000',
                  0.1
                )}`,
                color: darkMode ? '#ffd54f' : '#f57c00',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                '&:hover': {
                  background: darkMode
                    ? 'rgba(255, 213, 79, 0.15)'
                    : 'rgba(245, 124, 0, 0.08)',
                  transform: 'translateY(-2px) scale(1.05) rotate(15deg)',
                  boxShadow: darkMode
                    ? '0 8px 25px rgba(255, 213, 79, 0.2)'
                    : '0 8px 25px rgba(245, 124, 0, 0.2)',
                },
              }}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
