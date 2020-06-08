/* 
  This is a card for showing a longer list of events
  such as history, upcoming launches or past launches

  ## Props (* == required)
  - *id -> get the id of each item in the list
  - *title -> usually for the mission title 
  - *date -> launch date or date of an event
  - *details -> the details of the event
  - reddit -> link to reddit post regarding the event
  - article -> link to a news article about the event
  - wikipedia -> link to wikipedia article about the event
*/

import React from 'react'; 
import styled from 'styled-components'; 
import moment from 'moment'; 


/* Styles */
const Title = styled.h2`
  font-weight: bold; 
  font-size: 2rem;
`
const CardContainer = styled.div`
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


function Card(props) {

  return (
    <CardContainer key={props.id}>
      <Title>{props.title}</Title>
      <span>{moment.unix(props.date).format("LLLL")}</span>
      {props.details ? <Details>{props.details}</Details> : <Details>Details Coming Soon</Details> }
      <Reading>
        {props.reddit &&
          <ReadingItem>
            <a 
              href={props.reddit} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Reddit
            </a>
          </ReadingItem>
        }
        {props.article &&
          <ReadingItem>
            <a 
              href={props.article} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Article
            </a>
          </ReadingItem>
        }
        {props.wikipedia &&
          <ReadingItem>
            <a 
              href={props.wikipedia} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
          </ReadingItem>
        }
      </Reading>
      
    </CardContainer>
  )

}

export default Card