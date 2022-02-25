import React, { useEffect } from 'react'
import './Workpage.css'
import ImgSlider from '../../components/ImgSlider/ImgSlider';


function Covidtracker() {
  const photos=['https://camo.githubusercontent.com/425d960e5e081b35841fe69f771b807ed024084ca256570004299434f007c377/68747470733a2f2f692e696d6775722e636f6d2f6b67616c55504b2e706e67', 
  'https://camo.githubusercontent.com/5ddabf57e7bb5d1eadd1b6ef9127f3943f280fd33fb12c5cdb2c272c1293de1a/68747470733a2f2f692e696d6775722e636f6d2f626864437652362e706e67', 
  'https://camo.githubusercontent.com/c7fdb2b42006b834a2bcb97baf487f1d77d9b9016f073792f107ee35bdcac232/68747470733a2f2f692e696d6775722e636f6d2f6d324c414f66512e706e67',
  'https://camo.githubusercontent.com/657e38a1dd71b6c7730ad83d7ec265e24a9de715c6d594fb2ce705cb81a81157/68747470733a2f2f692e696d6775722e636f6d2f69346f4956554f2e706e67',
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
          <a href="https://github.com/sungjun0110/mongoose-sns" target="_blank">Visit Github</a>
          <br/>
          <a href="https://mongoose-sns.herokuapp.com/photos" target="_blank">Visit Live Demo</a>
        </p>
        <p className="built-date">Feb 2022</p>
      </div>
    </div>
  )
}

export default Covidtracker
