import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    primaryBackground: "#ffffff",
    secondaryBackground: "#141414",
  },
  dark: {},
};

export const constants = {};

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    border: 0;
    font-family: 'Manrope', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
