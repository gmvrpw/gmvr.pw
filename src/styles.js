import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {},
  dark: {
    background: "#000",
  },
};

export const constants = {};

export const breakpoints = {
  mobileS: "0",
  mobileM: "320px",
  mobileL: "375px",
  tablet: "425px",
  laptop: "768px",
  laptopL: "1024px",
  large: "1440px",
};

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    border: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
