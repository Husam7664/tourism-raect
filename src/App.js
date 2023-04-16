import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import Ticketing from './Components/Ticketing/Ticketing'
import Workancy from './Components/Workancy/Workancy'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      {/* <Ticketing />
      <Workancy />
      <Footer /> */}
    </>
  )
}

export default App
