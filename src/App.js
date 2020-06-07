import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import History from './pages/History'; 
import Home from './pages/Home'; 
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
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
