/* Display upcoming launches from spacex */
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import styled from 'styled-components'; 
import Card from '../components/Card'; 


const Title = styled.h1`
  font-weight: bold; 
  font-size: 2.6rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`

const Search = styled.input`
  font-size: 1rem;
`


function PastLaunches() {

  const [pastLaunches, setPastLaunches] = useState([]); 
  const [filterBy, setFilterBy] = useState('');
  // const [filteredLaunches, setFilteredLaunches] = useState([])
  
  
  useEffect(() => {

    axios.get('https://api.spacexdata.com/v3/launches/past')
    .then(response => {
      console.log(response.data)
      setPastLaunches(response.data)
    })
    .then(error => {
      console.log(error)
    })
    
  }, [])

  // function searchLaunches() {
  //   const currentList = pastLaunches; 
  //   const searchedList = []; 
  // }


  // let currentLaunches = pastLaunches; 
    // console.log(ticketsTable)
    
  let filteredLaunches = pastLaunches.filter((launch) => {
    return launch.mission_name.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1;
  })
  

  return (
    <div>
      <Title>Past Launches</Title>
      <Search 
        placeholder="Search By Mission Name" 
        value={filterBy} 
        onChange={((e) => setFilterBy(e.target.value))}
      />
      {filteredLaunches.map((event) => (
        <Card 
          key={event.id}
          title={event.mission_name}
          date={event.launch_date_unix}
          details={event.details}
          reddit={event.links.reddit}
          article={event.links.article}
          wikipedia={event.links.wikipedia}
        />
      ))}
    </div>
  )
}


export default PastLaunches