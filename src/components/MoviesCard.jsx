import React, { useContext } from "react";
import { Events } from "../App";
import { Objects } from "./Movies";
const MoviesCard = (
  {
    // poster,
    // Title,
    // movieObj,
    // HandleAddtoWatchlist,
    // HandleRemoveWatchlist,
    // WatchList,
  }
) => {
  const { movieObj } = useContext(Objects);
  const { HandleAddtoWatchlist, HandleRemoveWatchlist, watchlist } =
    useContext(Events);
  function DoesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
  }

  return (
    <div
      className=" overflow-hidden border-1 box-border h-[50vh] w-[200px] flex flex-col justify-between items-end text-center rounded-xl bg-no-repeat bg-cover transform transition-transform duration-500  hover:scale-105"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieObj.poster_path})`,
      }}
    >
      {DoesContain(movieObj) ? (
        <div
          onClick={() => HandleRemoveWatchlist(movieObj)}
          className="p-3 m-4 flex justify-center bg-gray-900/60 rounded-lg items-center h-8 w-8 transition-all duration-75 delay-150 hover:scale-125 cursor-pointer"
        >
          &#10060;{" "}
        </div>
      ) : (
        <div
          title="Add movies"
          onClick={() => HandleAddtoWatchlist(movieObj)}
          className="p-3 m-4 flex justify-center bg-gray-900/60 rounded-lg items-center h-8 w-8 transition-all duration-75 delay-150 hover:scale-125 cursor-pointer"
        >
          &#x1F60D;
        </div>
      )}

      <p className="  text-lg w-full bg-gray-100 font-medium text-black transition-all delay-75 hover:underline hover:scale-105">
        {movieObj.original_title}
      </p>
    </div>
  );
};

export default MoviesCard;
