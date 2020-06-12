/* Display upcoming launches from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
// import styled from 'styled-components'; 
// import Card from '../components/Card'; 



function Gallery() {

  const [pastLaunches, setPastLaunches] = useState([]); 
  
  
  useEffect(() => {

    axios.get('https://api.spacexdata.com/v3/launches/past')
    .then(response => {
      console.log(response.data)
      setPastLaunches(response.data)
      // setPastLaunches(response.data)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

  return (
    <div>
      {pastLaunches.map((launch) => (
        <img key={launch.mission_name} src={launch.links.flickr_images} alt=""/>
      ))}
    </div>
  )
}


export default Gallery