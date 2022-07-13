import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/style.css";









const ReportPage: React.FC = () =>{
let navigate = useNavigate()

const sendToMainPage = () => {
    navigate("/")
}
return(
    <div className="container-for-report">
    <div className="report">Report</div>

    <div className="category-container">
        <div>Background</div>
        <div className="images-container">
        <div className="random-images"></div>
        <div className="random-images"></div>
        </div>
    </div>
    <div className="category-container">
        <div>Eyes</div>
        <div className="images-container">
        <div className="random-images"></div>
        <div className="random-images"></div>
        <div className="random-images"></div>
        </div>
    </div>
    <div className="category-container">
        <div>Hair</div>
        <div className="images-container">
        <div className="random-images"></div>
        <div className="random-images"></div>
        <div className="random-images"></div>
        </div>
    </div>
    <div className="category-container">
        <div>Nose</div>
        <div className="images-container">
            <div className="randomImage"></div>
            <div className="randomImage"></div>
        </div>
    </div>
    <div className="category-container">
        <div>Ears</div>
        <div className="images-container">
        <div className="random-images"></div>
        <div className="random-images"></div>
        <div className="random-images"></div>
        </div>
    </div>
    <div className="category-container">
        <div>Mouth</div>
        <div className="images-container">
        <div className="random-images"></div>
        <div className="random-images"></div>
        <div className="random-images"></div>
        <div className="random-images"></div>
        </div>
    </div>
    <div className="category-container">
        <div>Jewellery</div>
        <div className="images-container">
        <div className="random-images"></div>
        <div className="random-images"></div>
        </div>
    </div>
    <div className="footer">
        <div className="back-btn" onClick={sendToMainPage}>Go Back</div>
        <div className="adder-btn">Add more</div>
    </div>
</div>

)
}

export default ReportPage