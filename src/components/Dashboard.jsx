// src/components/Dashboard.jsx
import React, { useState } from 'react';
import SensorCard from './SensorCard'; // Import SensorCard
import GraphModal from './GraphModal'; // Import GraphModal

// Material-UI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

// Material Icons
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StraightenIcon from '@mui/icons-material/Straighten';
import Co2Icon from '@mui/icons-material/Co2';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

// Mapping for Material Icons
const sensorIcons = {
  temperature: <ThermostatIcon sx={{ fontSize: 40 }} />,
  humidity: <WaterDropIcon sx={{ fontSize: 40 }} />,
  distance: <StraightenIcon sx={{ fontSize: 40 }} />,
  co2: <Co2Icon sx={{ fontSize: 40 }} />,
  light: <LightbulbIcon sx={{ fontSize: 40 }} />,
  uv: <WbSunnyIcon sx={{ fontSize: 40 }} />,
};

// Define specific colors for each chart line
const chartColors = {
  temperature: '#ef5350',
  humidity: '#42a5f5',
  distance: '#ab47bc',
  co2: '#66bb6a',
  light: '#ffb300',
  uv: '#f06292',
};

function Dashboard({ sensorData, historicalData }) {
  // Add console log for debugging
  console.log('Dashboard component is loading...', { sensorData, historicalDataLength: historicalData?.length });
  
  // State to track which sensor's modal is open
  const [selectedSensor, setSelectedSensor] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Open modal for a specific sensor
  const openSensorModal = (sensor) => {
    setSelectedSensor(sensor);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedSensor(null);
  };

  const sensors = [
    { key: "temperature", title: "Temperature", unit: "°C", value: sensorData.temperature, icon: sensorIcons.temperature, color: chartColors.temperature },
    { key: "humidity", title: "Humidity", unit: "%", value: sensorData.humidity, icon: sensorIcons.humidity, color: chartColors.humidity },
    { key: "distance", title: "Distance", unit: "cm", value: sensorData.distance, icon: sensorIcons.distance, color: chartColors.distance },
    { key: "co2", title: "CO₂ Level", unit: "ppm", value: sensorData.co2, icon: sensorIcons.co2, color: chartColors.co2 },
    { key: "light", title: "Light Intensity", unit: "lx", value: sensorData.light, icon: sensorIcons.light, color: chartColors.light },
    { key: "uv", title: "UV Index", unit: "", value: sensorData.uv, icon: sensorIcons.uv, color: chartColors.uv },
  ];

  return (
    <Box
      sx={{
        py: 5,
        minHeight: 'calc(100vh - 90px)', // Account for header height
        width: '100%',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme => theme.palette.mode === 'dark'
            ? `
              radial-gradient(ellipse 800px 600px at 50% 0%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse 600px 400px at 0% 50%, rgba(168, 85, 247, 0.02) 0%, transparent 50%),
              radial-gradient(ellipse 600px 400px at 100% 50%, rgba(34, 197, 94, 0.02) 0%, transparent 50%)
            `
            : `
              radial-gradient(ellipse 800px 600px at 50% 0%, rgba(99, 102, 241, 0.02) 0%, transparent 60%),
              radial-gradient(ellipse 600px 400px at 0% 50%, rgba(168, 85, 247, 0.015) 0%, transparent 60%),
              radial-gradient(ellipse 600px 400px at 100% 50%, rgba(34, 197, 94, 0.015) 0%, transparent 60%)
            `,
          pointerEvents: 'none',
          zIndex: -1,
          animation: 'atmosphericFlow 30s ease-in-out infinite alternate',
        },
        '@keyframes atmosphericFlow': {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
            opacity: 0.6,
          },
          '25%': {
            transform: 'scale(1.02) rotate(0.5deg)',
            opacity: 0.7,
          },
          '50%': {
            transform: 'scale(0.98) rotate(-0.5deg)',
            opacity: 0.8,
          },
          '75%': {
            transform: 'scale(1.01) rotate(0.3deg)',
            opacity: 0.7,
          },
          '100%': {
            transform: 'scale(1) rotate(0deg)',
            opacity: 0.6,
          },
        },
      }}
    >
      {/* Updated Main Heading with glass effect */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Typography
          variant="h3" component="h1" align="center" gutterBottom
          sx={{ 
            fontWeight: 'bold', 
            mb: 0,
            color: theme => theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.85)'
              : 'rgba(0, 0, 0, 0.75)',
            textShadow: theme => theme.palette.mode === 'dark'
              ? '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)'
              : '0 2px 8px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 0, 0, 0.05)',
            background: theme => theme.palette.mode === 'dark' 
              ? `
                linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%),
                radial-gradient(ellipse at center, rgba(255, 255, 255, 0.12) 0%, transparent 70%)
              ` 
              : `
                linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%),
                radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, transparent 70%)
              `,
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            borderRadius: 6,
            py: 3,
            px: 5,
            border: theme => `2px solid ${theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.15)' 
              : 'rgba(255, 255, 255, 0.5)'}`,
            boxShadow: theme => theme.palette.mode === 'dark'
              ? `
                0 15px 45px rgba(0, 0, 0, 0.5),
                0 8px 25px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 0 30px ${theme.palette.primary.main}30
              `
              : `
                0 15px 45px rgba(0, 0, 0, 0.15),
                0 8px 25px rgba(0, 0, 0, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.9)
              `,
            display: 'inline-block',
            maxWidth: 'fit-content',
            whiteSpace: 'nowrap',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
              animation: 'titleShine 6s ease-in-out infinite',
            },
            '@keyframes titleShine': {
              '0%': { left: '-100%' },
              '20%': { left: '100%' },
              '100%': { left: '100%' },
            },
          }}
        >
          RoverXplorer
        </Typography>
      </Box>
      
      <Container maxWidth="lg">
        {/* Current Readings Section with professional color scheme - No glass effects */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Box
            sx={{
              background: theme => theme.palette.mode === 'dark' 
                ? `
                  linear-gradient(135deg, #1e40af 0%, #1e3a8a 25%, #1d4ed8 50%, #1e3a8a 75%, #1e40af 100%),
                  radial-gradient(ellipse 600px 400px at 30% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 60%),
                  radial-gradient(ellipse 400px 300px at 70% 80%, rgba(30, 64, 175, 0.12) 0%, transparent 60%)
                ` 
                : `
                  linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #bfdbfe 75%, #dbeafe 100%),
                  radial-gradient(ellipse 600px 400px at 30% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 60%),
                  radial-gradient(ellipse 400px 300px at 70% 80%, rgba(30, 64, 175, 0.06) 0%, transparent 60%)
                `,
              borderRadius: 6,
              p: 4,
              border: theme => theme.palette.mode === 'dark' 
                ? '2px solid rgba(37, 99, 235, 0.3)' 
                : '2px solid rgba(30, 64, 175, 0.2)',
              boxShadow: theme => theme.palette.mode === 'dark'
                ? `
                  0 20px 50px rgba(37, 99, 235, 0.15),
                  0 10px 30px rgba(30, 64, 175, 0.1),
                  inset 0 1px 0 rgba(37, 99, 235, 0.2)
                `
                : `
                  0 20px 50px rgba(30, 64, 175, 0.08),
                  0 10px 30px rgba(37, 99, 235, 0.06),
                  inset 0 1px 0 rgba(147, 197, 253, 0.3)
                `,
              maxWidth: 'fit-content',
              width: 'auto',
              position: 'relative',
              overflow: 'hidden',
              transform: 'translateY(0)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: theme => theme.palette.mode === 'dark'
                  ? `
                    0 25px 60px rgba(37, 99, 235, 0.2),
                    0 15px 40px rgba(30, 64, 175, 0.15),
                    inset 0 1px 0 rgba(37, 99, 235, 0.25)
                  `
                  : `
                    0 25px 60px rgba(30, 64, 175, 0.12),
                    0 15px 40px rgba(37, 99, 235, 0.08),
                    inset 0 1px 0 rgba(147, 197, 253, 0.4)
                  `,
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: theme => theme.palette.mode === 'dark'
                  ? 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(147, 197, 253, 0.3), transparent)',
                animation: 'professionalShine 8s ease-in-out infinite',
                pointerEvents: 'none',
              },
              '@keyframes professionalShine': {
                '0%': { left: '-100%' },
                '25%': { left: '100%' },
                '100%': { left: '100%' },
              },
            }}
          >
          {/* Current Readings Title - Professional color design */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Typography
              variant="h4" component="h2" align="center" gutterBottom
              sx={{ 
                mb: 0, 
                fontWeight: 'bold',
                color: theme => theme.palette.mode === 'dark'
                  ? '#ffffff'
                  : '#1e40af',
                textShadow: theme => theme.palette.mode === 'dark'
                  ? '0 2px 8px rgba(37, 99, 235, 0.3), 0 0 20px rgba(30, 64, 175, 0.2)'
                  : '0 2px 8px rgba(30, 64, 175, 0.2), 0 0 20px rgba(37, 99, 235, 0.1)',
                background: theme => theme.palette.mode === 'dark' 
                  ? `
                    linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #1e3a8a 100%)
                  ` 
                  : `
                    linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)
                  `,
                borderRadius: 6,
                py: 3,
                px: 5,
                border: theme => theme.palette.mode === 'dark' 
                  ? '2px solid rgba(37, 99, 235, 0.4)' 
                  : '2px solid rgba(30, 64, 175, 0.3)',
                boxShadow: theme => theme.palette.mode === 'dark'
                  ? `
                    0 15px 40px rgba(37, 99, 235, 0.2),
                    0 8px 25px rgba(30, 64, 175, 0.15),
                    inset 0 2px 0 rgba(147, 197, 253, 0.2),
                    0 0 30px rgba(29, 78, 216, 0.3)
                  `
                  : `
                    0 15px 40px rgba(30, 64, 175, 0.12),
                    0 8px 25px rgba(37, 99, 235, 0.08),
                    inset 0 2px 0 rgba(255, 255, 255, 0.8),
                    0 0 30px rgba(29, 78, 216, 0.15)
                  `,
                display: 'inline-block',
                maxWidth: 'fit-content',
                whiteSpace: 'nowrap',
                position: 'relative',
                overflow: 'hidden',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px) scale(1.02)',
                  boxShadow: theme => theme.palette.mode === 'dark'
                    ? `
                      0 20px 50px rgba(37, 99, 235, 0.25),
                      0 12px 35px rgba(30, 64, 175, 0.2),
                      inset 0 2px 0 rgba(147, 197, 253, 0.3),
                      0 0 40px rgba(29, 78, 216, 0.4)
                    `
                    : `
                      0 20px 50px rgba(30, 64, 175, 0.15),
                      0 12px 35px rgba(37, 99, 235, 0.12),
                      inset 0 2px 0 rgba(255, 255, 255, 0.9),
                      0 0 40px rgba(29, 78, 216, 0.2)
                    `,
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: theme => theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, transparent, rgba(147, 197, 253, 0.3), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(30, 64, 175, 0.2), transparent)',
                  animation: 'titleShine 6s ease-in-out infinite',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 3,
                  background: theme => theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, #1e40af, #1d4ed8, #2563eb, #1d4ed8, #1e40af)'
                    : 'linear-gradient(90deg, #1e40af, #1d4ed8, #2563eb, #1d4ed8, #1e40af)',
                  borderRadius: 3,
                  animation: 'professionalPulse 3s ease-in-out infinite',
                },
                '@keyframes titleShine': {
                  '0%': { left: '-100%' },
                  '20%': { left: '100%' },
                  '100%': { left: '100%' },
                },
                '@keyframes professionalPulse': {
                  '0%, 100%': { opacity: 0.7, transform: 'translateX(-50%) scaleX(1)' },
                  '50%': { opacity: 1, transform: 'translateX(-50%) scaleX(1.05)' },
                },
              }}
            >
              Current Readings
            </Typography>
          </Box>
          
          <Box sx={{ minWidth: 0, width: '100%' }}>
            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1200px' }}>
              {sensors.map((sensor) => (
                <Grid item xs={12} sm={6} md={4} key={sensor.key}>
                  <SensorCard
                    title={sensor.title}
                    value={sensor.value}
                    unit={sensor.unit}
                    icon={sensor.icon}
                    onClick={() => openSensorModal(sensor)}
                    isClickable={true}
                    alert={sensor.value !== undefined && (
                      (sensor.key === "temperature" && (sensor.value > 40 || sensor.value < 0)) ||
                      (sensor.key === "co2" && sensor.value > 1500)
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        </Box>

        <Box
          sx={{
            my: 6,
            height: 1,
            position: 'relative',
            background: theme => `linear-gradient(90deg, 
              transparent 0%, 
              ${theme.palette.primary.main}40 20%, 
              ${theme.palette.secondary.main}60 50%, 
              ${theme.palette.primary.main}40 80%, 
              transparent 100%
            )`,
            borderRadius: 2,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -1,
              left: 0,
              right: 0,
              height: 3,
              background: theme => `linear-gradient(90deg, 
                transparent 0%, 
                ${theme.palette.primary.main}20 20%, 
                ${theme.palette.secondary.main}30 50%, 
                ${theme.palette.primary.main}20 80%, 
                transparent 100%
              )`,
              borderRadius: 2,
              animation: 'shimmer 3s ease-in-out infinite',
            },
            '@keyframes shimmer': {
              '0%, 100%': { opacity: 0.5 },
              '50%': { opacity: 1 },
            },
          }}
        />

        {/* Instructions for users with glass effect */}
        <Box
          sx={{
            background: theme => theme.palette.mode === 'dark' 
              ? `
                linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%),
                radial-gradient(ellipse at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%)
              `
              : `
                linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%),
                radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, transparent 70%)
              `,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 4,
            p: 4,
            border: theme => `1px solid ${theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.08)' 
              : 'rgba(255, 255, 255, 0.4)'}`,
            boxShadow: theme => theme.palette.mode === 'dark'
              ? `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
              : `
                0 8px 32px rgba(0, 0, 0, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
              `,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              animation: 'slideShine 4s ease-in-out infinite',
            },
            '@keyframes slideShine': {
              '0%': { left: '-100%' },
              '50%': { left: '100%' },
              '100%': { left: '100%' },
            },
          }}
        >
          <Typography
            variant="h6" component="h3" align="center" gutterBottom
            sx={{ 
              mb: 0, 
              fontStyle: 'italic',
              background: theme => theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)'
                : 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Click on any sensor reading to view its detailed trend analysis
          </Typography>
        </Box>

        {/* Graph Modal */}
        <GraphModal
          open={modalOpen}
          onClose={closeModal}
          sensor={selectedSensor}
          historicalData={historicalData}
        />
      </Container>
    </Box>
  );
}

export default Dashboard;
