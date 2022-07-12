
import React, {useEffect, useState} from "react";
import "../../Style/style.css";
import {getImage, getReasons} from "../../API";
import PopUp from "../PopUp/PopUp";




const Main: React.FC = () => {
  const [image, setImage] = useState()
useEffect(() =>{
  getImage().then(item => setImage(item))
}, [])

const refresh = () => {
  getImage().then(item => setImage(item))
}




  return (
    <>
      <div className="container-for-main" style={{}}>
        <img src={image} className="random-image"/>
        <div className="button-container">
          <div className="btn" onClick={refresh}>
            <h3>Real</h3>
          </div>
          <div className="btn">
            <h3>Fake</h3>
          </div>
        </div>
      </div>
      <div className="list-images">
        <div className="generate-btn">
          <div className="gernerate-report-button">
            <h2>Generate report</h2>
          </div>
        </div>
        <div className="list-images-container"></div>
      </div>
    </>
  );
};

export default Main;
