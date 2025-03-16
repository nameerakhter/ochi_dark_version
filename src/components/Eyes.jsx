import { useEffect, useState } from 'react'

export default function Eyes() {
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth / 2
      let deltaY = mouseY - window.innerWidth / 2

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setRotate(angle - 180)
    })
  })

  return (
    <div className="h-screen w-full overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative h-full w-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center"
      >
        {/* Eyes Container */}
        <div className="absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] gap-6 md:gap-[4vw]">
          {/* first Eye */}
          <div className="flex h-[20vw] w-[20vw] items-center justify-center rounded-full bg-zinc-100 md:h-[15vw] md:w-[15vw]">
            <div className="relative h-2/3 w-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute left-1/2 top-1/2 h-[2rem] w-full -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="h-6 w-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Second Eye */}
          <div className="flex h-[20vw] w-[20vw] items-center justify-center rounded-full bg-zinc-100 md:h-[15vw] md:w-[15vw]">
            <div className="relative h-2/3 w-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute left-1/2 top-1/2 h-[10%] w-full -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="h-6 w-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
