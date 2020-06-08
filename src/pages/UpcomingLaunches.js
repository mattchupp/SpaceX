/* Display upcoming launches from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import styled from 'styled-components'; 
import LaunchCard from '../components/LaunchCard'; 


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

const imgStyles = {
  'margin': '2rem 1rem 2rem 0',
  'height': '400px',
  'width': 'auto'
}


function UpcomingLaunches() {

  const [upcomingLaunches, setUpcomingLaunches] = useState([]); 
  
  
  useEffect(() => {

    axios.get('https://api.spacexdata.com/v3/launches/upcoming')
    .then(response => {
      console.log(response.data)
      setUpcomingLaunches(response.data)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

  return (
    <div>
      <Title>History</Title>
      {upcomingLaunches.map((event) => (
        <LaunchCard 
          key={event.id}
          title={event.title}
          date={event.event_date_unix}
          details={event.details}
          reddit={event.links.reddit}
          article={event.links.article}
          wikipedia={event.links.wikipedia}
        />
      ))}
    </div>
  )
}


export default UpcomingLaunches