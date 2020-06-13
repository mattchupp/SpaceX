import React from 'react'; 
import styled from 'styled-components'; 

const SlideShowContainer = styled.div`

`

function Carousel(props) {

  return (
    <SlideShowContainer>
      {props.images.map((image) => (
        <>
          {image == '' ? null : 
            <img key={image} src={image} />
          }
        </>
      ))}
    </SlideShowContainer>
  )

}

export default Carousel
