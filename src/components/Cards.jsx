import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="card-container h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-3 border-2 left-10 bottom-10 rounded-full">
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className="card-container w-1/2 flex h-[50vh] gap-5">
        <div className="card relative w-1/2 h-full rounded-xl bg-[#16332f] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-3 border-2 left-10 bottom-10 rounded-full">
            &copy; 2019-2022
          </button>
        </div>
        <div className="card relative w-1/2 h-full rounded-xl bg-[#16332f] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-3 border-2 left-10 bottom-10 rounded-full">
            &copy; 2019-2022
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
