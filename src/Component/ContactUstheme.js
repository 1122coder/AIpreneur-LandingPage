import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: '#007bff', // Your primary blue color
      },
      background: {
        default: '#31363F', // Section background color
      },
      text: {
        primary: '#ffffff', // Making text color white for better contrast
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          InputLabelProps: {
            style: { color: '#fff' }, // Label color
          },
          InputProps: {
            style: { color: '#fff' }, // Input text color
          },
        },
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.23)', // Customizing border color for better visibility
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.5)', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#007bff', // Border color when focused
            },
            '& .MuiInputBase-input': {
              color: 'white', // Ensuring input text is white for contrast
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white', // Adjusting default border color for contrast
              },
              '&:hover fieldset': {
                borderColor: 'white', // Adjusting hover border color
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Border color when the TextField is focused
              },
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderColor: 'white',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight highlight on hover
            },
          },
        },
      },
    },
  });

  export default theme;