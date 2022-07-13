import React, { useState } from "react";
import "../../Style/style.css";

const PopUp = (props:any) => {
  return (props.trigger) ?  (
    <div className="container-for-popUp">
      <h1 style={{ height: "180px" }}>Why?</h1>
      <div style={{ width: "80%" }}>
        <span style={{ fontSize: "25px" }}>Choose Features</span>
      </div>
      <div className="options">
        <input type="checkbox" />
        <label htmlFor="feature"> Background </label>
        <br />
        <input type="checkbox" />
        <label htmlFor="feature"> Eyes </label>
        <br />
        <input type="checkbox" />
        <label htmlFor="feature"> Nose </label>
        <br />
        <input type="checkbox" />
        <label htmlFor="feature"> Hair </label>
        <br />
        <input type="checkbox" />
        <label htmlFor="feature"> Ears </label>
        <br />
        <input type="checkbox" />
        <label htmlFor="feature"> Mouth </label>
        <br />
        <input type="checkbox" />
        <label htmlFor="feature"> Jewellery </label>
        <br />
      </div>
      <div className="other" style={{ color: "#ffa31a" }}>
        Other:
      </div>
      <input type="text" placeholder="  Enter your own feature" id="inputBox" />
      <br />
      <div className="buttons-container">
        <div className="btn" onClick={() => props.setTrigger(false)}>Cancel</div>
        <div className="btn" onClick={() => props.setTrigger(false)}>Ok</div>
          {props.children}
      </div>
    </div>
  ) : null;
};

export default PopUp;
