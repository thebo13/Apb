import './App.css';
import React from 'react';
 import Home from './Components/Home';
 import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 import Barprocesses from './Components/Barprocesses';
import Details from './Components/Details';
import Link1 from './Components/Linkpages/Link1';
import Link2 from './Components/Linkpages/Link2';
import Link3 from './Components/Linkpages/Link3';
import Link5 from './Components/Linkpages/Link5';
import Link6 from './Components/Linkpages/Link6';
import Link4 from './Components/Linkpages/Link4';

const App = () => {
  return (
  
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Details />} />
            <Route path="/home" element={<Home />} />
            <Route path="/barprocesses" element={<Barprocesses />} />
            <Route path="/link1" element={<Link1 />} />
            <Route path="/link2" element={<Link2 />} />
            <Route path="/link3" element={<Link3 />} />
            <Route path="/link4" element={<Link4 />} />
            <Route path="/link5" element={<Link5 />} />
            <Route path="/link6" element={<Link6 />} />


          </Routes>
        </Router>

  
      </div>
    

  );
}

export default App;
