import React, { useState, useEffect } from "react";
import "./Stream.css";
const picture = [
  "https://palacenova.com.au/media/Festivals/French2023/ONEFINEMORNING_landscape_web.jpg",
  "https://images7.alphacoders.com/130/1302009.jpg",
  "https://wallpaperaccess.com/full/9140013.jpg",
  "https://wallpapercave.com/dwp1x/wp11971175.jpg",
  "https://www.screennearyou.com/wp-content/uploads/2023/08/Snoopy-Presents-One-of-a-Kind-Marcie-11.webp",
];
const picture2 = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/drive-my-car-et00367165-1692183834.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/one-fine-morning-et00366591-1691584526.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/somewhere-in-queens-et00366830-1691657748.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-silent-forest-et00366720-1691572411.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-silent-forest-et00366720-1691572411.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/pui-pui-molcar-s1-et00359297-1683786564.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/sun-moon-et00367166-1692601839.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-silent-forest-et00366720-1691572411.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-silent-forest-et00366720-1691572411.jpg",
];
let picture3 = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/benedetta-et00366374-1691308049.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-alleys-et00367930-1692864354.jpg",
];
let picture4 = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-spacewalker-et00313350-1686229287.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/tailgate-et00138770-1686560734.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/martyrs-lane-et00321514-1686558123.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/fear-of-rain-et00301465-1686561061.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-tunnel-et00303783-1686560003.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-girl-with-a-bracelet-et00300231-1688715562.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/hotel-coppelia-et00300014-1686558685.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-heist-of-the-century-et00300013-1688713013.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/through-the-glass-darkly-et00318493-1688712703.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/scumbag-et00138775-1688719662.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/unseen-skies-et00334823-1689942799.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/breaking-surface-et00303781-1688719852.jpg",
];
let picture5 = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/popular-family-movies-et00365543-1690458700.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/best-of-marathi-et00365178-1690205078.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/contemporary-classics-et00365179-1690205486.jpg",
];
let picture6 = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-exorcism-of-god-et00352516-1676363539.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/presumed-innocent-et00308725-25-03-2021-05-42-34.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/lost-and-found-et00363558-1688555421.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/game-of-power-et00329607-27-05-2022-06-49-46.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/mercator-trail-et00350778-1674573009.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-guilty-et00145631-30-01-2021-04-31-50.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/winnie-the-pooh-blood-and-honey-et00363608-1688458032.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/one-for-all-et00146001-1688975853.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/to-the-stars-et00304432-06-05-2021-11-28-10.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/heroic-losers-et00145979-1688975632.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-people-upstairs-et00301467-19-05-2022-05-14-00.jpg",
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
  picture.map((item) => {});
  return (
    <div>
      {/* {picture.map((item) => (
        <img key={item} src={item} />
      ))} */}
      <div id="imagecontainer">
        <button id="btn1" onClick={change}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <img id="imga" src={picture[firstcontainerimg]} alt="" />
        <button id="btn2" onClick={change}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div id="container2">
        <div id="imagecontainer2">
          <button
            onClick={() => {
              document.getElementById("imagevaluecontainer").scrollLeft -= 100;
            }}
            className="specialBtn prevBtn"
          >
            Prev
          </button>
          <h1>Premer of the week</h1>
          <div id="imagevaluecontainer">
            {picture2.map((item, index) => (
              <img id="imga2" key={index} src={item} alt="" />
            ))}
          </div>
          <button
            onClick={() => {
              document.getElementById("imagevaluecontainer").scrollLeft += 100;
            }}
            className="specialBtn nextBtn"
          >
            Next
          </button>
        </div>
      </div>
      <div id="container3">
        <div id="subcontainer3">
          <button
            onClick={() => {
              document.getElementById("imagevaluecontainer2").scrollLeft -= 100;
            }}
            className="btn previous"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <h2>Free Movies For You</h2>
          <div id="imagevaluecontainer2">
            {picture4.map((item, index) => (
              <img id="imga2" key={index} src={item} alt="" />
            ))}
          </div>
          <button
            onClick={() => {
              document.getElementById("imagevaluecontainer2").scrollLeft += 500;
            }}
            className="btn next"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div id="container4">
        <div id="subcontainer4">
          <img
            id="im"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/exclusives-banner-web-collection-202208191200.png"
            alt=""
          />
          <button
            className="btn2 prev"
            onClick={() => {
              document.getElementById("imagevaluecontainer3").scrollLeft -= 100;
            }}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <div id="imagevaluecontainer3">
            {picture6.map((item, index) => (
              <img id="imga2" key={index} src={item} alt="" />
            ))}
          </div>
          <button
            className="btn2 next2"
            onClick={() => {
              document.getElementById("imagevaluecontainer3").scrollLeft += 500;
            }}
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stream;
