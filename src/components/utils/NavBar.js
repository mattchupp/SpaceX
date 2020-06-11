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

  @media screen and (max-width: 800px) {
    display: none; 
  }
`
/* 
  display: flex; 
  align-items: center; 
*/
const MobileNav = styled.nav`
  width: 100%;  
  background-color: #0F2942; 
  color: white; 
  padding: 1rem;

  @media screen and (min-width: 800px) {
    display: none; 
  }
`

const NavItem = {
  'marginRight': '1rem',
  'textDecoration': 'none',
  'fontSize': '1.2rem',
  'color': '#fff'
}

const MobileNavItem = {
  'marginLeft': '1rem',
  'textDecoration': 'none',
  'fontSize': '1.2rem',
  'color': '#fff'
}

const NavItemMobile = styled.li`
  
`

const MobileNavContainer = styled.ul`
  'margin': '1rem'; 
  

  @media screen and (min-width: 800px) {
    display: none; 
  }
`

const Toggle = styled.a`
  cursor: pointer; 
`


function NavBar() {

  const [isToggled, setToggled] = useState(false); 

  return (
    <>
      <Nav>
          <Link style={NavItem} to="/">Home</Link>
          <Link style={NavItem} to="/history">History</Link>
          <Link style={NavItem} to="/upcoming-launches">Upcoming Launches</Link> 
          <Link style={NavItem} to="/past-launches">Past Launches</Link> 
      </Nav>

      <MobileNav>
        <Toggle 
          onClick={(() => setToggled(!isToggled))} 
          style={NavItem}
        >
          Menu
        </Toggle>
      </MobileNav>

      {!isToggled && 
        <MobileNavContainer>
          <NavItemMobile>
            <Link 
              style={MobileNavItem} 
              onClick={(() => setToggled(!isToggled))} 
              to="/"
            >
              Home
            </Link>
          </NavItemMobile>
          <NavItemMobile>
            <Link 
              style={MobileNavItem} 
              onClick={(() => setToggled(!isToggled))} 
              to="/history"
            >
              History
            </Link>
          </NavItemMobile>
          <NavItemMobile>
            <Link 
              style={MobileNavItem} 
              onClick={(() => setToggled(!isToggled))} 
              to="/upcoming-launches"
            >
              Upcoming Launches
            </Link> 
          </NavItemMobile>
          <NavItemMobile>
            <Link 
              style={MobileNavItem} 
              onClick={(() => setToggled(!isToggled))} 
              to="/past-launches"
            >
              Past Launches
            </Link>
          </NavItemMobile>
        </MobileNavContainer>
      }
    </>
  )
}


export default NavBar
