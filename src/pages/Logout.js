import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import AnimatedBG from '../components/Animatedbg';
import Footer from '../components/footer';
import '../components/Register/register.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useAuthStore} from "../store/authStore.jsx";

export default function Logout() {
    let navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);
    useEffect(() => {
        logout().then(() => {
            navigate('/');
        }).catch(() => {
            navigate('/');
        })
    }, [])
    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);
    return (
        <div>
            <AnimatedBG />
            <Navigation />
            <div className="slider">
                <h2 data-aos="zoom-in" data-aos-once="true">
                    Logout...
                </h2>
                <hr />
            </div>
            <Footer />
        </div>
    );
}
