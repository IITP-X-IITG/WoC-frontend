import React from 'react'
import Navigation from '../components/Navigation'
import home_style from './Home.css'
import logo_codepeak from './Images/logocodepeak_rb.png'
import hill from './Images/websvgmt.svg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Timeline from '../components/timeline_block';
//import logo_codepeak from './Images/LOGOCODEPEAK.png'
//import CountUp from 'react-countup';
export default function Home() {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    return (
        <div style={home_style}>
            <Navigation/>
            <div class='stars'></div>
            <div class='twinkling'></div>
            {/* <div class='clouds'></div> */}
            <div className="logo">
                <img src={logo_codepeak} alt="" srcset="" className="logo_img" />
                <img src={hill} alt="" srcset="" className="hill_img"/>
            </div>
            {/* <div className="tst" style={{height:'1000px'}}> </div> */}
            {/* <CountUp delay={10} end={100} duration={5} style={{color:'white', zIndex:'2', position:'absolute'}} /> */}
            <div className="abt">
                <h1 data-aos="fade-up">About Us</h1>
                <hr/>
                <p data-aos="fade-up">
                    CODE PEAK is a month-long program that helps students understand the paradigm of Open Source contribution and 
                    gives them real-world software development experience. The event targets first-timers who wish to participate 
                    in Free and Open Source(FOSS) Contributions and the experienced developers who want to show their skills by 
                    contributing to real-world projects. 
                </p>
            </div>
            <div className="container nwoc_time">
            <div className="row">
                <div className="col">
                <div className="main-timeline">
                    <div className="timeline"  data-aos="fade-up">
                        < Timeline date='26 OCT' desc='Interested mentors sign up on the website and register their profile.' />
                    </div>

                    <div className="timeline" data-aos="fade-up">
                    < Timeline date='15 NOV.' desc='Student Registration starts.' />
                    </div>
                    <div className="timeline" data-aos="fade-up">
                    < Timeline date='20 NOV' desc='Mentor Registration ends.' />
                    </div>

                    <div className="timeline" data-aos="fade-up">
                    <Timeline date='26 NOV' desc='Organising team selects projects and announces them.'/>
                    </div>
                    <div className="timeline" data-aos="fade-up">
                        <Timeline date='28 NOV' desc='Orientation'/>
                    </div>
                    <div className="timeline" data-aos="fade-up">
                        <Timeline date='2 DEC' desc='Git and GitHub Workshop'/>
                    </div>
                    <div className="timeline" data-aos="fade-up">
                        <Timeline date='3 DEC' desc='Coding Period Starts.'/>
                    </div>
                    <div className="timeline" data-aos="fade-up">
                        <Timeline date='6 JAN' desc='Coding Period Ends.'/>
                    </div>
                    <div className="timeline" data-aos="fade-up">
                        <Timeline date='9 JAN' desc='Results Announcement and Closing Ceremony.'/>
                    </div>
                </div>
                </div>
            </div>
            </div>    
        </div>
    )
}
