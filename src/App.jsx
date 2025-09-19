import React, { useEffect, useState, createContext } from "react";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import {
  BrowserRouter,
  Routes,
  Route,
  UNSAFE_RemixErrorBoundary,
} from "react-router-dom";
import Banner from "./components/Banner";
import MoviesDetials from "./components/MoviesDetials";

//Create the Context for the Props
export const Events = createContext();
export const PropsWatchist = createContext();
const App = () => {
  const [watchlist, setwatchlist] = useState([]);

  //This for the Add the Moveie in the Watchlist
  let HandleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("WatchlistData", JSON.stringify(newWatchlist));
    window.document.title = movieObj.original_title;
    setwatchlist(newWatchlist);
  };

  //This for the Remove the Moveie in the Watchlist
  let HandleRemoveWatchlist = (movieObj) => {
    let filtersWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    });

    setwatchlist(filtersWatchlist);
    //When you click this Funcation When the Also remove the data form the Local storage
    localStorage.setItem("WatchlistData", JSON.stringify(filtersWatchlist));
  };

  useEffect(() => {
    //Using the local Storage to store the Data locally
    let MoviesLocatStorage = localStorage.getItem("WatchlistData");

    if (!MoviesLocatStorage) {
      return;
    } else {
      setwatchlist(JSON.parse(MoviesLocatStorage));
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1a2332] text-[#f8f9fa]">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Events.Provider
                  value={{
                    HandleAddtoWatchlist,
                    HandleRemoveWatchlist,
                    watchlist,
                  }}
                >
                  <Movies
                  // HandleAddtoWatchlist={}
                  // HandleRemoveWatchlist={HandleRemoveWatchlist}
                  // WatchList={watchlist}
                  />
                </Events.Provider>
                {/* <Movies
                  HandleAddtoWatchlist={HandleAddtoWatchlist}
                  HandleRemoveWatchlist={HandleRemoveWatchlist}
                  WatchList={watchlist}
                  /> */}
              </>
            }
          />
          <Route path="/movie/:id" element={<MoviesDetials />} />
          <Route
            path="/WatchList"
            element={
              <PropsWatchist.Provider
                value={{ watchlist, setwatchlist, HandleRemoveWatchlist }}
              >
                <WatchList
                // WatchList={watchlist}
                // Setwatchlist={setwatchlist}
                // HandleRemoveWatchlist={HandleRemoveWatchlist}
                />
              </PropsWatchist.Provider>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
