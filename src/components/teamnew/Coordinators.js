import React, { useEffect } from "react";

// import images
import Sandeep from "../resources/sandeep_mishra.jpg";
import Aditya from "../resources/aditya_kumar.jpg";
import Vighnesh from "../resources/vighnesh_deshpande.jpg";
import Amresh from "../resources/amresh_prasad.jpeg";
import Shreya from "../resources/shreya_anand.jpg";
import Anay from "../resources/anay_karnik.jpg";
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
import "./teamnew.css";

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
                <img src={Sandeep} alt="Sandeep Mishra" />
                <Namecard
                  name="Sandeep Mishra"
                  link1="https://www.linkedin.com/in/sandeep03edu/"
                  link2="mailto:sandeep_2001ee61@iitp.ac.in"
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
              <div className="icon">
                <img src={Aditya} alt="Aditya Kumar" />
                <Namecard
                  name="Aditya Kumar"
                  link1="https://www.linkedin.com/in/aditya-kumar-337a08218/"
                  link2="mailto:adityakumarsanni.2001@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Vighnesh} alt="Vighnesh" />
                <Namecard
                  name="Vighnesh Deshpande"
                  link1="https://www.linkedin.com/in/vighnesh3802"
                  link2="mailto:vadeshpande2002@gmail.com"
                />
              </div>
              
              <div className="icon">
                <img src={Anay} alt="Anay" />
                <Namecard
                  name="Anay Karnik"
                  link1="https://www.linkedin.com/in/anayvk"
                  link2="mailto:anay_2001cs05@iitp.ac.in"
                />
              </div>
              <div className="icon">
                <img src={Amresh} alt="Amresh" />
                <Namecard
                  name="Amresh Prasad Sinha"
                  link1="https://www.linkedin.com/in/amresh-sinha"
                  link2="mailto:theamresh.sinha@gmail.com"
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
                <img src={Sandeep} alt="Sandeep Mishra" />
                <Namecard
                  name="Sandeep Mishra"
                  link1="https://www.linkedin.com/in/sandeep03edu/"
                  link2="mailto:sandeep_2001ee61@iitp.ac.in"
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
                <img src={Aditya} alt="Aditya Kumar" />
                <Namecard
                  name="Aditya Kumar"
                  link1="https://www.linkedin.com/in/aditya-kumar-337a08218/"
                  link2="mailto:adityakumarsanni.2001@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Vighnesh} alt="Vighnesh" />
                <Namecard
                  name="Vighnesh Deshpande"
                  link1="https://www.linkedin.com/in/vighnesh3802"
                  link2="mailto:vadeshpande2002@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
            <div className="icon">
                <img src={Anay} alt="Anay" />
                <Namecard
                  name="Anay Karnik"
                  link1="https://www.linkedin.com/in/anayvk"
                  link2="mailto:anay_2001cs05@iitp.ac.in"
                />
              </div>
              <div className="icon">
                <img src={Amresh} alt="Amresh" />
                <Namecard
                  name="Amresh Prasad Sinha"
                  link1="https://www.linkedin.com/in/amresh-sinha"
                  link2="mailto:theamresh.sinha@gmail.com"
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
            </div>
          </div>

          <div>
            <div className="coord">
             <div className="icon">
                <img src={Sparsh} alt="Sparsh Mittal" />
                <Namecard
                  name="Sparsh Mittal"
                  link1="https://www.linkedin.com/in/sparsh-m-400846119"
                  link2="mailto:sparshmittal2311@gmail.com"
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
    </div>
  );
}
