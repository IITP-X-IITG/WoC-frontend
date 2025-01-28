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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register/studentRegistration" element={<StudentRegistration />} />
          <Route path="/register/mentorRegistration" element={<MentorRegistration />} />
          <Route path="/register/confirmation" element={<Confirmation />} />
          <Route path="/register" element={<Conduct />} />
          <Route path="/leaderboard/weekly" element={<WeeklyBoard />} />
          <Route path="/leaderboard/weekly2" element={<WeeklySecond />} />
          <Route path="/leaderboard/weekly3" element={<WeeklyThird />} />
          <Route path="/leaderboard" element={<LeaderboardMain />} />
          <Route path="/points/:id" element={<PointsMain />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/reward" element={<Reward />} />
          <Route path='/events' element={<Events />} />
        </Routes>
      </BrowserRouter>
      <ScrollButton />
    </div>
  );
}
export default App;
