import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // color palette
  palette: {
    primary: {
      main: '#39A0ED',
      contrastText: 'black',
    },
    secondary: {
      main: '#13C4A3',
    },
    error: {
      main: '#CF6679',
    },
  },
  typography: {
    fontFamily:['Titillium Web']
  },
  components: {
      // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          '&.Mui-focused': {
            backgroundColor: 'secondary',
          }
        },
      },
      defaultProps: {
        color: 'secondary',
        variant: 'contained',

      },
    },
    // MuiInputLabel: {
    //   defaultProps: {
    //     color: 'white',
    //   },
    // },
    MuiOutlinedInput: {
      defaultProps: {
        color: 'secondary',
        inputProps: {
          style: {
            backgroundColor: '#D0DAD4',
            borderRadius: 4,
          },
        }
      },
      // '& .MuiOutlinedInput-input:focused': {
      //   borderColor: 'green',
      // }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '1rem',
          borderRadius: 36,
        },
      }
    },
  },
});

export default theme;