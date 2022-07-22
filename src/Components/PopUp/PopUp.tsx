import { useEffect, useState } from "react";
import {
  getReasons,
  postImages,
  postReason,
  postReport,
  putImage,
} from "../../API";
import { imageURL } from "../Main/Main";
import "../../Style/style.css";

let value: string;
let allCheckboxes: string[] = [];
let reasonsArray: string[] = [];

export const PopUp = (props: any) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    getReasons().then((item: any) =>
      item.map((object: any) => reasonsArray.push(object.reason))
    );
  }, []);

  const inputHandler = (e: any) => {
    setInputValue(e.target.value);
  };

  const checkboxValue = (e: any) => {
    value = e.target.nextSibling.textContent.toLowerCase();
    if (e.target.checked === true) {
      setIsChecked(e.target.checked);
      allCheckboxes.push(value);
    }
  };

  const fakeHandler = () => {
    if (inputValue !== "" || isChecked === true) {
      props.setTrigger(false);

      //add new from input
      if (inputValue !== "" && !reasonsArray.includes(inputValue)) {
        postReport({ src: imageURL });

        postReason({ reason: inputValue, srcs: [{ src: imageURL }]});

        postImages({
          reason: value,
          srcs: [{ src: imageURL }],
        });
      
      //add new from checkbox
      } else if (!reasonsArray.includes(value)) {
        
        postReport({ src: imageURL });
        postImages({
          reason: value,
          srcs: [{ src: imageURL }],
        });
      } else if (value) {
        postReport({ src: imageURL });
        putImage({ src: imageURL }, reasonsArray);
      } else if (inputValue !== "") {
        postReport({ src: imageURL });
        putImage({ src: imageURL }, reasonsArray);
      }
    }
    setInputValue("");
  };

  return props.trigger ? (
    <div className="container-for-popUp">
      <h1 style={{ height: "180px" }}>Why?</h1>
      <div style={{ width: "80%" }}>
        <span style={{ fontSize: "25px" }}>Choose Features</span>
      </div>
      <div className="options">
        {reasonsArray.map((item: any) => {
          return (
            <>
              <input type="checkbox" onClick={checkboxValue} />
              <label htmlFor="feature">{item}</label>
              <br />
            </>
          );
        })}
      </div>
      <div className="other" style={{ color: "#ffa31a" }}>
        Other:
      </div>
      <input
        type="text"
        placeholder="Enter your own feature"
        value={inputValue}
        onChange={inputHandler}
        id="inputBox"
      />
      <br />
      <div className="buttons-container">
        <div className="btn" onClick={() => props.setTrigger(false)}>
          Cancel
        </div>
        <div className="btn" onClick={fakeHandler}>
          Ok
        </div>
        {props.children}
      </div>
    </div>
  ) : null;
};
