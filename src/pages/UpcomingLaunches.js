/* Display upcoming launches from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import styled from 'styled-components'; 
import Card from '../components/Card'; 


const Title = styled.h1`
  font-weight: bold; 
  font-size: 2.6rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`


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
      <Title>Upcoming Launches</Title>
      {upcomingLaunches.map((event) => (
        <Card 
          key={event.id}
          title={event.mission_name}
          date={event.launch_date_unix}
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