import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
  front: {
    100: "#73168C",
    200: "#9F2CBF",
    300: "#C04BF2",
    400: "#281259",
    500: "#070926",
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme: ThemeConfig= extendTheme({ colors, config });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    
  )
}
