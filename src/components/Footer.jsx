// src/components/Footer.jsx
import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  Divider
} from '@mui/material';

// Material Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import SensorsIcon from '@mui/icons-material/Sensors';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import DevicesIcon from '@mui/icons-material/Devices';

function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    features: [
      'Real-time Monitoring',
      'Interactive Dashboard', 
      'Data Analytics',
      'Secure Data'
    ],
    technology: [
      'IoT Integration',
      'Multi-device Support',
      'React Dashboard', 
      'Material-UI Design'
    ],
    resources: [
      { name: 'Documentation', link: '#docs' },
      { name: 'API Reference', link: '#api' },
      { name: 'User Guide', link: '#guide' },
      { name: 'Support', link: '#support' }
    ]
  };

  const socialLinks = [
    { icon: <GitHubIcon />, label: 'GitHub', link: 'https://github.com/Suthankan1' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', link: '#linkedin' },
    { icon: <EmailIcon />, label: 'Email', link: 'mailto:contact@roverxplorer.com' },
    { icon: <TelegramIcon />, label: 'Telegram', link: '#telegram' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        mt: 6,
        backgroundColor: darkMode 
          ? 'rgba(30, 41, 59, 0.95)' 
          : 'rgba(248, 250, 252, 0.95)',
        borderTop: `1px solid ${darkMode 
          ? 'rgba(148, 163, 184, 0.2)' 
          : 'rgba(148, 163, 184, 0.3)'}`,
        boxShadow: darkMode
          ? '0 -4px 20px rgba(0, 0, 0, 0.3)'
          : '0 -4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          {/* Main Footer Content */}
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: darkMode ? 'white' : 'rgba(30, 41, 59, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <SensorsIcon sx={{ color: 'primary.main' }} />
                RoverXplorer
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: darkMode ? 'rgba(203, 213, 225, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                  mb: 3,
                  lineHeight: 1.6,
                  maxWidth: '300px'
                }}
              >
                Advanced IoT sensor monitoring platform providing real-time data visualization, 
                analytics, and insights for smart environmental monitoring solutions.
              </Typography>
              
              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component={Link}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: darkMode ? 'rgba(203, 213, 225, 0.7)' : 'rgba(100, 116, 139, 0.7)',
                      backgroundColor: darkMode 
                        ? 'rgba(71, 85, 105, 0.3)' 
                        : 'rgba(241, 245, 249, 0.8)',
                      border: `1px solid ${darkMode 
                        ? 'rgba(148, 163, 184, 0.2)' 
                        : 'rgba(203, 213, 225, 0.5)'}`,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: darkMode
                          ? '0 4px 15px rgba(0, 0, 0, 0.3)'
                          : '0 4px 15px rgba(0, 0, 0, 0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Features Section */}
            <Grid item xs={12} sm={4} md={2}>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: 'primary.main'
                }}
              >
                Features
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerSections.features.map((feature, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      color: darkMode ? 'rgba(203, 213, 225, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                      '&:hover': {
                        color: 'primary.main',
                        cursor: 'pointer'
                      },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Technology Section */}
            <Grid item xs={12} sm={4} md={2}>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: 'secondary.main'
                }}
              >
                Technology
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerSections.technology.map((tech, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      color: darkMode ? 'rgba(203, 213, 225, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                      '&:hover': {
                        color: 'secondary.main',
                        cursor: 'pointer'
                      },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {tech}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Resources Section */}
            <Grid item xs={12} sm={4} md={2}>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: darkMode ? 'rgba(203, 213, 225, 0.9)' : 'rgba(71, 85, 105, 0.9)'
                }}
              >
                Resources
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerSections.resources.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.link}
                    sx={{
                      color: darkMode ? 'rgba(203, 213, 225, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.main',
                        textDecoration: 'underline'
                      },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {resource.name}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact Section */}
            <Grid item xs={12} sm={12} md={2}>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: darkMode ? 'rgba(203, 213, 225, 0.9)' : 'rgba(71, 85, 105, 0.9)'
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: darkMode ? 'rgba(203, 213, 225, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                  }}
                >
                  contact@roverxplorer.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: darkMode ? 'rgba(203, 213, 225, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                  }}
                >
                  24/7 Support Available
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: darkMode ? 'rgba(203, 213, 225, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                  }}
                >
                  Global Services
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider 
            sx={{ 
              my: 3,
              borderColor: darkMode 
                ? 'rgba(148, 163, 184, 0.2)' 
                : 'rgba(203, 213, 225, 0.4)'
            }} 
          />

          {/* Bottom Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? 'rgba(148, 163, 184, 0.8)' : 'rgba(100, 116, 139, 0.8)',
              }}
            >
              © {currentYear} RoverXplorer. All rights reserved. Built with ❤️ for IoT innovation.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Link
                href="#privacy"
                sx={{
                  color: darkMode ? 'rgba(148, 163, 184, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline'
                  },
                  transition: 'color 0.2s ease',
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                sx={{
                  color: darkMode ? 'rgba(148, 163, 184, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline'
                  },
                  transition: 'color 0.2s ease',
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#cookies"
                sx={{
                  color: darkMode ? 'rgba(148, 163, 184, 0.8)' : 'rgba(100, 116, 139, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline'
                  },
                  transition: 'color 0.2s ease',
                }}
              >
                Cookie Policy
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
