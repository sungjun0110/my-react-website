import React from 'react'
import { IconContext } from 'react-icons'
import './Background.css'
import { FaReact, FaJava, FaCss3, FaGit, FaGithub, FaJs, FaNpm, FaNode, FaPhp, FaPython, FaWordpressSimple, FaWindows, FaHtml5, FaNodeJs } from 'react-icons/fa'

function Background() {
  const icons=[]
  for (var i = 0; i < 30; i++) {
    icons.push(
      <div className="icon-row" key={"icon-row-" + i}>
        <div>
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
        </div>
        <div>
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
          <FaReact />
          <FaJava />
          <FaCss3 />
          <FaGithub />
          <FaGit />
          <FaJs />
          <FaNpm />
          <FaNode />
          <FaPhp />
          <FaPython />
          <FaWordpressSimple />
          <FaWindows />
          <FaHtml5 />
          <FaNodeJs />
        </div>
      </div>
    )
  }

  return (
    <IconContext.Provider value={{className: "icon", color: 'rgba(0,0,0,0.5)', size:'3rem'}}>
      <div id="background">
        {icons}
      </div>
    </IconContext.Provider>
  )
}

export default Background