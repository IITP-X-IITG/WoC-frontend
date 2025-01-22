import React from 'react';
import './App.css';
import Home from './pages/Home';
import ScrollButton from './components/ScrollButton';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register/studentRegistration" component={StudentRegistration} />
          <Route path="/register/mentorRegistration" component={MentorRegistration} />
          <Route path="/register/confirmation" component={Confirmation} />
          <Route path="/register" component={Conduct} />
          <Route path="/leaderboard/weekly" component={WeeklyBoard} />
          <Route path="/leaderboard/weekly2" component={WeeklySecond} />
          <Route path="/leaderboard/weekly3" component={WeeklyThird} />
          <Route path="/leaderboard" component={LeaderboardMain} />
          <Route path="/points/:id" component={PointsMain} />
          <Route path="/project" component={Project} />
          <Route path="/team" component={Team} />
          <Route path="/reward" component={Reward} />
          <Route path='/events' component={Events} />
        </Switch>
      </BrowserRouter>
      <ScrollButton />
    </div>
  );
}
export default App;