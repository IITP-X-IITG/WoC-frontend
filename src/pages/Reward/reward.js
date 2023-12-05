import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/footer';
import Animatedbg from '../../components/Animatedbg';
import './reward.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
//import {BsStarFill} from 'react-icons/bs';
import { useEffect } from 'react';
import RewardComp from '../../components/Reward/RewardComp';
import Antigranularlogo from '../Images/Antigranularlogo.png';
import GfgLogo from '../Images/gfgLogo.png';
import ThreewayLogo from '../Images/ThreewayLogo.png';
import NWocLogo from '../Images/nwoc logo.svg';
import CodingClubLogo from '../Images/iitglogo.svg';
import QuineLogo from '../Images/QuineLogo.svg';
import CodepeakLogo from '../Images/logo.png';
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
                </h2>a
                <hr />
            </div>
            <div className="rewardBox right" data-aos="fade-up" data-aos-once="true">
                <img src={QuineLogo} alt="" className="rewardLogo" />
                <RewardComp
                    className="rewardComp"
                    title="Quine"
                    abt1="- 100$ to top 3 participants with quine account!"
                    
                />
            </div>
            <div className="rewardBox left" data-aos="fade-up" data-aos-once="true">
                <img src={GfgLogo} alt="" className="rewardLogo" />
                <RewardComp
                    className="rewardComp"
                    title="Geeks For Geeks"
                    abt1="- GFG Swag kits to top 3 participants!"
                    
                />
            </div>
            <div className="rewardBox right" data-aos="fade-up" data-aos-once="true">
                <img src={Antigranularlogo} alt="" className="rewardLogo" />
                <RewardComp
                    className="rewardComp"
                    title="Antigranular"
                    abt1="- Oxford Trip and fast track internship to top contributors"
                    abt2="- Swag kits to top participants!"
                />
            </div>
            <div className="rewardBox left" data-aos="fade-up" data-aos-once="true">
                <img src={ThreewayLogo} alt="" className="rewardLogo" />
                <RewardComp
                    className="rewardComp"
                    title="Threeway Studio"
                    abt1="- Swag kits to top participants!"
                />
            </div>
            
            <div className="rewardBox right" data-aos="fade-up" data-aos-once="true">
                <img src={CodepeakLogo} alt="" className="rewardLogo" />

                <RewardComp
                    className="rewardComp"
                    title="CODEPEAK"
                    abt1="- Top 30 Contributors and mentors will get Codepeak Merchandise."
                    
                />
            </div>

            <Footer />
        </div>
    );
}

