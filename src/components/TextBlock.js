/* Component for all blocks of text */

import React from 'react'; 
import { Typography } from '@material-ui/core';


function TextBlock(props) {

  return (
    <Typography varient="body1">
      {props.children}
    </Typography>
  )

}

export default TextBlock;