import React, {useEffect, useState} from "react";
import "../../Style/style.css";
import {getImage, getReasons, postReport} from "../../API";
import PopUp from "../PopUp/PopUp";
import { Link, useNavigate } from "react-router-dom";
import AddImage from "./AddImage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchReal} from "../../redux/store/actionCreators/real";
import {useActions} from "../hooks/useActions";





const Main: React.FC = () => {
    const state: any = useTypedSelector(state => state.real)
    const [buttonPopup, setButtonPopup] = useState(false)

    let navigate = useNavigate()
    const { fetchReal } = useActions()
useEffect(() => {
    fetchReal()
}, [])

const generateImageUrl = () => {
    const img = fetchReal()
}

const sendToReportPage = () => {
   navigate("/Report/Page")
}

    return (
    <>
      <div className="container-for-main" style={{}}>
        <img src={state.real.slice(-1)} className="random-image"/>
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
            {state.real.map((item: any) => <AddImage image={item}/>)}
        </div>
      </div>
    </>
  );

};

export default Main;
