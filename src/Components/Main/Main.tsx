import React, {useEffect, useState} from "react";
import "../../Style/style.css";
import { getImage, getReasons, postReason, getReports, postReport } from "../../API";
import PopUp from "../PopUp/PopUp";
import { useNavigate } from "react-router-dom";
import AddImage from "./AddImage"


export let imageURL:any
export let imageFromReportsURL: any

const Main: React.FC = (props: any) => {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [image, setImage] = useState<any>()
  const [imageFromReports, setImageFromReports] = useState([])


  
   
  imageURL = image
  let navigate = useNavigate()

  imageFromReportsURL = imageFromReports
  

  const sendToReportPage = () => {
    navigate("/Report/Page")
 }


  const generateImageURL = () => {
    getImage().then(item => setImage(item))
    setButtonPopup(true)
  }
  
  

useEffect(() => {
  getImage().then(item => setImage(item))
  // getReports()
  //   .then(report => setImageFromReports(report))
  }, [])

  useEffect(() => {
    getReports()
    .then(report => setImageFromReports(report))
  }, [buttonPopup])

    return (
    <>
      <div className="container-for-main">
        <img src={image} className="random-image" alt={""}/>
        <div className="button-container">
          <div className="btn" >
            <h3>Real</h3>
          </div>
          <div className="btn"
               onClick={generateImageURL}
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
          {imageFromReports.map((report: any, index: number) => {
            return (<AddImage image={report.src} id={report.id} />)
          })}

        </div>
      </div>
    </>
  );

};

export default Main;
