/* Display latest launch from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import moment from 'moment';
import styled from 'styled-components'; 


const Date = styled.p`
  font-size: 3rem;
  @media screen and (max-width: 700px) {
    font-size: 2rem;
  }
`
 

function Countdown() {

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
    <>
      <h1>Next Launch</h1>
      <Date>{moment.unix(nextLaunch.launch_date_unix).format("LL @ h:mm a")} </Date>
    </>
  )
}


export default Countdown



