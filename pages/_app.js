import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'

function MyApp({ Component, pageProps }) {

  return (
    
    <ChakraProvider >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp