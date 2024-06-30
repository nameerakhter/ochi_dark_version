import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <div>
      <div className="h-screen w-full text-white">
        <Navbar />
        <LandingPage />
        {/* <marquee />
        <about />
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
