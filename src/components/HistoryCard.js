import React from 'react'; 
import styled from 'styled-components'; 
import moment from 'moment'; 


/* Styles */
const Title = styled.h2`
  font-weight: bold; 
  font-size: 2rem;
`
const Card = styled.div`
  background-color: #030200;
  padding: 1rem; 
  margin: 2rem 0;
  border-radius: 10px; 
`
const Details = styled.p`
  margin: 1.5rem 0;
  font-size: 1.2rem;
  line-height: 1.8rem;
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
        <ReadingItem>
          More Reading:
        </ReadingItem>
        <ReadingItem>
          <a 
            href={props.reddit} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Reddit
          </a>
        </ReadingItem>
        <ReadingItem>
          <a 
            href={props.article} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Article
          </a>
        </ReadingItem>
        <ReadingItem>
          <a 
            href={props.wikipedia} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        </ReadingItem>
      </Reading>
      
    </Card>
  )

}

export default HistoryCard