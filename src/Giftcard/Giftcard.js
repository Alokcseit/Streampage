import React from "react";
import "./Giftcard.css";
import Giftcards from "./Giftcards";
import Giftcard2 from "./Giftcard2";
import Giftcard3 from "./Giftcard3";
import Giftcard4 from "./Giftcard4";
import Giftcard5 from "./Giftcard5";
import Giftcard6 from "./Giftcard6";
import Giftcard7 from "./Giftcard7";
import Giftcard8 from "./Giftcard8";
import Giftcard9 from "./Giftcard9";
// import Giftcard10 from "./Giftcard/Giftcard10";
import Giftcard10 from "./Giftcard10";
const card1 = [
  {
    gift1: "https://in.bmscdn.com/gv/gift_my_show_24102023031014_480x295.jpg",
  },
  {
    gift1: "https://in.bmscdn.com/gv/gift_my_show_24052023030554_480x295.jpg",
  },
  {
    gift1: "https://in.bmscdn.com/gv/gift_my_show_02402022094010_480x295.jpg",
  },
  {
    gift1: "https://in.bmscdn.com/gv/gift_my_show_02282022102856_480x295.jpg",
  },
];
const card2 = [
  {
    gift2: "https://in.bmscdn.com/gv/gift_my_show_02302022103011_480x295.jpg",
  },
  {
    gift2: "https://in.bmscdn.com/gv/gift_my_show_02302022123034_480x295.jpg",
  },
  {
    gift2: "https://in.bmscdn.com/gv/gift_my_show_02412022124146_480x295.jpg",
  },
  {
    gift2: "https://in.bmscdn.com/gv/gift_my_show_02432022124329_480x295.jpg",
  },
];
const card3 = [
  {
    gift3: "https://in.bmscdn.com/gv/gift_my_show_02442022124437_480x295.jpg",
  },
  {
    gift3: "https://in.bmscdn.com/gv/gift_my_show_02452022124540_480x295.jpg",
  },
  {
    gift3: "https://in.bmscdn.com/gv/gift_my_show_02122022101208_480x295.jpg",
  },
  {
    gift3: "https://in.bmscdn.com/gv/gift_my_show_25412019034153_480x295.jpg",
  },
];
const card4 = [
  {
    gift4: "https://in.bmscdn.com/gv/gift_my_show_27542019095448_480x295.jpg",
  },
  {
    gift4: "https://in.bmscdn.com/gv/gift_my_show_27572019095730_480x295.jpg",
  },
  {
    gift4: "https://in.bmscdn.com/gv/gift_my_show_18532019025324_480x295.jpg",
  },
  {
    gift4: "https://in.bmscdn.com/gv/gift_my_show_18552019025553_480x295.jpg",
  },
];
const card5 = [
  {
    gift5: "https://in.bmscdn.com/gv/gift_my_show_18082019040833_480x295.jpg",
  },
  {
    gift5: "https://in.bmscdn.com/gv/gift_my_show_18312019023126_480x295.jpg",
  },
  {
    gift5: "https://in.bmscdn.com/gv/gift_my_show_18432019024353_480x295.jpg",
  },
  {
    gift5: "https://in.bmscdn.com/gv/gift_my_show_18462019024648_480x295.jpg",
  },
];
const card6 = [
  {
    gift6: "https://in.bmscdn.com/gv/gift_my_show_18482019024856_480x295.jpg",
  },
  {
    gift6: "https://in.bmscdn.com/gv/gift_my_show_18512019025105_480x295.jpg",
  },
  {
    gift6: "https://in.bmscdn.com/gv/gift_my_show_18572019025701_480x295.jpg",
  },
  {
    gift6: "https://in.bmscdn.com/gv/gift_my_show_05542019115440_480x295.jpg",
  },
];
const card7 = [
  {
    gift7: "https://in.bmscdn.com/gv/gift_my_show_30332019123339_480x295.jpg",
  },
  {
    gift7: "https://in.bmscdn.com/gv/gift_my_show_30222019022237_480x295.jpg",
  },
  {
    gift7: "https://in.bmscdn.com/gv/gift_my_show_30192019031956_480x295.jpg",
  },
  {
    gift7: "https://in.bmscdn.com/gv/gift_my_show_30482019034817_480x295.jpg",
  },
];
const card8 = [
  {
    gift8: "https://in.bmscdn.com/gv/gift_my_show_05572019115712_480x295.jpg",
  },
  {
    gift8: "https://in.bmscdn.com/gv/gift_my_show_16092019040918_480x295.jpg",
  },
  {
    gift8: "https://in.bmscdn.com/gv/gift_my_show_06532019115311_480x295.jpg",
  },
  {
    gift8: "https://in.bmscdn.com/gv/gift_my_show_22202019042033_480x295.jpg",
  },
];
const card9 = [
  {
    gift9: "https://in.bmscdn.com/gv/gift_my_show_30162019031622_480x295.jpg",
  },
  {
    gift9: "https://in.bmscdn.com/gv/gift_my_show_06572019115735_480x295.jpg",
  },
  {
    gift9:
      "https://in-aps.bmscdn.com/gv/gift_my_show_04402020084029_480x295.jpg",
  },
  {
    gift9:
      "https://in.bmscdn.com/vouchagram/combo/bms_and_the_beer_cafe_combo_20302018053047.jpg",
  },
];
const card10 = [
  {
    gift10:
      "https://in.bmscdn.com/vouchagram/combo/bms_and_tgi_fridays_combo_20042018040430.jpg",
  },
  {
    gift10:
      "https://in.bmscdn.com/vouchagram/combo/bms_and_speciality_restaurants_combo_20342018043406.jpg",
  },
  {
    gift10:
      "https://in.bmscdn.com/vouchagram/combo/bms_and_vero_moda_combo_08352018123514.jpg",
  },
  {
    gift10:
      "https://in.bmscdn.com/vouchagram/combo/bms_and_levis_combo_07132022031353.jpg",
  },
];

function App() {
  return (
    <div className="GiftCards">
      <div className="f-picture">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692874595339_fdf.jpg"
          alt=""
          style={{ width: "95%", margin: "25px" }}
        />
        <p>Pick a card from one of our themes</p>
      </div>
      <div className="f-row">
        {card1.map((giftcd1) => {
          return <Giftcards gtcard={giftcd1.gift1}></Giftcards>;
        })}
      </div>
      <div className="s-row">
        {card2.map((giftcd2) => {
          return <Giftcard2 gtcard2={giftcd2.gift2}></Giftcard2>;
        })}
      </div>
      <div className="t-row">
        {card3.map((giftcd3) => {
          return <Giftcard3 gtcard3={giftcd3.gift3}></Giftcard3>;
        })}
      </div>
      <div className="fr-row">
        {card4.map((giftcd4) => {
          return <Giftcard4 gtcard4={giftcd4.gift4}></Giftcard4>;
        })}
      </div>
      <div className="ft-row">
        {card5.map((giftcd5) => {
          return <Giftcard5 gtcard5={giftcd5.gift5}></Giftcard5>;
        })}
      </div>
      <div className="si-row">
        {card6.map((giftcd6) => {
          return <Giftcard6 gtcard6={giftcd6.gift6}></Giftcard6>;
        })}
      </div>
      <div className="svn-row">
        {card7.map((giftcd7) => {
          return <Giftcard7 gtcard7={giftcd7.gift7}></Giftcard7>;
        })}
      </div>
      <div className="e-row">
        {card8.map((giftcd8) => {
          return <Giftcard8 gtcard8={giftcd8.gift8}></Giftcard8>;
        })}
      </div>
      <div className="n-row">
        {card9.map((giftcd9) => {
          return <Giftcard9 gtcard9={giftcd9.gift9}></Giftcard9>;
        })}
      </div>
      <div className="tn-row">
        {card10.map((giftcd10) => {
          return <Giftcard10 gtcard10={giftcd10.gift10}></Giftcard10>;
        })}
      </div>
    </div>
  );
}

export default App;
