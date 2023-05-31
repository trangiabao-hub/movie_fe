import axios, { AxiosResponse } from "axios";
import React, { FC, useEffect, useState } from "react";
import { Movies } from "../models/movies";
interface MoviesProps {
  api: string;
}

const MoviesComponent: FC<MoviesProps> = ({ api }) => {
  const [movies, setMovies] = useState<Movies[]>([]);

  const handleFetchMoviesSuccess = (response: any) => {
    setMovies(response.data.results);
  };

  const fetchMovie = () => {
    // promise
    axios.defaults.headers[
      "Authorization"
    ] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTY4NDc0Nzk4MCwiZXhwIjoxNjg1MTA3OTgwfQ.BkdTXLNNomJkrEwxKYf3u9M2fZc2FFv2lscVMxJTyM3KMsi5ZFMYCxkCEQUXIw9lp_SzJJSIl_G4Dw7yLOOuuQ`;
    axios.get(api).then(handleFetchMoviesSuccess);
  };

  useEffect(fetchMovie, []);

  return (
    <div>
      <h1>Example Page</h1>
      {movies?.map((item) => (
        <h3 key={item.name}>{item.name}</h3>
      ))}
    </div>
  );
};

export default MoviesComponent;
