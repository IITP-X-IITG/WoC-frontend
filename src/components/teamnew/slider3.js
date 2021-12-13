import React from 'react'
//import pratyush from '../resources/pratyush.jpg'
import amresh from '../resources/amresh_sinha.jpeg'
import sarthak from '../resources/sarthak_diwan.jpeg'
import Rajan from '../resources/rajan_kumar.jpg'
import Harsh from '../resources/harshwardhan_bhakkad.jpg'
import Priyanshi from '../resources/priyanshi_singh.jpg'
import Athul from '../resources/athul_krishna_k.jpeg'
import Khushi from '../resources/khushi_prasad.jpg'
import Pratham from '../resources/pratham_kulkarni.png'
import Vani from '../resources/vani_krishna_barla.jpg'
import Harsha from '../resources/harsh_agarwal.jpg'
import Soumadip from '../resources/soumadip_das.jpg'
import Gunjan from '../resources/gunjan_dhanuka.jpeg'
import Hardik from '../resources/hardik_tiwari.jpeg'
import Gaurav from '../resources/gaurav_rajput.jpeg'
import Ashutosh from '../resources/ashutosh_kumar.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Namecard from './namecard';
import './teamnew.css'
export default function Slider3() {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className = "slider3">
            <h2 data-aos = "zoom-in" data-aos-once = "true">Operations and Sponsorship Team</h2>
        <Slider {...settings}>
                
                <div>
                <div className = "coord">
                
                <div className = "icon">
                    <img src = {amresh} alt="" />
                        <Namecard name = 'Amresh' link1 = "https://www.linkedin.com/in/aps-amresh/" link2 = "mailto:s.amresh@iitg.ac.in"/>
                    </div>
                    <div className = "icon">
                    <img src = {Athul} alt="" />
                        <Namecard name = 'Athul Krishna K' link1 = "https://www.linkedin.com/in/athul-krishna-k-688262223" link2 = "mailto:athul_2001me85@iitp.ac.in"/>
                    </div>
                    <div className = "icon">
                    <img src = {Harsha} alt="" />
                        <Namecard name = 'Harsh Agrawal' link1 = "www.linkedin.com/in/harshagrawal523/" link2 = "mailto:harshagrawal523@gmail.com"/>
                </div>
                </div>
                </div>
                
                <div>
                <div className = "coord">
                    <div className = "icon">
                        <img src = {Gunjan} alt="" />
                        <Namecard name = 'Gunjan Dhanuka' link1 = "https://www.linkedin.com/in/gunjan-dhanuka/" link2 = "mailto:lucifergd192@gmail.com"/>
                    </div>
                    <div className = "icon">
                        <img src = {Priyanshi} alt="" />
                        <Namecard name = 'Priyanshi Singh' link1 = "https://www.linkedin.com/in/priyanshi-singh-7362a4219/" link2 = "mailto:priyanshi152002@gmail.com"/>
                    </div>
                    <div className = "icon">
                        <img src = {Harsh} alt="" />
                        <Namecard name = 'Harshwardhan Bhakkad' link1 = "https://www.linkedin.com/in/harsh-bhakkad-12734a202" link2 = "mailto:h.bhakkad@iitg.ac.in"/>
                    </div>
                </div>
                </div>
                
                <div>
                <div className = "coord">
                    <div className = "icon">
                        <img src = {Soumadip} alt="" />
                        <Namecard name = 'Soumadip Das' link1 = "https://www.linkedin.com/in/soumadip-das-6031631b9/" link2 = "mailto:d.soumadip@iitg.ac.in"/>
                    </div>
                    <div className = "icon">
                    <img src = {Vani} alt="" />
                        <Namecard name = 'Vani Krishna Barla' link1 = "https://www.linkedin.com/in/vani-k-barla" link2 = "mailto:barlavani27@gmail.com"/>
                    </div>
                    <div className = "icon">
                        <img src = {Rajan} alt="" />
                        <Namecard name = 'Rajan Kumar' link1 = "https://www.linkedin.com/in/rajan-kumar-1296b9212" link2 = "mailto:rajan4705kr@gmail.com"/>
                    </div>
                </div>
                </div>

                <div>
                <div className = "coord">
                <div className = "icon">
                    <img src = {Pratham} alt="" />
                        <Namecard name = 'Pratham Kulkarni' link1 = "https://www.linkedin.com/in/pratham-kulkarni-81b24b223/" link2 = "mailto:prathamkulkarni08@gmail.com"/>
                    </div>
                    <div className = "icon">
                    <img src = {Hardik} alt="" />
                        <Namecard name = 'Hardik Tiwari' link1 = "https://www.linkedin.com/in/hardik-tiwari-153350218" link2 = "mailto:hardik_2001mm15@iitp.ac.in"/>
                    </div>
                    <div className = "icon">
                    <img src = {sarthak} alt="" />
                        <Namecard name = 'Sarthak Diwan' link1 = "https://www.linkedin.com/in/sarthak-diwan/" link2 = "mailto:s.diwan@iitg.ac.in"/>
                    </div>
                </div>
                </div>
                <div>
                <div className = "coord">
                <div className = "icon">
                    <img src = {Ashutosh} alt="" />
                        <Namecard name = 'Ashutosh Kumar' link1 = "https://www.linkedin.com/in/ashutosh-kumar-53b886211" link2 = "mailto:ashutosh_2001CS11@iitp.ac.in"/>
                </div>
                <div className = "icon">
                    <img src = {Khushi} alt="" />
                        <Namecard name = 'Khushi Prasad' link1 = "linkedin/khushi-prasad-7375a4217" link2 = "mailto:khushi_2001cs38@iitp.ac.in"/>
                    </div>
                <div className = "icon">
                    <img src = {Gaurav} alt="" />
                        <Namecard name = 'Gaurav' link1 = "https://www.linkedin.com/in/gaurav-rajput-00125a218" link2 = "mailto:gaurav_2001CB22@iitp.ac.in"/>
                    </div>
                
                
                </div>
                </div>
                  
            
           
        </Slider>
        </div>
      );
    
    
}
