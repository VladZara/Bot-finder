import React, {useEffect, useState} from "react";
import "../../Style/style.css";
import {getImage, getReasons, postReport} from "../../API";
import PopUp from "../PopUp/PopUp";
import { Link, useNavigate } from "react-router-dom";
import AddImage from "./AddImage";







const Main: React.FC = () => {
const [buttonPopup, setButtonPopup] = useState(false)
let navigate = useNavigate()
const [image, setImage] = useState()




  useEffect(() =>{
    getImage().then(item => setImage(item))
  }, [])

let generateImageUrl = () => {
  getImage().then(item => setImage(item))
    console.log(image)
}


const sendToReportPage = () => {
   navigate("/Report/Page")
}


  return (
    <>
      <div className="container-for-main" style={{}}>
        <img src={image} className="random-image"/>
        <div className="button-container">
          <div className="btn" onClick={generateImageUrl}>
            <h3>Real</h3>
          </div>
          <div className="btn"
               onClick={() => setButtonPopup(true)}
          >
            <h3>Fake</h3>
          </div>
        </div>
      </div>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}/>
      <div className="list-images">
        <div className="generate-btn">
          <div className="gernerate-report-button" onClick={sendToReportPage}>
            <h2>Generate report</h2>
          </div>
        </div>
        <div className="list-images-container"> 
<AddImage image={image}/>
        </div>
      </div>
    </>
  );
};

export default Main;