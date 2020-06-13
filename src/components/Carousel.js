import React from 'react'; 
import styled from 'styled-components'; 


function Carousel(props) {

  return (
    <div>
      {props.images.map((image) => (
        <>
          {image == '' ? null : 
            <img key={image} src={image} />
          }
        </>
      ))}
    </div>
  )

}

export default Carousel
