let bluetoothDevice;
let bluetoothCharacteristic;
let onDataCallback = null;

const UART_SERVICE_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; // Nordic UART
const UART_RX_CHAR_UUID = '6e400003-b5a3-f393-e0a9-e50e24dcca9e'; // RX = ESP32 → Web

export async function connectToBluetoothDevice(onData) {
  try {
    bluetoothDevice = await navigator.bluetooth.requestDevice({
      filters: [{ name: 'ESP32_BT_ChipMasters' }],
      optionalServices: [UART_SERVICE_UUID]
    });

    const server = await bluetoothDevice.gatt.connect();
    const service = await server.getPrimaryService(UART_SERVICE_UUID);
    bluetoothCharacteristic = await service.getCharacteristic(UART_RX_CHAR_UUID);

    await bluetoothCharacteristic.startNotifications();
    bluetoothCharacteristic.addEventListener('characteristicvaluechanged', handleNotifications);

    console.log("✅ Bluetooth connected to:", bluetoothDevice.name);

    if (onData) onDataCallback = onData;

    return bluetoothDevice;
  } catch (error) {
    console.error("❌ Bluetooth connection failed:", error);
    return null;
  }
}

function handleNotifications(event) {
  const value = new TextDecoder().decode(event.target.value);
  console.log("📩 Raw Serial Received:", value);

  if (onDataCallback) {
    const parsed = parseSensorData(value);
    if (parsed) onDataCallback(parsed);
  }
}

function parseSensorData(raw) {
  // Match the LoRa data packet portion
  const match = raw.match(/Packet #[\d]+:\s(.*?)\s\|/);
  if (!match || match.length < 2) return null;

  const sensorString = match[1];
  const data = {};
  const pairs = sensorString.split(',');

  for (let item of pairs) {
    const [key, val] = item.split(':');
    if (!key || !val) continue;

    if (key.includes("DHT_Temp")) {
      data.temperature = parseFloat(val.replace("C", ""));
    } else if (key.includes("Humidity")) {
      data.humidity = parseFloat(val.replace("%", ""));
    } else if (key.includes("DS18B20_Temp")) {
      data.co2 = parseFloat(val.replace("C", "")); // or use `data.temp2`
    } else if (key.includes("Distance")) {
      data.distance = parseFloat(val.replace("cm", ""));
    } else if (key.includes("LDR")) {
      data.light = val.trim() === "Bright" ? 1000 : 50;
    } else if (key.includes("UV")) {
      data.uv = parseFloat(val.replace("V", ""));
    } else if (key.includes("Lux")) {
      data.light = parseFloat(val);
    }
  }

  return data;
}
