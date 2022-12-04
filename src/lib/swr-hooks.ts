/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json());
}

const key = "42874a644192bf5e2946c73d3f2e90b8";
const url = "https://api.openweathermap.org";

export function getCity(lat: number, lon: number) {
  const { data, error } = useSWR(
    `${url}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${key}`,
    fetcher
  );

  return {
    city: data,
    isLoadingCity: !error && !data,
    isError: error,
  };
}

export function getCities(city: string) {
  const { data, error } = useSWR(
    `${url}/geo/1.0/direct?q=${city},,&limit=5&appid=${key}`,
    fetcher
  );

  return {
    cities: data,
    isLoadingCities: !error && !data,
    isError: error,
  };
}

export function getInfo(lat: number, lon: number) {
  const { data, error } = useSWR(
    `${url}/data/2.5/weather?lat=${lat}&lon=${lon}&limit=1&lang=pt_br&appid=${key}`,
    fetcher
  );

  return {
    info: data,
    isLoadingInfo: !error && !data,
    isError: error,
  };
}
