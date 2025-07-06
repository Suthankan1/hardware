function SensorCard({ title, value, unit }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 transition hover:shadow-2xl hover:scale-105 transform duration-300">
      <h3 className="text-xl font-semibold text-gray-700 mb-3">{title}</h3>
      <p className="text-4xl font-bold text-blue-500">
        {value}
        <span className="text-xl text-gray-500 ml-1">{unit}</span>
      </p>
    </div>
  );
}

export default SensorCard;
