import React, { useEffect } from 'react'
import './Workpage.css'
import ImgSlider from '../../components/ImgSlider/ImgSlider';


function Covidtracker() {
  const photos=['https://camo.githubusercontent.com/d1459350931c8ae6b2f28526cd9fc1622b540f05b710d0daecf08d13d6aa741b/68747470733a2f2f692e696d6775722e636f6d2f68644476456e322e706e67', 
  'https://camo.githubusercontent.com/301aaf27bf8f2e16b98ad780b32a6e9a1c3605004c52a605796109544ef51ee0/68747470733a2f2f692e696d6775722e636f6d2f4c6b58456f6b452e706e67', 
  'https://camo.githubusercontent.com/78db99fac4f31e9fb302fa1e9be75ea6a1126f5bf5a769e977fb5c6b49e395d2/68747470733a2f2f692e696d6775722e636f6d2f76357a594e56722e706e67',
  'https://camo.githubusercontent.com/eafffeff928556b45b9cec5521d8f593f87317a1b2448a57f16bc31cc54a02e8/68747470733a2f2f692e696d6775722e636f6d2f49577a796c666a2e706e67'
];

  useEffect(() => {window.scrollTo(0,0)});

  return (
    <div className='site-description'>
      <ImgSlider photos={photos} />
      <h1>Give & Take</h1>
      <div className="paragraph">
        <p>
          One day, I found that there are so many used items in good condition in my room that I no longer use, and I thought that exchanging the items with other without spending money would be a good idea.
        </p>
        <p>
          What I Did:
          <ul>
            <li>
              Pages to view items and exchanges
            </li>
            <li>
              API to handle request/response data between a client and MongoDB database
            </li>
          </ul>
        </p>
        <p>
          <a href="https://github.com/sungjun0110/project4" target="_blank">Visit Github</a>
          <br/>
          <a href="https://jun-project4.herokuapp.com/" target="_blank">Visit Live Demo</a>
        </p>
        <p className="built-date">Feb 2022</p>
      </div>
    </div>
  )
}

export default Covidtracker
