import React, { useEffect } from "react";
// image import
import Aritra from "../resources/aritra_bhaduri.jpg";
import Achhada from "../resources/achhada_hiren_rajkumar.jpg";
import Anurag from "../resources/anurag_deo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Namecard from "./namecard";
import "./teamnew.css";

export default function Slider2() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider1">
      <h2 data-aos="zoom-in" data-aos-once="true">
        Technical Team
      </h2>
      <div className="fullscreen">
        <Slider {...settings}>
          <div>
            <div className="coord">
            <div className="icon">
                <img src={Aritra} />
                <Namecard
                  name="Aritra Bhaduri"
                  link1="https://www.linkedin.com/in/aritrabhaduri/"
                  link2="mailto:abhaduriperso@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Achhada} />
                <Namecard
                  name="Achhada Hiren Rajkumar"
                  link1="https://www.linkedin.com/in/hiren-achhada-5aa214210/"
                  link2="mailto:achhada_2101cs03@iitp.ac.in"
                />
              </div>
              <div className="icon">
                <img src={Anurag} />
                <Namecard
                  name="Anurag Deo"
                  link1="https://www.linkedin.com/in/anurag-deo-8b30b422b/"
                  link2="mailto:anurag_2101ai04@iitp.ac.in"
                />
              </div>
            </div>
          </div>
         
           
        </Slider>
      </div>

      <div className="mobilescreen">
        <Slider {...settings}>
          <div>
            <div className="coord">
            <div className="icon">
                <img src={Aritra} />
                <Namecard
                  name="Aritra Bhaduri"
                  link1="https://www.linkedin.com/in/aritrabhaduri/"
                  link2="mailto:abhaduriperso@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Achhada} />
                <Namecard
                  name="Achhada Hiren Rajkumar"
                  link1="https://www.linkedin.com/in/hiren-achhada-5aa214210/"
                  link2="mailto:achhada_2101cs03@iitp.ac.in"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
            <div className="icon">
                <img src={Anurag} />
                <Namecard
                  name="Anurag Deo"
                  link1="https://www.linkedin.com/in/anurag-deo-8b30b422b/"
                  link2="mailto:anurag_2101ai04@iitp.ac.in"
                />
              </div>
              
            </div>
          </div>
          
        </Slider>
      </div>
    </div>
  );
}
