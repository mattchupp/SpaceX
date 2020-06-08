/* Display latest launch from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import Launch from './Launch'; 
import moment from 'moment'; 


function NextLaunch() {

  const [nextLaunch, setNextLaunch] = useState([]); 
  
  useEffect(() => {

    axios.get('https://api.spacexdata.com/v3/launches/next')
    .then(response => {
      console.log(response.data)
      setNextLaunch(response.data)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

  return (
    <Launch 
      title="Next Launch"
      missionName={nextLaunch.mission_name}
      missionDate={nextLaunch.launch_date_unix}
      missionDetails={nextLaunch.details}
    />
  )
}


export default NextLaunch
