import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { theme } from '../styles/theme';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
