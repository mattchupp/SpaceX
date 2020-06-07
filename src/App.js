import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import History from './History'; 
import LatestLaunch from './LatestLaunch'; 
import NextLaunch from './NextLaunch'; 
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <LatestLaunch />
              <NextLaunch />
            </div>
          </Route>

  

          <Route exact path="/history">
            <div className="container">
              <History />
            </div>
          </Route>

        </Switch>
      </Router>

      {/* <History /> */}
    </div>
  );
}

export default App;
