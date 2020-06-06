import React from 'react'; 
import styled from 'styled-components'; 
import moment from 'moment'; 


/* Styles */
const Title = styled.h2`
  font-weight: bold; 
`

const Card = styled.div`
  background-color: #030200;
  padding: 1rem; 
  margin: 2rem 0;
  border-radius: 10px; 
`
const Details = styled.p`
  margin: 1.5rem 0;
  font-size: 1rem;
  line-height: 1.5rem;
`
const Reading = styled.ul`
  list-style-type: none; 
`
const ReadingItem = styled.li`
  display: inline;
  margin-right: 1rem;
`


function HistoryCard(props) {

  return (
    <Card key={props.id}>
      <Title>{props.title}</Title>
      <span>{moment.unix(props.date).format("LLLL")}</span>
      <Details>{props.details}</Details>
      <Reading>
        <ReadingItem>More Reading:</ReadingItem>
        <ReadingItem><a href={props.reddit}>Reddit</a></ReadingItem>
        <ReadingItem><a href={props.article}>Article</a></ReadingItem>
        <ReadingItem><a href={props.wikipedia}>Wikipedia</a></ReadingItem>
      </Reading>
      
    </Card>
  )

}

export default HistoryCard