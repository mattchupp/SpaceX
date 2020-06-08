
/* Homepage */
import React from 'react'; 
import LatestLaunch from '../components/LatestLaunch';
import NextLaunch from '../components/NextLaunch'; 
import Countdown from '../components/LaunchCountdown';
import '../App.css';


function Home() {

  return (
    <div>
      <div className="splash-container">
        <Countdown />
      </div>
      <div className="container">
        <LatestLaunch />
        <NextLaunch />
      </div>
    </div>
    
  )
}


export default Home


