// src/App.jsx
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'; // Import About component

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

function App({ getTheme }) {
  // Add console log for debugging
  console.log('App component is loading...', { getTheme: typeof getTheme });
  
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved theme preference, default to light mode
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // State for the current sensor readings
  const [sensorData, setSensorData] = useState({
    temperature: 25,
    humidity: 50,
    distance: 100,
    co2: 400,
    light: 800,
    uv: 3
  });

  // State for historical data points, used for charting
  const [historicalData, setHistoricalData] = useState([]);
  const MAX_HISTORY_POINTS = 30; // Keep the last 30 data points for smoother chart trends

  // Navigation state
  const [activeNav, setActiveNav] = useState('home');
  const handleNavClick = (nav) => setActiveNav(nav);

  useEffect(() => {
    // Simulate real-time sensor data updates
    const interval = setInterval(() => {
      const newSensorData = {
        // Generate random data within a realistic range
        temperature: parseFloat((18 + Math.random() * 15).toFixed(1)), // e.g., 18.0 to 33.0 °C
        humidity: parseFloat((30 + Math.random() * 40).toFixed(1)),   // e.g., 30.0 to 70.0 %
        distance: parseFloat((20 + Math.random() * 180).toFixed(1)),  // e.g., 20.0 to 200.0 cm
        co2: parseInt((380 + Math.random() * 1000).toFixed(0), 10),    // e.g., 380 to 1380 ppm
        light: parseInt((100 + Math.random() * 1500).toFixed(0), 10),  // e.g., 100 to 1600 lx
        uv: parseFloat((Math.random() * 12).toFixed(1)),              // e.g., 0.0 to 12.0 UV Index
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }), // Timestamp for chart X-axis
      };

      setSensorData(newSensorData); // Update the current sensor data

      // Update historical data: add the new point and trim if it exceeds MAX_HISTORY_POINTS
      setHistoricalData(prevData => {
        const updatedData = [...prevData, newSensorData];
        if (updatedData.length > MAX_HISTORY_POINTS) {
          return updatedData.slice(updatedData.length - MAX_HISTORY_POINTS); // Keep only the most recent points
        }
        return updatedData;
      });
    }, 1500); // Update data every 1.5 seconds for a lively dashboard

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const theme = getTheme(darkMode ? 'dark' : 'light');

  return (
    // ThemeProvider wraps the entire application to apply the custom Material-UI theme
    <ThemeProvider theme={theme}>
      {/* CssBaseline provides a consistent CSS baseline across all browsers */}
      <CssBaseline />
      
      {/* Header Component */}
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        activeNav={activeNav} 
        handleNavClick={handleNavClick} 
      />
      
      {/* Main Content with premium glass-morphism background */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: '90px', // Top padding to account for fixed header height
          pb: 4,
          px: 2,
          position: 'relative',
          background: darkMode
            ? `
              linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 15%, #2a2f3e 30%, #1e2332 45%, #141926 60%, #0f1419 75%, #0a0f1c 100%),
              radial-gradient(ellipse 1200px 800px at 15% 25%, rgba(147, 51, 234, 0.15) 0%, transparent 40%),
              radial-gradient(ellipse 1000px 600px at 85% 75%, rgba(59, 130, 246, 0.12) 0%, transparent 45%),
              radial-gradient(ellipse 800px 500px at 50% 10%, rgba(16, 185, 129, 0.10) 0%, transparent 50%),
              radial-gradient(ellipse 600px 400px at 30% 90%, rgba(236, 72, 153, 0.08) 0%, transparent 35%),
              radial-gradient(ellipse 900px 700px at 70% 30%, rgba(245, 158, 11, 0.06) 0%, transparent 40%)
            `
            : `
              linear-gradient(135deg, #fefefe 0%, #f1f5f9 12%, #e2e8f0 25%, #f8fafc 37%, #ffffff 50%, #f1f5f9 62%, #e2e8f0 75%, #f8fafc 87%, #fefefe 100%),
              radial-gradient(ellipse 1200px 800px at 15% 25%, rgba(147, 51, 234, 0.08) 0%, transparent 40%),
              radial-gradient(ellipse 1000px 600px at 85% 75%, rgba(59, 130, 246, 0.07) 0%, transparent 45%),
              radial-gradient(ellipse 800px 500px at 50% 10%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 600px 400px at 30% 90%, rgba(236, 72, 153, 0.05) 0%, transparent 35%),
              radial-gradient(ellipse 900px 700px at 70% 30%, rgba(245, 158, 11, 0.04) 0%, transparent 40%)
            `,
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: darkMode
              ? `
                radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 25%),
                radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.08) 0%, transparent 25%),
                radial-gradient(circle at 40% 90%, rgba(34, 197, 94, 0.06) 0%, transparent 25%)
              `
              : `
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 30%),
                radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 30%),
                radial-gradient(circle at 40% 90%, rgba(34, 197, 94, 0.04) 0%, transparent 30%)
              `,
            pointerEvents: 'none',
            zIndex: -1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: darkMode
              ? `
                radial-gradient(2px 2px at 20% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
                radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.6) 0%, transparent 50%),
                radial-gradient(1px 1px at 30% 70%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
                radial-gradient(2px 2px at 90% 80%, rgba(255, 255, 255, 0.5) 0%, transparent 50%),
                radial-gradient(1px 1px at 10% 60%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                radial-gradient(1px 1px at 70% 90%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
                linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.008) 50%, transparent 70%)
              `
              : `
                radial-gradient(2px 2px at 20% 20%, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
                radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
                radial-gradient(1px 1px at 30% 70%, rgba(255, 255, 255, 0.5) 0%, transparent 50%),
                radial-gradient(2px 2px at 90% 80%, rgba(255, 255, 255, 0.6) 0%, transparent 50%),
                radial-gradient(1px 1px at 10% 60%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
                radial-gradient(1px 1px at 70% 90%, rgba(255, 255, 255, 0.5) 0%, transparent 50%),
                linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)
              `,
            pointerEvents: 'none',
            zIndex: -1,
            animation: 'subtleShimmer 20s ease-in-out infinite alternate',
          },
          '@keyframes subtleShimmer': {
            '0%': {
              transform: 'translateX(0) translateY(0) scale(1)',
              opacity: 0.7,
            },
            '33%': {
              transform: 'translateX(10px) translateY(-5px) scale(1.02)',
              opacity: 0.8,
            },
            '66%': {
              transform: 'translateX(-5px) translateY(10px) scale(0.98)',
              opacity: 0.9,
            },
            '100%': {
              transform: 'translateX(0) translateY(0) scale(1)',
              opacity: 0.7,
            },
          },
        }}
      >
        {/* Render About component if 'about' is the active navigation item, otherwise render Dashboard */}
        {activeNav === 'about' ? (
          <About />
        ) : (
          <Dashboard sensorData={sensorData} historicalData={historicalData} />
        )}
        
        {/* Footer Component */}
        <Footer darkMode={darkMode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;