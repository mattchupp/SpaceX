/* Display historical events of spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';

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
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.details}</p>
        </div>
      ))}
    </div>
  )
}


export default History