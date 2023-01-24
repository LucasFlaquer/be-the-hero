import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;

  }
  
  *,*:before,*:after {
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`
