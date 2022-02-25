import React from 'react'
import WelcomeBox from '../../components/WelcomeBox/WelcomeBox';
import WorkContentPage from '../WorkContentPage/WorkContentPage';
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
        <WorkContentPage />
      </div>
      <ContactMe />
    </div>
  )
}

export default Homepage
