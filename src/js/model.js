import { API_KEY } from './config.js';
export const CLTheAPI = async function (search) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getConfig = async function () {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
