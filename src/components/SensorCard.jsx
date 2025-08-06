// src/components/SensorCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'; // To access theme colors if needed

function SensorCard({ title, value, unit, icon, alert, onClick, isClickable = false }) {
  const theme = useTheme(); // Access the current MUI theme

  // Determine card background color based on alert status
  let cardBgColor = 'background.paper'; // Default background for Card
  let iconColor = 'primary.main'; // Default icon color
  let textColor = 'text.primary'; // Default text color

  if (alert) {
    iconColor = 'error.main'; // Red for alert
    textColor = theme.palette.error.main; // Match text to error color
    // You might also want to change card background or add a border for alerts
    // For example, a light red background:
    cardBgColor = theme.palette.error.light + '30'; // Add transparency
  }

  // Handle undefined values
  const displayValue = value !== undefined && value !== null ? value.toFixed(1) : 'N/A'; // Format to 1 decimal place

  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: 4,
        boxShadow: theme => theme.palette.mode === 'dark'
          ? '0 8px 32px rgba(0, 0, 0, 0.4)'
          : '0 8px 32px rgba(0, 0, 0, 0.12)',
        textAlign: 'center',
        p: 2,
        background: theme => {
          const baseColor = theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.08)' 
            : 'rgba(255, 255, 255, 0.9)';
          return alert ? 
            (theme.palette.mode === 'dark' 
              ? `linear-gradient(135deg, rgba(244, 67, 54, 0.15) 0%, ${baseColor} 50%)`
              : `linear-gradient(135deg, rgba(244, 67, 54, 0.08) 0%, ${baseColor} 50%)`
            ) : baseColor;
        },
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: theme => {
          if (alert) {
            return `2px solid ${theme.palette.error.main}40`;
          }
          if (isClickable) {
            return `2px solid ${theme.palette.primary.light}40`;
          }
          return `1px solid ${theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(255, 255, 255, 0.3)'}`;
        },
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        '&:hover': {
          transform: isClickable ? 'translateY(-12px) scale(1.03) rotateX(2deg)' : 'translateY(-4px) scale(1.01)',
          boxShadow: theme => {
            const baseColor = theme.palette.mode === 'dark' ? '0, 0, 0' : '0, 0, 0';
            const glowColor = theme.palette.primary.main;
            return isClickable 
              ? `
                0 25px 50px rgba(${baseColor}, 0.3),
                0 15px 35px rgba(${baseColor}, 0.2),
                0 0 30px ${glowColor}20,
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              ` 
              : `
                0 15px 30px rgba(${baseColor}, 0.2),
                0 8px 20px rgba(${baseColor}, 0.1)
              `;
          },
          cursor: isClickable ? 'pointer' : 'default',
          ...(isClickable && {
            background: theme => theme.palette.mode === 'dark'
              ? `
                linear-gradient(135deg, ${theme.palette.primary.dark}30 0%, rgba(255, 255, 255, 0.15) 50%, ${theme.palette.primary.dark}20 100%),
                radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)
              `
              : `
                linear-gradient(135deg, ${theme.palette.primary.light}20 0%, rgba(255, 255, 255, 0.98) 50%, ${theme.palette.primary.light}15 100%),
                radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%)
              `,
            borderColor: theme => theme.palette.primary.main + '80',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
          }),
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 180,
        cursor: isClickable ? 'pointer' : 'default',
      }}
      onClick={isClickable ? onClick : undefined}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* Icon */}
        <Box sx={{ color: iconColor, mb: 1 }}>
          {icon}
        </Box>

        {/* Title */}
        <Typography variant="h6" component="div" sx={{ mb: 1, fontWeight: 'medium' }}>
          {title}
        </Typography>

        {/* Value and Unit */}
        <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: textColor }}>
          {displayValue} {unit}
        </Typography>

        {/* Optional Alert Text */}
        {alert && (
          <Typography variant="caption" color="error" sx={{ mt: 1, fontWeight: 'bold' }}>
            ALERT! Check Sensor
          </Typography>
        )}

        {/* Click instruction for clickable cards */}
        {isClickable && (
          <Typography variant="caption" color="primary" sx={{ mt: 1, fontWeight: 'medium', fontSize: '0.75rem' }}>
            📊 Click to view detailed trends
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default SensorCard;