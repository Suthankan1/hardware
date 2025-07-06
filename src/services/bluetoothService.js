export async function connectToBluetoothDevice() {
  try {
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['battery_service'] // Modify based on your device
    });

    console.log("Connected to device:", device.name);
    return device;
  } catch (error) {
    console.error("Bluetooth connection failed:", error);
    return null;
  }
}
