import React from 'react'
import './Explore.css'

import explore1 from '../../assets/images/explore-1.jpg'
import explore2 from '../../assets/images/explore-2.1.jpg'
import explore3 from '../../assets/images/explore-3.jpg'

const Explore = () => {
  return (
    <div className='explore'>
            <h1>Explore cabins that are available near your area.</h1>
            <div className='sub-header'>
                <p><span className='bold'>All</span></p>
                <p>Forests</p>
                <p>Mountains</p>
                <p>Woodlands</p>
                <p>Residential</p>
            </div>
            <div className='image-grid'>
                <img src={explore1} alt='' />
                <img src={explore2} alt='' />
                <img src={explore3} alt='' />
            </div>
            <button className='btn'>View All</button>
    </div>
  )
}

export default Explore