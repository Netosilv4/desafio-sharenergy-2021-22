import { createTheme, responsiveFontSizes } from '@material-ui/core';

const aux = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1BA2A1',
    },
  },
  typography: {
    h4: {
    },
    subtitle1: {
      color: 'rgba(0,0,0,0.6)',
      paddingLeft: '1vw',
    },
    h6: {
    },
    caption: {
    },
    subtitle2: {
      color: 'rgba(0,0,0,0.8)',
      paddingLeft: '1vw',
    },
    fontSize: 12,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
  },

});

export const theme = responsiveFontSizes(aux);
