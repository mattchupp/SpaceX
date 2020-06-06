import React from 'react'; 
import styled from 'styled-components'; 
import moment from 'moment'; 


/* Styles */
const Card = styled.div`
  background-color: #0e0e0e;
  padding: 1rem; 
  margin: 2rem 0;
  border-radius: 10px; 
`
const Details = styled.p`
  margin: 1rem 0 0 0;
  font-size: 1rem;
  line-height: 1.5rem;
`


function HistoryCard(props) {

  return(
    <Card key={props.id}>
      <h2>{props.title}</h2>
      <span>{moment.unix(props.date).format("LLLL")}</span>
      <Details>{props.details}</Details>
      <p>More Reading</p>
      <a href={props.reddit}>Reddit</a>
      <a href={props.article}>Article</a>
      <a href={props.wikipedia}>Wikipedia</a>
    </Card>
  )

}

export default HistoryCard