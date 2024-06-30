import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'

const App = () => {
  return (
    <div>
      <div className="min-h-screen w-full text-white bg-zinc-900">
        <Navbar />
        <LandingPage />
        <Marquee />
        {/* <about />
        <playful />
        <cards />
        <cards />
        <ready to start />
        <footer /> */}
      </div>
    </div>
  )
}

export default App
