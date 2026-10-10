import "./New.css";
import { NewMovies } from "../data/api";
import { useState, useEffect } from "react";

function New() {

    const [newM, setNew] = useState([]);

    useEffect(() => {
        NewMovies()
            .then((data) => setNew(data));
    }, []);

    return (
        <>
            <div className="upper-new">

                {newM.map((movie) => {

                    return (
                        <div className="new-boxes" key={movie.id}>

                            <img
                                src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                                alt={movie.title}
                            />

                            <p id="rating">
                                RATING {movie.vote_average}
                            </p>

                            <p id="dateR">RELEASE {movie.release_date}</p>

                            <a
                                href={`https://www.youtube.com/watch?v=${movie.key}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>WATCH TRAILER</button>
                            </a>

                            <h2 id="title">{movie.title}</h2>

                            <p id="popular">
                                POPULARITY {movie.popularity}
                            </p>

                            <div className="about-menu">
                                <p id="about">{movie.overview}</p>
                            </div>

                        </div>
                    );
                })}

            </div>
        </>
    );
}

export default New;