import { useEffect, useState } from "react";

export default function Eyes(){
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerWidth / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-center bg-cover"
      >
        {/* Eyes Container */}
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-6 md:gap-[4vw]">
          {/* first Eye */}
          <div className="flex items-center justify-center w-[20vw] md:w-[15vw] h-[20vw] md:h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2rem]"
              >
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Second Eye */}
          <div className="flex items-center justify-center w-[20vw] md:w-[15vw] h-[20vw] md:h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[10%]"
              >
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
