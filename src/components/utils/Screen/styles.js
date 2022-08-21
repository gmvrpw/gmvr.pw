import styled from "styled-components";

export const Containter = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: ${[(props) => props.theme.background]};
`;
