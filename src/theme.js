// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Orbitron',
      'Arial', // Fallback font if Orbitron doesn't load
      'sans-serif',
    ].join(','),
    h4: { // Specifically apply to h4 variant, which your main heading uses
      fontFamily: 'Orbitron, Arial, sans-serif',
      fontWeight: 700, // Make it bold for more impact
    },
    h6: { // Apply Orbitron to h6 variants as well (used for card titles)
      fontFamily: 'Orbitron, Arial, sans-serif',
    }
    // You can customize other typography variants here if needed
  },
  palette: {
    // Optionally, you can define a custom color palette here too
    // primary: {
    //   main: '#00e676', // Example: a bright green for a techy feel
    // },
    // secondary: {
    //   main: '#ffab40', // Example: an orange accent
    // },
  },
});

export default theme;