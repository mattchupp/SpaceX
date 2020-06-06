/* Display latest launch from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import styled from 'styled-components'; 
import moment from 'moment'; 


const Container = styled.div`
  margin: 2rem 0 0 0; 

`
const Title = styled.h2`
  font-weight: bold; 
  font-size: 2rem;
  margin-bottom: 1rem;
`
const Mission = styled.h3`
  font-weight: bold; 
  font-size: 1.6rem;
  margin-top: 2rem;
`
const Details = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
`



function LatestLaunch() {

  const [latestLaunch, setLatestLaunch] = useState([]); 
  const [launchImages, setLaunchImages] = useState([]); 
  
  useEffect(() => {

    axios.get('https://api.spacexdata.com/v3/launches/latest')
    .then(response => {
      console.log(response.data)
      setLatestLaunch(response.data)
      setLaunchImages(response.data.links.flickr_images)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

  const imgStyles = {
    'margin': '2rem 1rem 2rem 0',
    'height': '400px',
    'width': 'auto'
  }

  return (
    <Container>
      <Title>Latest Launch</Title>
      <hr />
      <Mission>{latestLaunch.mission_name}</Mission>
      <p>{moment.unix(latestLaunch.launch_date_unix).format("LLLL")}</p>
      {launchImages.map((img) => (
        <img style={imgStyles} src={img} />
      ))}
      <Details>{latestLaunch.details}</Details>
      
      
      
    </Container>
  )
}


export default LatestLaunch