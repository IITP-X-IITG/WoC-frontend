import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import home_style from './Home.css';
import logo_codepeak from './Images/logo.png';
import hill from './Images/mtpnggg.png';
import clueless from './Images/clueless.png';
import antigranular from './Images/sp_logo1.png';
import threeWay_studio from './Images/sp_logo2.png';
import dagshub from './Images/dagshub.png';
import grabtern from './Images/Grabtern.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Timeline from '../components/Timeline';
//import ScrollButton from '../components/ScrollButton'
import Footer from '../components/footer';
//import git from '../pages/Images/GitHub-Mark.png'
import { VscGithubInverted } from 'react-icons/vsc';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CgGitPull } from 'react-icons/cg';
import { FaUniversity } from 'react-icons/fa';
import gfgLogo from '../pages/Images/gfgLogo.png';
import quineLogo from '../pages/Images/quine_blue.svg';
import osLogo from '../pages/Images/OS_logo.png';
import taskadeLogo from '../pages/Images/taskadeLogo.png';
import foss from '../pages/Images/logo-for-hackathon-organisers.svg';
import njackLogo from '../pages/Images/NJACK logo.svg'
import guwLogo from '../pages/Images/iitglogo.svg';
//import logo_codepeak from './Images/LOGOCODEPEAK.png'
import CountUp from '../components/Counter_up';
import Animatedbg from '../components/Animatedbg';
import Counter from '../components/PRcounter/Counter';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <>
      <div style={home_style}>
        <Navigation />
        <Animatedbg />
        <marquee
          id="marq"
          behavior="scroll"
          direction="left"
          scrollamount="10"
          style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '70px',
          }}
        >
          CODEPEAK 2024-25 COMING SOON! The mentor registrations has been started.
          <Link to="/register/mentorRegistration" style={{ textDecoration: 'none', color: '#99c1e7' }}>
            {' '}
            Check Here{' '}
          </Link>{' '}
        </marquee>

        {/* ---------LOGO----------- */}
        <div className="logo">
          <img
            src={logo_codepeak}
            alt=""
            srcSet=""
            className="logo_img"
            data-aos="zoom-in"
            data-aos-once="true"
          />
          <p>Organized By</p>
          <div className="main_spons_box">
            <div className="spons_box_1">
              <a href="https://njack.iitp.ac.in/" target="_blank" rel="noreferrer">
                <img
                  src={njackLogo}
                  alt=""
                  srcSet=""
                  className="main_spons_img"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
              </a>
              <a href="https://codingiitg.github.io/" target="_blank" rel="noreferrer">
                <img
                  src={guwLogo}
                  alt=""
                  srcSet=""
                  className="main_spons_img3"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
              </a>

            </div>
          </div>
          {/* <div className="main_spons_box">
            <div className="spons_box_1">
              <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer">
                <img
                  src={gfgLogo}
                  alt=""
                  srcSet=""
                  className="main_spons_img"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
              </a>
              <a href="https://www.antigranular.com/" rel="noreferrer" target="_blank">
                <img
                  src={antigranular}
                  alt=""
                  srcSet=""
                  className="main_spons_img"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
              </a>

              <a href="https://www.threewaystudio.world/" target="_blank" rel="noreferrer">
                <img
                  src={threeWay_studio}
                  alt=""
                  srcSet=""
                  className="main_spons_img1"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
              </a>
            </div>
            <div className="spons_box_2">

              <a href="https://quine.sh/" target="_blank" rel="noreferrer">
                <img
                  src={quineLogo}
                  alt=""
                  srcSet=""
                  className="main_spons_img1"
                  data-aos="zoom-in"
                  data-aos-once="true"
                  style={{ height: '40px', width: 'auto' }}
                />
              </a>
              <a href="https://www.linkedin.com/company/os-community/" target="_blank" rel="noreferrer">
                <img
                  src={osLogo}
                  alt=""
                  srcSet=""
                  className="main_spons_img1"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
              </a>
              <a href="https://fossunited.org/" target="_blank" rel="noreferrer">
                <img
                  src={foss}
                  alt=""
                  srcSet=""
                  className="main_spons_img1"
                  data-aos="zoom-in"
                  data-aos-once="true"
                  style={{ height: '76px', width: 'auto', opacity: '85%' }}
                />
              </a>
            </div>
          </div> */}
          <img src={hill} alt="" srcSet="" className="hill_img" />
        </div>

        {/* -------------ABOUT US------------------- */}
        <div className="abt">
          <h1 data-aos="fade-up" data-aos-once="true">
            About Us
          </h1>
          <hr />
          <p data-aos="fade-up" data-aos-once="true">
            CODE PEAK is a month-long program that helps students understand the paradigm of Open Source
            contribution and gives them real-world software development experience. The event targets
            first-timers who wish to participate in Free and Open Source(FOSS) Contributions and the
            experienced developers who want to show their skills by contributing to real-world projects.
          </p>
        </div>

        {/* ----------TIMELINE-------------- */}
        <div className="container nwoc_time">
          <div className="head_time">
            <p>Timeline</p>
            <hr />
          </div>
          <div className="row">
            <div className="col">
              <div className="main-timeline">
                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="8 JAN" desc="Mentors Registration Starts" />
                </div>

                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="22 JAN" desc="Student Registration starts." />
                </div>

                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="8 FEB" desc="Mentor Registration ends" />
                </div>

                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="6 MAR" desc="Orientation Session" />
                </div>
                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="7 MAR" desc="Git & Github Workshop" />
                </div>
                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="8 MAR" desc="Coding Period Starts" />
                </div>
                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="15 MAR" desc="First Week Leaderboard" />
                </div>
                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="22 MAR" desc="Second Week Leaderboard" />
                </div>
                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="29 MAR" desc="Third Week Leaderboard" />
                </div>
                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="29 MAR" desc="Coding Period Ends" />
                </div>
                <div className="timeline" data-aos="fade-up" data-aos-once="true">
                  <Timeline date="1 APR" desc="Closing Ceremony" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter of Pull requests */}
        <Counter />

        {/* ---------------PAST STATISTICS---------------- */}
        <div className="head_stats">
          <p data-aos="zoom-in" data-aos-once="true">
            Past Statistics
          </p>
          <hr />
        </div>
        <div className="counter">
          <div className="count_block c1" style={{ background: 'rgb(16, 31, 46)' }}>
            <VscGithubInverted />
            <CountUp end="6000" />
            <p>Participants</p>
          </div>
          <div className="count_block c2" style={{ background: 'rgb(18, 34, 51)' }}>
            <CgGitPull />
            <CountUp end="4200" />
            <p>Pull Requests</p>
          </div>
          <div className="count_block c3" style={{ background: 'rgb(21, 38, 56)' }}>
            <AiOutlineFundProjectionScreen />
            <CountUp end="180" />
            <p>Projects Done</p>
          </div>
          <div className="count_block c4" style={{ background: 'rgb(23, 44, 66)' }}>
            <FaUniversity />
            <CountUp end="350" />
            <p>Universities</p>
          </div>
        </div>

        {/* ----------SPONSORS------------- */}
        <div className="head_stats">
          <p data-aos="zoom-in" data-aos-once="true">
            Past Sponsors
          </p>
          <hr />
        </div>

        <div className="past_spons_box">
          <div className="past_spons_box_1">
            <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer">
              <img
                src={gfgLogo}
                alt=""
                srcSet=""
                className="main_spons_img"
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </a>
            <a href="https://www.antigranular.com/" rel="noreferrer" target="_blank">
              <img
                src={antigranular}
                alt=""
                srcSet=""
                className="main_spons_img"
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </a>

            <a href="https://www.threewaystudio.world/" target="_blank" rel="noreferrer">
              <img
                src={threeWay_studio}
                alt=""
                srcSet=""
                className="main_spons_img1"
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </a>
          </div>
          <div className="past_spons_box_2">

            <a href="https://www.clueless.tech/" target="_blank" rel="noreferrer">
              <img
                src={clueless}
                alt=""
                srcSet=""
                className="main_spons_img1"
                data-aos="zoom-in"
                data-aos-once="true"
                style={{ height: '100px', width: 'auto' }}
              />
            </a>


            <a href="https://www.linkedin.com/company/os-community/" target="_blank" rel="noreferrer">
              <img
                src={osLogo}
                alt=""
                srcSet=""
                className="main_spons_img1"
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </a>
            <a href="https://fossunited.org/" target="_blank" rel="noreferrer">
              <img
                src={foss}
                alt=""
                srcSet=""
                className="main_spons_img1"
                data-aos="zoom-in"
                data-aos-once="true"
                style={{ height: '76px', width: 'auto', opacity: '85%' }}
              />
            </a>
          </div>

          <div className="past_spons_box_3">

            <a href="https://quine.sh/" target="_blank" rel="noreferrer">
              <img
                src={quineLogo}
                alt=""
                srcSet=""
                className="main_spons_img1"
                data-aos="zoom-in"
                data-aos-once="true"
                style={{ height: '40px', width: 'auto' }}
              />
            </a>

            <a href="https://dagshub.com/" target="_blank" rel="noreferrer">
              <img
                src={dagshub}
                alt=""
                srcSet=""
                className="main_spons_img1"
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </a>

            <a href="https://www.taskade.com/" target="_blank" rel="noreferrer">
              <img
                src={taskadeLogo}
                alt=""
                srcSet=""
                data-aos="zoom-in"
                data-aos-once="true"
                style={{ height: '60px', width: 'auto' }}
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
