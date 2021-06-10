import React, { useEffect } from 'react'
import Slider from '../../slider/ImgSlider'
import './Workpage.css'

function Covidtracker() {
  const urls=['/img/ncovtracker.png', '/img/ncovtracker1.png', '/img/ncovtracker2.png']

  useEffect(() => {window.scrollTo(0,0)})

  return (
    <div className='site-description'>
      <Slider urls={urls} />
      <h1>Covid-19 Tracker</h1>
      <p>
        This is a touch-free menu for customers at a sushi restaurant. This website mainly focuses on mobile uses since the most customers would use their smartphones to check the menu at the restaurant.
      </p>
    </div>
  )
}

export default Covidtracker
