import React from 'react'
import './Showcase.css'

import showcaseMain from '../../assets/images/showcase-main.jpg'
import showcaseBedroom1 from '../../assets/images/showcase-bedroom1.jpg'
import showcaseBedroom2 from '../../assets/images/showcase-bedroom2.jpg'
import showcaseLivingRoom from '../../assets/images/showcase-livingroom.jpg'
import showcaseBathroom from '../../assets/images/showcase-bathroom.jpg'

const Showcase = () => {
  return (
    <div className='showcase'>
        <h1 className='showcase-text'>Top Featured Showcase</h1>
        <p>Selected listings by city, state, and zip based on views</p>
        <div className='container'>
            <img src={showcaseMain} alt=''/>
            <img src={showcaseBedroom1} alt=''/>
            <img src={showcaseBedroom2} alt=''/>
            <img src={showcaseLivingRoom} alt=''/>
            <img src={showcaseBathroom} alt=''/>
        </div>
    </div>
  )
}

export default Showcase