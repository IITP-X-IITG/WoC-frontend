import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import Animatedbg from "../../components/Animatedbg";
import "./reward.css";
import Aos from "aos";
import "aos/dist/aos.css";
//import {BsStarFill} from 'react-icons/bs';
import { useEffect } from "react";
import RewardComp from "../../components/Reward/RewardComp";
import Quine from "../Images/Quine1.svg";
import GfgLogo from "../Images/gfgLogo.png";
import NWocLogo from "../Images/nwoc logo.svg";
import CodingClubLogo from "../Images/iitglogo.svg";
import CodepeakLogo from "../Images/logo.png";
import antigranular from "../Images/sp_logo1.png"
import threeWay_studio from "../Images/sp_logo2.png"
export default function Reward() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div>
      <Animatedbg />
      <Navigation />
      <div className="reward_head">
        <h2 data-aos="zoom-in" data-aos-once="true">
          REWARDS AND PRIZES
        </h2>
        <hr />
      </div>
      <div className="rewardBox right" data-aos="fade-up" data-aos-once="true">
        <img src={antigranular} alt="" className="rewardLogo" />
        <RewardComp
          className="rewardComp"
          title="Antigranular"
          abt1="- 10 Swag Kits to Top participants in CodePeak, student mentors."
          abt2="- Fast Track to Internship for top performers of the Antigranular track."
          abt3="- Trip to Oxford for at least one participant."
        />
      </div>
      <div className="rewardBox left" data-aos="fade-up" data-aos-once="true">
        <img src={GfgLogo} alt="" className="rewardLogo" />
        <RewardComp
          className="rewardComp"
          title="Geeks For Geeks"
          abt1="- Top 3 Contributors will get Swag kits from GFG."
          abt2="- GFG coupons worth ₹300 to all participants who attend GFG session."
        />
      </div>
      <div className="rewardBox right" data-aos="fade-up" data-aos-once="true">
        <img src={threeWay_studio} alt="" className="rewardLogo" />
        <RewardComp
          className="rewardComp"
          title="Threeway Studio"
          abt1="- Swags and Merchandise to the top 5 winners and 5 mentors of the event."
          abt2="- NFT based Certificates, to all the winners and mentors."
        />
      </div>
      <div className="rewardBox left" data-aos="fade-up" data-aos-once="true">
        <img src={Quine} alt="" className="rewardLogo" />
        <RewardComp
          className="rewardComp"
          title="Quine"
          abt1="- Prize pool of $100 for top participants registered with Quine."
        />
      </div>
      <div className="rewardBox left" data-aos="fade-up" data-aos-once="true">
        <div className="rewImg">
          <img src={NWocLogo} alt="" className="rewardLogo" />
          <img src={CodingClubLogo} alt="" className="rewardLogo" />
        </div>
        <RewardComp
          className="rewardComp"
          title="NWoC IITP & Coding Club IITG"
          abt1="- Top performers will exclusively get free access to online courses/competitions offered by Coding Club IITG & NJACK IITP."
          abt2="- Top 10 students will be featured in CC IITG magazine - Debugged Editons!"
          abt3="- Top 10 students will be featured in our social media handles."
        />
      </div>
      <div className="rewardBox left" data-aos="fade-up" data-aos-once="true">
        <img src={CodepeakLogo} alt="" className="rewardLogo" />

        <RewardComp
          className="rewardComp"
          title="CODEPEAK"
          abt1="- Top 30 Contributors will get Codepeak Merchandise."
          abt2="- Mentors Will get exclusive Codepeak Merchandise."
          abt3="- Certificate of participation to all participants."
        />
      </div>

      <Footer />
    </div>
  );
}
