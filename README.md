# Hardware Project Website

This project is a modern, interactive website built for visualizing and monitoring hardware sensor data. It features real-time and historical data visualization, a polished and responsive design, and modular code for easy enhancements. The site is primarily built using React, JavaScript, CSS, and HTML.

## Features

- **Sensor Data Visualization**: View live and historical trends for various sensors (Temperature, Humidity, Distance, CO₂, Light, UV, etc.)
- **Interactive Graphs**: Click on data points to focus, view details, and see the associated code or readings.
- **Apple-like UI Effects**: Smooth blur and focus effects for modals and navigation, inspired by Apple.com.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Current Readings Panel**: Compact, always-visible display of all sensor readings.
- **Extensible Architecture**: Easily add new sensors or features.
- **Modern Codebase**: Modular React components, Material UI, and clean code organization.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Suthankan1/hardware.git
   cd hardware
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
  components/         # Reusable React components (GraphDisplayModal, SensorLineChart, etc.)
  data/               # Sensor data and mock data files
  styles/             # CSS/SCSS styles
  App.js              # Main App component
  index.js            # Entry point
public/
  index.html          # HTML template
```

## Customization

- **Add New Sensors**: Extend the sensor metadata and update the graph/readings components.
- **Change Theme**: Tweak Material UI theme settings for colors or typography.
- **Integrate Real Hardware**: Replace mock data with real sensor data via API/websocket integration.

## Inspiration

- UI and visual effects inspired by [apple.com](https://apple.com) for a premium experience.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your idea.

## License

[MIT](LICENSE)

## Author

[Suthankan1](https://github.com/Suthankan1)