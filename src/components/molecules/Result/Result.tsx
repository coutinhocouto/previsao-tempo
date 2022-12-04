import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { getInfo } from "@/lib/swr-hooks";
import {
  MainTemp,
  MinMaxTemp,
  ResultDate,
  ResultDiv,
  ResultH2,
  ResultH3,
  ResultRow,
  Weather,
} from "./styles";

interface ResultProps {
  city: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
}

const Result = ({ city, state, country, lat, lon }: ResultProps) => {
  const { info, isLoadingInfo } = getInfo(lat, lon);

  function convertCelcius(temp: number) {
    return Math.floor(info.main.temp_max - 273.5) + "º";
  }

  function locadIcon(icon: string) {
    return "http://openweathermap.org/img/w/" + icon + ".png";
  }

  return (
    <ResultDiv data-testid="result">
      <Row>
        <Col>
          {!isLoadingInfo && (
            <Weather>
              <Image
                src={locadIcon(info.weather[0].icon)}
                alt={info.weather[0].description}
                width={50}
                height={50}
              />
              {info.weather[0].description}
            </Weather>
          )}
        </Col>
      </Row>
      <ResultRow>
        <Col lg={8} md={6} sm={6} xs={6}>
          <ResultH2>{city}</ResultH2>
          <ResultH3>
            {state} - {country}
          </ResultH3>
          <ResultDate>
            {new Date().toLocaleString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </ResultDate>
        </Col>
        <Col>
          {!isLoadingInfo && (
            <>
              <MainTemp>{convertCelcius(info.main.temp)}</MainTemp>
              <MinMaxTemp>
                ↑ {convertCelcius(info.main.temp_max)} /&nbsp; ↓{" "}
                {convertCelcius(info.main.temp_min)}
              </MinMaxTemp>
            </>
          )}
        </Col>
      </ResultRow>
    </ResultDiv>
  );
};

export default Result;
