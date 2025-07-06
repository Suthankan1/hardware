import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [sensorData, setSensorData] = useState({
    temperature: 25,
    humidity: 50,
    distance: 100,
    co2: 400,
    light: 800,
    uv: 3
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData({
        temperature: (20 + Math.random() * 10).toFixed(1),
        humidity: (40 + Math.random() * 20).toFixed(1),
        distance: (50 + Math.random() * 100).toFixed(1),
        co2: (350 + Math.random() * 150).toFixed(0),
        light: (700 + Math.random() * 500).toFixed(0),
        uv: (Math.random() * 11).toFixed(1)
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">📊 Sensor Dashboard</h1>
      <Dashboard sensorData={sensorData} />
    </div>
  );
}

export default App;
