/* 
  This component is to display next 
  launch and latest launch details 
*/

import React from 'react'; 
import styled from 'styled-components'; 
import moment from 'moment'; 
import TextBlock from './TextBlock';
import { Typography } from '@material-ui/core';

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
      <Typography variant="h1" component="h1" gutterBottom>{props.title}</Typography>
      <hr />
      <Typography variant="h2" component="h2">{props.missionName}</Typography>
      <Typography variant="body1" gutterBottom>
        {moment.unix(props.missionDate).format("LLLL")} 
      </Typography>
      {props.images && props.images.map((img) => (
        <img style={imgStyles} src={img} alt="launch" />
      ))}
      <TextBlock>{props.missionDetails}</TextBlock>   
    </Container>
  )
}


export default Launch; 