import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Giftcard from "./Giftcard/Giftcard.js";
import Stream from "./Stream";
import Home from "./Home";
import Movies from "./Movies";
import Events from "./Events";
import Plays from "./Plays";
import Sports from "./Sports";
import Activities from "./Activities";
import Buzz from "./Buzz";
import Corporates from "./Corporate/Corporates";
import ICC from "./ICC/ICC";
import ListYourShow from "./ListYourShow/ListYourShow";
import Dta from "./Offers/Dta";
import Offers1 from "./Offers/Offers1";
import Offers2 from "./Offers/Offers2";
import Offers3 from "./Offers/Offers3";
import Offers4 from "./Offers/Offers4";
import Offers5 from "./Offers/Offers5";
import Gift from "./Gift/Gift";
import Play from "./Play/Play";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <br />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/stream" element={<Stream></Stream>}></Route>
          <Route path="/event" element={<Events></Events>}></Route>
          <Route path="/plays" element={<Play></Play>}></Route>
          <Route path="/sports" element={<Sports></Sports>}></Route>
          <Route path="/activities" element={<Activities></Activities>}></Route>
          <Route path="/buzz" element={<Buzz></Buzz>}></Route>
          <Route path="/icc" element={<ICC></ICC>}></Route>
          <Route path="/corporates" element={<Corporates></Corporates>}></Route>
          <Route
            path="/offers"
            element={
              <div>
                <Dta></Dta>
                <Offers1></Offers1>
                <Offers2></Offers2>
                <Offers3></Offers3>
                <Offers4 />
                <Offers5></Offers5>
              </div>
            }
          ></Route>

          <Route
            path="/listyourshow"
            element={<ListYourShow></ListYourShow>}
          ></Route>
          <Route path="/giftcard" element={<Gift></Gift>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
