import React from "react";

import Offers1 from "./Offers1";
import Offers2 from "./Offers2";
import Offers3 from "./Offers3";
import Offers4 from "./Offers4";
import Offers5 from "./Offers5";
// offersList1===========================================
const OffersList1 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?21082023195825",
    para1: "SBI Signature/Elite credit card offer",
    para2: "31 mar 2026 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/kotak-bank-trevor-noah-off-the-record-tour-offer-ktktn0723.jpg?04082023115616",
    para1: "Kotak Bank Trevor Noah: Off The Record Tour Offer",
    para2: "1 oct 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rupay-sunburn-arena-credit-card-offer-rupaycc231.jpg?25082023171440",
    para1: "RuPay Sunburn Arena Credit Card Offer",
    para2: "1 oct 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rupay-sunburn-credit-card-offer-rupay231.jpg?17072023214523",
    para1: "RuPay Sunburn Credit Card Offer",
    para2: "1 oct 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/canara-bank-credit-card-offer-canara723.jpg?17072023135020",
    para1: "RuPay Sunburn Credit Card Offer",
    para2: "1 oct 2023 23:59",
  },
];
// offersList2===========================================
const OffersList2 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rblmon1216.jpg?17042023075428",
    para1:
      "RBL Bank Popcorn, Fun+,Movies & More and Blockbuster Card monthly offers",
    para2: "31 Oct 2024 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rblmon1216.jpg?17042023075428",
    para1:
      "RBL Bank Popcorn, Fun+,Movies & More and Blockbuster Card monthly offers",
    para2: "10 Oct 2024 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rbl-bank-younique-credit-card-offer-rblyouc520.jpg?17042023075501",
    para1: "RBL Bank YOUnique Credit Card Offer",
    para2: "20 oct 2024 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/yes-private-credit-card-offer-yespr0917.jpg?31072023132110",
    para1: "Yes Private Credit Card Offer",
    para2: "29 dec 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/aurum-credit-card-offer-sbispr0420.jpg?10072023171252",
    para1: "AURUM Credit Card Offer",
    para2: "30 mar 2026 10:52",
  },
];
// offersList3===========================================
const OffersList3 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/federal-bank-credit-card-offer-fedcc0722.jpg?28062023160008",
    para1: "Federal Bank Credit Card Offer",
    para2: "30 sep 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/idfc-first-bank-private-credit-card-offer-idfccc0921.jpg?25042023133424",
    para1: "IDFC First Bank Private Credit Card Offer",
    para2: "20 sep 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/dbs-bank-credit-card-offer-dbscc0623.jpg?14072023124123",
    para1: "DBS Bank Credit Card Offer",
    para2: "10 Aug 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/hdfc-bank-timescard-offer-htc0314.jpg?27072023091528",
    para1: "HDFC Bank Times Card Offer",
    para2: "29 sep 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/indusind-bank-nexxt,-iconia,-duo,-intermiles-credit-card-offer-indbogo.jpg?01062023101736",
    para1:
      "IndusInd Bank Credit Cards Buy 1 Get 1 free movie ticket offer (Legend, Nexxt, Duo, Signature, Iconia, Intermiles)",
    para2: "3 sep 2023 23:59",
  },
];
// offersList4===========================================
const OffersList4 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/inr-500-off-on-nature%60s-basket-sbi-card-elite-sbinb0422.jpg?23082023122348",
    para1: "Nature's Basket SBI Card ELITE",
    para2: "30 sep 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/play-credit-card---monthly-offer-rblplmn222.jpg?14072023165252",
    para1: "PLAY Credit Card - Monthly Offer",
    para2: "30 Jan 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/visa-infinite-program-vip0116.jpg?29082023105536",
    para1: "Visa Infinite Card Offer",
    para2: "30 Feb 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/yes-first-and-yes-premia-credit-card-25-off-yes0516.jpg?28072023183259",
    para1: "YES FIRST and YES Premia Credit Card 25% Off",
    para2: "30 Dec 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/hdfc-bank-diners-club-privilege-credit-card-offer-hdfcdz0623.jpg?24072023152813",
    para1: "HDFC Bank Diners Club Privilege Credit Card Offer",
    para2: "30 July 2023 23:59",
  },
];
// offersList5===========================================
const OffersList5 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/icici-bank-25percent-discount-offer-icicicc520.jpg?17042023080044",
    para1: "ICICI Bank Credit Card 25% Discount Offer",
    para2: "30 June 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/indusind-bank-super-premium-and-premium-credit-cards-offer-indspc0523.jpg?10052023124349",
    para1:
      "IndusInd Bank Super Premium &amp; Premium Credit Cards Offer (Indulge, Crest, Celesta, Heritage (Non-Metal) , Legacy, Vistara Explorer Co - Branded, Pinnacle)",
    para2: "30 Apr 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/play-credit-card---welcome-offer-rblplwl222.jpg?14072023165458",
    para1: "PLAY Credit Card – Welcome Offer",
    para2: "30 March 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/visa-blockbuster-weekends-offer-vsbogo1111.jpg?07082023182343",
    para1: "VISA Blockbuster Weekends Offer",
    para2: "30 Nov 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/hsbc-saturday-offer-hsbc0815.jpg?28062023160932",
    para1: "HSBC Credit Card Offer",
    para2: "30 Jan 2023 23:59",
  },
];
function Dta() {
  return (
    <div>
      {/*-------------------- Offers1---------- */}
      <div className="offers">
        {OffersList1.map((item) => {
          return (
            <Offers1
              imgLink={item.imgLink}
              para1={item.para1}
              para2={item.para2}
            ></Offers1>
          );
        })}
      </div>
      {/*-------------------Offers2--------*/}
      <div className="offers">
        {OffersList2.map((item) => {
          return (
            <Offers2
              imgLink={item.imgLink}
              para1={item.para1}
              para2={item.para2}
            ></Offers2>
          );
        })}
      </div>
      {/*-------------------Offers3--------*/}
      <div className="offers">
        {OffersList3.map((item) => {
          return (
            <Offers3
              imgLink={item.imgLink}
              para1={item.para1}
              para2={item.para2}
            ></Offers3>
          );
        })}
      </div>
      {/*-------------------Offers4--------*/}
      <div className="offers">
        {OffersList4.map((item) => {
          return (
            <Offers4
              imgLink={item.imgLink}
              para1={item.para1}
              para2={item.para2}
            ></Offers4>
          );
        })}
      </div>
      {/*-------------------Offers5--------*/}
      <div className="offers">
        {OffersList5.map((item) => {
          return (
            <Offers5
              imgLink={item.imgLink}
              para1={item.para1}
              para2={item.para2}
            ></Offers5>
          );
        })}
      </div>
    </div>
  );
}

export default Dta;
