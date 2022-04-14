import './WorkContentPage.css'
import WorkContentBox from '../../components/WorkCententBox/WorkContentBox'
import ncovtracker from '../../img/ncovtracker.png'
import sushikuma from '../../img/sushikumalogo.png'
import sosimg from '../../img/sosimg.png'

function WorkContentPage() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <h2>Web Development</h2>
      <div className="main-col">
        <WorkContentBox
          image='https://i.imgur.com/E1b4fD0.png'
          path="/website/ui"
          alt="ui patterns" 
          description="UI Components"
        />
        <WorkContentBox 
          image='https://camo.githubusercontent.com/d1459350931c8ae6b2f28526cd9fc1622b540f05b710d0daecf08d13d6aa741b/68747470733a2f2f692e696d6775722e636f6d2f68644476456e322e706e67' 
          path="/website/givetake" 
          alt="ncovtracker.com" 
          description="API & UI Development" 
        />
        <WorkContentBox 
          image='https://camo.githubusercontent.com/425d960e5e081b35841fe69f771b807ed024084ca256570004299434f007c377/68747470733a2f2f692e696d6775722e636f6d2f6b67616c55504b2e706e67' 
          path="/website/photopin" 
          alt="ncovtracker.com" 
          description="API & UI Development" 
        />
        <WorkContentBox 
          image='https://camo.githubusercontent.com/7b49f44b3c1770e78b0cc220ba87e85c77e8ee9e5bf5a0d3190d1033c18c551d/68747470733a2f2f692e696d6775722e636f6d2f6a54464b44626f2e706e67' 
          path="/website/minesweeper" 
          alt="ncovtracker.com" 
          description="Minesweeper" 
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
      </div>

      <h2>App Development</h2>
      <div className="main-col">
        <WorkContentBox 
          image={sosimg}
          path="/website/androidapp" 
          alt="application"
          description="Android application" 
        />
      </div>
    </div>
  )
}

export default WorkContentPage
