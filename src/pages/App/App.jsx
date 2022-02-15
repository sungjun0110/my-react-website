import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Homepage from '../HomePage/Homepage';
// import Covidtracker from './components/content/work/Covidtracker'
// import Sushikuma from './components/content/work/Sushikuma'
// import AndroidApp from './components/content/work/Sosapp'
// import TinderClone from './components/content/work/Tinderclone'
// import Journal from './components/content/work/Journal'
// import TodoList from './components/content/work/Todo'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route path="/website/" exact component={Homepage} />
          {/* <Route path="/website/covidtracker" component={Covidtracker} />
          <Route path="/website/touchfreemenu" component={Sushikuma} />
          <Route path="/website/androidapp" component={AndroidApp} />
          <Route path="/website/tinderclone" component={TinderClone} />
          <Route path="/website/todolist" component={TodoList} />
          <Route path="/website/journal" component={Journal} /> */}
        </Switch>
      <Footer /> 
    </>
  );
}

export default App;
