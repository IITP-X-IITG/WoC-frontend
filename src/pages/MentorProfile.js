import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedBG from '../components/Animatedbg';
import Footer from '../components/footer';

import Aos from 'aos';
import 'aos/dist/aos.css';
import MentorDashboard from '../components/MentorDashboard';


export default function StudentProfile() {
    React.useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);
    return (
        <div>
            <AnimatedBG />
            <Navigation />
            <div className="slider">
                <h2 data-aos="zoom-in" data-aos-once="true">
                    YOUR DASHBOARD
                </h2>
                <hr />
            </div>
            
                <MentorDashboard/>
                
            <Footer />
        </div>
    );
}
