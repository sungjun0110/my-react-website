import React, { useEffect } from 'react'
import Slider from './ImgSlider'
import './Workpage.css'
import photo1 from '../../../img/tinderclone.png'
import photo2 from '../../../img/tinderclone1.png'

function Covidtracker() {
  const urls=[photo1, photo2]

  useEffect(() => {window.scrollTo(0,0)})

  return (
    <div className='site-description'>
      <Slider urls={urls} />
      <h1>Tinder Clone</h1>
      <div className="paragraph">
        <p>
        This is a very simple Tinder clone website. I built this to execute MERN stack that I recently learn. Image URLs and names on the cards are stored in MongoDB. 
        </p>
        <p>
          <a href="https://github.com/sungjun0110/tinder-clone" target="_blank">Visit Github</a>
          <br/>
          <a href="https://sungjun0110.github.io/tinder-clone/" target="_blank">Visit Live Website</a>
        </p>
        <p className="built-date">May 2021</p>
      </div>
    </div>
  )
}

export default Covidtracker
