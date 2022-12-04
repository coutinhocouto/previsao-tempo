import { Form } from "react-bootstrap";
import styled from "styled-components";

export const SeachDiv = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.3rem;
`;

export const SeachInput = styled(Form.Control)`
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 0;
  color: #000;
  &:focus {
    border-color: #884cac;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(136 76 172 / 25%);
  }
`;
