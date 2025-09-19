import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="  border-none top-0 left-0 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex border w-full transition-all delay-500 duration-500 ease-in-outx space-x-5 items-center pl-1.5 py-1.5 ">
      <img
        className="w-12 h-12 rounded-r-2xl bg-radial from-pink-400 from-40% to-fuchsia-700 "
        src={`public/movieBasicLogo.png`}
        alt="Movie"
      />
      {/* Using the Link element for the Routing between Movies and Watchlist */}
      <Link
        to="/"
        className=" text-xl font-bold p-0.5 hover:underline decoration-1"
      >
        Movies
      </Link>
      <Link
        to="/WatchList"
        className=" text-xl font-bold  p-0.5 hover:underline decoration-1 "
      >
        WatchList
      </Link>
    </div>
  );
};

export default NavBar;
