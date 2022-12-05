import React, { useEffect } from "react";
// import images
import Madhur from "../resources/madhur_malpani.jpeg";
import Atishay from "../resources/atishay_jain.jpeg";
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
                <img src={Madhur} alt="Madhur" />
                <Namecard
                  name="Madhur Malpani"
                  link1="https://www.linkedin.com/in/madhur-malpani-818646196/"
                  link2="mailto:madhur.nilu@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Atishay} alt="Atishay" />
                <Namecard
                  name="Atishay Jain"
                  link1="www.linkedin.com/in/atishay1743/"
                  link2="mailto:atishayjain@iitg.ac.in"
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
                <img src={Madhur} alt="Madhur" />
                <Namecard
                  name="Madhur Malpani"
                  link1="https://www.linkedin.com/in/madhur-malpani-818646196/"
                  link2="mailto:madhur.nilu@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Atishay} alt="Atishay" />
                <Namecard
                  name="Atishay Jain"
                  link1="www.linkedin.com/in/atishay1743/"
                  link2="mailto:atishayjain@iitg.ac.in"
                />
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
}
