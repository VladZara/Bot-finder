import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllReports } from "../../API";
import "../../Style/style.css";


export const ReportPage: React.FC = () => {
 const [reports, setReports] = useState([])

useEffect(() => {
    getAllReports()
    .then((item: any) => setReports(item))
}, [])

let navigate = useNavigate()

const sendToMainPage = () => {
    navigate("/")
}
return(
    <div className="container-for-report">
    <div className="report">Report</div>
        {reports.map((item: any) => {
            return (
                <div className="category-container">
                <h1>{item.reason}</h1>
                    <div className="images-container">
                        {item.srcs.map((image: any) => { 
                            return (
                                <img className="random-images" src={image.src} alt="fake-person"/>   
                                )
                            })
                        }
                    </div>
                
                </div>
            )
        })
        }
    <div className="footer">
        <div className="back-btn" onClick={sendToMainPage} style={{cursor: "pointer"}}>Go Back</div>
        <div className="adder-btn">Add more</div>
    </div>
</div>
)
}