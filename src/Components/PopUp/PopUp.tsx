import React, { useEffect, useState } from "react";
import { getReasons, postReason, postReport } from "../../API";
import { imageURL } from "../Main/Main";
import "../../Style/style.css";


const PopUp = (props:any) => {
  
  const [inputValue, setInputValue] = useState("")
  const [reason, setReason] = useState<any>()


  useEffect(() => {
    getReasons()
    .then(item => setReason(item))
    console.log('imageURL :>> ', imageURL)
  }, [])

  const inputHandler = (e: any) => {
    setInputValue(e.target.value)
  }

  const saveReasons = () => { 
    if (inputValue !== "") {
      props.setTrigger(false)
      postReason({"reason": inputValue}) 
      postReport({"src": imageURL})
    }
  }



  return (props.trigger) ? (
    <div className="container-for-popUp">
      <h1 style={{ height: "180px" }}>Why?</h1>
      <div style={{ width: "80%" }}>
        <span style={{ fontSize: "25px" }}>Choose Features</span>
      </div> 
      <div className="options">
      {reason.map((item:any) => {
        return (
          <>
            <input type="checkbox"/>
            <label htmlFor="feature" > {item.reason}</label>
            <br />
          </>
        )
      })
      }
      </div>
      <div className="other" style={{ color: "#ffa31a" }}>
        Other: 
      </div>
      <input type="text" placeholder="  Enter your own feature"  value={inputValue} onChange={inputHandler} id="inputBox" />
      <br />
      <div className="buttons-container">
        <div className="btn" onClick={() => props.setTrigger(false)}>Cancel</div>
        <div className="btn" onClick={saveReasons} >Ok</div>
          {props.children}
      </div>
    </div>
  ) : null;
};

export default PopUp;
