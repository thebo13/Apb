import React from 'react'
import './Barcontent.css'

const Barcontent = () => {
  return (
    <div style={{marginTop : "30px"}}>
        <h1>Bar Processes</h1>
        <h4 className='hed'>Click on the process that you require</h4>
        
<div className='cardm-container'>     
<div className="row row-cols-1 row-cols-md-3 g-6" style={{marginTop : "80px"}}>
  <div className="col">
    <div className="cardm">
      <div className="card-body">
      <a href="/link1" className="card-link"><h3>Changing a beer keg(Ice Bank Cooler)</h3></a>
      </div>
    </div>
  </div>


  <div className="col">
    <div className="cardm">
      <div className="card-body">
      <a href="/link2" className="card-link"><h3>Changing a CO<sub>2</sub>cylinder(Ice Bank Cooler)</h3></a>
      </div>
    </div>
  </div>


  <div className="col">
    <div className="cardm">
      <div classv="card-body">
      <a href="/link3" className="card-link"><h3>Changing a CO<sub>2</sub>cylinder(David Dispense System)</h3></a>
    </div>
    </div>
  </div>

  <div className="col">
    <div className="cardm">
      <div className="card-body">
      <a href="/link4" className="card-link"><h3>Bar Closing(Ice Bank Cooler)</h3></a>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="cardm">
      <div className="card-body">
      <a href="/link5" className="card-link"><h3>Bar Closing(Super Cold)</h3></a>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="cardm">
      <div className="card-body">
      <a href="/link6" className="card-link"><h3>Perfect Pour For Heineken</h3></a>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="cardm">
      <div className="card-body">
      <a href="/link07" className="card-link"><h3>Daily Bar Operations(DDS)</h3></a>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="cardm">
      <div className="card-body">
      <a href="/link8" className="card-link"><h3>Daily Bar Operations(IBC)</h3></a>
      </div>
    </div>
  </div>

</div>
</div>  
  </div>
    

  );
}

export default Barcontent;