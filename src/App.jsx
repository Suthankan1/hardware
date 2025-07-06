// src/App.jsx
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Define your Material-UI theme for a beautiful and consistent look
const theme = createTheme({
  palette: {
    mode: 'light', // You can switch to 'dark' here if preferred
    primary: {
      main: '#1976d2', // A classic Material Blue for primary actions/elements
    },
    secondary: {
      main: '#dc004e', // A vibrant pink for secondary actions or highlights
    },
    background: {
      default: '#f4f6f8', // A very light, subtle grey for the overall app background
      paper: '#ffffff',   // Pure white for cards, elevated surfaces, and chart backgrounds
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Material Design's recommended font stack
    h3: {
      fontWeight: 700, // Extra bold for main titles
    },
    h4: {
      fontWeight: 600, // Semi-bold for section titles
    },
    h6: {
      fontWeight: 500, // Medium weight for card titles
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // More rounded corners for cards, enhancing the modern feel
        },
      },
    },
    MuiButton: { // Example of global button styling if you use them
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents default uppercase text for buttons
        },
      },
    },
  },
  spacing: 8, // Sets the default spacing unit to 8px, used by MUI's `spacing` utility
});


function App() {
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

  return (
    // ThemeProvider wraps the entire application to apply the custom Material-UI theme
    <ThemeProvider theme={theme}>
      {/* CssBaseline provides a consistent CSS baseline across all browsers,
          resetting default browser styles for a clean starting point. */}
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh', // Ensures the app container takes at least the full viewport height
          backgroundColor: 'background.default', // Uses the default background color from the theme
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centers content horizontally within the Box
          py: 4, // Padding on the top and bottom (4 * 8px = 32px)
          px: 2, // Padding on the left and right (2 * 8px = 16px)
        }}
      >
        {/* The Dashboard component receives the current and historical sensor data */}
        <Dashboard sensorData={sensorData} historicalData={historicalData} />
      </Box>
    </ThemeProvider>
  );
}

export default App;