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

      <Link className="bar" to="/barprocesses">Bar Processes</Link>
      <div className="dropdown-menu">
       <div className="drop-items"> 
        <a href="/Link1">Changing a beer keg(ICB)</a>
        <a href="/Link2">Changing a CO2 cylinder(ICB)</a>
         <a href="/Link3">Changing a CO2 cylider(DDS)</a>
         <a href="/Link4">Bar Closing (IBC)</a>
         <a href="/Link5">Bar Closing(Super Cold)</a>
        <a href="/Link6">Heineken Perfect pour</a> 
        <a href="/Link8">Daily Bar Operations(IBC)</a>
        <a href="/Link07">Daily Bar Operations(IBC)</a>
        </div>
            </div>
            </div>
    </li>
    
  </ul>
  
   
  </div>
     

  );
}

export default Navbar;