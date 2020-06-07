/* Display latest launch from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import styled from 'styled-components'; 
import moment from 'moment'; 
import TextBlock from './TextBlock';
import { Typography } from '@material-ui/core';


const Container = styled.div`
  margin: 2rem 0 0 0; 
`

const imgStyles = {
  'margin': '2rem 1rem 1rem 0',
  'height': '400px',
  'width': 'auto'
}


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

  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>Latest Launch</Typography>
      <hr />
      <Typography variant="h2" component="h2">{latestLaunch.mission_name}</Typography>
      <Typography variant="body1" gutterBottom>
        {moment.unix(latestLaunch.launch_date_unix).format("LLLL")} 
      </Typography>
      {launchImages.map((img) => (
        <img style={imgStyles} src={img} alt="launch" />
      ))}
      <TextBlock>{latestLaunch.details}</TextBlock>   
    </Container>
  )
}


export default LatestLaunch