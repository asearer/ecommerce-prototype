// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  shadows: {
    neumorphism: '8px 8px 15px rgba(0, 0, 0, 0.15), -8px -8px 15px rgba(255, 255, 255, 0.8)',
    neumorphismInset: 'inset 8px 8px 15px rgba(0, 0, 0, 0.1), inset -8px -8px 15px rgba(255, 255, 255, 0.9)',
  },
  colors: {
    primary: '#3182ce',
    secondary: '#2b6cb0',
  },
  fonts: {
    heading: 'Georgia, serif',
    body: 'Roboto, sans-serif',
  },
});

export default theme;


