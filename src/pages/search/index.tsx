import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import MovieCard from "../../component/movie-card";
import { Movie } from "../../models/movies";
import axios from "axios";
const Search: FC = () => {
  const { keyword } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/movie-by-name?movieName=${keyword}`)
      .then((response) => {
        console.log(response.data);

        setMovies(response.data);
      })
      .catch();
  }, [keyword]);

  return (
    <div className="search-page">
      <div className="search-page__content">
        <h3>Search results of '{keyword}'</h3>

        <div className="list-movie">
          {movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
