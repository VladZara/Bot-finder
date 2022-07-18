import { log } from "console";
import { useEffect, useState } from "react";
import { deleteReport, getReports } from "../../API";
import "../../Style/style.css";
import { imageFromReportsURL } from "./Main";

const AddImage = (props: any ) =>{
const [images, setImages] = useState()

    const deleteImageAction = () =>{
        getReports()
        .then(result => setImages(result.id))
        console.log(images);
        
      }
        

    return(
        <div className="imagesStyle">
            <img className="imageSize" src={`${props.image}`} alt="" />
            <div className="del-img-btn" onClick={deleteImageAction}>X</div>
        </div>
    )
}

export default AddImage

