import axios from "axios";
import Background from "../../component/background";
import "./style.scss";
import { useEffect, useState } from "react";
import { Movie } from "../../models/movies";
import MovieCard from "../../component/movie-card";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const importAuto = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US`
      )
      .then((response) => {
        const myMovie = mapToMyMovies(response.data.results);

        axios
          .post("http://localhost:8080/movies", myMovie)
          .then((response) => {
            console.log(response);
          })
          .catch();
      })
      .catch();
  };

  const mapToMyMovies = (responses: any[]) => {
    return responses.map((item) => {
      return {
        id: null,
        name: item.title,
        image: "https://image.tmdb.org/t/p/original" + item.poster_path,
        year: item.release_date?.split("-")[0],
      };
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/movie`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch();
  }, []);

  return (
    <div className="home">
      <Background />
      {/* <button onClick={importAuto}>import auto</button> */}

      <div className="list-movie">
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
