import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div className="p-5 flex flex-col items-center">
      <h1>{movie.original_title}</h1>
      <img
        className="w-50 mask-r-from-50%  h-72"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
    </div>
  );
};

export default MovieDetails;
