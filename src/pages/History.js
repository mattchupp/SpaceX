/* Display historical events of spacex */
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

function History() {

  const [history, setHistory] = useState([]); 
  
  useEffect(() => {

    axios.get('https://api.spacexdata.com/v3/history')
    .then(response => {
      console.log(response.data)
      setHistory(response.data)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

  return (
    <div>
      <Title>History</Title>
      {history.map((event) => (
        <Card 
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


export default History