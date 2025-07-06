// src/context/ColorModeContext.js
import { createContext } from 'react';

// Create a context that will hold the function to toggle the color mode.
// We provide a default empty function here. The actual function will be provided by App.jsx.
export const ColorModeContext = createContext({ toggleColorMode: () => {} });