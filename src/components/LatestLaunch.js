/* Display latest launch from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import Launch from './Launch'; 


function LatestLaunch() {

  const [latestLaunch, setLatestLaunch] = useState([]); 
  const [launchImages, setLaunchImages] = useState([]); 
  const [video, setVideo] = useState(''); 
  const [reddit, setReddit] = useState(''); 
  
  useEffect(() => {

    axios.get('https://api.spacexdata.com/v3/launches/latest')
    .then(response => {
      console.log(response.data)
      setLatestLaunch(response.data)
      setLaunchImages(response.data.links.flickr_images)
      setVideo(response.data.links.video_link)
      setReddit(response.data.links.reddit_launch)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

  return (
    <Launch 
      title="Latest Launch"
      missionName={latestLaunch.mission_name}
      missionDate={latestLaunch.launch_date_unix}
      images={launchImages}
      missionDetails={latestLaunch.details}
      watch={video}
      reddit={reddit}
    />
  )
}


export default LatestLaunch
