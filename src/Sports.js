import React from "react";
import Prophome from "./Prophome";

const card = [
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361456-qhflttmsal-portrait.jpg",
    title: "MotoGP Bharat 2023",
    para1: "Buddh International....",
    para2: "Moto GP",
    para3: " 800 onwards",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341771-jvkbnkwlyc-portrait.jpg",
    title: "Chatrapati Shivaji Maharaj Marathon",
    para1: "Bandra Fort Garden:..",
    para2: "Runningf",
    para3: "999 On wards",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IE5vdg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342539-ddvyhkxmkc-portrait.jpg",
    title: "Monsoon Mumbai Midnight Cycling",
    para1: "Meeting point, Mahalax.",
    para3: "Cycling",
    para2: "685 onwards",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00349868-abuwdfvqdb-portrait.jpg",
    title: " Aamchi Mumbai Half Marathon - 4th Edition",
    para1: "Bandra Fort Garden:...",
    para2: "5k",
    para3: "790 onwards",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347704-vfjbqvhxkp-portrait.jpg",
    title: "Freedom Virtual Run - Get Medal, Trophy by...",
    para1: "Your Place and Your Tim...",
    para2: "5k",
    para3: "379 onwards",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyOCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366947-zflfgsyuqr-portrait.jpg",
    title: "Dorangos Chess Night Dorangos Cafe: Bandra",
    para1: "Chess",
    para2: "199 onwards",
  },

  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366074-mhzugxzkkv-portrait.jpg",
    title: "Kharghar Half Marathon - Finisher",
    para1: "Central Park: Kharghar",
    para2: "5k",
    para3: "790 onwards",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyOCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-knbmavfwqf-portrait.jpg",

    title: "Online Game - Flight 9032 Murder Mystery",
    para1: "Online (Play From Home)",
    para2: "E Sports",
    para3: "199",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyOCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311494-mqkeaupfnf-portrait.jpg",
    title: "Monthly Sudoku Challenge by MALSAR",
    para1: "Watch on Zoom.",
    para2: "Online Games",
    para3: "79",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336076-xwpudtxkta-portrait.jpg",
    title: "21 Days Walking Challenge (New Year...",
    para1: "Watch on Zoom.",
    para2: "Online Sports",
    paar3: "399",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341740-zwfvzrgdrv-portrait.jpg",
    title: "Online Game - Lost Treasure of..",
    para1: "Online (Play From Home)",
    para2: "E Sports:",
    para3: "3 199",
  },

  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzIEZlYg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339877-aawrawcwqj-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348054-bmynwuvtuf-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354868-ksvdkytrrg-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337798-edvrsrujmu-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00367203-cgnnsaddje-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00367212-bkjgzmusrq-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00367218-axjfhqnnnw-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359941-fsbugkehec-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336144-ndwuxjrepc-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCA0IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359255-pmhwfpugtn-portrait.jpg",
    title: "",
    para: "",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA3IE5vdg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00367216-vudekrwgyd-portrait.jpg",
  },
];

function Sports() {
  const arr = ["Recommended Movies", "The Best Of Live Events"];
  return (
    <div
      style={{
        border: "2px solid green",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr ",
        gridRowGap: "50px",
      }}
    >
      {card.map((mov, i) => {
        return (
          <Prophome
            img={mov.img}
            heading={mov.title}
            para1={mov.para1}
            para2={mov.para2}
            para3={mov.para3}
          ></Prophome>
        );
      })}
    </div>
  );
}

export default Sports;
