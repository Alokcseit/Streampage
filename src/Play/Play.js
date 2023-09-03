import React from "react";
import { useState } from "react";
import "./Play.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";
const play = [
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364002-lpdlmystvh-portrait.jpg",
    category: "theatre",
    genres: "mythological",
    language: ["hindustani"],
    price: 599,
    name: "BARFF",
    theatre: "Kamani Auditorium:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343791-wtryagcjpr-portrait.jpg",
    category: "theatre",
    genres: "mythological",
    language: ["hindi", "english"],
    price: 499,
    name: "MEERA",
    theatre: "The trialogue studio:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367471-ggbxgzhwcx-portrait.jpg",
    category: "theatre",
    genres: "mythological",
    language: ["hindi", "urdu"],
    price: 200,
    name: "HAQEEM.COM",
    theatre: "The stain Auditorium:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357799-pvbrhswkkw-portrait.jpg",
    category: "theatre",
    genres: "mythological",
    language: ["hindi"],
    price: 600,
    name: "CHAKRAVYUH",
    theatre: "Kamani Auditorium:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365474-bvxmjsmcfa-portrait.jpg",
    category: "theatre",
    genres: "drama",
    language: ["english"],
    price: 500,
    name: "GAUHAR",
    theatre: "Kamani Auditorium:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360944-yrqvntdcpk-portrait.jpg",
    category: "theatre",
    genres: "mythological",
    language: ["hindi"],
    price: 200,
    name: "MAHABALI",
    theatre: "Shree Ram Center:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00330303-rmbkzmtcpr-portrait.jpg",
    category: "story telling",
    genres: "drama",
    language: ["hindi", "urdu"],
    price: 499,
    name: "GHALIB",
    theatre: "Vegas:Mumbai",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360874-awnyznkmru-portrait.jpg",
    category: "theatre",
    genres: "mythological",
    language: ["hindi"],
    price: 499,
    name: "RAM",
    theatre: "The Trilogue Studio:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367469-wgasxpbebd-portrait.jpg",
    category: "theatre",
    genres: "romantic",
    language: ["hindi"],
    price: 200,
    name: "Mr. Right",
    theatre: "The Stain Stadium:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367432-tcjgmlmyqu-portrait.jpg",
    category: "theatre",
    genres: "horror",
    language: ["hindi"],
    price: 100,
    name: "Mr. Right",
    theatre: "Akshara Theatre:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358435-psrtwzglga-portrait.jpg",
    category: "theatre",
    genres: "classic",
    language: ["hindi"],
    price: 200,
    name: "DAKU SULTAN",
    theatre: "Shree Ram Center:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364488-lzrmqxjztq-portrait.jpg",
    category: "theatre",
    genres: "suspense",
    language: ["hindi"],
    price: 300,
    name: "FOOLs",
    theatre: "Loka Kala Manch:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365156-suqgwdatrs-portrait.jpg",
    category: "theatre",
    genres: "thriller",
    language: ["English"],
    price: 250,
    name: "LIFE OF PI",
    theatre: "The Stein Auditorium :india",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366188-ygvtnyqmwr-portrait.jpg",
    category: "theatre",
    genres: "musical",
    language: ["hindi"],
    price: 200,
    name: "JE SUKH TE CHAHVE JIVAN ME VANDHU BANA KE RAHE",
    theatre: "Aliance Francaise :delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00368066-eqvlmvsdcy-portrait.jpg",
    category: "theatre",
    genres: "horror",
    language: ["english"],
    price: 200,
    name: "AFTER DARK",
    theatre: "The stein Auditorium:India",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00368007-ylarlmaurn-portrait.jpg",
    category: "theatre",
    genres: "romantic",
    language: ["hindi"],
    price: 200,
    name: "IIHAM",
    theatre: "Akshara theatre:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00115024-seklsezped-portrait.jpg",
    category: "theatre",
    genres: "romantic",
    language: ["hindi"],
    price: 200,
    name: "UMRAO JAAN",
    theatre: "Shree Ram Center:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00115024-seklsezped-portrait.jpg",
    category: "theatre",
    genres: "musiacl",
    language: ["hindi"],
    price: 499,
    name: "TANSEN",
    theatre: "The Trialogue Studio:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337162-lkrmgsxvpn-portrait.jpg",
    category: "theatre",
    genres: "DRAMA",
    language: ["hindi"],
    price: 399,
    name: "PATTE KHUL GAYE",
    theatre: "Kamani Auditorium:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00305723-yrtlhkltzd-portrait.jpg",
    category: "storytelling",
    genres: "DRAMA",
    language: ["hindi", "urdu"],
    price: 149,
    name: "POETRY STORY TELLING AND CHAI",
    theatre: "The Social House:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364415-wcemnhbnfb-portrait.jpg",
    category: "theatre",
    genres: "DRAMA",
    language: ["hindi"],
    price: 299,
    name: "CHIDIYA UDD",
    theatre: "Black Canvas:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338509-zwjvfpzdxj-portrait.jpg",
    category: "storytelling",
    genres: "DRAMA",
    language: ["hindi", "english", "urdu"],
    price: 49,
    name: "UNHEARED DAIRY",
    theatre: "Unmukt Studio:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366713-cllpsmhhem-portrait.jpg",
    category: "storytelling",
    genres: "drama",
    language: ["hindustani"],
    price: 100,
    name: "UNHEARED DAIRY",
    theatre: "Shree Ram Center:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361093-yzsgrbjtqh-portrait.jpg",
    category: "storytelling",
    genres: "comedy",
    language: ["hindustani"],
    price: 500,
    name: "TAJ MAHAL KA TENDER ",
    theatre: "M.S Bhartia Auditorium:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367657-zgpbnfftlk-portrait.jpg",
    category: "theatre",
    genres: "suspense",
    language: ["hindi"],
    price: 100,
    name: "THE MURDER MYSTRY ",
    theatre: "Shree Ram Center:Delhi",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365484-vptkgfnbtb-portrait.jpg",
    category: "theatre",
    genres: "horror",
    language: ["hindi"],
    price: 100,
    name: "DIAL M FOR MURDER ",
    theatre: "Shree Ram Center:Delhi",
  },
];

function Play() {
  const [contentofplay, setcontentofplay] = useState(play);
  const [activebtn, setactivebtn] = useState([false, false]);
  const [categoryactivebtn, setcategoryactivebtn] = useState([false, false]);

  //
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  //
  function changefiltercontent(event) {
    const res = categoryactivebtn.map((item, index) => {
      if (index === event) {
        return !item;
      } else {
        return item;
      }
    });
  }
  function changecontent(event) {
    const result = activebtn.map((item, index) => {
      if (index === event) {
        return !item;
      } else {
        return false;
      }
    });
    setactivebtn(result);
  }
  function filterFunction(x) {
    const xyz = play.filter((ele) => ele.category === x);
    setcontentofplay(xyz);
  }
  return (
    <>
      <br />
      <br />
      <div id="firstcontainer1111">
        <div id="subcontainerone">
          <div id="scontainerheading">
            <h2>Filters</h2>
          </div>
          <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
            <AccordionItem>
              <AccordionHeader targetId="1">Date </AccordionHeader>
              <AccordionBody accordionId="1">
                <button
                  style={{
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Today
                </button>
                <button
                  style={{
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Tomorrow
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  This Weekend
                </button>
              </AccordionBody>
            </AccordionItem>
            <br />
            <AccordionItem>
              <AccordionHeader targetId="2">language</AccordionHeader>
              <AccordionBody accordionId="2">
                <button
                  style={{
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Hindi
                </button>
                <button
                  style={{
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  English
                </button>
                <button
                  style={{
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Hindustani
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Urdu
                </button>
              </AccordionBody>
            </AccordionItem>
            <br />
            <AccordionItem>
              <AccordionHeader targetId="3">Categories</AccordionHeader>
              <AccordionBody accordionId="3">
                <div>
                  <button
                    // id={categoryactivebtn[0] ? "butttn" : "buttn2"}
                    id="category1"
                    style={{
                      marginTop: "15px",
                      marginRight: "20px",
                      color: "red",
                      border: "0.5px solid gray",
                      borderRadius: "3px",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      backgroundColor: "rgb(255, 255, 255)",
                    }}
                    onClick={() => {
                      changefiltercontent(0);
                      // filterFunction("theatre");
                    }}
                  >
                    Theatre
                  </button>
                  <button
                    style={{
                      marginTop: "15px",
                      marginRight: "20px",
                      color: "red",
                      border: "0.5px solid gray",
                      borderRadius: "3px",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      backgroundColor: "rgb(255, 255, 255)",
                    }}
                  >
                    Storytelling
                  </button>
                </div>
              </AccordionBody>
            </AccordionItem>
            <br />
            <AccordionItem>
              <AccordionHeader targetId="4">Genres</AccordionHeader>
              <AccordionBody accordionId="4">
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Drama
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Comedy
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Musical
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Adaptation
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Classic
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Thriller
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Biography
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Contemporary
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Fantasy
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Mythological
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Period
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Romantic
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Suspense
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Horror
                </button>
              </AccordionBody>
            </AccordionItem>
            <br />
            <AccordionItem>
              <AccordionHeader targetId="5">More filter</AccordionHeader>
              <AccordionBody accordionId="5">
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Outdoor Event
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Fast Filling
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Kids Allowed
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Must Attend
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Online Streaming
                </button>
              </AccordionBody>
            </AccordionItem>
            <br />
            <AccordionItem>
              <AccordionHeader targetId="6">Price </AccordionHeader>
              <AccordionBody accordionId="6">
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Free
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  0-500
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  501-2000
                </button>
                <button
                  style={{
                    marginTop: "15px",
                    marginRight: "20px",
                    color: "red",
                    border: "0.5px solid gray",
                    borderRadius: "3px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  Above 2000
                </button>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
          <button id="submbtn"> Browes by Venus</button>
        </div>
        <div id="scontainervalue">
          <div id="scontainerheading2">
            <h2>Plays in Delhi-NCR</h2>
          </div>
          <div id="scontainerbtn">
            <button
              id={activebtn[0] ? "buttt" : "butt2"}
              name="butt1"
              onClick={() => {
                changecontent(0);
                filterFunction("theatre");
              }}
            >
              Theatre
            </button>
            <button
              id={activebtn[1] ? "buttt" : "butt2"}
              name="butt2"
              onClick={() => {
                changecontent(1);
                filterFunction("storytelling");
              }}
            >
              Storytelling
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "17px",
            }}
            id="imagelastcontainer"
          >
            {contentofplay.map((item) => {
              return (
                <div id="itemvalue" style={{ height: "450px", width: "200px" }}>
                  <img
                    style={{ borderRadius: "5px" }}
                    src={item.imgurl}
                    alt="these are images"
                  ></img>
                  <h4>{item.name}</h4>
                  <div>{item.theatre}</div>
                  <div>{item.language.join("/")}</div>
                  <div>₹{item.price}onwords</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Play;
