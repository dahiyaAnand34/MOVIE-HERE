import { SearchMovies } from "./data/api";
import "./Nav.css";

import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!search.trim()) {
      setMovies([]);
      return;
    }

    try {
      const data = await SearchMovies(search);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-nav">

        <ul className="nav-list">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/movies">MOVIES</Link></li>
          <li><Link to="/new">NEW</Link></li>
        </ul>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="logo-nav"></div>

      </div>

      {/* Search Results */}

      {movies.length > 0 && (
        <div className="search-results">
          {movies.map((movie) => (
            <div className="search-card" key={movie.id}>

              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div className="no-image">
                  No Image
                </div>
              )}

              <div>
                <h3>{movie.title}</h3>

                <p id="date-box">
                  {movie.release_date || "Release date unknown"}
                </p>

                <p id="box-rate">
                  ⭐ {movie.vote_average.toFixed(1)}
                </p>

                
<a
  href={`https://www.youtube.com/watch?v=${movie.key}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button>WATCH TRAILER</button>
</a>

<div className="about-menu">
                <p id="about">{movie.overview}</p>

                </div>

              </div>

            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Nav;