const Cards = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center gap-5 bg-zinc-900 px-5 lg:flex-row lg:px-32">
      <div className="card-container h-[40vh] w-full lg:h-[50vh] lg:w-1/2">
        <div className="card relative flex h-full w-full items-center justify-center rounded-xl bg-[#004D43]">
          <img
            className="w-20 lg:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 rounded-full border-2 px-3 py-2 text-sm lg:bottom-10 lg:left-10 lg:px-5 lg:py-3 lg:text-base">
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className="card-container flex h-[40vh] w-full flex-col gap-5 lg:h-[50vh] lg:w-1/2 lg:flex-row">
        <div className="card relative flex h-full w-full items-center justify-center rounded-xl bg-[#16332f] lg:w-1/2">
          <img
            className="w-20 lg:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 rounded-full border-2 px-3 py-2 text-sm lg:bottom-10 lg:left-10 lg:px-5 lg:py-3 lg:text-base">
            &copy; 2019-2022
          </button>
        </div>
        <div className="card relative flex h-full w-full items-center justify-center rounded-xl bg-[#16332f] lg:w-1/2">
          <img
            className="w-20 lg:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 rounded-full border-2 px-3 py-2 text-sm lg:bottom-10 lg:left-10 lg:px-5 lg:py-3 lg:text-base">
            &copy; 2019-2022
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
