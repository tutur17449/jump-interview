export type Beer = {
  id: number;
  name: string;
  description: string;
  image_url: string | null;
  first_brewed: string;
};

const apiUrl = "https://api.punkapi.com/v2";

export const getBeers = async (searchValue?: string) => {
  const response = await fetch(
    `${apiUrl}/beers?per_page=15${
      searchValue ? `&beer_name=${searchValue}` : ""
    }`
  );
  const data: Beer[] = await response.json();
  return data;
};

export const getBeerById = async (id: string) => {
  const response = await fetch(`${apiUrl}/beers/${id}`);
  const data: Beer[] = await response.json();
  return data[0];
};

export const getRandomBeer = async () => {
  const response = await fetch(`${apiUrl}/beers/random`);
  const data: Beer[] = await response.json();
  return data[0];
};

export const getRandomBeers = async () => {
  const data = await Promise.all([getRandomBeer(), getRandomBeer()]);
  return data;
};
