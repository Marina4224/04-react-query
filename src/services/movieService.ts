import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN; 
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return response.data;
};