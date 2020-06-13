/* Display upcoming launches from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import styled from 'styled-components'; 
// import Card from '../components/Card'; 

const ImgContainer = styled.div`
  margin: .5rem 0; 
`

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
        {launchImages.map((launch) => (
          <img src={launch} />
        ))}
      </div>
    )
  } else {
    return (
      <div><p>Loading...</p></div>
    )
  }
  
}


export default Gallery


/*
if(isLoaded) {
    return (
      <div>
        {pastLaunches.map((launch) => (
          <>
          {launch.links.flickr_images == '' ? null : 
            <ImgContainer key={launch.mission_name} >
              <img src={launch.links.flickr_images} alt=""/>
            </ImgContainer>
          }
          </>
        ))}
      </div>
    )
  }

*/