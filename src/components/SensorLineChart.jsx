import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';

// SensorLineChart now receives chartHeight prop
function SensorLineChart({ title, dataKey, unit, color, historicalData, onDataPointClick, chartHeight = 600 }) { // Default to 600 for larger chart
  const theme = useTheme();

  // Prepare data for the chart by extracting values and timestamps
  const chartDataValues = historicalData.map(data => data[dataKey]);
  const chartLabels = historicalData.map(data => data.timestamp);

  // Define the series for the LineChart
  const series = [
    {
      data: chartDataValues,
      label: `${title} (${unit})`,
      curve: 'natural',
      showMark: true,
      color: color || theme.palette.primary.main,
      id: dataKey, // Ensures seriesId matches dataKey in handleChartClick
    },
  ];

  // Configuration for the X-axis (Time)
  const xAxis = [{
    scaleType: 'point',
    data: chartLabels,
    label: 'Time',
    tickLabelStyle: {
      angle: -45,
      textAnchor: 'end',
      fontSize: 10,
    },
    tickLabelInterval: (i) => i % 5 === 0,
  }];

  // Configuration for the Y-axis (Sensor Value)
  const yAxis = [{
    label: `${title} (${unit})`,
  }];

  // Update to use correct event signature for onItemClick
  const handleChartClick = (event, { seriesId, dataIndex }) => {
    if (dataIndex !== undefined && seriesId === dataKey) {
      const clickedValue = historicalData[dataIndex][dataKey];
      const clickedTimestamp = historicalData[dataIndex].timestamp;
      // Optionally, you can pass more info to the callback
      if (onDataPointClick) {
        onDataPointClick(dataKey, title, clickedValue, clickedTimestamp);
      }
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: 3,
        p: 2,
        backgroundColor: 'background.paper',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 1 }}>
        <Typography variant="h6" align="center" gutterBottom sx={{ mb: 2, fontWeight: 'medium' }}>
          {title} Trend
        </Typography>

        {historicalData.length > 1 ? (
          <Box sx={{ width: '100%', height: chartHeight }}>
            <LineChart
              xAxis={xAxis}
              yAxis={yAxis}
              series={series}
              height={chartHeight}
              margin={{ left: 60, right: 30, top: 20, bottom: 60 }}
              grid={{ vertical: true, horizontal: true }}
              tooltip={{
                trigger: 'axis',
              }}
              onItemClick={handleChartClick}
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