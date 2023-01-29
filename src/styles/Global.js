import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 1px;
    transition-property: color, background, background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
  }
`;
