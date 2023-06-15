import React from "react";
import './Link.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Link8 = () => {
  return (
    <div className="links">
        <Navbar />
    <div className="container">
    <div className="column">
    <p className="perfect" style={{marginTop : "170px"}}>Daily Bar Operations(IBC)</p>
    <br />
    </div>

    <div className="cardstart" style={{marginTop : "30px"}}>
     <div className="cardf">
      <div className="cardf-image-container">
        <img width="100%" height="100%" src="/link31a.webp" alt="pic" />
      </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 1</h2>
        <h5 className="cardf-description"> Adopt a First In First Out method when using your kegs. The kegs with an earlier date of manufacturing/date of expiry should be used first.</h5>
      </div>
    </div>

     
    <div className="carde" style={{ marginTop: "4%" }}>
  <div className="carde-content">
    <h2 className="carde-title">Step 2</h2>
    <h5 className="carde-description">Check the servicing card for your chillers to see if they have missed servicing or not.(IBC:15 days, DDS:3 months)</h5>
   
  </div>
  <div className="carde-body" style={{marginTop:"2%"}}>
      <div className="row2">
        <div className="carde-image-container">
          <img width={"100%"} height={"50%"} src="link33a.webp" alt="piccs" />
        </div>
        <div className="carde-image-container" style={{ marginLeft: "10%" }}>
        <img width={"100%"} height={"50%"} src="link33a.webp" alt="piccs" />
        </div>
      </div>
   </div>
</div>
 
<div className="carde" style={{ marginTop: "4%" }}>
  <div className="carde-content">
    <h2 className="carde-title">Step 3</h2>
      <h5 className="carde-description" >Check the gas cylinder meter to see if there is sufficient volume in the cylinder. The gas should not be in the red zone. Turn on the gas cylinder by turning anti-clockwise if you have yet to do so</h5>
  </div>
  <div className="carde-body" style={{marginTop:"2%"}}>
      <div className="row2">
        <div className="carde-image-container">
          <img width={"100%"} height={"50%"} src="link33a.webp" alt="piccs" />
        </div>
        <div className="carde-video-container" style={{ marginLeft: "10%" }}>
          <video width={"100%"} height={"100%"} controls poster="link35a.webp">
            <source src="link35a.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
</div>
    
    <div className="cardd-content" style={{marginTop:"4%"}} >
              <h2 className="cardff-title">Step 4 : Connect the beer keg</h2>
              
              <div className="cardff-substep">
                <div className="cardff-video">
                  <video width="100%" height="100%" controls poster="link35a.webp">
                    <source src="link35a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="cardff-substep-content" >
                  <h5 className="cardff-substep-title" >
                    Step 4.1: Connect the dispense head to the beer keg and turn it clockwise to lock it (You have to align the dispense COUPLER with the spearhead before being able to turn it to secure. Do not force the dispense coupler onto the spearhead as it can cause damage to either components)
                  </h5>
                </div>
              </div>
              <div className="cardff-substep">
                <div className="cardff-video" >
                  <video width="100%" height="100%" controls poster="link36a.webp">
                    <source src="link36a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="cardff-substep-content">
                  <h5 className="cardff-substep-title">
                    Step 4.2: Engage the dispenser by squeezing the lever and pushing down
                  </h5>
                </div>
              </div>
             
            </div>


    
          <div className="cardd-content" >
              <h2 className="cardff-title">Step 5 : Clean the beer tap</h2>
              <div className="cardff-substep">
                <div className="cardff-video" >
                  <video width="100%" height="100%" controls poster="link35a.webp">
                    <source src="link35a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="cardff-substep-content" style={{padding: "20px",flexBasis:"60%"}}>
                  <h5 className="cardff-substep-title" style={{marginTop:"0"}}>
                    Step 5.1: Prepare a brush and a pail of water. Soak the brush into the water
                  </h5>
                </div>
              </div>
              <div className="cardff-substep">
                <div className="cardff-video" style={{float:"left"}}>
                  <video width="100%" height="100%" controls poster="link36a.webp">
                    <source src="link36a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="cardff-substep-content">
                  <h5 className="cardff-substep-title">
                    Step 5.2: Scrub the tap thoroughly with the brush
                  </h5>
                </div>
              </div>
              <div className="cardff-substep">
                <div className="cardff-video" style={{float:"left"}}>
                  <video width="100%" height="100%" controls poster="link37a.webp">
                    <source src="link37a.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="cardff-substep-content">
                  <h5 className="cardff-substep-title">
                    Step 5.3: Turn on the tap to flush out any residue
                  </h5>
                </div>
              </div>
            </div>

   <div className="cardf" style={{flexDirection:"column",alignItems:"center",marginTop:"4%"}}>
  <div className="cardf-content" >
    <h2 className="cardf-title">Step 6</h2>
      <h5 className="cardf-description">Ensure clean glassware</h5>
  </div>
  <div className="cardf-image-container" style={{flexWrap:"wrap"}}>
    <div className="row1">
      <div className="column1">
        <img src="link32a.webp" alt="pics" />
      </div>
      <div className="column1">
        <img src="link32a.webp" alt="pics" />
      </div>
    </div>
    <div className="row1">
      <div className="column1">
        <img src="link32a.webp" alt="pics" />
      </div>
      <div className="column1">
        <img src="link32a.webp" alt="pics" />
      </div>
    </div>
  </div>
  <p>Examples of glasses that are not clean</p>
</div>         


  <div className="cardf">
      <div className="cardf-image-container">
        <img width="100%" height="100%" src="/link31a.webp" alt="pic" />
              </div>
      <div className="cardf-content">
        <h2 className="cardf-title">Step 7</h2>
      <h5 className="cardf-description">You should not continuously tap more than 3 * 30 litres kegs for a single chiller as this will cause the chiller to have insufficient time to chill the beer. If you have a secondary machine, alternate between the two machines for tapping</h5> 
      </div>
    </div>

    
      
    </div>
    </div>
    <Footer />
    </div>

    )
}

export default Link8;
