// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// If you have a global CSS file, you can keep it, but MUI doesn't strictly need it.
// import './index.css';

// Import ThemeProvider and createTheme for Material-UI
import { ThemeProvider, createTheme } from '@mui/material/styles';

// You can define a basic custom theme here.
// For now, let's just create a default one.
const theme = createTheme({
  // You can customize your theme here later, e.g.:
  // palette: {
  //   primary: {
  //     main: '#1976d2',
  //   },
  // },
  // typography: {
  //   fontFamily: 'Roboto, Arial, sans-serif',
  // },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your App component with ThemeProvider */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);