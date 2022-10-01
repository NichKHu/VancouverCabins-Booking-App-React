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

          <div className='span 3 img-details'>

            <div className='top'>
              <h2>123 Placeholder St. Vancouver, B.C.</h2>
              <p>House for Sale</p>
              <p className='price'>$4,502,201</p>
            </div>

            <div className='info-grid'>

              <div className='bedroom-bathroom'>

                <div className='info'>
                  <p className='bold'>Bedrooms: 5</p>
                </div>

                <div className='info'>
                  <p className='bold'>Bathrooms: 3</p>
                </div>

              </div>

              <div className='sqft-estpay'>

                <div className='info'>
                  <p className='bold'>Square Feet: 8,138</p>
                </div>

                <div className='info'>
                  <p className='bold'>Est. Payment: $14,568</p>
                </div>

              </div>

            </div>

          </div>
      
          <div className='span-2 right-img-details'>
            <p>A beautiful modern lakehouse in the B.C. with a full-size nature view.</p>
            <button className='view-listings-btn'>View Listings</button>
          </div>

        </div>

        <div className='container'>
          <img src={showcaseMain} alt=''/>
          <img src={showcaseBedroom1} alt=''/>
          <img src={showcaseBedroom2} alt=''/>
          <img src={showcaseLivingRoom} alt=''/>
          <img src={showcaseBathroom} alt=''/>

          <div className='span 3 img-details'>

            <div className='top'>
              <h2>123 Placeholder St. Vancouver, B.C.</h2>
              <p>House for Sale</p>
              <p className='price'>$4,502,201</p>
            </div>

            <div className='info-grid'>

              <div className='bedroom-bathroom'>

                <div className='info'>
                  <p className='bold'>Bedrooms: 5</p>
                </div>

                <div className='info'>
                  <p className='bold'>Bathrooms: 3</p>
                </div>

              </div>

              <div className='sqft-estpay'>
                
                <div className='info'>
                  <p className='bold'>Square Feet: 8,138</p>
                </div>

                <div className='info'>
                  <p className='bold'>Est. Payment: $14,568</p>
                </div>

              </div>

            </div>

          </div>
      
          <div className='span-2 right-img-details'>
            <p>A beautiful modern lakehouse in the B.C. with a full-size nature view.</p>
            <button className='view-listings-btn'>View Listings</button>
          </div>
      </div>
    </div>
  )
}

export default Showcase