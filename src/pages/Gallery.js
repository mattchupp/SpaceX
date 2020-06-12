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
  padding: .5rem .25rem;
`


function Gallery() {

  const [pastLaunches, setPastLaunches] = useState([]); 
  const [filterBy, setFilterBy] = useState('');
  
  
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

  let filteredLaunches = pastLaunches.filter((launch) => {
    return launch.mission_name.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1;
  })
  

  return (
    <div>
      {filteredLaunches.map((event) => (
        <Card 
          images={event.links.flickr_images}
        />
      ))}
    </div>
  )
}


export default Gallery