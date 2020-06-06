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

function App() {
  return (
    <div className="container">
      
      <Router>
        <Switch>

          <Route exact path="/">
            <h1>SpaceX Stuff</h1>
            <Link to="/history">View History</Link>
            <LatestLaunch />
          </Route>

  

          <Route exact path="/history">
            <History />
          </Route>

        </Switch>
      </Router>

      {/* <History /> */}
    </div>
  );
}

export default App;
