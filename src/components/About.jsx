export default function About() {
  return (
    <div className="w-full rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] p-10 text-black md:p-20">
      <h1 className="font-['Neue Montreal Regular'] mb-10 text-[6vw] leading-[6vw] tracking-tighter md:mb-[4vw] md:text-[4vw] md:leading-[4.5vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="md:mt-30 mt-10 flex w-full flex-col gap-10 border-t-[1px] border-[#39411f] pt-10 md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="mb-5 text-4xl md:text-6xl">Our approach:</h1>
          <button className="mt-5 flex items-center justify-between gap-5 rounded-full bg-zinc-900 px-6 py-3 text-sm uppercase text-white md:mt-10 md:gap-10 md:px-8 md:py-6 md:text-[2vw]">
            Read More
            <div className="h-3 w-3 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="h-[40vh] w-full overflow-hidden rounded-3xl bg-[#97b626] md:h-[50vh] md:w-1/2">
          <img
            className="h-full w-full rounded-3xl object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="about"
          />
        </div>
      </div>
    </div>
  )
}
