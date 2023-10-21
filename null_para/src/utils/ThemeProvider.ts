import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeightLight: 500,  // Hier setzen wir die allgemeine Schriftstärke
  },
  palette: {
    primary: {
      main: '#FFD700', // CB Yellow
    },
    secondary: {
      main: '#002E3C', // Petrol
    },
    error: {
      main: '#DB000F',
    },
    success: {
      main: '#009E39',
    },
    warning: {
      main: '#F49300',
    },
    info: {
      main: '#3A7E8A', // Coast
      light: '#89B2B9', // Coast Light
    },
    background: {
      default: '#FFFFF', 
      paper: '#F1EFED' // Sand
    },
  },

    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: '#F1EFED'
          }
        }
      },  
      MuiPaper: {
        defaultProps: {
          elevation: 0, // Remove shadow globally for all Paper components
        },
        styleOverrides: {
          root: {
            boxShadow: 'none',  // Remove any box shadow
          },
        },
      },
  
  },
});


export default theme;

export {};