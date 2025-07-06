// src/components/SensorLineChart.jsx
import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';

function SensorLineChart({ title, dataKey, unit, color, historicalData }) {
  const theme = useTheme();

  // Prepare data for the chart by extracting values and timestamps
  const chartDataValues = historicalData.map(data => data[dataKey]);
  const chartLabels = historicalData.map(data => data.timestamp);

  // Define the series for the LineChart
  const series = [
    {
      data: chartDataValues,
      label: `${title} (${unit})`, // Label for the line, shown in tooltips
      curve: 'natural',   // Creates a smooth, organic curve for the line
      showMark: true,     // Displays individual data points on the line, enhancing readability
      // area: true,      // Uncomment this line if you also want the area below the line to be filled
      color: color || theme.palette.primary.main, // Uses the specified color or the theme's primary color
    },
  ];

  // Configuration for the X-axis (Time)
  const xAxis = [{
    scaleType: 'point', // Data points are discrete, not continuous numbers
    data: chartLabels,   // The array of timestamps
    label: 'Time',       // Label displayed below the X-axis
    tickLabelStyle: {
      angle: -45,        // Rotates the time labels to prevent overlap
      textAnchor: 'end', // Aligns the rotated labels neatly
      fontSize: 10,      // Slightly smaller font size for axis ticks
    },
    tickLabelInterval: (i) => i % 5 === 0, // Shows every 5th label to keep the axis uncluttered
  }];

  // Configuration for the Y-axis (Sensor Value)
  const yAxis = [{
    label: `${title} (${unit})`, // Label displayed next to the Y-axis
  }];

  return (
    <Card
      sx={{
        height: '100%', // Ensures the card fills the height of its grid item
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3, // Rounded corners for a softer look
        boxShadow: 3,    // Standard Material-UI shadow for elevation
        p: 2,            // Padding inside the card
        backgroundColor: 'background.paper', // Uses white background from theme
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Smooth hover effect
        '&:hover': {
          transform: 'translateY(-4px)', // Lifts the card slightly on hover
          boxShadow: 6,                 // Increases shadow depth on hover
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 1 }}> {/* Content area with slight padding */}
        <Typography variant="h6" align="center" gutterBottom sx={{ mb: 2, fontWeight: 'medium' }}>
          {title} Trend
        </Typography>

        {/* Render chart only if there's enough historical data */}
        {historicalData.length > 1 ? (
          <Box sx={{ width: '100%', height: 300 }}> {/* Container for the chart with specific height */}
            <LineChart
              xAxis={xAxis}
              yAxis={yAxis}
              series={series}
              height={300} // Set the height of the chart itself
              margin={{ left: 60, right: 30, top: 20, bottom: 60 }} // Adjust chart margins for axis labels
              grid={{ vertical: true, horizontal: true }} // Add a grid for easy value interpretation
              tooltip={{
                trigger: 'axis', // Tooltip appears when hovering over the line/axis
                // You can add a 'formatter' function here for custom tooltip content if needed
              }}
            />
          </Box>
        ) : (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              Collecting data for chart...
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default SensorLineChart;