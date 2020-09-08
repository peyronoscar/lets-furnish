import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Theme from "./src/themes/theme"
import "normalize.css"

import { Layout } from './src/components/layout/'

import { GlobalContextProvider } from './src/context/GlobalContext'

const GlobalStyle = createGlobalStyle`
   :root{
      font-size: ${props => props.theme.fonts.sizes.default };
   }

   *{
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: transparent;
      text-decoration: none;
      margin: 0;
      padding: 0;
      color: ${props => props.theme.colors.text };
      font-family: 'Poppins', sans-serif;
   }

   ul{
      list-style: none;
   }

   p{
      line-height: 1.7em;
   }

   button{
      cursor: pointer;
      border: none;
      background: none;
      outline: 0;
   }

   .btn{
      padding: 1em 2em;
      border: 0;
      border-radius: 4px;
   }

   .btn--light{
      background: #fff;
      color: #000;
   }

   .btn--dark{
      background: #000;
      color: #fff;
   }

   .btn--dark-border{
      border: 2px solid #000;
      background: none;
      color: #000;
   }

   @media ${props => props.theme.breakpoints.sm } {
      :root{
         font-size: ${props => props.theme.fonts.sizes.sm };
      }
   }

   @media ${props => props.theme.breakpoints.md } {
      :root{
         font-size: ${props => props.theme.fonts.sizes.md };
      }
   }

   @media ${props => props.theme.breakpoints.lg } {
      :root{
         font-size: ${props => props.theme.fonts.sizes.lg };
      }
   }

   @media ${props => props.theme.breakpoints.xl } {
      :root{
         font-size: ${props => props.theme.fonts.sizes.xl };
      }
   }

   @media ${props => props.theme.breakpoints.ul } {
      :root{
         font-size: ${props => props.theme.fonts.sizes.ul };
      }
   }
`

export const wrapRootElement = ({ element }) => (
   <GlobalContextProvider>
      <ThemeProvider theme={Theme}>
         {element}
      </ThemeProvider>
   </GlobalContextProvider>
)

export const wrapPageElement = ({ element }) => (
   <>
      <Layout>
         <GlobalStyle />
         {element}
      </Layout>
   </>
)