import React from "react";
import "./Navbar.css";
// import Movies from "./Movies";
// import Eventslider from "./Eventslider";
// import Premiere from "./Premiere";
import { Link, to } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="right">
          <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />

          <input
            type="text"
            name=""
            id=""
            placeholder="Search for movies here"
          />
        </div>
        <div className="left">
          <select name="" id="">
            <option value="Kochi">Kochi</option>
          </select>
          <button>Sign in</button>
        </div>
      </nav>

      <div className="menu">
        <div className="rightmenu">
          <Link to="/movies">movies</Link>
          <Link to="/stream">Stream</Link>
          <Link to="/event">Events</Link>
          <Link to="/plays">Plays</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/buzz">Buzz</Link>
          <a href="">
            <Link to="/icc">
              <img
                src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png"
                alt=""
                width={"250px"}
              />
            </Link>
          </a>
        </div>

        <div className="menuleft">
          <Link to="/listyourshow">ListYourShow</Link>
          <Link to="/corporates">Corporates</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/giftcard">Gift Cards</Link>
        </div>
      </div>

      {/* <div className="slide">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691130965445_wwesuperstardesktop.jpg"
          alt=""
        />
      </div>

      <div className="icc">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png"
          alt=""
        />
      </div>

      <div className="seeall">
        <h1 className="heading">Recommended Movies</h1>
        <a href="">See All</a>
      </div>
      <div className="shows"> */}
      {/* <Movies
          img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE2LjVLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-qfgbsaxudm-portrait.jpg"
          name="King Of Kotha"
          para="Action/Drama/Crime"
        ></Movies>
        <Movies
          img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OS42SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367150-xaabdbsawm-portrait.jpg"
          name="Ramachandra Boss and Co"
          para="Action/Comedy/Thriller"
        ></Movies>
        <Movies
          img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjIuNUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg"
          name="RDX"
          para="Action/Drama/Family"
        ></Movies>
        <Movies
          img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMTguNUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg"
          name="Jailer"
          para="Action/Drama/Thriller"
        ></Movies>
        <Movies
          img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTM2LjlLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg"
          name="Dream Girl 2"
          para="Comedy/Drama/Romantic"
        ></Movies> */}
      {/* </div> */}

      {/* <div className="stream">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
          alt=""
        />
      </div>
      <h1 className="event">The Best Of Live Events</h1> */}
      {/* <Eventslider></Eventslider> */}
      {/* <div>
        <div className="premiere">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="premier-heading">
          <h1>Premieres </h1>
          <p>Brand new release every friday</p>
        </div> */}
      {/* <Premiere></Premiere> */}
      {/* </div> */}
    </div>
    // ---
  );
}

export default Navbar;
