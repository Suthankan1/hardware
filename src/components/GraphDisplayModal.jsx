import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SensorLineChart from './SensorLineChart';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StraightenIcon from '@mui/icons-material/Straighten';
import Co2Icon from '@mui/icons-material/Co2';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useTheme } from '@mui/material/styles';

const sensorIconsMap = {
  temperature: <ThermostatIcon fontSize="small" />,
  humidity: <WaterDropIcon fontSize="small" />,
  distance: <StraightenIcon fontSize="small" />,
  co2: <Co2Icon fontSize="small" />,
  light: <LightbulbIcon fontSize="small" />,
  uv: <WbSunnyIcon fontSize="small" />,
};

const chartColorsMap = {
  temperature: '#ef5350',
  humidity: '#42a5f5',
  distance: '#ab47bc',
  co2: '#66bb6a',
  light: '#ffb300',
  uv: '#f06292',
};

const allSensorsMetadata = [
  { key: "temperature", title: "Temperature", unit: "°C" },
  { key: "humidity", title: "Humidity", unit: "%" },
  { key: "distance", title: "Distance", unit: "cm" },
  { key: "co2", title: "CO₂ Level", unit: "ppm" },
  { key: "light", title: "Light Intensity", unit: "lx" },
  { key: "uv", title: "UV Index", unit: "" },
];

function GraphDisplayModal({ open, onClose, selectedSensorKey, historicalData, currentSensorData, onChartDataClick }) {
  const theme = useTheme();

  const selectedGraphSensor = allSensorsMetadata.find(s => s.key === selectedSensorKey);
  const selectedGraphSensorColor = chartColorsMap[selectedSensorKey];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: 'background.paper',
          minHeight: '70vh',
          maxHeight: '90vh',
        }
      }}
      sx={{
        '.MuiDialog-backdrop': {
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          transition: 'backdrop-filter 0.3s ease-in-out',
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {selectedGraphSensor ? `${selectedGraphSensor.title} Trend & Live Data` : 'Sensor Data'}
        </Typography>
        <IconButton aria-label="close" onClick={onClose} sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 0, display: 'flex', height: '100%', minHeight: 'inherit', overflow: 'hidden' }}>
        <Grid container sx={{ height: '100%' }}>
          {/* Larger graph: md=10, lg=11 */}
          <Grid
            item
            xs={12}
            md={10}
            lg={11}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 0,
            }}
          >
            {selectedGraphSensor ? (
              <Box sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: '1200px', lg: '1500px' }, // Even larger on big screens
                flexGrow: 1,
                minHeight: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'medium', color: 'text.primary', textAlign: 'center' }}>
                  {selectedGraphSensor.title} Historical Trend
                </Typography>
                <SensorLineChart
                  title={selectedGraphSensor.title}
                  dataKey={selectedGraphSensor.key}
                  unit={selectedGraphSensor.unit}
                  color={selectedGraphSensorColor}
                  historicalData={historicalData}
                  onDataPointClick={onChartDataClick}
                  chartHeight={600} // Even taller
                />
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography variant="h6" color="text.secondary">
                  Select a sensor to view its trend.
                </Typography>
              </Box>
            )}
          </Grid>
          {/* Smaller readings: md=2, lg=1, smaller text/icons */}
          <Grid
            item
            xs={12}
            md={2}
            lg={1}
            sx={{
              p: 1,
              borderLeft: { md: `1px solid ${theme.palette.divider}` },
              overflowY: 'auto',
              backgroundColor: theme.palette.background.default,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              maxWidth: { md: '140px', lg: '100px' }, // Compact width
            }}
          >
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold', color: 'primary.dark', textAlign: 'right', fontSize: '0.95rem' }}>
              Current Readings
            </Typography>
            <Box sx={{ width: '100%' }}>
              {allSensorsMetadata.map((sensor) => (
                <Box key={sensor.key} sx={{ mb: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <Box sx={{ color: chartColorsMap[sensor.key] || theme.palette.primary.main, mr: 0, fontSize: '0.9rem' }}>
                    {sensorIconsMap[sensor.key]}
                  </Box>
                  <Typography variant="caption" sx={{ fontWeight: 'medium', color: 'text.primary', textAlign: 'right', fontSize: '0.75rem' }}>
                    {sensor.title}:
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.secondary', textAlign: 'right', fontSize: '0.8rem' }}>
                    {currentSensorData[sensor.key] !== undefined && currentSensorData[sensor.key] !== null
                      ? currentSensorData[sensor.key].toFixed(1)
                      : 'N/A'} {sensor.unit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default GraphDisplayModal;