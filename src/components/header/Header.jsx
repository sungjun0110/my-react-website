import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [url, setUrl] = useState()

  useEffect(() => {
    getUrl()
    setUrl(window.location.hash)
    console.log(window.location.hash);
  }, [])

  function getUrl (hash) {
      setUrl(hash)
  }

  function scrollToId(id) {
    const elem = document.getElementById(id);
    window.scrollTo({
      top: elem.offsetTop,
      behavior: "smooth",
    });
    setUrl(`#${id}`)
  }

  return (
      <nav>
        <ul>
          <Link smooth to='/website/#home'>
            <li 
              className={(url === '#home' || url === '')? 'active' : null} 
              onClick={() => scrollToId('home')}
            >
              Home
            </li>
          </Link>
          <Link smooth to='/website/#about'>
            <li 
              className={(url === '#about')? 'active' : null} 
              onClick={() => scrollToId('about')}
            >
              About
            </li>
          </Link>
          <Link smooth to='/website/#projects'>
            <li 
              className={(url === '#projects')? 'active' : null}
              onClick={() => scrollToId('projects')}  
            >
              Projects
            </li>
          </Link>
          <Link smooth to ='/website/#contact'>
            <li 
              className={(url === '#contact')? 'active' : null} 
              onClick={() => scrollToId('contact')}
            >
              Contact Me
            </li>
          </Link>
        </ul>
      </nav>
  )
}

export default Header
           