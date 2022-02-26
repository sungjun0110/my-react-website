import React, { useRef, useEffect } from 'react'
import './AboutPage.css'
import { FaReact, FaJava, FaCss3, FaGit, FaGithub, FaJs, FaNpm, FaNode, FaPhp, FaPython, FaWordpressSimple, FaWindows, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { IconContext } from 'react-icons'


function About() {
  const ref = useRef();

  return (
    <div id="about-page" ref={ref}>
      <h1>About</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            My name is Sungjun Choi, a self-taught Web Developer. I'm a guy who loves computer technology and likes to put it into practice.
          </p>
          <p>
            I like to create intuitive user interface, resolve technical problems, and develop websites from scratch. While my focus is front-end technologies such as ReactJS, I also enjoy building back-end.
          </p>
          <p>
            I always love to learn and experiment new skills and technologies.
          </p>
        </div>

        <div className="skill-icons">
          <IconContext.Provider 
            value={{
              className: "skill-icon", 
              size: "3.5rem", 
              color: "var(--color5)", 
            }}
          >
            <h2 id="skills-title">Skills</h2>
            <div id="skill-div">
              <div className="skill-icon-div">
                <FaReact />
                <p>React</p>
              </div>
              <div className="skill-icon-div">
                <FaJava />
                <p>Java</p>
              </div>
              <div className="skill-icon-div">
                <FaCss3 />
                <p>CSS3</p>
              </div>
              <div className="skill-icon-div">
                <FaJs />
                <p>JavaScript</p>
              </div>
              <div className="skill-icon-div">
                <FaPhp />
                <p>Php</p>
              </div>
              <div className="skill-icon-div">
                <FaPython />
                <p>Python</p>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default About
