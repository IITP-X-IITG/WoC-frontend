import React from 'react'
import Navigation from '../components/Navigation'
import Animatedbg from '../components/Animatedbg'
import Coordinators from '../components/teamnew/Coordinators'
import Tech from '../components/teamnew/Tech'
import Sponsorship from '../components/teamnew/Sponsorship'
import Footer from '../components/footer'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Teamnew() {
    React.useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    return (
        <div>
            <Animatedbg/>
            <Navigation/>
            <div className = "slider">
            <h2 data-aos = "zoom-in" data-aos-once = "true">TEAM 2021</h2>
            <hr/>
            </div>
            <div className = "combined">
            <Coordinators/>
            <Tech/>
            <Sponsorship/>
            </div>
            <Footer/>
        </div>
    )
}
