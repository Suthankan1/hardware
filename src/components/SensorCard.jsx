// src/components/SensorCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme, alpha } from '@mui/material/styles'; // Ensure alpha is imported

// SensorCard now only accepts onClick (no isSelected needed for modal interaction)
function SensorCard({ title, value, unit, icon, alert, onClick }) {
  const theme = useTheme();

  let cardBgColor = 'background.paper';
  let iconColor = 'primary.main';
  let textColor = 'text.primary';
  let boxShadow = 3;

  if (alert) {
    iconColor = 'error.main';
    textColor = theme.palette.error.main;
    cardBgColor = alpha(theme.palette.error.light, 0.2);
  }

  const displayValue = value !== undefined && value !== null ? value.toFixed(1) : 'N/A';

  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: 3,
        boxShadow: boxShadow,
        textAlign: 'center',
        p: 2,
        backgroundColor: cardBgColor,
        // Removed border style related to isSelected
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6, // Normal hover shadow
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 180,
        cursor: 'pointer',
      }}
    >
      <CardActionArea onClick={onClick} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SensorCard;