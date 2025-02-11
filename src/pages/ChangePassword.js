import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedBG from '../components/Animatedbg';
import Footer from '../components/footer';
import '../components/Register/register.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import LoginForm from '../components/LoginForm';
import ChangePasswordForm from '../components/ChangePasswordForm';


export default function ChangePassword() {
    React.useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);
    return (
        <div>
            <AnimatedBG />
            <Navigation />
            <div className="slider">
                <h2 data-aos="zoom-in" data-aos-once="true">
                    LOGIN
                </h2>
                <hr />
            </div>
            
                <ChangePasswordForm/>

            <Footer />
        </div>
    );
}
