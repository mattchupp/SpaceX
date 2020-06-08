/* 
  This component is to display next 
  launch and latest launch details 
*/

import React from 'react'; 
import styled from 'styled-components'; 
import moment from 'moment'; 
import TextBlock from './TextBlock';
// import { Typography } from '@material-ui/core';

/* Styles */
const Container = styled.div`
  margin: 3rem 0 0 0; 
`
const imgStyles = {
  'margin': '2rem 1rem 1rem 0',
  'height': '400px',
  'width': 'auto'
}

function Launch(props) {

  return (
    <Container>
      <h2>{props.title}</h2>
      <hr />
      <h3>{props.missionName}</h3>
      <p>
        {moment.unix(props.missionDate).format("LLLL")} 
      </p>
      {props.images && props.images.map((img) => (
        <img style={imgStyles} src={img} alt="launch" />
      ))}
      <TextBlock>{props.missionDetails}</TextBlock>   
    </Container>
  )
}


export default Launch; 