import React, { useState, useEffect, createContext } from "react";
import MoviesCard from "./MoviesCard";
import axios from "axios";
import Paggination from "./Paggination";

//Using Context for the Props Drilling
export const Objects = createContext();

const Movies = ({}) => {
  //Store The API's response means the OBjects
  const [movies, setMovies] = useState([]);

  //This state for the paggination means Page number
  const [pageNo, setPageNo] = useState(1);

  //API key and URL
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY; //This key is the secret key ,GO TMDB AND Genrate Key
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNo}`;

  //Paggination logic
  let PrevPage = () => {
    if (pageNo <= 1) {
      setPageNo(1);
    }
    if (pageNo == 0) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };
  let NextPage = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    //Feching the URL When 'pageNo' is changed
    const fetchMovies = async () => {
      try {
        let res = await axios.get(API_URL);

        setMovies(res.data.results);
      } catch (err) {
        console.error("Fetching Eroro :", err);
      }
    };
    fetchMovies();
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="w-full text-center font-bold text-xl  ">
        Trending Movies
      </div>

      {/* This Condition is for the If movies are not here in API  */}
      {movies.length === 0 ? (
        <li className="text-2xl p-2 font-bold text-red-600">
          Movies Is Not Founded
        </li>
      ) : (
        // If movie.length !=== 0 Then showing this movies
        <div className="flex flex-row flex-wrap justify-around gap-y-10 gap-x-10 mt-3">
          {movies.map((movieObj) => {
            return (
              <Objects.Provider key={movieObj.id} value={{ movieObj }}>
                <MoviesCard
                  key={movieObj.id}
                  // movieObj={movieObj}
                  // HandleAddtoWatchlist={HandleAddtoWatchlist}
                  // HandleRemoveWatchlist={HandleRemoveWatchlist}
                  // WatchList={WatchList}
                  // poster={movieObj.poster_path}
                  // Title={movieObj.original_title}
                />
              </Objects.Provider>
            );
          })}
        </div>
      )}

      <Paggination pageNo={pageNo} nextPage={NextPage} prePage={PrevPage} />
    </div>
  );
};

export default Movies;
