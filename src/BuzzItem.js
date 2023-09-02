import React from "react";
import "./BuzzItem.css";

const BuzzData = [
  {
    id: 1,
    image: "https://assets-in.bmscdn.com/content-buzz/2023/08/jailer-ed.jpg",
    heading: "How Good Is Rajinikanth’s ‘Jailer’?",
  },
  {
    id: 2,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 3,
    image: "https://assets-in.bmscdn.com/content-buzz/2023/07/bro-ed.jpg",
    heading: "‘Should You Watch Pawan Kalyan’s ‘BRO’?",
  },
  {
    id: 4,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/07/rocky-aur-rani-kii-prem-kahaani-500x500-1.jpg",
    heading: "‘Should You Watch ‘Rocky Aur Rani Kii Prem Kahaani’ In Cinemas?",
  },
  {
    id: 5,
    image: "https://assets-in.bmscdn.com/content-buzz/2023/06/leo-ed.jpg",
    heading: "‘All The News You Need From The World Of South Indian Cinema",
  },
  {
    id: 6,
    image: "https://assets-in.bmscdn.com/content-buzz/2023/07/maaveeran-ed.jpg",
    heading: "‘Should You Watch Siva Karthikeyan’s ‘Maaveeran’?",
  },
  {
    id: 7,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/07/mission-impossible-7-500x500-1.jpg",
    heading:
      "‘5 Reasons To Watch Tom Cruise’s ‘Mission: Impossible – Dead Reckoning Part One’",
  },
  {
    id: 8,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/07/neeyat-500x500-1.jpg",
    heading: "‘Is Vidya Balan’s Whodunit ‘Neeyat’ Worth A Watch?",
  },
  {
    id: 9,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/06/past-lives-500x500-1.jpg",
    heading: "‘Will A24’s ‘Past Lives’ Tug At Your Heartstrings?",
  },
  {
    id: 10,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 11,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 12,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 13,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 14,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 15,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 16,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 17,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 18,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },

  {
    id: 19,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 20,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 21,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 22,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 23,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 24,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 25,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
  {
    id: 26,
    image:
      "https://assets-in.bmscdn.com/content-buzz/2023/08/guns-gulaabs-500x500-1.jpg",
    heading:
      "‘Made in Heaven’, ‘Guns & Gulaabs’ And Other Indian Original Series We’re Waiting For",
  },
];

const BuzzItem = () => {
  return (
    <div className="BuzzItem">
      {BuzzData.map((x) => {
        return (
          <div className="BuzzItem_box">
            <div className="image-bx">
              <img src={x.image} alt="" />
            </div>
            <div className="review_box">
              <h1>{x.heading}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BuzzItem;
