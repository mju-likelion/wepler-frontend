import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#F2D4CA',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#EFEFEF',
    },
  },
});

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>  
    </ThemeProvider>
  );
}
