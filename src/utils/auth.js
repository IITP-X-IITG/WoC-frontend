import { useEffect } from "react";
import {useAuthStore} from "../store/authStore.jsx";
import { useNavigate } from 'react-router-dom';

export const RedirectAuthenticatedUser = ({ children, href }) => {
    let navigate = useNavigate();
    const {isAuthenticated, isMentor} = useAuthStore((state) => state);
    
    useEffect(() => {
        if (isAuthenticated) {
            if (isMentor) {
                navigate('/mentorProfile');
            } else {
                navigate('/studentProfile');
            }
        }
    }, [isAuthenticated, isMentor, navigate])
    
    return children;
};

export const ProtectedRoutes = ({ children, href, mentor, student }) => {
    let navigate = useNavigate();
    const {isAuthenticated, isMentor} = useAuthStore((state) => state);
    
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        } else if (mentor && !isMentor) {
            // User is not a mentor but route requires mentor
            navigate('/studentProfile');
        } else if (student && isMentor) {
            // User is not a student but route requires student
            navigate('/mentorProfile');
        }
    }, [isAuthenticated, isMentor, navigate, mentor, student, href])
    
    return children;
};