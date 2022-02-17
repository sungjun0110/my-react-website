import React from 'react'
import WelcomeBox from '../../components/WelcomeBox/WelcomeBox';
import WorkContent from '../../components/WorkContent/WorkContent';
import AboutPage from '../AboutPage/AboutPage'
import Background from '../../components/Background/Background';
import './Homepage.css'
import ContactMe from '../../components/ContactMe/ContactMe';

function Homepage() {
  return (
    <div id="home">
      <Background />
      <WelcomeBox />
      <div id="about">
        <AboutPage />
        <WorkContent />
      </div>
      {/* <ContactMe /> */}
    </div>
  )
}

export default Homepage
