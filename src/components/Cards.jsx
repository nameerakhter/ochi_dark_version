
const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col lg:flex-row items-center px-5 lg:px-32 gap-5">
    <div className="card-container h-[40vh] lg:h-[50vh] w-full lg:w-1/2">
      <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
        <img
          className="w-20 lg:w-32"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <button className="absolute px-3 py-2 lg:px-5 lg:py-3 border-2 left-5 lg:left-10 bottom-5 lg:bottom-10 rounded-full text-sm lg:text-base">
          &copy; 2019-2022
        </button>
      </div>
    </div>
    <div className="card-container w-full lg:w-1/2 flex h-[40vh] lg:h-[50vh] flex-col lg:flex-row gap-5">
      <div className="card relative w-full lg:w-1/2 h-full rounded-xl bg-[#16332f] flex items-center justify-center">
        <img
          className="w-20 lg:w-32"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <button className="absolute px-3 py-2 lg:px-5 lg:py-3 border-2 left-5 lg:left-10 bottom-5 lg:bottom-10 rounded-full text-sm lg:text-base">
          &copy; 2019-2022
        </button>
      </div>
      <div className="card relative w-full lg:w-1/2 h-full rounded-xl bg-[#16332f] flex items-center justify-center">
        <img
          className="w-20 lg:w-32"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <button className="absolute px-3 py-2 lg:px-5 lg:py-3 border-2 left-5 lg:left-10 bottom-5 lg:bottom-10 rounded-full text-sm lg:text-base">
          &copy; 2019-2022
        </button>
      </div>
    </div>
  </div>
  );
};

export default Cards;
