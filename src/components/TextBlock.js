/* Component for all blocks of text */

import React from 'react'; 
import styled from 'styled-components'; 


/* Styles */
const Details = styled.p`
  margin: 2rem 0;
  font-size: 1.2rem;
  line-height: 1.8rem;
`


function TextBlock(props) {

  return (
    <Details>
      {props.children}
    </Details>
  )

}

export default TextBlock;