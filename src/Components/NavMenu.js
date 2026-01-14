import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/NavMenu.css';
import {
FaShieldAlt,FaEye
, FaWhatsapp, FaUserCog,FaBell
} from "react-icons/fa";

export const NavMenu = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary header">
      <Container classname="header">
        <Navbar.Brand href="#home" className='logo'><FaShieldAlt className='icon2'/>{' '}
            Nagar Alert Hub</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text><Navbar bg="light" data-bs-theme="#35383C">
        <Container>
          <Nav className="me-auto header2">
            <Nav.Link href="public" className='header1'><FaEye className='icon'/>Public View</Nav.Link>
            <Nav.Link href="report" className='header1'><FaBell className='icon'/>Report</Nav.Link>
            <Nav.Link href="whatsapp" className='header1'><FaWhatsapp className='icon'/>WhatsApp</Nav.Link>
            <Nav.Link href="console" className='header1'><FaUserCog className='icon'/>Console</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavMenu
