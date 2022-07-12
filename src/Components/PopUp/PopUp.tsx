import React, { useState } from "react";
import "../../Style/style.css";



const PopUp: React.FC = () =>{
    const [show, setShow] = useState(false)

    const showPopUp = () => {
        setShow(current => !current);
    }
    return(
    <div className="container-for-popUp" style={{visibility: show ? "hidden" : "visible"}}>
    <h1 style={{height: "180px"}}>Why?</h1>
<div style={{width: "80%"}}><span style={{fontSize: "25px"}}>Choose Features</span></div>
<div className="options">
    <input type="checkbox"/>
  <label htmlFor="feature"> Background </label><br/>
  <input type="checkbox"/>
  <label htmlFor="feature"> Eyes </label><br/>
  <input type="checkbox"/>
  <label htmlFor="feature"> Nose </label><br/>
  <input type="checkbox"/>
  <label htmlFor="feature"> Hair </label><br/>
  <input type="checkbox"/>
  <label htmlFor="feature"> Ears </label><br/>
  <input type="checkbox"/>
  <label htmlFor="feature"> Mouth </label><br/>
  <input type="checkbox"/>
  <label htmlFor="feature"> Jewellery </label><br/>
</div>
<div className="other">Other:</div>
    <input type="text" placeholder="  Enter your own feature" id="inputBox"/><br/>
    <div className="buttons-container">
        <div className="cancel-btn">Cancel</div>
        <div className="ok-btn">Ok</div>
    </div>
</div>
    )
}

export default PopUp;