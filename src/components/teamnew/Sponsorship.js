import React, { useEffect } from "react";

// image import
import Omkar from "../resources/omkar_chaudhari.jpeg";
import Raunak from "../resources/raunak_kumar_gupta.jpg";
import Avinash from "../resources/avinash_tyagi.jpeg";
import Aruj from "../resources/aruj_gautam.jpg";
import Utkarsh from "../resources/utkarsh_giri.jpg";
import Raj from "../resources/raj_borogaon.jpg";
import Harshit from "../resources/harshit_seksaria.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Namecard from "./namecard";
import "./teamnew.css";

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
          Operations and Sponsorship Team
        </h2>
        <div className="fullscreen">
          <Slider {...settings}>
            <div>
              <div className="coord">
                <div className="icon">
                  <img src={Omkar} alt="Omkar"/>
                  <Namecard
                    name="Omkar Chaudhari "
                    link1="https://www.linkedin.com/in/c-omkar/"
                    link2="mailto:c.omkar@gmail.com"
                  />
                </div>
                <div className="icon">
                  <img src={Raunak} alt="Raunak"/>
                  <Namecard
                    name="Raunak Kumar Gupta "
                    link1="https://www.linkedin.com/in/raunak-kumar-gupta-075121226"
                    link2="mailto:raunakmodanwal321@gmail.com"
                  />
                </div>
                <div className="icon">
                  <img src={Avinash} alt="Avinash"/>
                  <Namecard
                    name="Avinash Tyagi "
                    link1="https://www.linkedin.com/in/avinash-t-956342226/"
                    link2="mailto:avinash91715@gmail.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="coord">
                <div className="icon">
                  <img src={Aruj} alt="Aruj"/>
                  <Namecard
                    name="Aruj Gautam"
                    link1="https://www.linkedin.com/in/arujgautam/"
                    link2="mailto:arujgautam1@gmail.com"
                  />
                </div>
                <div className="icon">
                  <img src={Utkarsh} alt="Utkarsh"/>
                  <Namecard
                    name="Utkarsh Kumar Giri"
                    link1="https://www.linkedin.com/in/utkarsh-kumar-giri-b31b461b9/"
                    link2="mailto:utkarshkumarbro@gmail.com"
                  />
                </div>
                <div className="icon">
                  <img src={Raj} alt="Raj"/>
                  <Namecard
                    name="Raj Borogaon"
                    link1="https://www.linkedin.com/in/iks1r/"
                    link2="mailto:b.raj@iitg.ac.in"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="coord">
                <div className="icon">
                  <img src={Harshit} alt="Harshit"/>
                  <Namecard
                    name="Harshit Seksaria"
                    link1="https://www.linkedin.com/in/letsintegreat/"
                    link2="mailto:harshitseksaria9@gmail.com"
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
                  <img src={Omkar} alt="Omkar"/>
                  <Namecard
                    name="Omkar Chaudhari "
                    link1="https://www.linkedin.com/in/c-omkar/"
                    link2="mailto:c.omkar@gmail.com"
                  />
                </div>
                <div className="icon">
                  <img src={Raunak} alt="Raunak"/>
                  <Namecard
                    name="Raunak Kumar Gupta "
                    link1="https://www.linkedin.com/in/raunak-kumar-gupta-075121226"
                    link2="mailto:raunakmodanwal321@gmail.com"
                  />
                </div>
              </div>
            </div>

            <div>
            <div className="icon">
                  <img src={Avinash} alt="Avinash"/>
                  <Namecard
                    name="Avinash Tyagi "
                    link1="https://www.linkedin.com/in/avinash-t-956342226/"
                    link2="mailto:avinash91715@gmail.com"
                  />
                </div>
                <div className="icon">
                  <img src={Aruj} alt="Aruj"/>
                  <Namecard
                    name="Aruj Gautam"
                    link1="https://www.linkedin.com/in/arujgautam/"
                    link2="mailto:arujgautam1@gmail.com"
                  />
                </div>
              </div>
            <div>
              <div className="coord">
              <div className="icon">
                  <img src={Utkarsh} alt="Utkarsh"/>
                  <Namecard
                    name="Utkarsh Kumar Giri"
                    link1="https://www.linkedin.com/in/utkarsh-kumar-giri-b31b461b9/"
                    link2="mailto:utkarshkumarbro@gmail.com"
                  />
                </div>
                <div className="icon">
                  <img src={Harshit} alt="Harshit"/>
                  <Namecard
                    name="Harshit Seksaria"
                    link1="https://www.linkedin.com/in/letsintegreat/"
                    link2="mailto:harshitseksaria9@gmail.com"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
}
