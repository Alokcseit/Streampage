import React from "react";
import "./Prophome.css";
function Prophome({ img, heading, para1, para2, para3 }) {
  const arr = ["hyy", "sports"];
  return (
    <div className="parent">
      <div className="cards">
        <img src={img} style={{ borderRadius: "7px" }}></img>
        <h4>{heading}</h4>
        <p className="firstp">{para1}</p>
        <p>{para2}</p>
        <p>{para3}</p>
      </div>
    </div>
  );
}
export default Prophome;
