import React from 'react'; 
import styled from 'styled-components'
import { Link } from 'react-router-dom'; 
import { Typography } from '@material-ui/core';

const Nav = styled.nav`
  width: 100%;  
  background-color: #0F2942; 
  color: white; 
  display: flex; 
  align-items: center; 
  padding: 1rem;
`

const NavItem = {
  'marginRight': '1rem',
  'textDecoration': 'none',
  'fontSize': '1.2rem',
  'color': '#fff'
}

function NavBar() {

  return (
    <Nav>
        <Link style={NavItem} to="/">Home</Link>
        <Link style={NavItem} to="/history">History</Link>
    </Nav>
  )
}


export default NavBar