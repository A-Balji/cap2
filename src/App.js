
import './App.css';
import Home from './Home.js'
import Menu from './Menu.js'
import About from'./About.js'
import Booking from'./Booking.js'

import { Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
    </Routes>
    </BrowserRouter></>
  );
}

export default App;