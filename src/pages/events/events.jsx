import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import AnimatedBG from "../../components/Animatedbg";
import "./events.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { EventsArray } from "./eventsArray";

const Events = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div>
      <AnimatedBG />
      <Navigation />
      <div className="event_head">
        <h2 data-aos="zoom-in" data-aos-once="true">
          Events
        </h2>
        <hr />
      </div>
      <div className="event_wrapper">
        {EventsArray.map((event) => {
          return (
            <div
              key={event.eventName}
              className="event_box"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <img
                src={event.eventImage.default}
                alt={event.eventName}
                className="eventImg"
              />
              <div className="front_ext_event">
                <div className="event_title">
                  <h1>{event.eventName}</h1>
                  <a href={event.eventLink} target="_blank" rel="noreferrer">
                    <button className="btn btn-primary btn-apply" type="button">
                      {event.eventButton}
                    </button>
                  </a>
                </div>
                <hr className="exp_hr" />
                <p>{event.eventDetails}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Events;
