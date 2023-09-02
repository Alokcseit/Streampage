// import { Accordion } from "@mui/material";
import "./Activities.css";
// import Accordions from "./Accordions";

const activities = [
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365216-wcubsskybw-portrait.jpg",
    title: "Indian Tea Festiwal at Jio World Drive",
    discripition: "south sky, Jio World drive..",
    category: "Food Festival",
    price: "₹ 249 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00318079-puqwfzndpp-portrait.jpg",
    title: "BEST-Operation of Heritage Tour",
    discripition: "Dr. S.P.M. Chowk",
    category: "Antiques, Heritage, Museums",
    price: "₹ 95 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00310275-nrwpwjdwsz-portrait.jpg",
    title: "imagica Water Park",
    discripition: "imagica Water",
    category: "Theme park",
    price: "₹ 565 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00022344-vcazsxezuu-portrait.jpg",
    title: "Mumbai Filmcity Tour",
    discripition: "Bollywood Park",
    category: "Theme park",
    price: "₹ 999 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00127447-zlwbjfsxmt-portrait.jpg",
    title: "BOUNCE Inc Mumbai",
    discripition: "bounce Inc mumbai",
    category: "Theme park",
    price: "₹ 826 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00305112-vbwfylrahm-portrait.jpg",
    title: "UribsPrima-Inside the BMc Headquarters",
    discripition: "Muncipal Corporation",
    category: "Antiques, Heritage, Museums",
    price: "₹ 350 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325467-ffxzjzwpce-portrait.jpg",
    title: "Water Kingdom",
    discripition: "Warer Kingdom:mumbai",
    category: "Theme park",
    price: "₹ 757 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00315217-lqeqtkvpkq-portrait.jpg",
    title: "Hamleys Play Mumbai",
    discripition: "hamleys play :jio world",
    category: "Theme park",
    price: "₹ 500 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367126-yymqmkdqqd-portrait.jpg",
    title: "Oktoberfest at Jio World Drive",
    discripition: "South sky jio world drive",
    category: "Food Festival",
    price: "₹ 499 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361621-ajsccwtyxg-portrait.jpg",
    title: "The Crown Jewel of Mumbai" - "Inside CSMT",
    discripition: "McDonalds opp CSMT..",
    category: "Antiques, Heritage, Museums",
    price: "₹ 100 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00121822-jeglhkwzeb-portrait.jpg",
    title: "Mumbai Midnight Cycling- Treks & Trails",
    discripition: "Meeting Points",
    category: "Cycling tour",
    price: "₹ 299 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348440-zxnhhlutdn-portrait.jpg",
    title: "No Escape Room(pali Hill Bandra)",
    discripition: "Dorangos Hall 1: Bandra",
    category: "Escape games",
    price: "₹ 499 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00076445-azbcpvphgh-portrait.jpg",
    title: "Snow kingDom Mumbai",
    discripition: "Snow kingdom mumbai",
    category: "Snow park",
    price: "₹ 650 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364985-xcqddsebtg-portrait.jpg",
    title: "Rass Rang Thane",
    discripition: "Modella Mill Compound",
    category: "Navrathri",
    price: "₹ 300 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359244-wssrzqqgpk-portrait.jpg",
    title: "Mumbai Darshan By Bus",
    discripition: "Meeting point gateway of mumbai",
    category: "Tour",
    price: "₹ 350 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00074418-elyskxdtdv-portrait.jpg",
    title: "Pawna lake Camping",
    discripition: "Pawna lake camping",
    category: "Camping",
    price: "₹ 600 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366710-xxurfqlbjm-portrait.jpg",
    title: "Con Biro 2023 - Competition",
    discripition: "Litile Theatre: NCPA",
    category: "Music compitions",
    price: "₹ 200 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357553-khajknymzd-portrait.jpg",
    title: "EsselWorld Bird Park",
    discripition: "Birds Park",
    category: "Theme park",
    price: "₹ 518 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00302244-qeqgfaqbmg-portrait.jpg",
    title: "Dine in Blu",
    discripition: "Radisson blu mumbai",
    category: "Fine Dining",
    price: "₹ 1200 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367629-sbqcfqccnm-portrait.jpg",
    title: "Rasslella Navrathri 2023",
    discripition: "The Bombay Presidency",
    category: "Navrathri",
    price: "₹ 499 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356262-qcltaflaee-portrait.jpg",
    title: "Phoniex Entertainment Packages",
    discripition: "Phoniex maretCity:mumbai",
    category: "Bowling",
    price: "₹ 301 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00019735-mfsfkwwlgs-portrait.jpg",
    title: "KidZaina Mumbai",
    discripition: "Kidzaina Mumbai",
    category: "Adventure park",
    price: "₹ 413 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359157-aqhpclpxlm-portrait.jpg",
    title: "Mumbai Heritage walk",
    discripition: "meeting point",
    category: "Antiques,Heritage,Museums",
    price: "₹ 1000 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365386-axquyajqdb-portrait.jpg",
    title: "Kolad Rever Rafting",
    discripition: "IDFC first bank: Chembur",
    category: "rafting",
    price: "₹ 2950 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00331521-pnvdjrqzlv-portrait.jpg",
    title: "Sondai Fort trek ",
    discripition: "Meeting Point",
    category: "Trekking",
    price: "₹ 599 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxOSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367608-lkkraeffcx-portrait.jpg",
    title: "Mumbai Ganesh Pandal Hopping Tour",
    discripition: "Genral post office:Fort",
    category: "Festivals",
    price: "₹ 1000 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359153-xvvpdaufwf-portrait.jpg",
    title: "Mumbai Dharvi Slum Walk",
    discripition: "Third Wave Coffie:Mahim",
    category: "Unique Tours",
    price: "₹ 800 onwards",
  },
];

export default function Activities() {
  return (
    <>
      <div className="singaldiv">
        <img
          className="singalImg"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692181564275_flyzonegandipettrampolinejumpdesktop.jpg"
          alt=""
        />
      </div>
      <div className="maindivs">
        <div className="filtersDiv">
          <h2 className="filter">Filters</h2>
          <div>{/* <Accordions /> */}</div>
        </div>
        <div className="Activitiesdiv">
          <h2 className="activities">Activities In Mumbai</h2>
          <div className="allbtns">
            <button className="buttonShort" type="button">
              Adventure
            </button>
            <button className="buttonShort" type="button">
              Unique Tour
            </button>
            <button className="buttonShort" type="button">
              Food and Drinks
            </button>
            <button className="buttonShort" type="button">
              Gaming
            </button>
            <button className="buttonShort" type="button">
              Amusement Park
            </button>
            <button className="buttonShort" type="button">
              Antiques,Heritage,Museums
            </button>
            <button className="buttonShort" type="button">
              Tourist Attractions
            </button>
            <button className="buttonShort" type="button">
              Monuments
            </button>
            <button className="buttonShort" type="button">
              Navratri
            </button>
            <button className="buttonShort" type="button">
              Festivals
            </button>
            <button className="buttonShort" type="button">
              Parties
            </button>
            <button className="buttonShort" type="button">
              Quizzes and Competitions
            </button>
            <button className="buttonShort" type="button">
              Durga Puja Festival
            </button>
          </div>
          <div className="allImages">
            {activities.map((x) => {
              return (
                <div>
                  <img className="Activitiesimages" src={x.imageLink} alt="" />
                  <h2 className="ActivitesPara">{x.title}</h2>
                  <p className="ActivitesPara">{x.discripition}</p>
                  <p className="ActivitesPara">{x.category}</p>
                  <p className="ActivitesPara">{x.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
