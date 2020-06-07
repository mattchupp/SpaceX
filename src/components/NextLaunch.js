/* Display latest launch from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import styled from 'styled-components'; 
import moment from 'moment'; 
// import { Typography } from '@material-ui/core';
// import TextBlock from './components/TextBlock';
import Launch from './Launch'; 


const Container = styled.div`
  margin: 2rem 0 0 0; 
`
const Title = styled.h1`
  font-weight: bold; 
  font-size: 2.6rem;
  margin-bottom: 1rem;
  margin-top: 4rem;
`
const Mission = styled.h3`
  font-weight: bold; 
  font-size: 1.6rem;
  margin-top: 2rem;
`
/*
const imgStyles = {
  'margin': '2rem 1rem 2rem 0',
  'height': '400px',
  'width': 'auto'
}
*/


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
      title="Latest Launch"
      missionName={nextLaunch.mission_name}
      missionDate={nextLaunch.launch_date_unix}
      missionDetails={nextLaunch.details}
    />
  )
}


export default NextLaunch