import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Genreid from "../Genreid";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovies] = useState([{}]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovies(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Throw This Error :", err);
      }
    };
    fetch();
  }, [id]);
  console.log(movie.original_title);

  //   if (!movie) {
  //     return <h2 className="text-center mt-10">Loading...</h2>;
  //   }

  return (
    <div
      // className="p-5 flex flex-col items-center"
      className="p-10   flex flex-col
       items-center"
    >
      <div className="w-full  flex justify-start">
        <Link
          to={`/`}
          className="  w-20  text-7xl hover:-translate-x-3 transition-all duration-300 ease-in"
        >
          &#8678;
        </Link>
      </div>

      <h1 className="text-4xl mb-2 font-bold bg-linear-120">
        {movie.original_title}
      </h1>
      <div>
        <img
          className=" mt-2 mb-2 rounded-2xl object-cover transition-all duration-200 delay-100 ease-in md:w-[70vh] w-50  h-60  md:h-[80vh]  hover:scale-105"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
        <div>
          <p>
            {" "}
            &#128200;{""}
            Popularity : {movie.popularity}
          </p>
          <p>&#128204;Avg-Votes : {movie.vote_average}</p>
          <p>
            {" "}
            &#127758;Country : {movie.origin_country}{" "}
            <span>{movie.original_language}</span>
          </p>
        </div>
      </div>
      <li className="text-2xl mt-2 font-mono font-light capitalize">
        {movie.overview}
      </li>
    </div>
  );
};

export default MovieDetails;
