import React, { useState } from 'react'
import './WelcomeBox.css'
import profilePhoto from '../../img/profile-photo.gif';

function WelcomeBox() {
  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)

  function dimScrollTxt () {
    if (offset == null) {
      return {opacity: 1}
    }
    if (offset > 500) {
      return {opacity: 0}
    }
    return {opacity: 1 - (offset/500)}
  }

  return (
    <div id="welcome-box">
      <div id="picture-frame-wrap">
        <div id="picture-frame">
          <img src={profilePhoto} alt='profile'></img>
        </div>
        <div id="welcome-text">
        <p>Hello!<br/>I am Sungjun!</p>
        <span id="welcome-info">Software Engineer</span>
      </div>
      </div>
      
      <div 
        className="vertical-line" 
        style={dimScrollTxt()}>
        <span 
          className="scroll-text"
        >Scroll
        </span>
      </div>
    </div>
  )
}

export default WelcomeBox
