import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: black;
`;

export const Name = styled.h1.attrs((props) => ({
  style: {
    fontFamily: props.fontFamily,
    fontStyle: props.fontStyle,
  },
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8vh;
  background-color: #f3ec78;
  background: -webkit-linear-gradient(90deg, #c50b23, #fb025c, #440da8);
  background-image: linear-gradient(90deg, #c50b23, #fb025c, #440da8);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-family: "Monoton", sans-serif;
  font-weight: 400;
  line-height: 8vh;
  margin: 0;
`;
