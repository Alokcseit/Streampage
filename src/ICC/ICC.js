import React from "react";
import "./ICC.css";
import ICC2 from "./ICC2";
//import Logo from "./Header";

const worldCup = [
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-india-collection-202308190105.png",
    title: "INDIA",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-afganistan-collection-202308190105.png",
    title: "AFGANISTAN",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-australia-collection-202308190105.png",
    title: "AUSRALIA",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-bangladesh-collection-202308190105.png",
    title: "BANGLADESH",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-england-collection-202308190105.png",
    title: "ENGLAND",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-netherlands-collection-202308190105.png",
    title: "NEITHERLANDS",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-new-zealand-collection-202308190105.png",
    title: "NEW ZEALAND",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-pakistan-collection-202308190105.png",
    title: "PAKISTAN",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-south-africa-collection-202308190105.png",
    title: "SOUTH AFRICA",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-sri-lanka-collection-202308190105.png",
    title: "SRI LANKA",
  },
];

function ICC() {
  return (
    <div>
      <div>
        <div className="main-poster">
          <div className="poster1">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/cwc-icc-logo-web-collection-202308190313.png" />
          </div>

          <div className="poster2">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-240:q-80/cwc-view-all-matches-web-collection-202308190127.png" />
          </div>

          <div className="heading">
            <h3>Find Matches By Teams</h3>
          </div>
        </div>
      </div>

      <div className="mainimg-card">
        {worldCup.map((item) => {
          return (
            <div>
              <div className="imageCard">
                <img src={item.imageLink} />
              </div>
            </div>
          );
        })}
      </div>
      <ICC2></ICC2>
    </div>
  );
}

export default ICC;
