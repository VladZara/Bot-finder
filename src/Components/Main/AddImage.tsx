import React from "react";
import "../../Style/style.css";

const AddImage = (props: any ) =>{
    return(
        <div className="imagesStyle"><img src={`${props.image}`} alt="" /></div>
    )
}

export default AddImage