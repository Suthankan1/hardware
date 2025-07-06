import SensorCard from './SensorCard';

function Dashboard({ sensorData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <SensorCard title="🌡️ Temperature" value={sensorData.temperature} unit="°C" />
      <SensorCard title="💧 Humidity" value={sensorData.humidity} unit="%" />
      <SensorCard title="📏 Distance" value={sensorData.distance} unit="cm" />
      <SensorCard title="🌫️ CO₂ Level" value={sensorData.co2} unit="ppm" />
      <SensorCard title="💡 Light Intensity" value={sensorData.light} unit="lx" />
      <SensorCard title="☀️ UV Index" value={sensorData.uv} unit="" />
    </div>
  );
}

export default Dashboard;
