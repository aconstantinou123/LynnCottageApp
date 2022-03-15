import React from 'react'
import { useState } from 'react'
import { 
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit'

import './Navbar.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <header id='home'>
      <MDBNavbar expand='lg' light fixed='top' bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={toggleOpen}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' color='white' />
          </MDBNavbarToggler>
          <MDBCollapse id="navbarCollapse" show={isOpen} navbar>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink className='text-white' aria-current='page' href='#home'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='text-white' href='#description'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='text-white' href='#gallery'>Gallery</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='text-white' href='#contact'>Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  )
}

export default Navbar
