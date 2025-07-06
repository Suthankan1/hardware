// src/data/codeSnippets.js

export const codeSnippets = {
  temperature: `
// Temperature Sensor Reading (Example Pseudocode)
// Sensor Type: DHT11/DHT22 (Digital Humidity & Temperature Sensor)
// Microcontroller: ESP32/Arduino
// Library: Adafruit_DHT or custom I2C/SPI driver

float readTemperatureC() {
  // Initialize sensor communication (e.g., I2C, SPI, or one-wire)
  // Request data from sensor
  // Read raw sensor data (e.g., 16-bit value)
  // Apply calibration/conversion formula:
  // float tempC = rawTempData / 10.0;
  // if (tempC > 40) { triggerAlert("High Temp"); }
  // return tempC;
  // ---
  // In our simulation, data is randomly generated:
  return parseFloat((18 + Math.random() * 15).toFixed(1));
}

// Data point shown is 'temperature' in °C
`,
  humidity: `
// Humidity Sensor Reading (Example Pseudocode)
// Sensor Type: DHT11/DHT22, capacitive humidity sensor
// Microcontroller: ESP32/Arduino

float readHumidityPct() {
  // Initialize sensor communication
  // Read raw humidity data
  // Convert raw data to percentage:
  // float humidity = rawHumidityData / 10.0; // For DHTXX
  // if (humidity < 30 || humidity > 70) { triggerAlert("Humidity Anomaly"); }
  // return humidity;
  // ---
  // In our simulation, data is randomly generated:
  return parseFloat((30 + Math.random() * 40).toFixed(1));
}

// Data point shown is 'humidity' in %
`,
  distance: `
// Distance Sensor Reading (Example Pseudocode)
// Sensor Type: HC-SR04 (Ultrasonic Sensor)
// Microcontroller: ESP32/Arduino
// Pins: Trigger (output), Echo (input)

float readDistanceCM() {
  // DigitalWrite(triggerPin, HIGH) for 10us; DigitalWrite(triggerPin, LOW);
  // Measure pulse duration on echoPin (time_us = pulseIn(echoPin, HIGH));
  // Calculate distance:
  // float distanceCM = (time_us / 2.0) / 29.1; // Speed of sound in air (µs/cm)
  // return distanceCM;
  // ---
  // In our simulation, data is randomly generated:
  return parseFloat((20 + Math.random() * 180).toFixed(1));
}

// Data point shown is 'distance' in cm
`,
  co2: `
// CO₂ Sensor Reading (Example Pseudocode)
// Sensor Type: MH-Z19B (NDIR CO2 Sensor)
// Microcontroller: ESP32/Arduino
// Communication: UART (Serial) or PWM

int readCo2PPM() {
  // Establish serial communication with sensor
  // Send command to request CO2 concentration
  // Parse response data (e.g., read 2 bytes, combine for PPM)
  // int co2PPM = (byte1 * 256) + byte2;
  // if (co2PPM > 1500) { triggerAlert("High CO2"); }
  // return co2PPM;
  // ---
  // In our simulation, data is randomly generated:
  return parseInt((380 + Math.random() * 1000).toFixed(0), 10);
}

// Data point shown is 'CO₂ Level' in ppm
`,
  light: `
// Light Intensity Sensor Reading (Example Pseudocode)
// Sensor Type: BH1750 (Digital Light Sensor) or LDR (Light Dependent Resistor)
// Microcontroller: ESP32/Arduino
// Communication: I2C (for BH1750) or Analog Read (for LDR)

int readLightLux() {
  // If BH1750: Initialize I2C, request lux data
  // If LDR: analogRead(ldrPin); Map ADC value to lux (requires calibration)
  // int lux = sensor.readLightLevel(); // For BH1750
  // return lux;
  // ---
  // In our simulation, data is randomly generated:
  return parseInt((100 + Math.random() * 1500).toFixed(0), 10);
}

// Data point shown is 'Light Intensity' in lx
`,
  uv: `
// UV Index Sensor Reading (Example Pseudocode)
// Sensor Type: ML8511 (Analog UV Sensor)
// Microcontroller: ESP32/Arduino
// Communication: Analog Read

float readUvIndex() {
  // float sensorVoltage = analogRead(uvPin) * (3.3 / 4095.0); // Convert ADC to Volts
  // float uvIntensity = (sensorVoltage - 0.99) * (15.0 / 2.0); // Convert Volts to mW/cm^2
  // float uvIndex = uvIntensity / 2.5; // Conversion to UV Index (approx)
  // return uvIndex;
  // ---
  // In our simulation, data is randomly generated:
  return parseFloat((Math.random() * 12).toFixed(1));
}

// Data point shown is 'UV Index'
`,
  default: `
// No specific code snippet available for this data point.
// This usually means the data is collected via a sensor and processed
// before being displayed on the dashboard.
`
};