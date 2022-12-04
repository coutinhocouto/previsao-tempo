import { CityList } from "./styles";

interface City {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
}

interface SearchProps {
  cities: Array<City>;
  isLoadingCities: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setLatitude: React.Dispatch<React.SetStateAction<number>>;
  setLongitude: React.Dispatch<React.SetStateAction<number>>;
}

const ResultCity = ({
  cities,
  isLoadingCities,
  setLatitude,
  setLongitude,
  setSearch,
}: SearchProps) => {
  function cityClick(city: string, lat: number, lon: number) {
    setSearch(city);
    setLatitude(lat);
    setLongitude(lon);
  }

  console.log(cities);

  return (
    <div data-testid="cities">
      {!isLoadingCities && cities?.length > 0 && (
        <CityList>
          {cities.map((city) => (
            <li
              key={city.lat + city.lon}
              onClick={() => cityClick(city.name, city.lat, city.lon)}
            >
              → {city.name} - {city.state} / {city.country}
            </li>
          ))}
        </CityList>
      )}
    </div>
  );
};

export default ResultCity;
