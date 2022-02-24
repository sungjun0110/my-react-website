import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Homepage from '../HomePage/Homepage';
import Covidtracker from '../WorkPage/Covidtracker';
import Sushikuma from '../WorkPage/Sushikuma'
import Givetake from '../WorkPage/Givetake';
// import AndroidApp from './components/content/work/Sosapp'
// import TinderClone from './components/content/work/Tinderclone'
// import Journal from './components/content/work/Journal'
// import TodoList from './components/content/work/Todo'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const Navigate = useNavigate();
  return (
    <>
      <Header />
        <Routes>
          <Route path="/website/" element={<Homepage />} />
          <Route path="/website/covidtracker" element={<Covidtracker />} />
          <Route path="/website/sushikuma" element={<Sushikuma />} />
          <Route path="/website/givetake" element={<Givetake />} />
          {/* <Route path="/website/androidapp" component={AndroidApp} />
          <Route path="/website/tinderclone" component={TinderClone} />
          <Route path="/website/todolist" component={TodoList} />
          <Route path="/website/journal" component={Journal} /> */}
          <Route path="/*" element={<Navigate to="/website" />} />
        </Routes>
      <Footer /> 
    </>
  );
}

export default App;
