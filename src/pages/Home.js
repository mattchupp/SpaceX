
/* Homepage */
import React from 'react'; 
import LatestLaunch from '../components/LatestLaunch';
import NextLaunch from '../components/NextLaunch'; 
import Countdown from '../components/LaunchCountdown';
// import dm2Launch from '../images/dm2_launch.jpg'; 
// import styled from 'styled-components'; 
import '../App.css';

const img = {
  'width': '100%', 
  'height': '100%',
}


function Home() {

  return (
    <div>
      <div className="splash-container">
        {/* <img src={dm2Launch} style={img} alt="spacex launch"/> */}
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


