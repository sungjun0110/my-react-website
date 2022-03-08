import React, { useEffect } from 'react'
import './Workpage.css'
import ImgSlider from '../../components/ImgSlider/ImgSlider';

function Covidtracker() {
  const photos=[
      'https://i.imgur.com/E1b4fD0.png',
      'https://i.imgur.com/DS2pb6A.png',
      'https://i.imgur.com/09KyNuv.png',
      'https://i.imgur.com/Sky239x.png',
    ];

  useEffect(() => {window.scrollTo(0,0)});

  return (
    <div className='site-description'>
      <ImgSlider photos={photos} />
      <h1>UI Component Develpment</h1>
      <div className="paragraph">
        <p>
          
        </p>
        <p>
          <a href="https://sungjun0110.github.io/ui-patterns/" target="_blank">Live Demo</a><br />
          <a href="https://github.com/sungjun0110/ui-patterns" target="_blank">Visit Github</a>
          <br/>
        </p>
        <p className="built-date">April 2020</p>
      </div>
    </div>
  )
}

export default Covidtracker
