// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'
const theme = {
  colors: {
    primary: 'cyan',
  },
  fonts: {
    heading: "YakuHanJPs,-apple-system,BlinkMacSystemFont,Segoe UI,Hiragino Sans,Hiragino Kaku Gothic ProN,Meiryo,sans-serif",
    body: "YakuHanJPs,-apple-system,BlinkMacSystemFont,Segoe UI,Hiragino Sans,Hiragino Kaku Gothic ProN,Meiryo,sans-serif"
  }
}

export default extendTheme(theme)
