import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Homepage from './components/content/Homepage'
import Covidtracker from './components/content/work/Covidtracker'
import Sushikuma from './components/content/work/Sushikuma'
import AndroidApp from './components/content/work/Sosapp'
import TinderClone from './components/content/work/Tinderclone'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/covidtracker" component={Covidtracker} />
          <Route path="/touchfreemenu" component={Sushikuma} />
          <Route path="/androidapp" component={AndroidApp} />
          <Route path="/tinderclone" component={TinderClone} />
        </Switch>
      <Footer /> 
    </>
  );
}

export default App;
