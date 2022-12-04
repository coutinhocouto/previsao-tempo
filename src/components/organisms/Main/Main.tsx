import Search from "@/components/molecules/Search";
import Result from "@/components/molecules/Result";
import { Blur, MainContainer, MainDiv } from "./styles";
import { useEffect, useState } from "react";
import { getCity } from "@/lib/swr-hooks";

const Main = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const { city, isLoadingCity } = getCity(latitude, longitude);

  useEffect(() => {
    getCoords();
  }, []);

  const getCoords = async () => {
    const pos = (await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })) as any;
    setLatitude(pos.coords.latitude);
    setLongitude(pos.coords.longitude);
  };

  return (
    <MainDiv data-testid="main">
      <Blur>
        <MainContainer>
          {!isLoadingCity && city.length > 0 && (
            <>
              <Search
                city={city[0].name}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
              />
              <Result
                city={city[0].name}
                state={city[0].state}
                country={city[0].country}
                lat={latitude}
                lon={longitude}
              />
            </>
          )}
        </MainContainer>
      </Blur>
    </MainDiv>
  );
};

export default Main;
