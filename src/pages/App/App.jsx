import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Homepage from '../HomePage/Homepage';
import Covidtracker from '../WorkPage/Covidtracker';
import Sushikuma from '../WorkPage/Sushikuma'
import Givetake from '../WorkPage/Givetake';
import PhotoPin from '../WorkPage/PhotoPin';
import Minesweeper from '../WorkPage/Minesweeper';
import AndroidApp from '../WorkPage/Sosapp';
import UI from '../WorkPage/UI';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/website" element={<Homepage />} />
          <Route path="/website/covidtracker" element={<Covidtracker />} />
          <Route path="/website/sushikuma" element={<Sushikuma />} />
          <Route path="/website/givetake" element={<Givetake />} />
          <Route path="/website/photopin" element={<PhotoPin />} />
          <Route path="/website/minesweeper" element={<Minesweeper />} />
          <Route path="/website/androidapp" element={<AndroidApp />} />
          <Route path="/website/ui" element={<UI />} />
          <Route path="/*" element={<Navigate replace to='/website' />} />
        </Routes>
      <Footer /> 
    </>
  );
}

export default App;
