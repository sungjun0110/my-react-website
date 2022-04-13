import React, { useState, useEffect } from 'react'
import WelcomeBox from '../../components/WelcomeBox/WelcomeBox';
import WorkContentPage from '../WorkContentPage/WorkContentPage';
import AboutPage from '../AboutPage/AboutPage'
import Background from '../../components/Background/Background';
import './Homepage.css'
import ContactMe from '../../components/ContactMe/ContactMe';

function Homepage() {
  const [resolution, setResolution] = useState({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    const updateResolution = () => {
      setResolution({ height: window.innerHeight, width: window.innerWidth });
    }
    window.addEventListener("resize", updateResolution);
  }, [])

  return (
    <div id="home">
      <Background resolution={resolution} />
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
