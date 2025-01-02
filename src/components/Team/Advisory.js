import React, { useEffect } from "react";
import Aritra from "../resources/aritra_bhaduri.jpg";
import Anurag from "../resources/Anyrag_Deo_Image.png";
import Aryan from "../resources/Aryan_img.png"
import Aos from "aos";
import "aos/dist/aos.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Namecard from "./namecard";
import "./Team.css";

export default function Advisory() {
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
        Advisory Team
      </h2>
      <div className="fullscreen">
        <Slider {...settings}>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Aritra} alt="Aritra" />
                <Namecard
                  name="Aritra Bhaduri"
                  link1="https://www.linkedin.com/in/aritrabhaduri/"
                  link2="mailto:abhaduriperso@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Anurag} alt="Anurag Deo" />
                <Namecard
                  name="Anurag Deo"
                  link1="https://www.linkedin.com/in/anurag-deo-8b30b422b"
                  link2="mailto:anuragdeo03@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Aryan} alt="Aryan Lath" />
                <Namecard
                  name="Aryan Lath"
                  link1="https://www.linkedin.com/in/aryan-lath-9b397b152/"
                  link2="mailto:aryanlath@gmail.com"
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
                <img src={Aritra} alt="Aritra" />
                <Namecard
                  name="Aritra Bhaduri"
                  link1="https://www.linkedin.com/in/aritrabhaduri/"
                  link2="mailto:abhaduriperso@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Anurag} alt="Anurag Deo" />
                <Namecard
                  name="Anurag Deo"
                  link1="https://www.linkedin.com/in/anurag-deo-8b30b422b"
                  link2="mailto:anuragdeo03@gmail.com"
                />
              </div>

            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Aryan} alt="Aryan Lath" />
                <Namecard
                  name="Aryan Lath"
                  link1="https://www.linkedin.com/in/aryan-lath-9b397b152/"
                  link2="mailto:aryanlath@gmail.com"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
