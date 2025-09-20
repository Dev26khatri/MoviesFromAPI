import React from "react";

const Paggination = ({ pageNo, nextPage, prePage }) => {
  //Paggination logic from the Movies Components
  return (
    <div className="p-5 flex flex-row gap-x-3 justify-center items-center  mt-10 rounded-xl  bg-[#2c2c2c]  text-[#f8f9fa]">
      <button
        onClick={prePage}
        className="rounded-tl-lg  rounded-bl-lg p-2 bg-[#8b1538] border-none text-white font-bold text-xl  border hover:cursor-pointer"
      >
        {/* This is for the Previos Page  */}
        Prev
      </button>
      <p>{pageNo}</p>
      <button
        className="rounded-tr-lg  rounded-br-lg p-2 bg-[#8b1538] border-none text-white font-bold text-xl border hover:cursor-pointer"
        onClick={nextPage}
      >
        {/* //THis is for the Next Page */}
        Next
      </button>
    </div>
  );
};

export default Paggination;
