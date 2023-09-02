import React from "react";
import BuzzItem from "./BuzzItem";
import "./Buzz.css";

const Buzz = () => {
  return (
    <div>
      <div className="Buzz-main-div">
        <div className="Buzz-left-sect">
          <ul className="buzzItem-menu-list">
            <li>Trending</li>
            <li>Movies</li>
            <li>Events</li>
            <li>Sports</li>
            <li>Streaming</li>
            <li>Videos</li>
          </ul>
          <BuzzItem />
        </div>
        <div className="Buzz-right-sect">
          <div className="sticky-div">
            <div className="rgt-hdng-descr">
              <p className="rgt-hdng-descr-hd">BookMyShow Buzz</p>
              <p>
                Get the latest updates on movies, series, online events to
                stream and more with curated recommendations.
              </p>
            </div>
            <div className="poplist_box">
              <p className="poplist_hd">Popular categories</p>
              <ul className="pop_list">
                <li>
                  <a href="">Movies</a>
                </li>
                <li>
                  <a>Events</a>
                </li>
                <li>
                  <a>Sports</a>
                </li>
                <li>
                  <a>Musics</a>
                </li>
                <li>
                  <a>Streaming</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buzz;
