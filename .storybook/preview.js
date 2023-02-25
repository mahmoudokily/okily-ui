import React from "react"
import { ThemeProvider } from "styled-components"
import theme from '../src/ui/theme'
import { AssetDomains, AssetProvider } from "../src/ui/assetsCenter"
import { elements } from '../src/shared'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs'
}


export const decorators = [
  (Story) => (

    <ThemeProvider theme={theme}>
      <AssetProvider elements={elements}>

        <Story />
      </AssetProvider>

    </ThemeProvider>


  )

]