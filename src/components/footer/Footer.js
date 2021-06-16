import React from 'react'
import './Footer.css';
import { IconContext } from 'react-icons'
import { FaArrowUp, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      

      <div id="footer-icons">
        <a href="https://github.com/sungjun0110"><FaGithub /></a>
      </div>

      <p>© 2011 Sungjun Choi</p>

      <IconContext.Provider value={{size: "3rem"}}>
        <div className="scroll-up" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
          <FaArrowUp />
        </div>
      </IconContext.Provider>
    </footer>
  )
}

export default Footer
