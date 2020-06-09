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
  // const [currentDate, setCurrentDate] = useState();
  const [launchDate, setLaunchDate] = useState();
  // const [countdownTimer, setCountdownTimer] = useState(); 

  
  
  useEffect(() => {
    
    axios.get('https://api.spacexdata.com/v3/launches/next')
    .then(response => {
      // console.log(response.data)
      setLaunchDate(response.data.launch_date_unix)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

/*
  function CountdownClock () {
    const date = moment().unix(); 
    const nextLaunch = moment(launchDate); 
    // console.log('Current Date ' + moment().format('MM DD YYYY, h:mm a'))
    // console.log('Launch Date ' + moment.unix(launchDate).format('MM DD YYYY, h:mm a'))
    const difference = nextLaunch - date; 
    const timeUntil = moment.duration(difference * 1000, 'milliseconds'); 
    // console.log(moment.duration(timeUntil).days())
    // console.log(moment.duration(timeUntil).hours())
    // console.log(moment.duration(timeUntil).minutes())
    // console.log(moment.duration(timeUntil).seconds())

    // return (
    //   <Date>
    //     <div>{moment.duration(timeUntil).days()}</div>
    //     <div>{moment.duration(timeUntil).hours()}</div>
    //     <div>{moment.duration(timeUntil).minutes()}</div>
    //     <div>{moment.duration(timeUntil).seconds()}</div>
    //   </Date>
    // )
  }

  */

  /*
  useEffect(() => {
    const date = moment().unix(); 
    const nextLaunch = moment(launchDate); 
    // console.log('Current Date ' + moment().format('MM DD YYYY, h:mm a'))
    // console.log('Launch Date ' + moment.unix(launchDate).format('MM DD YYYY, h:mm a'))
    const difference = nextLaunch - date; 
    const timeUntil = moment.duration(difference * 1000, 'days');
    // setCountdownTimer(timeUntil);

    // setCountdownTimer(timeUntil)
  }, [launchDate])
  */

  // setInterval(CountdownClock, 1000);

  // const date = moment(); 
  // setCurrentDate(date)


  return (
    <>
      <h1>Next Launch</h1>
      {/* <Date>{moment.unix(launchDate).format("LL @ h:mm a")} </Date> */}
      <Date>{moment.unix(launchDate).format('LLL')}</Date>
      {/* <p>{currentDate}</p> */}
    </>
  )
}




export default Countdown



