import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Homepage from './components/content/Homepage'
import Covidtracker from './components/content/work/Covidtracker'
import Sushikuma from './components/content/work/Sushikuma'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/covidtracker" onClick={() => window.scrollTo(0,0)} component={Covidtracker} />
          <Route path="/touchfreemenu" component={Sushikuma} />
        </Switch>
      <Footer /> 
    </>
  );
}

export default App;
