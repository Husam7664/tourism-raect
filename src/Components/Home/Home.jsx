import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>
          <h1 className='title'>Plan your trip with tourism</h1>
          <p className='subTitle'>
            Travel to your favourite city with respectful of the enviroment!
          </p>
          <button className='btn'>
            <a href='#'>Explore Now</a>
          </button>
        </div>
        <div className='homeCard grid'>
          <div className='locationDiv'>
            <label htmlFor='location' className='location'>
              Location
            </label>
            <input type='text' placeholder='Dream Desnination' />
          </div>
          <div className='distDiv'>
            <label htmlFor='distance' className='location'>
              Distance
            </label>
            <input type='text' placeholder='11/meters' />
          </div>
          <div className='priceDiv'>
            <label htmlFor='price' className='location'>
              Price
            </label>
            <input type='text' placeholder='$140-$500' />
          </div>

          <button className='btn'>Search</button>
        </div>
      </div>
    </section>
  )
}

export default Home
