import React, { useEffect } from 'react'
import Slider from './ImgSlider'
import './Workpage.css'
import photo1 from '../../../img/sushikuma0.png'
import photo2 from '../../../img/sushikuma1.png'
import photo3 from '../../../img/sushikuma2.png'


function Sushikuma() {
  const urls = [photo1, photo2, photo3]

  useEffect(() => {window.scrollTo(0,0)})

  return (   
    <div className='site-description'>
      <Slider urls={urls} />
      <h1>Touch-Free Menu</h1>
        <div className="paragraph">
          <p>
            My parents' restaurant chain was in need of a touch-free menu for their customers. I’ve been wanting to experiment with responsive web design, and this seemed like the perfect opportunity. 
          </p>
          <p>
            I used 5 breakpoints to make this minimalistic restaurant menu to handle different various display sizes in an efficient way. This website is built with React because I found that Rreact library is the most popular one and its component management is easy to keep the front-end structure simple. 
          </p>
          <p>
            Visit the site at sushikuma.net
          </p>

          <p className="built-date">December 2020</p>
        </div>
    </div>
  )
}

export default Sushikuma
