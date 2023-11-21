import React, { useEffect } from "react";
// import images
import Aritra from "../resources/aritra_bhaduri.jpg";
import Anurag from "../resources/Anyrag_Deo_Image.png";
import Aryan from "../resources/Aryan_img.png"
import Achintya from "../resources/image_profile.jpg"
import Abhijeet from "../resources/Abhijeet_1.jpg";
import Raj from "../resources/image_profile.jpg"
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
                <img src={Aritra} alt="Aritra Bhaduri" />
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
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Achintya} alt="Achintya" />
                <Namecard
                  name="Achintya Gupta"
                  link1="https://www.linkedin.com/in/achintya-gupta1"
                  link2="mailto:achintya7567@gmail.com"
                />
              </div>

              <div className="icon">
                <img src={Abhijeet} alt="Abhijeet" />
                <Namecard
                  name="Abhijeet Sinha"
                  link1="https://www.linkedin.com/in/abhijeet-sinha-7069b6223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  link2="mailto:sinhaabhijeet200@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Raj} alt="Raj Borogaon" />
                <Namecard
                  name="Raj Borogaon"
                  link1="https://www.linkedin.com/in/iks1r"
                  link2="mailto:rajbiitg@gmail.com"
                />
              </div>
            </div>
          </div>

          {/* <div>
            <div className="coord">
              <div className="icon">
                <img src={Harsh} alt="Harsh" />
                <Namecard
                  name="Harsh Agrawal"
                  link1="https://www.linkedin.com/in/harshagrawal523/"
                  link2="mailto:harshagrawal523@gmail.com"
                />
              </div>

              <div className="icon">
                <img src={Gunjan} alt="Gunjan" />
                <Namecard
                  name="Gunjan Dhanuka"
                  link1="https://www.linkedin.com/in/gunjan-dhanuka/"
                  link2="mailto:gdhanuka192@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Krunjal} alt="Krunjal" />
                <Namecard
                  name="Krunjal Prajapati"
                  link1="https://www.linkedin.com/in/krunalprajapati26"
                  link2="mailto:26.krunal@gmail.com"
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
                <img src={Aritra} alt="Aritra Bhaduri" />
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
              <div className="icon">
                <img src={Achintya} alt="Achintya" />
                <Namecard
                  name="Achintya Gupta"
                  link1="https://www.linkedin.com/in/achintya-gupta1"
                  link2="mailto:achintya7567@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Abhijeet} alt="Abhijeet" />
                <Namecard
                  name="Abhijeet Sinha"
                  link1="https://www.linkedin.com/in/abhijeet-sinha-7069b6223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  link2="mailto:sinhaabhijeet200@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Raj} alt="Raj Borogaon" />
                <Namecard
                  name="Raj Borogaon"
                  link1="https://www.linkedin.com/in/iks1r"
                  link2="mailto:rajbiitg@gmail.com"
                />
              </div>
            </div>
          </div>
          {/* <div>
            <div className="coord">
              <div className="icon">
                <img src={Harsh} alt="Harsh" />
                <Namecard
                  name="Harsh Agrawal"
                  link1="https://www.linkedin.com/in/harshagrawal523/"
                  link2="mailto:harshagrawal523@gmail.com"
                />
              </div>

              <div className="icon">
                <img src={Gunjan} alt="Gunjan" />
                <Namecard
                  name="Gunjan Dhanuka"
                  link1="https://www.linkedin.com/in/gunjan-dhanuka/"
                  link2="mailto:gdhanuka192@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Krunjal} alt="Krunjal" />
                <Namecard
                  name="Krunjal Prajapati"
                  link1="https://www.linkedin.com/in/krunalprajapati26"
                  link2="mailto:26.krunal@gmail.com"
                />
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}
