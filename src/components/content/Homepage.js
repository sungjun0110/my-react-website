import React from 'react'
import WelcomeBox from './WelcomeBox'
import WorkContent from './WorkContent'
import About from './About'
import Background from '../background/Background'
import './Homepage.css'
import ContactMe from './ContactMe'

function Homepage() {
  return (
    <div id="home">
      <Background />
      <WelcomeBox />
      <div id="about">
        <About />
        <WorkContent />
      </div>
      <ContactMe />
    </div>
  )
}

export default Homepage
