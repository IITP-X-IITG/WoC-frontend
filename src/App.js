import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Navigation from './components/Navigation';
import Home from './pages/Home'
import ScrollButton from './components/ScrollButton'
import { Route, Switch, BrowserRouter} from 'react-router-dom';
//import Footer from './components/footer'
import Conduct from './pages/Conduct.js';
// import Leaderboard from './pages/leaderboard/Leaderboard';
import Leaderboard from './pages/leaderboard_temp';
import Project from './pages/Project';
import Team from './pages/Team/Team'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/conduct" component={Conduct}/>
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/project" component={Project} />
          <Route path="/team" component={Team}/>
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
      <ScrollButton/>
    </div>
  );
}

export default App;
