import { Container } from "react-bootstrap";
import styled from "styled-components";

export const MainDiv = styled.main`
  background-image: url(./bg.jpg);
  background-size: cover;
  height: 100vh;
`;

export const Blur = styled.section`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  height: 100vh;
`;

export const MainContainer = styled(Container)`
  max-width: 600px;
  padding-top: 10%;
`;
