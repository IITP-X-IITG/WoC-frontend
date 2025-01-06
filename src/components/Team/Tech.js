import React, { useEffect } from "react";
// image import
import Kushal from "../resources/image_kushal.jpg";
import Priyanshi from "../resources/pryanshi.jpg";
import Soumyajyoti from "../resources/image_profile.jpg";
import vinod from "../resources/image_vinod.jpg"

import Aos from "aos";
import "aos/dist/aos.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Namecard from "./namecard";
import "./Team.css";

export default function Tech() {
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
                <img src={Soumyajyoti} alt="Soumyajyoti Mohanta" />
                <Namecard
                  name="Soumyajyoti Mohanta"
                  link1="https://www.linkedin.com/in/soumyajyoti-mohanta-9b832a309/"
                  link2="mailto:soumyajyotimohanta@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={vinod} alt="Vinod Singh Rathore " />
                <Namecard
                  name="Vinod Singh Rathore "
                  link1="https://www.linkedin.com/in/vin0drath0re/"
                  link2="mailto:vinodrathore2107@gmail.com"
                />
              </div>
            </div>
          </div>
          {/* <>
            <div className="coord">
              <div className="icon">
                <img src={Aman} alt="Aman" />
                <Namecard
                  name="Aman Kumar"
                  link1="https://www.linkedin.com/in/akr25/"
                  link2="mailto:aman.26262@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Padmaja} alt="Padmaja" />
                <Namecard
                  name="Padmaja Joshi"
                  link1="https://www.linkedin.com/in/padmaja-joshi-2303431b4/"
                  link2="mailto:padmaja23052002@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Pratyush} alt="Pratyush" />
                <Namecard
                  name="Pratyush Kumar"
                  link1="https://www.linkedin.com/in/pratyushkumar1032"
                  link2="mailto:pk1234pratyushk@gmail.com"
                />
              </div>
            </div>
          </div> */}
        </Slider>
      </div>

      <div className="mobilescreen">
        <Slider {...settings}>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Soumyajyoti} alt="Soumyajyoti Mohanta" />
                <Namecard
                  name="Soumyajyoti Mohanta"
                  link1="https://www.linkedin.com/in/soumyajyoti-mohanta-9b832a309/"
                  link2="mailto:soumyajyotimohanta@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={vinod} alt="Vinod Singh Rathore " />
                <Namecard
                  name="Vinod Singh Rathore "
                  link1="https://www.linkedin.com/in/vin0drath0re/"
                  link2="mailto:vinodrathore2107@gmail.com"
                />
              </div>
            </div>
          </div>
          {/* <div>
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
                <img src={Achhada} alt="Achhada" />
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
                <img src={Aditya} alt="Aditya" />
                <Namecard
                  name="Aditya Kumar"
                  link1="https://www.linkedin.com/in/aditya-kumar-337a08218/"
                  link2="mailto:adityakumarsanni.2001@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Kartikay} alt="Kartikay" />
                <Namecard
                  name="Kartikay Gupta"
                  link1="https://www.linkedin.com/in/kartikay-gupta/"
                  link2="mailto:kartikay.gupta2002@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Padmaja} alt="Padmaja" />
                <Namecard
                  name="Padmaja Joshi"
                  link1="https://www.linkedin.com/in/padmaja-joshi-2303431b4/"
                  link2="mailto:padmaja23052002@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Aman} alt="Aman" />
                <Namecard
                  name="Aman Kumar"
                  link1="https://www.linkedin.com/in/akr25/"
                  link2="mailto:aman.26262@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Pratyush} alt="Pratyush" />
                <Namecard
                  name="Pratyush Kumar"
                  link1="https://www.linkedin.com/in/pratyushkumar1032"
                  link2="mailto:pk1234pratyushk@gmail.com"
                />
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}
