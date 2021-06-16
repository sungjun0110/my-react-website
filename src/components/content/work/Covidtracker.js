import React, { useEffect } from 'react'
import Slider from './ImgSlider'
import './Workpage.css'
import photo1 from '../../../img/ncovtracker.png'
import photo2 from '../../../img/ncovtracker1.png'
import photo3 from '../../../img/ncovtracker2.png'


function Covidtracker() {
  const urls=[photo1, photo2, photo3]

  useEffect(() => {window.scrollTo(0,0)})

  return (
    <div className='site-description'>
      <Slider urls={urls} />
      <h1>Covid-19 Tracker</h1>
      <div className="paragraph">
        <p>
          I had collected Covid-19 confirmed cases since January 2020. After a month of gathering the data, I started thinking that I might warn people that the virus would be hazardous and extremely contagious. So, I decided to build a website. 
        </p>
        <p>
          On the main page, I put a map, a chart and a table to visually show the cases of Covid-19. The dots on the map have different colors so to represent how bad the pandemic is in specific locations. The chart can show the numbers of one country or compare several countries. The table has a search bar that can be used to find a specific country. When you click on a row in the table, it moves the map and changes the chart to show the data of a country that you click. On the left side of the main page, I put some videos like recent news about Covid-19 and how to wash your hands. 
        </p>
        <p>
          The website is not responsive because I did not know how to build a responsive web at the time. However, I used a plugin that creates a subdomain for a mobile website, and I built the mobile website separately for the mobile subdomain. 
        </p>
        <p>
          In the beginning, I manually updated the database because there were only few countries with confirmed cases. But the manual update was not efficient at all after the virus started spreading rapidly. So, I wrote python scripts to update the database automatically. This website is very first one that I built, so I learned a lot from building this. 
        </p>
        <p>Visit the website at ncovtracker.com</p>
        <p className="built-date">April 2020</p>
      </div>
    </div>
  )
}

export default Covidtracker
