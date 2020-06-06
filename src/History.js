/* Display historical events of spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import HistoryCard from './components/HistoryCard';




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

  // useEffect(() => {
  //   console.log(history)
  // })



  return (
    <div>
      <h1>History</h1>
      <Link to="/">Go Home</Link>
      {history.map((event) => (
        <HistoryCard 
          key={event.id}
          title={event.title}
          date={event.event_date_unix}
          details={event.details}
          reddit={event.links.reddit}
          article={event.links.article}
          wikipedia={event.links.wikipedia}
        />
        // <Card key={event.id}>
        //   <h2>{event.title}</h2>
        //   <span>{moment.unix(event.event_date_unix).format("LLLL")}</span>
        //   <Details>{event.details}</Details>
        //   <p>More Reading</p>
        //   <a href={event.links.reddit}>Reddit</a>
        //   <a href={event.links.article}>Article</a>
        //   <a href={event.links.wikipedia}>Wikipedia</a>
        // </Card>
      ))}
    </div>
  )
}


export default History