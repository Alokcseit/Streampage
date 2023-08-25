import React, { useState, useEffect } from "react";
import "./Stream.css";
const picture = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/one-fine-morning-et00366591-1691584526.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-flash-et00047401-1689833276.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/drive-my-car-et00367165-1692183834.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/fast-x-et00122562-1687423131.jpg",
  "https://www.gamespot.com/a/uploads/scale_super/1561/15611758/3252639-transformers-age-of-extinction_95e719.jpg",
];
var n = picture.length;
function Stream() {
  const [firstcontainerimg, setimageindex] = useState(0);
  function change(event) {
    if (event.target.id === "btn2") {
      setimageindex((firstcontainerimg + 1) % n);
    }
    if (event.target.id === "btn1") {
      setimageindex((firstcontainerimg - 1 + n) % n);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setimageindex((firstcontainerimg + 1) % n);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [firstcontainerimg]);
  return (
    <div>
      {/* {picture.map((item) => (
        <img key={item} src={item} />
      ))} */}
      <div id="imagecontainer">
        <button id="btn1" onClick={change}>
          previous
        </button>
        <img id="imga" src={picture[firstcontainerimg]} alt="" />
        <button id="btn2" onClick={change}>
          next
        </button>
      </div>
      <h1>To be continued ........</h1>
    </div>
  );
}

export default Stream;
