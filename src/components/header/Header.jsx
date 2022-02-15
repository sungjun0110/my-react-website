import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Header.css';

function Header() {
  const [url, setUrl] = useState()

  useEffect(() => {
    getUrl()
    setUrl(window.location.hash)
  }, [])

  function getUrl (hash) {
      setUrl(hash)
  }

  return (
      <nav>
        <ul>
          <Link smooth to='/website/#home'>
            <li 
              className={(url === '#home' || url === '')? 'active' : null} 
              onClick={() => getUrl('#home')}
            >
              Home
            </li>
          </Link>
          <Link smooth to='/website/#about'>
            <li 
              className={(url === '#about')? 'active' : null} 
              onClick={() => getUrl('#about')}
            >
              About
            </li>
          </Link>
          <Link smooth to='/website/#portfolio'>
            <li 
              className={(url === '#portfolio')? 'active' : null}
              onClick={() => getUrl("#portfolio")}  
            >
              Portfolio
            </li>
          </Link>
          <Link smooth to ='/website/#contact'>
            <li 
              className={(url === '#contact')? 'active' : null} 
              onClick={() => getUrl("#contact")}
            >
              Contact Me
            </li>
          </Link>
        </ul>
      </nav>
  )
}

export default Header
           