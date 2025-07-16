// src/App.jsx
import React, { useEffect, useState, useMemo } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import CodeDisplayModal from './components/CodeDisplayModal';
import GraphDisplayModal from './components/GraphDisplayModal';
import { ColorModeContext } from './context/ColorModeContext';
import { codeSnippets } from './data/codeSnippets';
import { connectToBluetoothDevice } from './services/bluetoothServices'; // ✅ Bluetooth added

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#1976d2' },
      secondary: { main: '#dc004e' },
      error: { main: '#f44336', light: '#e57373' },
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
      MuiCard: { styleOverrides: { root: { borderRadius: 12 } } },
      MuiButton: { styleOverrides: { root: { textTransform: 'none' } } },
      MuiDialog: { styleOverrides: { paper: { backgroundColor: 'background.paper' } } },
    },
    spacing: 8,
  }), [mode]);

  const [sensorData, setSensorData] = useState({
    temperature: 25,
    humidity: 50,
    distance: 100,
    co2: 400,
    light: 800,
    uv: 3
  });

  const [historicalData, setHistoricalData] = useState([]);
  const MAX_HISTORY_POINTS = 30;

  const [showCodeModal, setShowCodeModal] = useState(false);
  const [codeToDisplay, setCodeToDisplay] = useState('');
  const [codeModalTitle, setCodeModalTitle] = useState('');

  const [showGraphModal, setShowGraphModal] = useState(false);
  const [selectedGraphSensorKey, setSelectedGraphSensorKey] = useState(null);

  const handleOpenCodeModal = (sensorKey, sensorTitle) => {
    setCodeToDisplay(codeSnippets[sensorKey] || codeSnippets.default);
    setCodeModalTitle(`${sensorTitle} Data Point Code`);
    setShowCodeModal(true);
  };

  const handleCloseCodeModal = () => {
    setShowCodeModal(false);
    setCodeToDisplay('');
    setCodeModalTitle('');
  };

  const handleOpenGraphModal = (sensorKey) => {
    setSelectedGraphSensorKey(sensorKey);
    setShowGraphModal(true);
  };

  const handleCloseGraphModal = () => {
    setShowGraphModal(false);
    setSelectedGraphSensorKey(null);
  };

  // ✅ CONNECT TO BLUETOOTH AND STREAM SENSOR DATA
  useEffect(() => {
    connectToBluetoothDevice((incomingData) => {
      console.log("📡 Incoming Bluetooth data:", incomingData);

      const timestamp = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      });

      const newSensorData = {
        ...sensorData,
        ...incomingData,
        timestamp
      };

      setSensorData(newSensorData);

      setHistoricalData(prev => {
        const updated = [...prev, newSensorData];
        if (updated.length > MAX_HISTORY_POINTS) {
          return updated.slice(updated.length - MAX_HISTORY_POINTS);
        }
        return updated;
      });
    });
  }, []);

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
            filter: isAnyModalOpen ? 'blur(5px)' : 'none',
            transition: 'filter 0.3s ease-in-out',
            pointerEvents: isAnyModalOpen ? 'none' : 'auto',
            zIndex: 1,
          }}
        >
          <Dashboard
            sensorData={sensorData}
            historicalData={historicalData}
            onChartDataClick={handleOpenCodeModal}
            onOpenGraphModal={handleOpenGraphModal}
          />
        </Box>

        <CodeDisplayModal
          open={showCodeModal}
          onClose={handleCloseCodeModal}
          code={codeToDisplay}
          title={codeModalTitle}
        />

        <GraphDisplayModal
          open={showGraphModal}
          onClose={handleCloseGraphModal}
          selectedSensorKey={selectedGraphSensorKey}
          historicalData={historicalData}
          currentSensorData={sensorData}
          onChartDataClick={handleOpenCodeModal}
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
