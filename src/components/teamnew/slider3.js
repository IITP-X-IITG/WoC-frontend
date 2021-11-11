import React from 'react'
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
                        <img src = {Rajan}/>
                        <Namecard name = 'Rajan Kumar' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:madhur.nilu@gmail.com"/>
                    </div>
                    <div className = "icon">
                    <img src = {Harsh}/>
                        <Namecard name = 'Harshwardhan Bhakkad' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:atishayjain@iitg.ac.in"/>
                    </div>
                    <div className = "icon">
                    <img src = {Khushi}/>
                        <Namecard name = 'Khushi Prasad' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:atishayjain@iitg.ac.in"/>
                    </div>
                </div>
                </div>
                <div>
                <div className = "coord">
                    <div className = "icon">
                        <img src = {Priyanshi}/>
                        <Namecard name = 'Priyanshi Singh' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:madhur.nilu@gmail.com"/>
                    </div>
                    <div className = "icon">
                    <img src = {Athul}/>
                        <Namecard name = 'Athul Krishna K' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:atishayjain@iitg.ac.in"/>
                    </div>
                    <div className = "icon">
                    <img src = {Pratham}/>
                        <Namecard name = 'Pratham Kulkarni' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:atishayjain@iitg.ac.in"/>
                    </div>
                </div>
                </div>
                <div>
                <div className = "coord">
                    <div className = "icon">
                        <img src = {Soumadip}/>
                        <Namecard name = 'Soumadip Das' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:madhur.nilu@gmail.com"/>
                    </div>
                    <div className = "icon">
                    <img src = {Vani}/>
                        <Namecard name = 'Vani Krishna Barla' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:atishayjain@iitg.ac.in"/>
                    </div>
                    <div className = "icon">
                    <img src = {Harsha}/>
                        <Namecard name = 'Harsh Agrawal' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:atishayjain@iitg.ac.in"/>
                    </div>
                </div>
                </div>
                <div>
                <div className = "coord">
                    <div className = "icon">
                        <img src = {Gunjan}/>
                        <Namecard name = 'Gunjan Dhanuka' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:madhur.nilu@gmail.com"/>
                    </div>
                    <div className = "icon">
                    <img src = {Hardik}/>
                        <Namecard name = 'Hardik Tiwari' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:atishayjain@iitg.ac.in"/>
                    </div>
                </div>
                </div>
            
           
        </Slider>
        </div>
      );
    
    
}
