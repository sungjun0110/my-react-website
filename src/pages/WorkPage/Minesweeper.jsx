import React, { useEffect } from 'react'
import './Workpage.css'
import ImgSlider from '../../components/ImgSlider/ImgSlider';


function Covidtracker() {
  const photos=['https://camo.githubusercontent.com/26bc160f3dd1147eddf8382cd713c53c5882d90c424b3949f2a9acaf496fa768/68747470733a2f2f696d6775722e636f6d2f634c3645504b642e706e67', 
  'https://camo.githubusercontent.com/a328416cdcf72723feb18c5e7478bf3f729fff368ab2f082ddd4f5fe586da883/68747470733a2f2f692e696d6775722e636f6d2f42723158716c662e706e67', 
  'https://camo.githubusercontent.com/7b49f44b3c1770e78b0cc220ba87e85c77e8ee9e5bf5a0d3190d1033c18c551d/68747470733a2f2f692e696d6775722e636f6d2f6a54464b44626f2e706e67',
  'https://camo.githubusercontent.com/d39b6f61245b9373186f5a31f2aba923ee1319256cb0eb70bcc08ea516cd0ae5/68747470733a2f2f692e696d6775722e636f6d2f3275726766734b2e706e67',
];

  useEffect(() => {window.scrollTo(0,0)});

  return (
    <div className='site-description'>
      <ImgSlider photos={photos} />
      <h1>Photo Pins</h1>
      <div className="paragraph">
        <p>
          When sharing a picture with a friend, I often want to leave a mark on the picture without editing so that my friend can find what I am talking about right away. 
        </p>
        <p>
          Photo Pins is where you can upload a photo and freely leave a pin on it. 
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
