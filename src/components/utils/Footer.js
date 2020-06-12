import React from 'react'; 
import styled from 'styled-components'; 

const FooterContainer = styled.footer`
  padding: 2rem 0; 
`

function Footer() {
  return(
    <FooterContainer>
      <div className="container">
        <hr />
        <p>
          All information comes from the&nbsp; 
          <a 
            href="https://github.com/r-spacex/SpaceX-API" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            SpaceX API
          </a> | Check out the source code on&nbsp; 
          <a 
            href="https://github.com/mattchupp/spacex" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </FooterContainer>
  )

}

export default Footer; 