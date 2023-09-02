import React from "react";
import "./ListYourShow.css";

const YourShowHead = {
  Showlist: [
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/online-stream-play.png",
      title: "Online Streaming",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
      sample: "new",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/perf.png",
      title: "Performances",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/experiencess.png",
      title: "Experiences",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/expositionss.png",
      title: "Expositions",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/partiess.png",
      title: "Parties",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/sport.png",
      title: "Sports",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/conferencess.png",
      title: "Conferences",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
  ],
  Showlist2: [
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/online-saless.png",
      title: "Online Sales & Marketing",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
      sample: "new",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/pricings.png",
      title: "Pricing",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/food.png",
      title: "Food & beverages, stalls and the works!",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/on-ground-support.png",
      title: "On ground support & gate entry management",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/report.png",
      title: "Reports & business insights",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
    {
      icon: "https://assets-in.bmscdn.com/static/2021/06/rfids.png",
      title: "POS, RFID, Turnstiles & more...",
      thumbnail: "https://assets-in.bmscdn.com/static/2021/06/info.png",
    },
  ],
};

export default function ListYourShow() {
  return (
    <div>
      <div className="host">
        <h1>What can you host?</h1>
        <p>
          As the purveyor of entertainment, BookMyShow enables your event with
          end to end solutions from the time you register to the completion of
          the event. Let’s look at what you can host.
        </p>

        <div className="allcards">
          {YourShowHead.Showlist.map((x) => {
            return (
              <a className="showcards" href="#">
                <div>
                  <img src={x.icon} alt="" />
                  <h3>{x.title}</h3>
                  <img id="thumb" src={x.thumbnail} alt="" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="host">
        <h1>What are the services we offer?</h1>
        <p>
          After successful collaborations with the best event organisers over
          the past decade and a half, we’re well equipped to bring your vision
          to life.
        </p>

        <div className="allcards">
          {YourShowHead.Showlist2.map((x) => {
            return (
              <a className="showcards2" href="#">
                <div>
                  <img src={x.icon} alt="" />
                  <h3>{x.title}</h3>
                  <img id="thumb" src={x.thumbnail} alt="" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
