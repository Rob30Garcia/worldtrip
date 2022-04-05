import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "100": "rgb(255, 186, 8)",
      "50": "rgba(255, 186, 8, 0.5)"
    },
    gray: {
      "0": "rgb(255, 255, 255)",
      "10": "rgb(245, 248, 250)",
      "50": "rgb(218, 218, 218)",
      "100": "rgba(153, 153, 153, 0.5)",
      "300": "rgb(153, 153, 153)",
      "500": "rgb(71, 88, 91)",
      "900": "rgb(0,0,0)"
    }
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins'
  }, 
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        bg: 'gray.10',
        color: 'gray.300'
      }
    }
  }

});
