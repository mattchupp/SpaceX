
/* Homepage */
import React from 'react'; 
import LatestLaunch from '../components/LatestLaunch';
import NextLaunch from '../components/NextLaunch'; 
import dm2Launch from '../images/dm2_launch.jpg'; 
import styled from 'styled-components'; 
// import '../App.css'

const img = {
  'width': '100%', 
  'height': '100%',
  'position': 'relative'
}

const SplashContainer = styled.div`
  width: 100%,
  height: 100%
  position: relative
`

const SplashHeader = styled.h1`
  position: absolute,
  top: 50%,
  left: 50%
`

function Home() {

  return (
    <div>
      <SplashContainer>
        <img src={dm2Launch} style={img} alt="spacex launch"/>
        <h1>Text</h1>
      </SplashContainer>
      <div className="container">
        <LatestLaunch />
        <NextLaunch />
      </div>
    </div>
    
  )
}


export default Home


