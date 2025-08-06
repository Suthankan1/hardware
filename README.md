# ChipMasters - IoT Sensor Dashboard

A modern, professional IoT sensor monitoring dashboard built with React and Vite. ChipMasters provides real-time visualization of environmental sensor data with an elegant glass-morphism design and intuitive user interface.

## 🌟 Features

### Real-Time Monitoring
- **Live Sensor Data**: Monitor temperature, humidity, distance, CO₂ levels, light intensity, and UV index in real-time
- **Historical Trends**: View up to 30 data points with smooth trend visualization
- **Interactive Charts**: Click on any sensor card to view detailed historical graphs in fullscreen modal
- **Automatic Updates**: Data refreshes every 1.5 seconds for live monitoring experience

### Modern UI/UX Design
- **Glass-Morphism Effects**: Premium Apple-style glass design for the main title
- **Professional Theme**: Clean, corporate-friendly blue color scheme for sensor sections
- **Dark/Light Mode**: Toggle between themes with persistent localStorage settings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Hardware-accelerated transitions and hover effects

### Technical Excellence
- **React + Vite**: Lightning-fast development and build process
- **Material-UI Components**: Comprehensive component library with custom theming
- **Chart Visualization**: Interactive line charts powered by Recharts
- **TypeScript Ready**: Expandable to TypeScript for production applications
- **Clean Architecture**: Well-organized component structure with separation of concerns

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/Suthankan1/hardware.git
cd hardware

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Sensor Monitoring

The dashboard monitors six key environmental parameters:

| Sensor Type | Range | Unit | Description |
|-------------|--------|------|-------------|
| **Temperature** | 18°C - 33°C | °C | Ambient temperature monitoring |
| **Humidity** | 30% - 70% | % | Relative humidity levels |
| **Distance** | 20cm - 200cm | cm | Ultrasonic distance measurement |
| **CO₂ Level** | 380 - 1380 | ppm | Carbon dioxide concentration |
| **Light Intensity** | 100 - 1600 | lx | Ambient light measurement |
| **UV Index** | 0.0 - 12.0 | UV | Ultraviolet radiation index |

## 🎨 Design Philosophy

ChipMasters combines functionality with aesthetic excellence:

- **Glass-Morphism**: The main "RoverXplorer" title features premium glass effects with backdrop blur and subtle gradients
- **Professional Blue Theme**: The "Current Readings" section uses a sophisticated blue color palette suitable for enterprise environments
- **Clean Footer**: Traditional, non-glass footer design for better readability and professional appearance
- **Atmospheric Backgrounds**: Multi-layered gradients with animated shimmer effects create depth and visual interest

## 🏗️ Architecture

```
src/
├── components/
│   ├── Dashboard.jsx          # Main dashboard container
│   ├── Header.jsx            # Navigation header with theme toggle
│   ├── Footer.jsx            # Clean footer with company information
│   ├── SensorCard.jsx        # Individual sensor display cards
│   ├── SensorLineChart.jsx   # Chart visualization component
│   └── GraphModal.jsx        # Fullscreen chart modal
├── services/
│   └── bluetoothService.js   # Bluetooth connectivity (future enhancement)
├── App.jsx                   # Root application component
├── main.jsx                 # Application entry point
└── theme.js                 # Material-UI theme configuration
```

## 🔧 Configuration

### Theme Customization
The application supports comprehensive theme customization through Material-UI:

```javascript
// src/theme.js
export const getTheme = (mode) => ({
  palette: {
    mode,
    primary: { main: mode === 'dark' ? '#3b82f6' : '#1976d2' },
    secondary: { main: mode === 'dark' ? '#8b5cf6' : '#dc004e' },
    // ... additional theme configuration
  }
});
```

### Sensor Data Simulation
Currently uses simulated data for demonstration. To connect real sensors:

1. Modify the `useEffect` in `App.jsx`
2. Replace simulation with actual sensor API calls
3. Update the `bluetoothService.js` for hardware integration

## 🌐 Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

**Note**: Glass-morphism effects require modern browsers with backdrop-filter support.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Development Team

**Suthankan** - *Lead Developer & UI/UX Designer*
- GitHub: [@Suthankan1](https://github.com/Suthankan1)
- Project: [ChipMasters Hardware Dashboard](https://github.com/Suthankan1/hardware)

## 🚀 Future Enhancements

- [ ] Real hardware sensor integration
- [ ] Bluetooth/WiFi connectivity options
- [ ] Data export and reporting features
- [ ] Alerts and notifications system
- [ ] Multi-device dashboard support
- [ ] Cloud data synchronization
- [ ] TypeScript migration
- [ ] Advanced analytics and insights

---

Built with ❤️ using React + Vite for modern IoT monitoring solutions.
