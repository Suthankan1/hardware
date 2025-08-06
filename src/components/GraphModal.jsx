// src/components/GraphModal.jsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  Fade,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SensorLineChart from './SensorLineChart';

function GraphModal({ open, onClose, sensor, historicalData }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  if (!sensor) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: isDarkMode
            ? 'rgba(30, 30, 30, 0.95)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${isDarkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(255, 255, 255, 0.2)'}`,
          boxShadow: isDarkMode
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          minHeight: '70vh',
          maxHeight: '90vh',
        }
      }}
      BackdropProps={{
        sx: {
          background: isDarkMode 
            ? `
              radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%),
              linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(16, 185, 129, 0.05) 100%)
            ` 
            : `
              radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%),
              linear-gradient(135deg, rgba(147, 51, 234, 0.08) 0%, rgba(59, 130, 246, 0.06) 50%, rgba(16, 185, 129, 0.04) 100%)
            `,
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        }
      }}
      TransitionComponent={Fade}
      TransitionProps={{
        timeout: 300,
      }}
    >
      {/* Header with close button */}
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 2,
          background: isDarkMode
            ? `
              linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%),
              radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)
            `
            : `
              linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%),
              radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, transparent 70%)
            `,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `2px solid ${isDarkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(255, 255, 255, 0.3)'}`,
          borderRadius: '16px 16px 0 0',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: `linear-gradient(90deg, ${sensor?.color || '#666'}20 0%, transparent 50%, ${sensor?.color || '#666'}10 100%)`,
            pointerEvents: 'none',
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Sensor icon */}
          <Box sx={{ color: sensor.color, display: 'flex', alignItems: 'center' }}>
            {sensor.icon}
          </Box>
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
              textShadow: isDarkMode 
                ? '0 2px 8px rgba(0, 0, 0, 0.3)' 
                : '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            {sensor.title} Trend Analysis
          </Typography>
        </Box>
        
        <IconButton
          onClick={onClose}
          sx={{
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
            background: isDarkMode 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: `1px solid ${isDarkMode 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(255, 255, 255, 0.4)'}`,
            '&:hover': {
              background: isDarkMode 
                ? 'rgba(255, 255, 255, 0.1)' 
                : 'rgba(255, 255, 255, 0.9)',
              transform: 'scale(1.05)',
              boxShadow: isDarkMode
                ? '0 4px 15px rgba(0, 0, 0, 0.3)'
                : '0 4px 15px rgba(0, 0, 0, 0.1)',
            },
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Content with current reading and chart */}
      <DialogContent 
        sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column',
          background: isDarkMode
            ? `
              linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%),
              radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)
            `
            : `
              linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%),
              radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, transparent 70%)
            `,
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        }}
      >
        {/* Current reading display - Centered and Contained */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 3,
              borderRadius: 4,
              background: isDarkMode
                ? `
                  linear-gradient(135deg, ${sensor.color}25 0%, ${sensor.color}15 50%, ${sensor.color}20 100%),
                  radial-gradient(ellipse at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%)
                `
                : `
                  linear-gradient(135deg, ${sensor.color}20 0%, ${sensor.color}10 50%, ${sensor.color}15 100%),
                  radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, transparent 70%)
                `,
              border: `2px solid ${sensor.color}40`,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: isDarkMode
                ? `0 8px 32px ${sensor.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                : `0 8px 32px ${sensor.color}15, inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
              position: 'relative',
              overflow: 'hidden',
              maxWidth: 'fit-content',
              minWidth: 300,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, transparent, ${sensor.color}30, transparent)`,
                animation: 'cardShine 4s ease-in-out infinite',
              },
              '@keyframes cardShine': {
                '0%': { left: '-100%' },
                '50%': { left: '100%' },
                '100%': { left: '100%' },
              },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: sensor.color }}>
            Current: {sensor.value !== undefined ? sensor.value.toFixed(1) : 'N/A'} {sensor.unit}
          </Typography>
        </Box>
        </Box>

        {/* Chart container */}
        <Box
          sx={{
            flexGrow: 1,
            minHeight: 400,
            borderRadius: 3,
            background: isDarkMode
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            p: 2,
          }}
        >
          <SensorLineChart
            title={sensor.title}
            dataKey={sensor.key}
            unit={sensor.unit}
            color={sensor.color}
            historicalData={historicalData}
          />
        </Box>

        {/* Additional info */}
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Historical data showing trends over time for {sensor.title.toLowerCase()} measurements
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default GraphModal;
