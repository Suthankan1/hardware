// src/App.jsx
import React, { useEffect, useState, useMemo } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import CodeDisplayModal from './components/CodeDisplayModal';
import GraphDisplayModal from './components/GraphDisplayModal'; // Import GraphDisplayModal
import { ColorModeContext } from './context/ColorModeContext';
import { codeSnippets } from './data/codeSnippets';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  // State for theme mode
  const [mode, setMode] = useState('light');

  // Memoize the color mode context value to prevent unnecessary re-renders
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // Memoize the theme creation to avoid re-creating it on every render
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
          error: { // Ensure error color is defined for alert states
            main: '#f44336',
            light: '#e57373',
          },
          background: {
            default: mode === 'light' ? '#f4f6f8' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
          text: {
            primary: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#e0e0e0',
            secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : '#b0b0b0',
          }
        },
        typography: {
          fontFamily: 'Roboto, Arial, sans-serif',
          h3: { fontWeight: 700 },
          h4: { fontWeight: 600 },
          h6: { fontWeight: 500 },
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: { borderRadius: 12 },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: { textTransform: 'none' },
            },
          },
          MuiDialog: { // Style for dialogs
            styleOverrides: {
              paper: {
                // Ensure a nice background for dialogs in both modes
                backgroundColor: 'background.paper',
              }
            }
          }
        },
        spacing: 8,
      }),
    [mode],
  );


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
  const MAX_HISTORY_POINTS = 30;

  // State for code display modal
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [codeToDisplay, setCodeToDisplay] = useState('');
  const [codeModalTitle, setCodeModalTitle] = useState('');

  // NEW STATE: State for graph display modal
  const [showGraphModal, setShowGraphModal] = useState(false);
  const [selectedGraphSensorKey, setSelectedGraphSensorKey] = useState(null);


  // Function to handle opening the code modal (triggered by chart data point click)
  const handleOpenCodeModal = (sensorKey, sensorTitle) => {
    setCodeToDisplay(codeSnippets[sensorKey] || codeSnippets.default);
    setCodeModalTitle(`${sensorTitle} Data Point Code`);
    setShowCodeModal(true);
  };

  // Function to handle closing the code modal
  const handleCloseCodeModal = () => {
    setShowCodeModal(false);
    setCodeToDisplay('');
    setCodeModalTitle('');
  };

  // NEW FUNCTION: Function to handle opening the graph modal (triggered by SensorCard click)
  const handleOpenGraphModal = (sensorKey) => {
    setSelectedGraphSensorKey(sensorKey);
    setShowGraphModal(true);
  };

  // NEW FUNCTION: Function to handle closing the graph modal
  const handleCloseGraphModal = () => {
    setShowGraphModal(false);
    setSelectedGraphSensorKey(null);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      const newSensorData = {
        temperature: parseFloat((18 + Math.random() * 15).toFixed(1)),
        humidity: parseFloat((30 + Math.random() * 40).toFixed(1)),
        distance: parseFloat((20 + Math.random() * 180).toFixed(1)),
        co2: parseInt((380 + Math.random() * 1000).toFixed(0), 10),
        light: parseInt((100 + Math.random() * 1500).toFixed(0), 10),
        uv: parseFloat((Math.random() * 12).toFixed(1)),
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      };

      setSensorData(newSensorData);

      setHistoricalData(prevData => {
        const updatedData = [...prevData, newSensorData];
        if (updatedData.length > MAX_HISTORY_POINTS) {
          return updatedData.slice(updatedData.length - MAX_HISTORY_POINTS);
        }
        return updatedData;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Determine if any modal is open to apply global blur
  const isAnyModalOpen = showCodeModal || showGraphModal;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box
          sx={{
            minHeight: '100vh',
            backgroundColor: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 4,
            px: 2,
            pt: { xs: '80px', sm: '80px', md: '90px' },
            // Apply blur effect to content when ANY modal is open
            filter: isAnyModalOpen ? 'blur(5px)' : 'none',
            transition: 'filter 0.3s ease-in-out',
            pointerEvents: isAnyModalOpen ? 'none' : 'auto',
            zIndex: 1,
          }}
        >
          <Dashboard
            sensorData={sensorData}
            historicalData={historicalData}
            onChartDataClick={handleOpenCodeModal} // For clicking data points in the chart (now in GraphModal)
            onOpenGraphModal={handleOpenGraphModal} // For clicking SensorCard to open graph modal
          />
        </Box>
        {/* Code Display Modal */}
        <CodeDisplayModal
          open={showCodeModal}
          onClose={handleCloseCodeModal}
          code={codeToDisplay}
          title={codeModalTitle}
        />
        {/* Graph Display Modal */}
        <GraphDisplayModal
          open={showGraphModal}
          onClose={handleCloseGraphModal}
          selectedSensorKey={selectedGraphSensorKey}
          historicalData={historicalData}
          currentSensorData={sensorData} // Pass all current sensor data
          onChartDataClick={handleOpenCodeModal} // Allow clicking data point *within this graph modal*
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;