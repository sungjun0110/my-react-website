import React, { useState, useEffect } from 'react'
import './WelcomeBox.css'
import profilePhoto from '../../img/profile-photo.gif'

function WelcomeBox() {
  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)

  function dimScrollTxt () {
    if (offset == null) {
      return {opacity: 1}
    }
    if (offset > 300) {
      return {opacity: 0}
    }
    return {opacity: 1 - (offset/300)}
  }

  return (
    <div id="welcome-box">
      <div id="picture-frame">
        <img src={profilePhoto}></img>
      </div>
      <div id="welcome-text"><h1>Hello!<br/>I am Sungjun!</h1></div>
      <div id="welcome-info"><h3>Web Developer</h3></div>
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
