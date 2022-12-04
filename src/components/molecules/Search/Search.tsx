import ResultCity from "@/components/atoms/ResultCity";
import { SetStateAction, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { getCities } from "@/lib/swr-hooks";

import { SeachDiv, SeachInput } from "./styles";

interface SearchProps {
  city: string;
  setLatitude: React.Dispatch<React.SetStateAction<number>>;
  setLongitude: React.Dispatch<React.SetStateAction<number>>;
}

const Search = ({ city, setLatitude, setLongitude }: SearchProps) => {
  const [search, setSearch] = useState("");
  const { cities, isLoadingCities } = getCities(search);

  return (
    <SeachDiv data-testid="search">
      <Row>
        <Col>
          <Form>
            <SeachInput
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setSearch(e.target.value)
              }
              value={search}
              placeholder="Procure sua cidade"
            />
            <ResultCity
              cities={cities}
              isLoadingCities={isLoadingCities}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
              setSearch={setSearch}
            />
          </Form>
        </Col>
      </Row>
    </SeachDiv>
  );
};

export default Search;
