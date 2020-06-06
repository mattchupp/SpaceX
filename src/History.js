/* Display historical events of spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';
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

  return (
    <div>
      <h1>History</h1>
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
      ))}
    </div>
  )
}


export default History