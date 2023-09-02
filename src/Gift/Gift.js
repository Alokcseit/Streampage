import React, { useState } from "react";
import "./Gift.css";
const giftCards = [
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_24102023031014_480x295.jpg",
    category: "generic",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_24052023030554_480x295.jpg",
    category: "generic",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02402022094010_480x295.jpg",
    category: "generic",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02282022102856_480x295.jpg",
    category: "ocasion",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02302022103011_480x295.jpg",
    category: "ocasion",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02302022123034_480x295.jpg",
    category: "generic",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02412022124146_480x295.jpg",
    category: "ocasion",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02432022124329_480x295.jpg",
    category: "generic",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02442022124437_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02452022124540_480x295.jpg",
    category: "ocasion",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02122022101208_480x295.jpg",
    category: "generic",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_25412019034153_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_27542019095448_480x295.jpg",
    category: "ocasion",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_27572019095730_480x295.jpg",
    category: "generic",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18532019025324_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18552019025553_480x295.jpg",
    category: "ocasion",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18082019040833_480x295.jpg",
    category: "holiday",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18312019023126_480x295.jpg",
    category: "generic",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18432019024353_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18462019024648_480x295.jpg",
    category: "holiday",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18482019024856_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18512019025105_480x295.jpg",
    category: "holiday",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18572019025701_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_05542019115440_480x295.jpg",
    category: "generic",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30332019123339_480x295.jpg",
    category: "holiday",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30222019022237_480x295.jpg",
    category: "generic",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30192019031956_480x295.jpg",
    category: "generic",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30482019034817_480x295.jpg",
    category: "holiday",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_05572019115712_480x295.jpg",
    category: "generic",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_16092019040918_480x295.jpg",
    category: "ocasion",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_06532019115311_480x295.jpg",
    category: "ocasion",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_22202019042033_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30162019031622_480x295.jpg",
    category: "holiday",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_06572019115735_480x295.jpg",
    category: "generic",
  },

  {
    gift: "https://in-aps.bmscdn.com/gv/gift_my_show_04402020084029_480x295.jpg",
    category: "ocasion",
  },

  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_the_beer_cafe_combo_20302018053047.jpg",
    category: "combos",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_tgi_fridays_combo_20042018040430.jpg",
    category: "combos",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_speciality_restaurants_combo_20342018043406.jpg",
    category: "combos",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_vero_moda_combo_08352018123514.jpg",
    category: "combos",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_levis_combo_07132022031353.jpg",
    category: "combos",
  },
];
export default function Gift() {
  const [content, setContent] = useState(giftCards);
  const [activebtn, setactivebtn] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  // const [secondactivebtn, setsecondactivebtn] = useState(false);
  // const [thirdactivebtn, setthirdactivebtn] = useState(false);
  // const [fourthactivebtn, setfourthactivebtn] = useState(false);
  // const [fifthactivebtn, setfifthactivebtn] = useState(false);

  function changecontent(event) {
    // setactivebtn([false, false, false, false, false]);
    const xyz = activebtn.map((ele, i) => {
      if (i === event) {
        return !ele;
      } else {
        return false;
      }
    });

    setactivebtn(xyz);

    // if (event.target.name === "bt1") {
    //   setactivebtn(true);
    //   setContent(giftCards);
    //   setactivebtn(!activebtn);
    // }
    // if (event.target.name === "bt2") {
    //   setsecondactivebtn(true);
    //   setContent(giftCards.filter((item) => item.category === "generic"));
    //   setsecondactivebtn(!secondactivebtn);
    // }
    // if (event.target.name === "bt3") {
    //   setthirdactivebtn(true);
    //   setContent(giftCards.filter((item) => item.category === "ocasion"));
    //   setthirdactivebtn(!thirdactivebtn);
    // }
    // if (event.target.name === "bt4") {
    //   setfourthactivebtn(true);
    //   setContent(giftCards.filter((item) => item.category === "holidays"));
    //   setfourthactivebtn(!fourthactivebtn);
    // }
    // if (event.target.name === "bt5") {
    //   setfifthactivebtn(true);
    //   setContent(giftCards.filter((item) => item.category === "combos"));
    //   setfifthactivebtn(!fifthactivebtn);
    // }
  }
  return (
    <>
      <div id="firstcontainer">
        <div id="firstimage">
          <img
            id="imagevalue1"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692874595339_fdf.jpg"
            alt=""
          />
        </div>
      </div>
      <div id="secondcontainer">
        <button className="butonfirst">E-GIFT CARDS</button>
        <button className="butonsecond">PHYSICAL GIFT CARDS</button>
      </div>
      <div id="thirdcontainer">
        <div id="thirdsubcontainer">
          <div id="text">Pick a card from one of our themes</div>
          <div id="btttn">
            <button
              id={activebtn[0] ? "b_t" : "bt1"}
              name="bt1"
              onClick={() => changecontent(0)}
            >
              all
            </button>
            <button
              id={activebtn[1] ? "b_t" : "bt1"}
              name="bt2"
              onClick={() => changecontent(1)}
            >
              generic
            </button>
            <button
              id={activebtn[2] ? "b_t" : "bt1"}
              name="bt3"
              onClick={() => changecontent(2)}
            >
              ocasion
            </button>
            <button
              id={activebtn[3] ? "b_t" : "bt1"}
              name="bt4"
              onClick={() => changecontent(3)}
            >
              festival
            </button>
            <button
              id={activebtn[4] ? "b_t" : "bt1"}
              name="bt5"
              onClick={() => changecontent(4)}
            >
              combos
            </button>
          </div>
        </div>

        <div id="content">
          {content.map((item) => {
            return <img src={item.gift}></img>;
          })}
        </div>
      </div>
    </>
  );
}
