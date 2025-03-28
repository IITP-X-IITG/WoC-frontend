import React from 'react';
import './App.css';
import Home from './pages/Home';
import ScrollButton from './components/ScrollButton';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Conduct from './pages/Conduct/Conduct.js';
import StudentRegistration from './pages/StudentRegistration.js'
import MentorRegistration from './pages/MentorRegistration.js'
import LeaderboardMain from './pages/Leaderboard.js';
import WeeklyBoard from './pages/Leaderboard_weekly';
import WeeklySecond from './pages/Leaderboard_Weekly2';
import WeeklyThird from './pages/Leaderboard_weekly3';
import PointsMain from './pages/points.js';
import Project from './pages/Projects/Project';
import Team from './pages/Team';
import Reward from './pages/Reward/reward';
import ScrollToTop from './components/ScrollToTop';
import Events from './pages/events/events';
import Confirmation from './pages/Confimation.js';
import Login from './pages/Login';
import Logout from './pages/Logout';
import StudentProfile from './pages/StudentProfile';
import MentorProfile from './pages/MentorProfile';
import ChangePassword from './pages/ChangePassword.js';
import {useAuthStore} from "./store/authStore.jsx";
import { useEffect } from 'react';
import {RedirectAuthenticatedUser, ProtectedRoutes} from "./utils/auth.js"

function App() {
  const {checkAuth, isLoading, isCheckingAuth} = useAuthStore((state) => state);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // if (isCheckingAuth || isLoading) return <div className="loading-container">Loading...</div>;

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register/studentRegistration" element={<RedirectAuthenticatedUser><StudentRegistration /></RedirectAuthenticatedUser>} />
          <Route path="/register/mentorRegistration" element={<RedirectAuthenticatedUser><MentorRegistration /></RedirectAuthenticatedUser>} />
          <Route path="/register/confirmation" element={<RedirectAuthenticatedUser><Confirmation /></RedirectAuthenticatedUser>} />
          <Route path="/register" element={<Conduct />} />
          <Route path="/leaderboard/weekly" element={<WeeklyBoard />} />
          <Route path="/leaderboard/weekly2" element={<WeeklySecond />} />
          <Route path="/leaderboard/weekly3" element={<WeeklyThird />} />
          <Route path="/leaderboard" element={<LeaderboardMain />} />
          <Route path="/points/:id" element={<PointsMain />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/reward" element={<Reward />} /> */}
          <Route path='/events' element={<Events />} />
          <Route path='/login' element={<RedirectAuthenticatedUser><Login /></RedirectAuthenticatedUser>} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/studentProfile' element={<ProtectedRoutes student={true}><StudentProfile /></ProtectedRoutes>} />
          <Route path='/mentorProfile' element={<ProtectedRoutes mentor={true}><MentorProfile /></ProtectedRoutes>} />
          <Route path='/changePassword' element={<ProtectedRoutes><ChangePassword /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
      <ScrollButton />
    </div>
  );
}
export default App;
