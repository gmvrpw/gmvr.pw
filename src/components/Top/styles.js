import styled from "styled-components";
import { breakpoints } from "styles";

export const Name = styled.h1.attrs((props) => ({
  style: {
    fontFamily: props.fontFamily,
    fontStyle: props.fontStyle,
  },
}))`
  display: flex;
  background: -webkit-linear-gradient(to right, #c50b23, #fb025c, #440da8);
  background-image: linear-gradient(to right, #c50b23, #fb025c, #440da8);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-family: "Monoton", sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 60px;
  overflow-wrap: anywhere;
  & ${Name} {
    @media (min-width: ${breakpoints.mobileS}) {
      width: 250px;
    }
    @media (min-width: ${breakpoints.laptop}) {
      width: 350px;
    }
    @media (min-width: ${breakpoints.laptopL}) {
      width: auto;
    }
  }
`;
