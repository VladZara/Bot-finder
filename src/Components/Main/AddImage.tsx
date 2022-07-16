import React from "react";
import { deleteReport } from "../../API";
import "../../Style/style.css";

const AddImage = (props: any ) =>{

    const deleteImage = (e: any) =>{
        const image = e.target.parentNode
        image.remove(image)
        deleteReport(props.id)
    }
 
    console.log(props.id);
    
    return(
        <div className="imagesStyle">
            <img className="imageSize" src={`${props.image}`} alt="" />
            <div className="del-img-btn" onClick={deleteImage}>X</div>
        </div>
    )
}

export default AddImage