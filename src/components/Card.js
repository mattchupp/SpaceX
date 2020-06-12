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
  background-color: #272727;
  padding: 1rem; 
  margin: 2rem 0;
  border-radius: 10px; 
`
const Details = styled.p`
  margin: 1.5rem 0;
  font-size: 1.2rem;
  line-height: 1.8rem;
`
const Reading = styled.div`
  padding: 1rem 0; 
  display: flex; 
  flex-direction: row; 
  align-items: start; 
  @media screen and (max-width: 800px) {
    flex-direction: column; 
    align-items: center; 
  }
`
const LinkButton = styled.a`
  padding: .5rem 1rem;
  font-size: 1.2rem;
  background-color: #f5efd7;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem 1rem 1rem 0;

  &:hover {
    color: #0c132b; 
  }
`


function Card(props) {

  return (
    <CardContainer key={props.id}>
      <Title>{props.title}</Title>
      <span>{moment.unix(props.date).format("LLLL")}</span>
      {props.details ? <Details>{props.details}</Details> : <Details>Details Coming Soon</Details> }
      <Reading>
        {props.reddit &&
          <LinkButton
            href={props.reddit} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Reddit
          </LinkButton>
        }
        {props.article &&
          <LinkButton
          href={props.article} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Article
        </LinkButton>
        }
        {props.wikipedia &&
          <LinkButton
          href={props.wikipedia} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Wikipedia
        </LinkButton>
        }
        {props.youtube &&
          <LinkButton
          href={props.youtube} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Watch
        </LinkButton>
        }
      </Reading>
      
    </CardContainer>
  )

}

export default Card