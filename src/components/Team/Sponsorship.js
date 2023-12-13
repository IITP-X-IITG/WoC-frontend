import React, { useEffect } from "react";

// image import
import Hemant from "../resources/hemant.jpg";
import Satyam from "../resources/satyam.jpg";
import Vinayak from "../resources/vinayak.jpg";
import Kanhaia from "../resources/kanhaia.jpg";
import Atri from "../resources/image_profile.jpg";
import krishna from "../resources/krishna_Rathore.jpg";


import Aos from "aos";
import "aos/dist/aos.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Namecard from "./namecard";
import "./Team.css";

export default function Sponsorship() {
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
    <div className="slider3">
      <h2 data-aos="zoom-in" data-aos-once="true">
        Sponsorship and Marketing Team
      </h2>
      <div className="fullscreen">
        <Slider {...settings}>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Hemant} alt="Hemant" />
                <Namecard
                  name="Hemant Chaurasia"
                  link1="https://www.linkedin.com/in/hemantchaurasia2004/"
                  link2="mailto:hemantchaurasia2004@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Satyam} alt="Satyam Raj" />
                <Namecard
                  name="Satyam Raj"
                  link1="https://www.linkedin.com/in/satyam-raj-8191b1284/"
                  link2="mailto:satyam12102004@gmail.com"
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
                <img src={Kanhaia} alt="Kanhaia" />
                <Namecard
                  name="Kanahia"
                  link1="https://www.linkedin.com/in/kanahia-kaushal-9850bb253/"
                  link2="mailto:kaushalkanahia@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={krishna} alt="Krishna" />
                <Namecard
                  name="Krishna Rathore  "
                  link1="https://www.linkedin.com/in/kr005"
                  link2="mailto:krishnarathore393@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Atri} alt="Atri Chattopadhyay" />
                <Namecard
                  name="Atri Chattopadhyay"
                  link1="https://www.linkedin.com/in/atri-chattopadhyay-777b5725a/"
                  link2="mailto:print.atri@gmail.com"
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
                <img src={Hemant} alt="Hemant" />
                <Namecard
                  name="Hemant Chaurasia"
                  link1="https://www.linkedin.com/in/hemantchaurasia2004/"
                  link2="mailto:hemantchaurasia2004@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Satyam} alt="Satyam Raj" />
                <Namecard
                  name="Satyam Raj"
                  link1="https://www.linkedin.com/in/satyam-raj-8191b1284/"
                  link2="mailto:satyam12102004@gmail.com"
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
                <img src={Kanhaia} alt="Kanhaia" />
                <Namecard
                  name="Kanahia"
                  link1="https://www.linkedin.com/in/kanahia-kaushal-9850bb253/"
                  link2="mailto:kaushalkanahia@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={krishna} alt="Krishna" />
                <Namecard
                  name="Krishna Rathore  "
                  link1="https://www.linkedin.com/in/kr005"
                  link2="mailto:krishnarathore393@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Atri} alt="Atri Chattopadhyay" />
                <Namecard
                  name="Atri Chattopadhyay"
                  link1="https://www.linkedin.com/in/atri-chattopadhyay-777b5725a/"
                  link2="mailto:print.atri@gmail.com"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
