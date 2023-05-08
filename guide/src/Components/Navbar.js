 import {  Link } from "react-router-dom";
import "./Navbar.css"

const Navbar =  () => {
  
  return (
    <div className="header">

    <label className="logo"> 
    <img className='image' src="/logoimage.webp" alt='logo' />

    </label> 

    <ul className="nav">
    <li>
    <Link to="/home">Home</Link>
           
    </li>
    
    <li>
    <div className="right-menu">

      <Link className="bar" to="/barprocesses">Barprocesses</Link>
      <div className="dropdown-menu">
       <div className="drop-items"> 
        <a href="/Link1">Change IBC keg</a>
        <a href="/Link2">Change IBC CO2</a>
         <a href="/Link3">Bar Closing(IBC)</a>
         <a href="/Link4">Bar Closing (Supercold)</a>
         <a href="/Link5">Change DDS CO2</a>
        <a href="/Link6">Heineken Perfect pour</a> 
        </div>
            </div>
            </div>
    </li>
    
  </ul>
  
   
  </div>
     

  );
}

export default Navbar;