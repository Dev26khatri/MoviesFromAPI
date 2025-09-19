import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Objects } from "./components/Movies";

const API = () => {
  const [api, setAPI] = useState([]);

  const movies = useContext(Objects);
  useEffect(() => {
    const fetch = async () => {
      try {
        let res = await axios.get(
          `https://api.themoviedb.org/3/movie/550?api_key=c4383fe142412ed236ff2c95141b2119&language=en-US`
          //   `https://api.themoviedb.org/3/movie/popular?api_key=c4383fe142412ed236ff2c95141b2119`
        );
        setAPI(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Throwing this error :", err);
      }
    };
    fetch();
  }, []);
  console.log(movies.id);
  return (
    <>
      <div>{api.original_title}</div>
    </>
  );
};

export default API;
