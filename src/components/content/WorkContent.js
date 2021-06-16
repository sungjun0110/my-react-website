import React from 'react'
import './WorkContent.css'
import WorkContentBox from './WorkContentBox'
import ncovtracker from '../../img/ncovtracker.png'
import sushikuma from '../../img/sushikumalogo.png'
import sosimg from '../../img/sosimg.png'
import tinderClone from '../../img/tinderclonelogo.png'

function WorkContent( props ) {
  return (
    <>
      <div id="work-background">
        <div id="portfolio">
          <h1>Portfolio</h1>
          <div className="main-col">
            <WorkContentBox 
              imgUrl={sosimg}
              path="/androidapp" 
              alt="application" 
              description="Android application" 
            />
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
              imgUrl={sushikuma}
              path="/touchfreemenu" 
              alt="sushikuma.net" 
              description="Touch-free restaurant menu" 
            />
          </div>
        </div>

        <div id="experiments">
          <h1>Experiments</h1>
          <div className="main-col">
            <WorkContentBox
              imgUrl={tinderClone} 
              path="/tinderclone" 
              alt="tinderclone"
              description="Tinder Clone"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkContent
