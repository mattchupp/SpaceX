/* Display upcoming launches from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import styled from 'styled-components'; 
// import Card from '../components/Card'; 

const ImgContainer = styled.div`
  margin: .5rem 0; 
  border: 1px solid red; 
`

function Gallery() {

  const [pastLaunches, setPastLaunches] = useState([]); 
  const [isLoaded, setIsLoaded] = useState(false)
  
  
  useEffect(() => {

    axios.get('https://api.spacexdata.com/v3/launches/past')
    .then(response => {
      console.log(response.data)
      setPastLaunches(response.data)
      setIsLoaded(true)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

  const border = {
    'border': '1px solid white'
  }

  if(isLoaded) {
    return (
      <div style={border}>
        {pastLaunches.map((launch) => (
          <>
          {launch.links.flickr_images == '' ? null : 
            <ImgContainer>
              <img key={launch.mission_name} src={launch.links.flickr_images} alt=""/>
            </ImgContainer>
          }
          </>
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