import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [url, setUrl] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setUrl(window.location.hash); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  useEffect(() => {
    if (window.location.pathname === '/website/') {
      const about = document.getElementById('about');
      const projects = document.getElementById('projects');
      const contact = document.getElementById('contact');

      if (scrollPosition < about.offsetTop) setUrl('#home');
      else if (scrollPosition < projects.offsetTop) setUrl('#about');
      else if (scrollPosition < contact.offsetTop) setUrl('#projects');
      else if (scrollPosition >= contact.offsetTop) setUrl('#contact');
    } else {
      setUrl('#projects');
    }

    return () => {
      setUrl();
    }
  }, [scrollPosition])

  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
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
          <Link smooth="true" to='/website/#home'>
            <li 
              className={(url === '#home' || url === '')? 'active' : null} 
              onClick={() => scrollToId('home')}
            >
              Home
            </li>
          </Link>
          <Link smooth="true" to='/website/#about'>
            <li 
              className={(url === '#about')? 'active' : null} 
              onClick={() => scrollToId('about')}
            >
              About
            </li>
          </Link>
          <Link smooth="true" to='/website/#projects'>
            <li 
              className={(url === '#projects')? 'active' : null}
              onClick={() => scrollToId('projects')}  
            >
              Projects
            </li>
          </Link>
          <Link smooth="true" to ='/website/#contact'>
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
           