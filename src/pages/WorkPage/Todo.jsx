import React, { useEffect } from 'react'
import Slider from './ImgSlider'
import './Workpage.css'
import photo1 from '../../../img/todo1.png'
import photo2 from '../../../img/todo2.png'
import photo3 from '../../../img/todo3.png'
import photo4 from '../../../img/todo4.png'

function Todo() {
  const urls=[photo1, photo2, photo3, photo4]

  useEffect(() => {window.scrollTo(0,0)})

  return (
    <div className='site-description'>
      <Slider urls={urls} />
      <h1>Tinder Clone</h1>
      <div className="paragraph">
        <p>
          This is a simple to-do list web app. I built this to execute CRUD operations and REST APIs. I also added user authentication to protect one's to-do information from others.
        </p>
        <p>
          This web app is built with the MERN stack and hosted on Heroku.
        </p>
        <p>
          <a href="https://github.com/sungjun0110/todo_list" target="_blank">Visit Github</a>
          <br/>
          <a href="https://sc-todo-list.herokuapp.com/" target="_blank">Visit Live Website</a>
        </p>
        <p className="built-date">June 2021</p>
      </div>
    </div>
  )
}

export default Todo
