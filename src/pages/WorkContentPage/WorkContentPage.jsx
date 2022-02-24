import './WorkContentPage.css'
import WorkContentBox from '../../components/WorkCententBox/WorkContentBox'
import ncovtracker from '../../img/ncovtracker.png'
import sushikuma from '../../img/sushikumalogo.png'
import sosimg from '../../img/sosimg.png'
import tinderClone from '../../img/tinderclonelogo.png'
import todoImg from '../../img/todo1.png'
import journalImg from '../../img/urjournal4.png'

function WorkContentPage( props ) {
  return (
    <>
      <div id="work-background">
        <div id="portfolio">
          <h1>Portfolio</h1>
          <h2>Web</h2>
          <div className="main-col">
          <WorkContentBox 
              image='https://camo.githubusercontent.com/d1459350931c8ae6b2f28526cd9fc1622b540f05b710d0daecf08d13d6aa741b/68747470733a2f2f692e696d6775722e636f6d2f68644476456e322e706e67' 
              path="/website/givetake" 
              alt="ncovtracker.com" 
              description="Give & Take" 
            />
            <WorkContentBox 
              image={ncovtracker} 
              path="/website/covidtracker" 
              alt="ncovtracker.com" 
              description="Covid Tracker" 
            />
            <WorkContentBox 
              image={sushikuma}
              path="/website/sushikuma" 
              alt="sushikuma.net" 
              description="Touch-free restaurant menu" 
            />
            <WorkContentBox
              image={tinderClone} 
              path="/website/tinderclone" 
              alt="tinderclone"
              description="Tinder Clone"
            />
            <WorkContentBox 
              image={todoImg}
              path="/website/todolist" 
              alt="to-do list" 
              description="To-do list web app" 
            />
          </div>

          <h2>App</h2>
          <div className="main-col">
            <WorkContentBox 
              image={sosimg}
              path="/website/androidapp" 
              alt="application" 
              description="Android application" 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkContentPage
