import React from 'react'
import './WorkContent.css'
import WorkContentBox from './WorkContentBox'

function WorkContent( props ) {
  return (
    <>
      <div id="work-background">
        <div id="portfolio">
          <h1>Portfolio</h1>
          <div className="main-col">
            <WorkContentBox 
              imgUrl="/img/ncovtracker.png" 
              path="/covidtracker" 
              alt="ncovtracker.com" 
              description="Covid Tracker" 
            />
            <WorkContentBox 
              imgUrl="/img/sushikumalogo.png" 
              path="/touchfreemenu" 
              alt="sushikuma.net" 
              description="Touch-free restaurant menu" 
            />

            <WorkContentBox 
              imgUrl="/img/sushikumalogo.png" 
              path="/touchfreemenu" 
              alt="sushikuma.net" 
              description="Touch-free restaurant menu" 
            />
          </div>
          <p>More stuff coming soon...</p>
        </div>
      </div>
    </>
  )
}

export default WorkContent
