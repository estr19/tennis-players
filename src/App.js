import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Novak from './Novak';
import Dylan from './Dylan';
import Niels from './Niels';
import Home from './Home';

function App() {
  const [displayNavbar, setDisplayNavbar] = useState("none");

  const hideNavbar = () => {
    setDisplayNavbar("none");
  };

  return (
    <div className='d-flex flex-column justify-content-center'>
      <Router>
        <nav className='top' style={{ display: displayNavbar }}>
          <Link to='/' className='link h-2 fw-bold' onClick={() => hideNavbar()} >Home</Link>
          <Link to='/novak' className='link h-2 fw-bold' >Novak</Link>
          <Link to='/dylan' className='link h-2 fw-bold' >Dylan</Link>
          <Link to='/niels' className='link h-2 fw-bold' >Niels</Link>  
        </nav>
        <Routes>
          <Route path='/' element={<Home setDisplayNavbar={setDisplayNavbar} />}></Route>
          <Route path='/novak' element={<Novak />}></Route>
          <Route path='/dylan' element={<Dylan />}></Route>
          <Route path='/niels' element={<Niels />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
