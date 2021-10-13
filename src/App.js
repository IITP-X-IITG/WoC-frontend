//import logo from './logo.svg';
import './App.css';
//import Navigation from './components/Navigation';
import Home from './pages/Home'
import ScrollButton from './components/ScrollButton'
import { Route, Switch, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
      <ScrollButton/>
    </div>
  );
}

export default App;
