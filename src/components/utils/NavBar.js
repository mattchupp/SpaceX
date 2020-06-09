import React, { useState } from 'react'; 
import styled from 'styled-components'
import { Link } from 'react-router-dom'; 

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

// const Toggle = styled.a`
//   cursor: pointer; 
// `

function NavBar() {

  const [isToggled, setToggled] = useState(false); 

  return (
    <Nav>
        <Link style={NavItem} to="/">Home</Link>
        <Link style={NavItem} to="/history">History</Link>
        <Link style={NavItem} to="/upcoming-launches">Upcoming Launches</Link>
    </Nav>
  )
}


export default NavBar

/* 
<Toggle onClick={(() => setToggled(!isToggled))} style={NavItem}>Launches</Toggle>
  {isToggled && <Link style={NavItem} to="/upcoming-launches">Upcoming Launches</Link> }
*/