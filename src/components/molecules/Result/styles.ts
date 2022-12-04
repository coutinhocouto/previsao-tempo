import { Row } from "react-bootstrap";
import styled from "styled-components";

export const ResultDiv = styled.div`
  margin-top: 0.7rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.3rem;
`;

export const ResultRow = styled(Row)`
  display: flex;
  align-items: center;
`;

export const MainTemp = styled.span`
  display: flex;
  font-size: 80px;
  line-height: 1;
  justify-content: center;
  font-weight: 300;
  color: #51087e;
  margin-bottom: 0.5rem;
`;

export const MinMaxTemp = styled.span`
  color: #51087e;
  font-weight: 300;
  font-size: 1.3rem;
  justify-content: center;
  display: flex;
`;

export const ResultH2 = styled.h2`
  color: #51087e;
  font-weight: 300;
  font-size: 2.5rem;
`;

export const ResultH3 = styled.h3`
  color: #51087e;
  font-weight: 300;
  font-size: 1.5rem;
`;

export const ResultDate = styled.span`
  color: #000;
  font-size: 0.8rem;
  display: flex;
`;

export const Weather = styled.span`
  color: #51087e;
  font-size: 0.8rem;
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(81, 8, 126, 0.2);
  padding-bottom: .7rem;
  margin-bottom: 1rem;
`;
