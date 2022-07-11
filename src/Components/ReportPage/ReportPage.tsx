import "../../Style/style.css";

const ReportPage: React.FC = () =>{
return(
    <div className="container">
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
        <div className="back-btn">Go Back</div>
        <div className="adder-btn">Add more</div>
    </div>
</div>

)
}

export default ReportPage