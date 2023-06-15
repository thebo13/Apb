import React from "react";
import './Link.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Link2 = () => {
  return (
    <div className="links">
        <Navbar />
    <div className="container">
    <div className="column">
    <p className="perfect" style={{marginTop : "170px"}}>Changing a CO<sub>2</sub> cylinder (Ice Bank Cooler)</p>
    <br />
    </div>

    <div className="cardstart" style={{marginTop : "30px"}}>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link21.webp">
          <source src="link21.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 1</h2>
        <p className="cardf-description"><h3>Slow beer flow may indicate that the CO<sub>2</sub> cylinder is empty</h3>
           </p>
      </div>
    </div>

     
<div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link22.webp">
          <source src="link22.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 2</h2>
        <p className="cardf-description"><h3>Ensure that the pressure on the CO<sub>2</sub> meter indicates zero</h3></p>
      </div>
    </div>
 
    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link23.webp">
          <source src="link23.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 3</h2>
        <p className="cardf-description"><h3>Turn off the CO<sub>2</sub> flow by turning the knob on the cylinder clockwise</h3>
           </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link24.webp">
          <source src="link24.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 4</h2>
        <p className="cardf-description"><h3>Release the residue pressure by pulling on the release key repeatedly before unscrewing the nut with a spanner</h3>
       </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link25.webp">
          <source src="link25.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 5</h2>
        <p className="cardf-description"><h3>Ensure that there is a washer on the regulator before connecting it to the new CO<sub>2</sub> cylinder</h3>
          <h6>(IMPORTANT) The washer prevents any potential CO2 leaks </h6> </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link26.webp">
          <source src="link26.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 6</h2>
        <p className="cardf-description"><h3>After connecting the regulator to a new cylinder, tighten the nut with a spanner</h3>
          <h6>(IMPORTANT) Double check that the nut is properly tightened</h6> </p>
      </div>
    </div>

    <div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link27.webp">
          <source src="link27.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 7</h2>
        <p className="cardf-description"><h3>Turn on the CO<sub>2</sub> flow by turning the cylinder knob anti-clockwise</h3>
          </p>
      </div>
    </div>
</div>

<div className="cardf">
      <div className="cardf-image-container">
      <video width="100%" height="100%" controls poster="link28.webp">
          <source src="link28.mp4" type="video/mp4" />
        </video>
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 8</h2>
        <p className="cardf-description"><h3>Start dispensing the beer and stop when there is clear beer flow</h3></p>
      </div>
    </div>
</div>
    
    <Footer />
    </div>

    )
}

export default Link2;
