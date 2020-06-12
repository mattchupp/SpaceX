/* 
  This component is to display next 
  launch and latest launch details 
*/

import React from 'react'; 
import styled from 'styled-components'; 
import moment from 'moment'; 
import TextBlock from './utils/TextBlock';


/* Styles */
const Container = styled.div`
  margin: 3rem 0 0 0; 
`
const imgStyles = {
  'margin': '2rem 1rem 1rem 0',
  'height': '400px',
  'width': 'auto'
}

const LinkButton = styled.a`
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  background-color: #f5efd7;
  color: #0c132b;
  cursor: pointer;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: #0c132b; 
  }
`

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
        <img key={img} style={imgStyles} src={img} alt="launch" />
      ))}
      <TextBlock>{props.missionDetails}</TextBlock>  
      {props.watch && <LinkButton href={props.watch} target="_blank">Watch</LinkButton>}
      {props.reddit && <LinkButton href={props.reddit} target="_blank">Reddit</LinkButton>}
    </Container>
  )
}


export default Launch; 