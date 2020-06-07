
/* Homepage */
import React from 'react'; 
import LatestLaunch from '../components/LatestLaunch';
import UpcomingLaunch from '../components/UpcomingLaunch'; 

function Home() {

  return (
    <div className="container">
      <LatestLaunch />
      <UpcomingLaunch />
    </div>
  )
}


export default Home


