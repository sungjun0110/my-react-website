import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function WorkContentPage( props ) {
  const [hover,setHover] = useState(false)
  const [imgStyle, setImgStyle] = useState({opacity: 1})

  useEffect(() => {
    if (hover == true) {
      setImgStyle({opacity: 0.4})
    } else setImgStyle({opacity: 1})
  }, [hover])

  return (
    <div 
      className="work-box" 
      onMouseEnter={() => setHover(!hover)} 
      onMouseLeave={() => setHover(!hover)} 
    >    
      <div className="img-background">
        <img 
          src={props.imgUrl} 
          style={imgStyle} 
          alt={props.alt} 
        />
      </div>
      <div className="work-img-text">
        <h4>{props.description}</h4>
        <Link to={props.path}>
          <button className="learn-more-btn">Learn More</button>
        </Link>
      </div>
    
      <div className="work-desc">
        {props.description}
      </div>
    </div>
  )
}

export default WorkContentPage
