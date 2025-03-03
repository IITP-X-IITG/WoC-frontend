import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedBG from '../components/Animatedbg';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MentorDashboard from '../components/MentorDashboard';
import { useAuthStore } from '../store/authStore';

export default function MentorProfile() {
    React.useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    const { user, logout } = useAuthStore((state) => state);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/'); 
        } catch (error) {
            console.error('Logout Error:', error);
            alert('Failed to log out. Please try again.');
        }
    };
    const handleForgotPassword = () => {

        navigate('/changePassword');
    };

    return (
        <div className="flex">


            {/* Main Content */}
            <div className="flex-1">
                <AnimatedBG />
                <Navigation />

                <div className="slider p-4">
                    <h2 data-aos="zoom-in" data-aos-once="true">
                        YOUR DASHBOARD
                    </h2>
                    {/* Sidebar */}
                    <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                    <button style={{   color: 'white',textAlign: 'left', padding: '8px 16px', backgroundColor: '#374151', borderRadius: '4px', cursor: 'pointer' }} 
                        onMouseOver={(e) => e.target.style.backgroundColor = '#4b5563'} 
                        onMouseOut={(e) => e.target.style.backgroundColor = '#374151'} 
                        onClick={handleForgotPassword}>
                        Forgot Password
                    </button>
                    <button style={{ textAlign: 'left', padding: '8px 16px', backgroundColor: '#dc2626', borderRadius: '4px', cursor: 'pointer', color: 'white' }} 
                        onMouseOver={(e) => e.target.style.backgroundColor = '#ef4444'} 
                        onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'} 
                        onClick={handleLogout}>
                        Logout
                    </button>
                </div>
                    <hr />
                </div>

                <MentorDashboard
                    mentorGit={user?.github || ''}
                    email={user?.email || ''}
                />

                <Footer />
            </div>
        </div>
    );
}
