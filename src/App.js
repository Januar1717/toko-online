import React from 'react'
import Login from './components/Login';
import Beranda from './components/Beranda';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Beranda /> */}
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/beranda' element={<Beranda />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;