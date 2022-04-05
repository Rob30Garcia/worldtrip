import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: {
      "100": "rgb(255, 186, 8)",
      "50": "rgba(255, 186, 8, 0.5)"
    },
    dark: {
      "50": "rgba(153, 153, 153, 0.5)",
      "100": "rgb(153, 153, 153)",
      "500": "rgb(71, 88, 91)",
      "900": "rgb(0,0,0)"
    },
    light: {
      "0": "rgb(255, 255, 255)",
      "10": "rgb(245, 248, 250)",
      "50": "rgb(218, 218, 218)"
    }
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins'
  }, 
  styles: {
    global: {
      body: {
        bg: 'light.10',
        color: 'dark.500'
      }
    }
  }

});
