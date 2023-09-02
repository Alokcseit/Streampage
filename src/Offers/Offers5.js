import React from "react";
import "./Offers.css";
function Offers5({ imgLink, para1, para2 }) {
  return (
    <div className="card">
      <img src={imgLink}></img>
      <p>{para1}</p>
      <p> Valid till{para2}</p>
    </div>
  );
}

export default Offers5;
