import React from 'react'
import Navbar from './Navbar';
import './Home.css';
 import Footer from './Footer';
 <style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@300;400;500;600;700&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>

const Home = () => {
  return (
    <div>
        <div className='home'>
      <Navbar />
      
      <div className='container' >
        <div className='row'>
      <div className="cards" style={{marginTop : "180px"}}>
  <div className="card-body">
    <h5 className="cards-title"><br></br>ABOUT ABPS BARTENDER GUIDE</h5>
    
    <h6 className="cards-text">Disclaimer: This guide is meant to be about the basic bar operations. 
    For more complex requests such as troubleshooting a faulty chiller, 
    do reach out to the respective Technical Officers for your outlet.</h6>
    
     <a href="/barprocesses" className="card-link">Click here to go to Barprocesses</a> 
  </div>
  <br></br>
</div>
<br></br>
<br></br>
   <div className='imagecontainer'>
    <img className='homeimg' src='/aboutimage.webp' alt='abtimg' />
    </div> 
    </div>  
    </div> 
    <Footer />
</div>
            
</div>
  )
}

export default Home;