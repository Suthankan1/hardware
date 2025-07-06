// src/components/CodeDisplayModal.jsx
import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from '@mui/material/styles'; // Import useTheme to get current theme mode

function CodeDisplayModal({ open, onClose, code, title }) {
  const theme = useTheme(); // Get the current theme to determine highlighter style
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="code-modal-title"
      aria-describedby="code-modal-description"
      closeAfterTransition // Allows for exit transitions
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Optional: Apply a very subtle backdrop-filter directly to the modal's backdrop
        // This is separate from the main app blur
        '.MuiBackdrop-root': {
          backdropFilter: 'blur(3px)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darker overlay
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
          maxWidth: 800,
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 24,
          p: { xs: 2, sm: 3, md: 4 },
          outline: 'none',
          overflowY: 'auto', // Enable scrolling for long code
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'text.secondary',
            zIndex: 1, // Ensure close button is on top
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="code-modal-title" variant="h5" component="h2" gutterBottom sx={{ mb: 2, pr: 5 }}>
          {title || "Associated Code Snippet"}
        </Typography>
        <Box sx={{ flexGrow: 1, overflow: 'auto' }}> {/* Allow code block to scroll */}
          <SyntaxHighlighter
            language="javascript" // Assuming JS/pseudocode for now
            style={isDarkMode ? atomOneDark : atomOneLight}
            showLineNumbers
            customStyle={{
              borderRadius: theme.shape.borderRadius,
              padding: '1.5em',
              fontSize: '0.9em',
              lineHeight: 1.4,
              overflowX: 'auto', // Horizontal scroll for long lines
              backgroundColor: isDarkMode ? '#282c34' : '#f8f8f8', // Ensure background matches theme
            }}
          >
            {code || '// No code snippet available for this item.'}
          </SyntaxHighlighter>
        </Box>
      </Box>
    </Modal>
  );
}

export default CodeDisplayModal;