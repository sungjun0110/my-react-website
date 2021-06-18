import React from 'react'
import './WorkContent.css'
import WorkContentBox from './WorkContentBox'
import ncovtracker from '../../img/ncovtracker.png'
import sushikuma from '../../img/sushikumalogo.png'
import sosimg from '../../img/sosimg.png'
import tinderClone from '../../img/tinderclonelogo.png'
import todoImg from '../../img/todo1.png'

function WorkContent( props ) {
  return (
    <>
      <div id="work-background">
        <div id="portfolio">
          <h1>Portfolio</h1>
          <h2>Web</h2>
          <div className="main-col">
            <WorkContentBox 
              imgUrl={ncovtracker} 
              path="/covidtracker" 
              alt="ncovtracker.com" 
              description="Covid Tracker" 
            />
            <WorkContentBox 
              imgUrl={sushikuma}
              path="/touchfreemenu" 
              alt="sushikuma.net" 
              description="Touch-free restaurant menu" 
            />
            <WorkContentBox
              imgUrl={tinderClone} 
              path="/tinderclone" 
              alt="tinderclone"
              description="Tinder Clone"
            />
            <WorkContentBox 
              imgUrl={todoImg}
              path="/todolist" 
              alt="to-do list" 
              description="To-do list web app" 
            />
          </div>

          <h2>App</h2>
          <div className="main-col">
            <WorkContentBox 
              imgUrl={sosimg}
              path="/androidapp" 
              alt="application" 
              description="Android application" 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkContent
