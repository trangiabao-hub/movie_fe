import axios, { AxiosResponse } from "axios";
import React, { FC, useEffect, useState } from "react";
import { Movies } from "../models/movies";
interface MoviesProps {
  api: string;
}

const MoviesComponent: FC<MoviesProps> = ({ api }) => {
  const [movies, setMovies] = useState<Movies[]>([]);

  const handleFetchMoviesSuccess = (response: AxiosResponse<Movies[]>) => {
    setMovies(response.data);
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
      {movies.map((movie: Movies) => {
        return (
          <div className="movie">
            <h2>{movie.name}</h2>
            <img src={movie.image} width={300} alt="" />
            <h5>{movie.actorName}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesComponent;
