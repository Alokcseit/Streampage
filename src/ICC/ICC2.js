import React from "react";
// import Header from "./Header";

const matches = [
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-ahmedabad-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-bengaluru-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-chennai-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-delhi-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-dharamshala-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-guwahati-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-hyderabad-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-kolkata-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-lucknow-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-mumbai-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-pune-web-collection-202308221143.png",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:q-80/cwc-trivandrum-web-collection-202308221143.png",
  },
];

function ICC2() {
  return (
    <div>
      <div>
        <h3 className="heading2">Find Matches By Venue</h3>
      </div>

      <div className="mainimg-card">
        {matches.map((x) => {
          return (
            <div>
              <div className="imageCard">
                <img src={x.imageLink} />
              </div>
              <div></div>
            </div>
          );
        })}
      </div>

      <div className="ott-logo">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-240:q-80/cwc-partners-web-collection-202308240228.png" />
      </div>
      {/* <Header></Header> */}
    </div>
  );
}

export default ICC2;
