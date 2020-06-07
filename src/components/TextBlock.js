/* Component for all blocks of text */

import React from 'react'; 
import { Typography } from '@material-ui/core';

const BodyStyle = {
  'margin': '2rem 0'
}

function TextBlock(props) {

  return (
    <Typography varient="body1" style={BodyStyle}>
      {props.children}
    </Typography>
  )

}

export default TextBlock;