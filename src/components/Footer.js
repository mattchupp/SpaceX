import React from 'react'; 
import styled from 'styled-components'; 

const FooterContainer = styled.footer`
  padding: 2rem 0; 
`

function Footer() {
  return(
    <FooterContainer>
      <div class="container">
        <hr />
        <p>I am in no way affliated with SpaceX.</p>
        <p>All information comes from 
          the <a href="https://github.com/r-spacex/SpaceX-API" target="_blank">SpaceX API</a> | Check out the source code on <a href="https://github.com/mattchupp/spacex" target="_blank">Github</a>
        </p>
      </div>
    </FooterContainer>
  )

}

export default Footer; 