import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Text: {
      defaultProps: {
        sizes: 'md',
        variants: 'regular',
        colors: 'light.white',
      },
      sizes: {
        xsm: {
          fontSize: '16px',
        },
        sm: {
          fontSize: '20px',
        },
        md: {
          fontSize: '24px',
        },
        lg: {
          fontSize: '36px',
        },
        xl: {
          fontSize: '48px',
        },
      },
      variants: {
        regular: {
          fontWeight: '400',
        },
        medium: {
          fontWeight: '500',
        },
        semibold: {
          fontWeight: '600',
        },
        bold: {
          fontWeight: '700',
        },
      },
    },
  },
  colors: {
    yellow: {
      highlight50: '#FFBA0880',
      highlight: '#FFBA08',
    },
    dark: {
      info50: '#99999980',
      info: '#999999',
      heading: '#47585B',
      black: '#000000',
    },
    light: {
      info: '#DADADA',
      heading: '#F5F8FA',
      white: '#FFFFFF',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
});
