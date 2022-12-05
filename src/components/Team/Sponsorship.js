import React, { useEffect } from "react";

// image import
import Raunak from "../resources/raunak_kumar_gupta.jpg";
import Avinash from "../resources/avinash_tyagi.jpeg";
import Aruj from "../resources/aruj_gautam.jpg";
import Utkarsh from "../resources/utkarsh_giri.jpg";
import Raj from "../resources/raj_borogaon.jpg";
import Harshit from "../resources/harshit_seksaria.jpg";
import Shreya from "../resources/shreya_anand.jpg";
import Sanya from "../resources/sanya.jpg";
import Sparsh from "../resources/sparsh_mittal.jpg";
import Adittya from "../resources/adittya_gupta.jpg";
import Priyanshu from "../resources/priyanshu_srivastava.jpg";

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
                <img src={Raunak} alt="Raunak" />
                <Namecard
                  name="Raunak Kumar Gupta "
                  link1="https://www.linkedin.com/in/raunak-kumar-gupta-075121226"
                  link2="mailto:raunakmodanwal321@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Avinash} alt="Avinash" />
                <Namecard
                  name="Avinash Tyagi "
                  link1="https://www.linkedin.com/in/avinash-t-956342226/"
                  link2="mailto:avinash91715@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Aruj} alt="Aruj" />
                <Namecard
                  name="Aruj Gautam"
                  link1="https://www.linkedin.com/in/arujgautam/"
                  link2="mailto:arujgautam1@gmail.com"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="coord">
              <div className="icon">
                <img src={Harshit} alt="Harshit" />
                <Namecard
                  name="Harshit Seksaria"
                  link1="https://www.linkedin.com/in/letsintegreat/"
                  link2="mailto:harshitseksaria9@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Utkarsh} alt="Utkarsh" />
                <Namecard
                  name="Utkarsh Kumar Giri"
                  link1="https://www.linkedin.com/in/utkarsh-kumar-giri-b31b461b9/"
                  link2="mailto:utkarshkumarbro@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Raj} alt="Raj" />
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
                <img src={Shreya} alt="Shreya Anand " />
                <Namecard
                  name="Shreya Anand "
                  link1="https://www.linkedin.com/in/shreya-anand-815699229"
                  link2="mailto:shreyaanand1501@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Sanya} alt="Sanya" />
                <Namecard
                  name="Sanya"
                  link1="https://www.linkedin.com/in/sanya-singh-1a72441b3/"
                  link2="mailto:s.sanya@iitg.ac.in"
                />
              </div>
              <div className="icon">
                <img src={Sparsh} alt="Sparsh Mittal" />
                <Namecard
                  name="Sparsh Mittal"
                  link1="https://www.linkedin.com/in/sparsh-m-400846119"
                  link2="mailto:sparshmittal2311@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Priyanshu} alt="Priyanshu" />
                <Namecard
                  name="Priyanshu"
                  link1="https://www.linkedin.com/in/priyanshu-71604b227/"
                  link2="mailto:priyanshu.eee21@iitg.ac.in"
                />
              </div>
              <div className="icon">
                <img src={Adittya} alt="Adittya Gupta" />
                <Namecard
                  name="Adittya Gupta"
                  link1="https://www.linkedin.com/in/adittya-gupta-b64356224/"
                  link2="mailto:g.adittya@iitg.ac.in"
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
                <img src={Raunak} alt="Raunak" />
                <Namecard
                  name="Raunak Kumar Gupta "
                  link1="https://www.linkedin.com/in/raunak-kumar-gupta-075121226"
                  link2="mailto:raunakmodanwal321@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Avinash} alt="Avinash" />
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
                <img src={Aruj} alt="Aruj" />
                <Namecard
                  name="Aruj Gautam"
                  link1="https://www.linkedin.com/in/arujgautam/"
                  link2="mailto:arujgautam1@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Utkarsh} alt="Utkarsh" />
                <Namecard
                  name="Utkarsh Kumar Giri"
                  link1="https://www.linkedin.com/in/utkarsh-kumar-giri-b31b461b9/"
                  link2="mailto:utkarshkumarbro@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Harshit} alt="Harshit" />
                <Namecard
                  name="Harshit Seksaria"
                  link1="https://www.linkedin.com/in/letsintegreat/"
                  link2="mailto:harshitseksaria9@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Shreya} alt="Shreya Anand " />
                <Namecard
                  name="Shreya Anand "
                  link1="https://www.linkedin.com/in/shreya-anand-815699229"
                  link2="mailto:shreyaanand1501@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Sanya} alt="Sanya" />
                <Namecard
                  name="Sanya"
                  link1="https://www.linkedin.com/in/sanya-singh-1a72441b3/"
                  link2="mailto:s.sanya@iitg.ac.in"
                />
              </div>
              <div className="icon">
                <img src={Priyanshu} alt="Priyanshu" />
                <Namecard
                  name="Priyanshu"
                  link1="https://www.linkedin.com/in/priyanshu-71604b227/"
                  link2="mailto:priyanshu.eee21@iitg.ac.in"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Adittya} alt="Adittya Gupta" />
                <Namecard
                  name="Adittya Gupta"
                  link1="https://www.linkedin.com/in/adittya-gupta-b64356224/"
                  link2="mailto:g.adittya@iitg.ac.in"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
