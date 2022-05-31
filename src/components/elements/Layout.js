import * as React from "react"
import { ChakraProvider } from "@chakra-ui/provider"
import { Box } from "@chakra-ui/react"
import { Header } from "/src/components/elements/Header"
import { Footer } from "/src/components/elements/Footer"
import theme from "/src/@chakura-ui/gatsby-plugin/theme"


export const Layout = ({children}) => {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="#f3f3f3">
        <Box maxWidth={800} margin="0 auto" pb={20}>
          <Box py={4}>
            <Header />
          </Box>
          <Box mt={4}>
            {children}
          </Box>
        </Box>
        <Box style={{position: "absolute", bottom: 0, width: "100%"}}>
          <Footer/>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
