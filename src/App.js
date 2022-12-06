import React from 'react';
import './App.css';
import Home from './pages/Home';
import ScrollButton from './components/ScrollButton';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Conduct from './pages/Conduct/Conduct.js';
import LeaderboardMain from './pages/Leaderboard.js';
import PointsMain from './pages/points.js';
import Project from './pages/Projects/Project';
import Team from './pages/Team';
import Reward from './pages/Reward/reward';
import ScrollToTop from './components/ScrollToTop';
import Events from './pages/events/events';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Conduct}/>
          <Route path="/leaderboard" component={LeaderboardMain} />
          <Route path="/points/:id" component={PointsMain} />
          <Route path="/project" component={Project} />
          <Route path="/team" component={Team} />
          <Route path="/reward" component={Reward} />
          <Route path='/events' component={Events}/>
        </Switch>
      </BrowserRouter>
      <ScrollButton/>
    </div>
  );
}
export default App;