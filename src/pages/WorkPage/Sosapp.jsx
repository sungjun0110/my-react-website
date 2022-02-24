import ImgSlider from '../../components/ImgSlider/ImgSlider'
import './Workpage.css'
import photo1 from '../../../img/sosimg.png'
import photo2 from '../../../img/sosimg1.jpg'

function Covidtracker() {
  const photos=[photo1, photo2]

  return (
    <div className='site-description'>
      <ImgSlider photos={photos} />
      <h1>Android Application</h1>
      <div className="paragraph">
        <p>
          Sos4ursafety is an android app that can be used in a danger situation. I read articles saying some victims could’ve escaped the situation if they had self-defense alarms. So I built a mobile app because everyone carries a smartphone these days. 
        </p>
        <p>
          This app is built with Java and Google Map API. What it can do is it can send a text message to contacts saved in the app and make a loud siren noise with one button click. I also added a flashlight feature that can blink “SOS” in morse code or stay turned on for normal flashlight.
        </p>
        <p>
          <a href="https://github.com/sungjun0110/SOS4ursafety" target="_blank">Visit Github</a>
        </p>
        <p className="built-date">December 2019</p>
      </div>
    </div>
  )
}

export default Covidtracker
