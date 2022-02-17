import { useEffect, useState } from 'react';
import './ImgSlider.css';

let idx = 0;

function ImgSlider({ photos }) {
  const [photo, setPhoto] = useState();

  useEffect(function (){
    setPhoto(photos[idx]);
  }, [])

  function buttonHandler(direction) {
    if (direction === 'prev' && idx > 0) {
      idx --;
      setPhoto(photos[idx])
    } else if (direction === 'next' && idx < photos.length - 1) {
      idx ++;
      setPhoto(photos[idx])
    }
  }

  return (
    <div id='ImgSlider'>
      <img src={photo} />
      <div id='ImgSlider-buttons'>
        <button id='prev-button' onClick={() => buttonHandler('prev')}>{'<'}</button>
        <button id='next-button' onClick={() => buttonHandler('next')}>{'>'}</button>
      </div>
    </div>
  )
}

export default ImgSlider
