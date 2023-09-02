import { Link } from "react-router-dom";
import "./Events.css";

const array1 = [
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366777-axsacwyste-portrait.jpg",
    name: "Sunburn Arena Ft. Dimitri Vegas &Like Mike-Chennai",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365986-flzaeetwlm-portrait.jpg",
    name: "Barkha Ritu-Musical Celebration with the Maestro",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355125-jjrdfxrung-portrait.jpg",
    name: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348301-vhfvztjwde-portrait.jpg",
    name: "Ramkumar Paathi Annachi Meethi",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361122-uzsfngkhrc-portrait.jpg",
    name: "MARAKKUMA NENJAM AR Rahman Live Concert in Chennai",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00351918-wfyafagjfj-portrait.jpg",
    name: "Jagane Thandhiram - Tamil Standup Comedy",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365092-rnznqnzwpr-portrait.jpg",
    name: "MindFool India Tour - Vir Das",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358075-rzkwxkshvk-portrait.jpg",
    name: "Praveen Kumar - Family Man Return",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00329668-hxpuzsejvt-portrait.jpg",
    name: "AANSPLAINING by Karthik Kumar - TOUR 2023",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358308-hlaajcelxz-portrait.jpg",
    name: "Sunburn Goa 2023",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
];

function Events() {
  return (
    <div className="bigcontainer">
      {" "}
      {/* main container start */}
      <div className="div2nd">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1693217899163_jonitadesktop.jpg"
          alt=""
        />
      </div>
      <div className="div3rd">
        <h2> Events In Chennai </h2>
        <li type="none">
          <a href="#">Online Streaming Events</a>
        </li>
        <li type="none" style={{ marginLeft: "10px" }}>
          {" "}
          <a href="#">Workshop</a>
        </li>
        <li type="none" style={{ marginLeft: "10px" }}>
          <a href="#">Comedy Shows</a>
        </li>
        <li type="none" style={{ marginLeft: "10px" }}>
          <a href="#">Music Shows</a>
        </li>
        <li type="none" style={{ marginLeft: "10px" }}>
          <a href="#">Kids</a>
        </li>
        <li type="none" style={{ marginLeft: "10px" }}>
          <a href="#">Meetups</a>
        </li>
        <li type="none" style={{ marginLeft: "10px" }}>
          <a href="#">Spirituality</a>
        </li>
        <li type="none" style={{ marginLeft: "10px" }}>
          <a href="#">Exhibitions</a>
        </li>
      </div>
      <div className="div4th">
        {array1.map((index) => {
          return (
            <div>
              <img
                style={{ height: "300px", borderRadius: "10px" }}
                src={index.img}
                alt=""
              />
              <h3 style={{ width: "200px" }}>{index.name}</h3>
              {/* <h5>{index.catagory}</h5>
            <p>{index.location}</p> */}
            </div>
          );
        })}
      </div>
    </div>

    /* main container end */
  );
}
export default Events;
