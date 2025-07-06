// src/components/Navbar.jsx
import React, { useState, useEffect, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useScrollTrigger } from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon
import GitHubIcon from '@mui/icons-material/GitHub'; // Example icon
import { ColorModeContext } from '../context/ColorModeContext'; // Import context

// Styled Toolbar for consistent padding and alignment
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  // useScrollTrigger from MUI to detect scroll for blur effect
  const trigger = useScrollTrigger({
    disableHysteresis: true, // No delay
    threshold: 50, // Trigger when scrolled 50px down
  });

  return (
    <AppBar
      position="sticky" // Makes the app bar sticky at the top
      elevation={trigger ? 4 : 0} // Add shadow when scrolled
      sx={{
        backgroundColor: trigger
          ? alpha(theme.palette.background.paper, 0.7) // Semi-transparent when scrolled
          : 'transparent', // Transparent when at top
        backdropFilter: trigger ? 'blur(10px)' : 'none', // Blur effect when scrolled
        transition: 'background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        color: 'text.primary', // Ensure text color adapts to theme
        width: '100%', // Ensure it spans full width
      }}
    >
      <StyledToolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            letterSpacing: 1,
            textDecoration: 'none', // Remove underline for link-like behavior
            color: 'inherit', // Inherit color from AppBar
            '&:hover': {
                color: theme.palette.primary.main, // Primary color on hover
                transition: 'color 0.2s ease-in-out',
            }
          }}
        >
          RoverXplorer
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Example Navigation Buttons (can be expanded) */}
          <Button color="inherit" sx={{ mx: 1, '&:hover': { transform: 'translateY(-2px)', transition: 'transform 0.2s ease-in-out' } }}>
            Dashboard
          </Button>
          <Button color="inherit" sx={{ mx: 1, '&:hover': { transform: 'translateY(-2px)', transition: 'transform 0.2s ease-in-out' } }}>
            About
          </Button>

          {/* GitHub Icon Link */}
          <IconButton
            color="inherit"
            aria-label="GitHub repository"
            href="https://github.com/Suthankan1/hardware" // Replace with your GitHub repo URL
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mx: 1,
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.2s ease-in-out',
              },
            }}
          >
            <GitHubIcon />
          </IconButton>

          {/* Theme Toggle Button */}
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;