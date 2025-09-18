import React from "react";

const Paggination = ({ pageNo, nextPage, prePage }) => {
  //Paggination logic from the Movies Components
  return (
    <div className="p-5 flex flex-row gap-x-3 justify-center items-center  mt-10 rounded-xl  bg-indigo-400  text-black">
      <button
        onClick={prePage}
        className="rounded-l bg-indigo-600 text-white font-bold text-xl  border hover:cursor-pointer"
      >
        {/* This is for the Previos Page  */}
        Prev
      </button>
      <p>{pageNo}</p>
      <button
        className="rounded-l bg-indigo-600 text-white font-bold text-xl border hover:cursor-pointer"
        onClick={nextPage}
      >
        {/* //THis is for the Next Page */}
        Next
      </button>
    </div>
  );
};

export default Paggination;
