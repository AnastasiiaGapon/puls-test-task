import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3360FF',
    },
    secondary: {
      main: '#161616',
    },
    info: {
      dark: '#089451',
      main: '#25C685',
    },
    error: {
      main: '#FE501F',
    },
    text: {
      primary: '#09141F',
      secondary: '#747C91',
    },
    background: {
      default: '#F5F7F9',
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeightBold: 600,
    h2: {
      fontSize: 40,
      fontWeight: 500,
      lineHeight: 1.25,
    },
    caption: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.43,
    },
  },
});

export default theme;
