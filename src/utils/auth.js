import { useEffect } from "react";
import {useAuthStore} from "../store/authStore.jsx";
import { useNavigate } from 'react-router-dom';
export const RedirectAuthenticatedUser = ({ children, href }) => {
    let navigate = useNavigate();
    const {isAuthenticated} = useAuthStore((state) => state);
    useEffect(() => {
        if (isAuthenticated) navigate(href || '/');
    }, [isAuthenticated])
    return children;
};
export const ProtectedRoutes = ({ children, href, mentor, student }) => {
    let navigate = useNavigate();
    const {isAuthenticated, isMentor} = useAuthStore((state) => state);
    useEffect(() => {
        if (isAuthenticated && mentor!==undefined && !isMentor) navigate(href || '/');
        if (isAuthenticated && student!==undefined && isMentor) navigate(href || '/');
        if (!isAuthenticated) navigate(href || '/');
    }, [isAuthenticated])
    return children;
};