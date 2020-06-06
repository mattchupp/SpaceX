import React from 'react'; 
import styled from 'styled-components'
import { Link } from 'react-router-dom'; 

const Nav = styled.nav`
  width: 100%; 
  height: 30px; 
  background-color: red; 
  color: white; 
`

function NavBar() {

  return (
    <Nav>
      <p>Hello!</p>
    </Nav>
  )
}


export default NavBar