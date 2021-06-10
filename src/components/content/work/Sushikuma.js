import React, { useEffect } from 'react'
import Slider from '../../slider/ImgSlider'
import './Workpage.css'

function Sushikuma() {
  const urls = ["/img/sushikuma0.png", "/img/sushikuma1.png", "/img/sushikuma2.png"]

  useEffect(() => {window.scrollTo(0,0)})

  return (   
    <div className='site-description'>
      <Slider urls={urls} />
      <h1>Touch-Free Menu</h1>
      <p>
        This is a touch-free menu for customers at a sushi restaurant. This website mainly focuses on mobile uses since the most customers would use their smartphones to check the menu at the restaurant.
      </p>
    </div>
  )
}

export default Sushikuma
