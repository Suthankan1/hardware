// src/components/SensorCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'; // To access theme colors if needed

function SensorCard({ title, value, unit, icon, alert }) {
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
        borderRadius: 3, // Rounded corners
        boxShadow: 3, // Material-UI shadow level 3
        textAlign: 'center',
        p: 2, // Padding inside the card
        backgroundColor: cardBgColor, // Apply dynamic background color
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)', // Lift effect on hover
          boxShadow: 6, // Stronger shadow on hover
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 180, // Ensure cards have a consistent height
      }}
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
      </CardContent>
    </Card>
  );
}

export default SensorCard;