// src/components/Dashboard.jsx
import React from 'react';
import SensorCard from './SensorCard'; // Import SensorCard
import SensorLineChart from './SensorLineChart'; // Import SensorLineChart

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
        minHeight: '100vh',
        background: 'linear-gradient(to top right, #e3f2fd, #ede7f6, #fce4ec)',
      }}
    >
      {/* Updated Main Heading */}
      <Typography
        variant="h3" component="h1" align="center" gutterBottom
        sx={{ fontWeight: 'bold', color: 'text.primary', mb: 5, textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
      >
        RoverXplorer
      </Typography>

      <Container maxWidth="lg">
        {/* Current Readings Section */}
        <Typography
          variant="h4" component="h2" align="center" gutterBottom
          sx={{ mb: 4, color: 'primary.dark', fontWeight: 'bold' }}
        >
          Current Readings
        </Typography>
        <Grid container spacing={4} justifyContent="center" mb={6}>
          {sensors.map((sensor) => (
            <Grid item xs={12} sm={6} md={4} key={sensor.key}>
              <SensorCard
                title={sensor.title}
                value={sensor.value}
                unit={sensor.unit}
                icon={sensor.icon}
                alert={sensor.value !== undefined && (
                  (sensor.key === "temperature" && (sensor.value > 40 || sensor.value < 0)) ||
                  (sensor.key === "co2" && sensor.value > 1500)
                )}
              />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'divider', borderWidth: 2 }} />

        {/* Sensor Trends Section */}
        <Typography
          variant="h4" component="h2" align="center" gutterBottom
          sx={{ mb: 4, color: 'secondary.dark', fontWeight: 'bold' }}
        >
          Sensor Trends
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {sensors.map((sensor) => (
            <Grid item xs={12} md={6} lg={4} key={`chart-${sensor.key}`}>
              <SensorLineChart
                title={sensor.title}
                dataKey={sensor.key}
                unit={sensor.unit}
                color={sensor.color}
                // Pass the full historicalData array to the chart component
                historicalData={historicalData}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;