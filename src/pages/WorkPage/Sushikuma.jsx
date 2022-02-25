import { useEffect } from 'react'
import ImgSlider from '../../components/ImgSlider/ImgSlider';
import './Workpage.css'
import photo1 from '../../img/sushikuma0.png'
import photo2 from '../../img/sushikuma1.png'
import photo3 from '../../img/sushikuma2.png'


function Sushikuma() {
  const photos = [photo1, photo2, photo3]

  useEffect(() => {window.scrollTo(0,0)})

  return (   
    <div className='site-description'>
      <ImgSlider photos={photos} />
      <h1>Touch-Free Menu</h1>
        <div className="paragraph">
          <p>
            A local restaurant chain was in need of a touch-free menu for their customers. I wanted to experiment with responsive web design, and this seemed like a perfect opportunity. 
          </p>
          <p>
            I used 5 breakpoints to make this minimalistic restaurant menu to handle different various display sizes in an efficient way. This website is built with React because its component management is easy to keep the front-end structure simple. 
          </p>
          <p>
          <a href="https://github.com/sungjun0110/Sushi-Kuma-React" target="_blank">Visit Github</a>
          <br/>
          <a href="http://www.sushikuma.net/" target="_blank">Visit Live Website</a>
        </p>

          <p className="built-date">December 2020</p>
        </div>
    </div>
  )
}

export default Sushikuma
