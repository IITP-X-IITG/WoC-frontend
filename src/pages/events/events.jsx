import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import Animatedbg from "../../components/Animatedbg";
import "./events.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Dec12 from "../Images/12 dec.png";
import GSOCTALK from "../Images/gsoc talk.png"

// Events page - designed by modifying the existing rewards page

export default function Events() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div>
      <Animatedbg />
      <Navigation />
      <div className='event_head'>
        <h2 data-aos='zoom-in' data-aos-once='true'>
          Completed Events
        </h2>
        <hr />
      </div>
      <div className='event_wrapper'>
        <div className='event_box' data-aos='fade-up' data-aos-once='true'>
          <div className="event___">
            <img src={GSOCTALK} alt='' srcset='' className='eventImg' />
            <div className='front_ext_event'>
              <div className='event_title'>
                <h1>GSOC AMA</h1>
                {/* <a href='https://bit.ly/31CFJKp' target='_blank' rel='noreferrer'>
                  <button className='btn btn-primary btn-apply' type='button'>
                    Register Now
                  </button>
                </a> */}
              </div>
              <hr className='exp_hr' />
              <p>
                In our series of talks, we begin with an "AMA Session with GSoC
                participants", in association with Aviyel. The panel of
                participants will be open to any and all questions regarding their
                Open Source journey and how they made it to arguably the most
                prestigious Open Source programme.
              </p>
            </div>
          </div>
        </div>
        <div className='event_box' data-aos='fade-up' data-aos-once='true'>
          <div className="event___">
            <img src={Dec12} alt='' srcset='' className='eventImg' />
            <div className='front_ext_event'>
              <div className='event_title'>
                <h1>Renato Benkerdorf</h1>
                {/* <a href='https://bit.ly/3rKP9hR' target='_blank' rel='noreferrer'>
                  <button className='btn btn-primary btn-apply' type='button'>
                    Register Now
                  </button>
                </a> */}
              </div>
              <hr className='exp_hr' />
              <p>
                The best way to practice & expertise your existing skills is by
                contributing to Open Source Projects but if you are confused with
                a how-to start. A sweet solution for your problem as CodePeak and
                Aviyel comes with another live session where Pedro Nauk & Renato
                Benkerdorf, Docz creators, will help you get started.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
