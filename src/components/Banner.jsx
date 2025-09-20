import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[70vh] md:h-[80vh] bg-fixed bg-no-repeat bg-center bg-cover flex items-end"
      style={{ backgroundImage: "url('/MovieBanner.png')" }}
    ></div>
  );
};

export default Banner;
