import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  *{
    margin: ${theme.space[0]};
    padding: ${theme.space[0]};
    box-sizing: border-box;
    outline:  ${theme.space[0]};
    font-weight: ${theme.font.weight.regular};
  }

  body{
    background: ${theme.color.background};
    color: ${theme.color.text};
    -webkit-font-smoothing: antialiased;
    max-height: 100vh;
    max-width: 100%;
  }

  body, input, button {
    font-family: 'Merriweather', serif;
    font-size: ${theme.font.size[1]};
  }

  h2,h3,h4,h5,h6 {
    font-weight: ${theme.font.weight.bold};
  }

  h1{
    font-weight: ${theme.font.weight.bolder};
  }

  h2 {
    font-size: ${theme.font.size[2]};
  }

  button{
    cursor: pointer;
  }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: ${theme.breakpoints.small}) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: ${theme.breakpoints.small}) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: ${theme.breakpoints.medium}) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: ${theme.breakpoints.large}) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: ${theme.breakpoints.extraLarge}) {
}

body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`
