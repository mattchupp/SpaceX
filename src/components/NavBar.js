import React from 'react'; 
import styled from 'styled-components'
import { Link } from 'react-router-dom'; 

const Nav = styled.nav`
  width: 100%;  
  background-color: #424a44; 
  color: white; 
  display: flex; 
  align-items: center; 
  padding: 1rem;
`

const NavItem = {
  'marginRight': '1rem'
}

function NavBar() {

  return (
    <Nav>
        <Link style={NavItem} to="/">Home</Link>
        <Link to="/history">History</Link>
    </Nav>
  )
}


export default NavBar