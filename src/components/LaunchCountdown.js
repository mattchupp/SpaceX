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

  // const [nextLaunch, setNextLaunch] = useState([]); 
  const [currentDate, setCurrentDate] = useState();
  const [launchDate, setLaunchDate] = useState();

  
  
  useEffect(() => {
   
    console.log('Current Date ' + currentDate)
    axios.get('https://api.spacexdata.com/v3/launches/next')
    .then(response => {
      console.log(response.data)
      setLaunchDate(response.data.launch_date_unix)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])


  // const date = moment(); 
  // setCurrentDate(date)


  return (
    <>
      <h1>Next Launch</h1>
      <Date>{moment.unix(launchDate).format("LL @ h:mm a")} </Date>
      {/* <p>{currentDate}</p> */}
    </>
  )
}


export default Countdown



