import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons'
import './Background.css'
import { FaReact, FaJava, FaCss3, FaGit, FaGithub, FaJs, FaNpm, FaNode, FaPhp, FaPython, FaWordpressSimple, FaWindows, FaHtml5, FaNodeJs } from 'react-icons/fa'

function Background({ resolution }) {
  const iconsRow = 
    <>
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
    </>;
  const icons = [];
  for (let i = 0; i < 15; i++) {
    icons.push(
      <div className="icon-row" key={`icon-row-${i}`}>
        <div>
          {iconsRow}
          {iconsRow}
          {iconsRow}
          {iconsRow}
          {iconsRow}
        </div>
        <div>
          {iconsRow}
          {iconsRow}
          {iconsRow}
          {iconsRow}
          {iconsRow}
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