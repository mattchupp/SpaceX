/* Component for all blocks of text */

import React from 'react'; 

const BodyStyle = {
  'margin': '2rem 0'
}

function TextBlock(props) {

  return (
    <p style={BodyStyle}>
      {props.children}
    </p>
  )

}

export default TextBlock;