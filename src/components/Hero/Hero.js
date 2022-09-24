import React from 'react'
import './Hero.css'
import {TbChartDots} from 'react-icons/tb'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>Find your perfect outdoor retreat.</h1>
        <p className='search-text'>Search the largest selection of cottages and log cabins in B.C.</p>
        <form className='search'>
          <div>
              <input type='text' placeholder='Enter keywords, locations, etc.' />
          </div>
          <div className='radio'>
            <input type='radio' checked />
            <label>Buy</label>
            <input type='radio' unchecked />
            <label>Rent</label>
            <button type='submit' className='search-btn'>Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero