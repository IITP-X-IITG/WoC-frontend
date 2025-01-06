import React, { useEffect } from "react";
// import images
import Kushal from "../resources/image_kushal.jpg";
import Vinayak from "../resources/vinayak.jpg";
import rupayan from "../resources/image_profile.jpg";
import nikhil from "../resources/img_nikhil.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Namecard from "./namecard";
import "./Team.css";

export default function Coordinators() {
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
        Overall Coordinators
      </h2>
      <div className="fullscreen">
        <Slider {...settings}>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={rupayan} alt="Rupayan" />
                <Namecard
                  name="Rupayan Daripa"
                  link1="https://www.linkedin.com/in/rupayan-daripa-0ba98a261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  link2="mailto:rupayandaripa@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Kushal} alt="Kushal Agarwal " />
                <Namecard
                  name="Kushal Agarwal "
                  link1="https://www.linkedin.com/in/kushal-agarwal-03868225a/"
                  link2="mailto:kushalag02@gmail.com"
                />
              </div>


              <div className="icon">
                <img src={Vinayak} alt="Vinayak Goyal" />
                <Namecard
                  name="Vinayak Goyal"
                  link1="https://www.linkedin.com/in/vinayak-goyal-b769b5251/"
                  link2="mailto:vinayakgoyal2410@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={nikhil} alt="Nikhil" />
                <Namecard
                  name="Nikhil Raj"
                  link1="https://www.linkedin.com/in/nikhil-raj07/"
                  link2="mailto:raj25222004@gmail.com"
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
                <img src={rupayan} alt="Rupayan" />
                <Namecard
                  name="Rupayan Daripa"
                  link1="https://www.linkedin.com/in/rupayan-daripa-0ba98a261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  link2="mailto:rupayandaripa@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Kushal} alt="Kushal Agarwal " />
                <Namecard
                  name="Kushal Agarwal "
                  link1="https://www.linkedin.com/in/kushal-agarwal-03868225a/"
                  link2="mailto:kushalag02@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">

              <div className="icon">
                <img src={Vinayak} alt="Vinayak Goyal" />
                <Namecard
                  name="Vinayak Goyal"
                  link1="https://www.linkedin.com/in/vinayak-goyal-b769b5251/"
                  link2="mailto:vinayakgoyal2410@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={nikhil} alt="Nikhil" />
                <Namecard
                  name="Nikhil Raj"
                  link1="https://www.linkedin.com/in/nikhil-raj07/"
                  link2="mailto:raj25222004@gmail.com"
                />
              </div>

            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
