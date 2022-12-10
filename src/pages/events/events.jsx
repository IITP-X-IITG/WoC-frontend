import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import AnimatedBG from "../../components/Animatedbg";
import "./events.css";
import Aos from "aos";
import "aos/dist/aos.css";
import FlutterWorkshop from "../Images/FlutterWorkshop.png";

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
        <div className="event_box" data-aos="fade-up" data-aos-once="true">
          <img
            src={FlutterWorkshop}
            alt="FlutterWorkshop"
            className="eventImg"
          />
          <div className="front_ext_event">
            <div className="event_title">
              <h1>Flutter Workshop</h1>
              <a
                href="https://www.youtube.com/@codepeak8135
"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary btn-apply" type="button">
                  Our Youtube Channel
                </button>
              </a>
            </div>
            <hr className="exp_hr" />
            <p>
              CODEPEAK in association with Flutter Kolkata is going to organize
              an event focusing on the fundamentals of Flutter. Join us live on
              our youtube channel on December 11th at 2 pm for a special online
              event with Tanmoy Karmakar as he takes us on a journey to learn
              the basics of Flutter. This event is perfect for anyone interested
              in learning the basics of Flutter and how to get started building
              their own mobile apps. Don't miss this exciting opportunity to
              learn from an expert and kickstart your journey into the world of
              flutter development.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Events;