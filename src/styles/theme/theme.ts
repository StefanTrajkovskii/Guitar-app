import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'system-ui', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Poppins',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Poppins',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          font-family: 'Poppins', system-ui, sans-serif;
        }
      `,
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          fontFamily: 'Poppins',
          borderRadius: '1rem',
          padding: '0.5rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
          fontWeight: 500,
          borderRadius: '0.5rem',
          textTransform: 'none',
          padding: '0.5rem 1rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
          '& .MuiInputBase-input': {
            fontFamily: 'Poppins',
          },
          '& .MuiInputLabel-root': {
            fontFamily: 'Poppins',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        },
      },
    },
  },
});

export default theme; 