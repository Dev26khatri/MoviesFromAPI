import React, { useContext, useEffect, useState } from "react";
import Genreid from "../Genreid";
import { Link } from "react-router-dom";
import { PropsWatchist } from "../App";

const WatchList = (
  {
    // WatchList,
    // Setwatchlist,
    // HandleRemoveWatchlist
  }
) => {
  const { watchlist, setwatchlist, HandleRemoveWatchlist } =
    useContext(PropsWatchist);
  //THis state for the Search
  const [search, setSearch] = useState("");
  const [GenreList, setGenreList] = useState(["All Generes"]);
  const [currentGeners, setCurrentGeners] = useState("All Generes");

  //Using the sort function for the watchlist 'Ratings' in form of Incressing
  let sortAec = () => {
    let SortIncressing = watchlist.sort((MoveA, MoveB) => {
      return MoveA.vote_average - MoveB.vote_average;
    });
    setwatchlist([...SortIncressing]);
  };

  //Set the Genres in the State to handle IT
  let HandleForGenres = (geners) => {
    setCurrentGeners(geners);
  };

  //Using the sort function for the watchlist 'Ratings' in form of Decressing
  let sortDec = () => {
    let sortDecressing = watchlist.sort((MoveA, MoveB) => {
      return MoveB.vote_average - MoveA.vote_average;
    });
    setwatchlist([...sortDecressing]);
  };

  //Fetching the ALL movies without Duplicates using the SET object when Watchlist Will changes
  useEffect(() => {
    let temp = [
      ...new Set(
        watchlist.map((movies) => {
          return Genreid[movies.genre_ids[0]];
        })
      ),
    ];
    //Set temp Gemeres With By defult All Generes
    setGenreList(["All Generes", ...temp]);
  }, [watchlist]);

  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-center flex-wrap m-4">
        {/* all Genres Type at the top of TAB */}
        {GenreList.map((Geners, id) => {
          return (
            <div
              key={id}
              onClick={() => HandleForGenres(Geners)}
              className={
                currentGeners == Geners
                  ? "flex justify-center h-[3rem] w-[9rem ] border rounded-xl m-5 hover:cursor-pointer transition-all duration-150  items-center text-white font-bold bg-[#4f000b] px-5 outline-none overflow-hidden"
                  : "flex justify-center h-[3rem] w-[9rem ] border rounded-xl m-5  hover:bg-[#4f000b] hover:cursor-pointer transition-all duration-200 items-center text-white font-bold bg-[#a4133c] px-5 outline-none overflow-hidden"
              }
            >
              I have {Geners}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-1 my-4">
        {/* Input for the Search the Movies */}
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Movies.."
          className="h-[3rem] w-[13rem] border rounded-md bg-transparent  outline-none  px-2"
        />
      </div>
      <div className="overflow-auto    border-gray-200 m-8">
        <table className="w-full ">
          <thead className="border-b ">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th>
                <div className="flex justify-center items-center">
                  <div
                    className="text-2xl  p-1 cursor-pointer"
                    onClick={() => sortAec()}
                  >
                    {/* Using the Emoji Codes for the Better Visual ; */}
                    &uarr;
                  </div>
                  <div className="px-6 py-4 text-left">Ratings</div>
                  <div
                    className="text-2xl  p-1 cursor-pointer"
                    onClick={() => sortDec()}
                  >
                    {/* Using the Emoji Codes for the Better Visual ; */}
                    &darr;
                  </div>
                </div>
              </th>
              <th className="px-6 py-4 text-left">Popularity</th>
              <th className="px-6 py-4 text-left">Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-2 text-2xl text-red-600 font-bold text-center capitalize hover:underline cursor-pointer"
                >
                  <Link to={`/`}>Movies Not selected Go and select</Link>
                </td>
              </tr>
            ) : (
              watchlist
                .filter((MoviesObj) => {
                  if (currentGeners == "All Generes") {
                    return true;
                  } else {
                    return Genreid[MoviesObj.genre_ids[0]] == currentGeners;
                  }
                })
                .filter((MoviesObj) =>
                  // This is the Filtered function for auto suggestion related to the input

                  MoviesObj.original_title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((Movies) => {
                  return (
                    <tr className="border-b" key={Movies.id}>
                      <td className="flex items-center px-6 py-4 ">
                        <div>
                          <Link
                            to={`/movie/${Movies.id}`}
                            className="flex flex-col sm:flex-row items-center gap-4 p-2"
                          >
                            <img
                              // className="h-28 w-20 rounded-md object-cover transition-transform shadow-xl duration-500 hover:scale-105 hover:shadow-2xl"
                              className="h-28 w-25 rounded-md object-cover transition-transform shadow-xl duration-500 hover:scale-105 hover:shadow-2xl"
                              src={
                                Movies && Movies.poster_path
                                  ? `https://image.tmdb.org/t/p/w500${Movies.poster_path}`
                                  : "https://via.placeholder.com/150x200?text=No+Image"
                              }
                              alt={Movies?.original_title || "Movie Poster"}
                            />
                            <span className="block opacity-75 font-medium text-center sm:text-left">
                              {Movies?.original_title || "Unknown Movie"}
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {Movies.vote_average}
                      </td>
                      <td className="px-6 py-4 text-left">
                        {Movies.popularity}
                      </td>
                      <td className="px-6 py-4 text-left">
                        {Movies.genre_ids.length !== 0 ? (
                          Genreid[Movies.genre_ids[0]]
                        ) : (
                          <>Not any Genres Founded</>
                        )}
                      </td>
                      <td>
                        <p
                          className=" flex justify-center items-center p-2 w-17 mr-1 active:bg-red-300 hover:bg-red-400 transition-transform duration-300 hover:scale-105 bg-red-500 cursor-pointer text-white font-bold rounded-md"
                          onClick={() => HandleRemoveWatchlist(Movies)}
                        >
                          Delete
                        </p>
                      </td>
                    </tr>
                  );
                })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;

// import React from "react";

// const WatchList = () => {
//   return (
//     <div>
//       <div className="flex justify-center mt-1 my-4">
//         <input
//           type="text"
//           placeholder="Search Movies.."
//           className="h-[3rem] w-[13rem] border rounded-md bg-gray-100 outline-none px-2"
//         />
//       </div>

//       <div className="overflow-x-auto m-8">
//         <table className="w-full table-fixed">
//           {/* control column widths */}
//           <colgroup>
//             <col className="w-1/2" /> {/* Name (poster + title) */}
//             <col className="w-1/6" /> {/* Ratings */}
//             <col className="w-1/6" /> {/* Popularity */}
//             <col className="w-1/6" /> {/* Genre */}
//           </colgroup>

//           <thead className="border-b">
//             <tr>
//               <th className="px-6 py-3 text-left">Name</th>
//               <th className="px-6 py-3 text-left">Ratings</th>
//               <th className="px-6 py-3 text-left">Popularity</th>
//               <th className="px-6 py-3 text-left">Genre</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr className="border-b align-middle">
//               {/* Name column: image + title */}
//               <td className="px-6 py-4">
//                 <div className="flex items-center gap-4">
//                   <img
//                     className="h-[6rem] w-[10rem] rounded-md object-cover"
//                     src="https://editorial.rottentomatoes.com/wp-content/uploads/2024/05/700MadMax.jpg"
//                     alt="Movie Poster"
//                   />
//                   <span className="opacity-75 font-medium">The Matrix</span>
//                 </div>
//               </td>

//               <td className="px-6 py-4">8.9</td>
//               <td className="px-6 py-4">9</td>
//               <td className="px-6 py-4">Action</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default WatchList;
