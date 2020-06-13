/* Display upcoming launches from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
// import styled from 'styled-components'; 
import Carousel from '../components/Carousel'; 



function Gallery() {

  const [pastLaunches, setPastLaunches] = useState([]); 
  const [isLoaded, setIsLoaded] = useState(false); 
  const [launchImages, setLaunchImages] = useState([]); 
  
  
  useEffect(() => {

    axios.get('https://api.spacexdata.com/v3/launches/past')
    .then(response => {
      // console.log(response.data)
      setPastLaunches(response.data)
      setIsLoaded(true)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

  /* 
    After response is loaded push just image links to luanchImages
  */
  useEffect(() => {

    const imageArray = []
    pastLaunches.map((launch) => {
      imageArray.push(launch.links.flickr_images)
    })

    setLaunchImages(imageArray)
    // console.log(imageArray)

  }, [pastLaunches])

  if(isLoaded) {
    return (
      <div>
        <Carousel images={launchImages} />
      </div>
    )
  } else {
    return (
      <div><p>Loading...</p></div>
    )
  }
  
}


export default Gallery
