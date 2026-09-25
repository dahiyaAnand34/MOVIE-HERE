import { PopularMovies } from "../data/api";
import "./Movies.css";
import { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    PopularMovies()
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="Movie-upper">
        {movies.map((movie) => (
          <div className="movie-box" key={movie.id}>

               <img
  src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}

  alt={movie.title}

/>


<p id="rating">RATING {movie.vote_average}</p>


<a
  href={`https://www.youtube.com/watch?v=${movie.key}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button>WATCH TRAILER</button>
</a>

            <h2 id="title">{movie.title}</h2>
         
<p id="popular">POPULARITY {movie.popularity}</p>

<div className="about-menu">
<p id="about">{movie.overview}</p>
</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movies;
