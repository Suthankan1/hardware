// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// If you have a global CSS file, you can keep it, but MUI doesn't strictly need it.
// import './index.css';

// Import ThemeProvider and createTheme for Material-UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Create both light and dark themes
const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#64b5f6' : '#1976d2',
      light: mode === 'dark' ? '#90caf9' : '#42a5f5',
      dark: mode === 'dark' ? '#1976d2' : '#1565c0',
    },
    secondary: {
      main: mode === 'dark' ? '#f48fb1' : '#dc004e',
      light: mode === 'dark' ? '#f8bbd9' : '#ff6584',
      dark: mode === 'dark' ? '#ad2d5a' : '#9a0036',
    },
    background: {
      default: mode === 'dark' ? '#0a0a0a' : '#f5f5f5',
      paper: mode === 'dark' ? '#1a1a1a' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#000000',
      secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* App now handles theme switching internally */}
    <App getTheme={getTheme} />
  </React.StrictMode>,
);