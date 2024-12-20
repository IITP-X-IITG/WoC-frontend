import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedBG from '../components/Animatedbg';
import Footer from '../components/footer';
import MentorForm from '../components/Register/MentorForm'
import '../components/Register/register.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Team() {
    React.useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);
    return (
        <div>
            <AnimatedBG />
            <Navigation />
            <div className="slider">
                <h2 data-aos="zoom-in" data-aos-once="true">
                    MENTOR REGISTRATION
                </h2>
                <hr />
            </div>
            
                <MentorForm/>

            <Footer />
        </div>
    );
}
