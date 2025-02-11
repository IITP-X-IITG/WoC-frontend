import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedBG from '../components/Animatedbg';
import Footer from '../components/footer';
import ConfirmMessage from '../components/Register/ConfirmMessage';
import '../components/Register/register.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Confirmation() {
    React.useEffect(() => {
        Aos.init({ duration: 400 });
    }, []);
    return (
        <div>
            <AnimatedBG />
            <Navigation />
            <hr />
            <ConfirmMessage/>
            <Footer />
        </div>
    );
}
