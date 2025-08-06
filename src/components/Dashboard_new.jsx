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
      }}
    >
      {/* Updated Main Heading with glass effect */}
      <Typography
        variant="h3" component="h1" align="center" gutterBottom
        sx={{ 
          fontWeight: 'bold', 
          color: 'text.primary', 
          mb: 5, 
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          background: theme => theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 4,
          py: 3,
          px: 4,
          border: theme => `1px solid ${theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(255, 255, 255, 0.3)'}`,
          boxShadow: theme => theme.palette.mode === 'dark'
            ? '0 8px 32px rgba(0, 0, 0, 0.4)'
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        RoverXplorer
      </Typography>

      <Container maxWidth="lg">
        {/* Current Readings Section with glass background */}
        <Box
          sx={{
            background: theme => theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.03)' 
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 4,
            p: 4,
            mb: 4,
            border: theme => `1px solid ${theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.2)'}`,
            boxShadow: theme => theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.08)',
          }}
        >
          <Typography
            variant="h4" component="h2" align="center" gutterBottom
            sx={{ mb: 4, color: 'primary.dark', fontWeight: 'bold' }}
          >
            Current Readings
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
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

        <Divider 
          sx={{ 
            my: 6, 
            borderColor: 'divider', 
            borderWidth: 2,
            background: theme => theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.1)',
            borderRadius: 2,
            backdropFilter: 'blur(10px)',
          }} 
        />

        {/* Instructions for users with glass effect */}
        <Box
          sx={{
            background: theme => theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.03)' 
              : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            borderRadius: 3,
            p: 3,
            border: theme => `1px solid ${theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.3)'}`,
            boxShadow: theme => theme.palette.mode === 'dark'
              ? '0 4px 20px rgba(0, 0, 0, 0.2)'
              : '0 4px 20px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Typography
            variant="h6" component="h3" align="center" gutterBottom
            sx={{ mb: 0, color: 'text.secondary', fontStyle: 'italic' }}
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
