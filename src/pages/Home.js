
/* Homepage */
import React from 'react'; 
import LatestLaunch from '../components/LatestLaunch';
import NextLaunch from '../components/NextLaunch'; 
import dm2Launch from '../images/dm2_launch.jpg'; 
// import '../App.css'

const img = {
  'width': '100%', 
  'height': '80vh'
}

function Home() {

  return (
    <div>
      <img src={dm2Launch} style={img} alt="spacex launch"/>
      <div className="container">
        <LatestLaunch />
        <NextLaunch />
      </div>
    </div>
    
  )
}


export default Home


