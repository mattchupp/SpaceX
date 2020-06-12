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

const MobileNav = styled.nav`
  width: 100%;  
  background-color: #0F2942; 
  color: white; 
  padding: 1rem 0 0 1rem; 

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
  'textDecoration': 'none',
  'fontSize': '1.2rem',
  'color': '#fff'
}

const MobileNavList = styled.ul`
  
`

const NavItemMobile = styled.li`
  padding-bottom: 1rem;
`

const MobileNavContainer = styled.div`
  margin-top: 1rem;
  padding-top: 1rem; 
  border-top: 1px solid white; 
  @media screen and (min-width: 800px) {
    display: none; 
  }
`

const hamburger = {
  'width': '35px',
  'height': '3px',
  'backgroundColor': '#fff',
  'margin': '6px 0 0 0 '
}



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
        <Link style={NavItem} to="/gallery">Gallery</Link> 
      </Nav>

      <MobileNav>
        <Toggle 
          onClick={(() => setToggled(!isToggled))} 
          style={NavItem}
        >
          <div style={hamburger}></div>
          <div style={hamburger}></div>
          <div style={hamburger}></div>
        </Toggle>

        {isToggled && 
          <MobileNavContainer>
            <MobileNavList>
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

              <NavItemMobile>
                <Link 
                  style={MobileNavItem} 
                  onClick={(() => setToggled(!isToggled))} 
                  to="/gallery"
                >
                  Gallery
                </Link>
              </NavItemMobile>
            </MobileNavList>
          </MobileNavContainer>
        }
      </MobileNav>
    </>
  )
}


export default NavBar
