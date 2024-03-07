import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Nav.css'
import { Outlet } from 'react-router-dom';


function BasicExample() {
  return (<div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className=' float-lg-start '>My kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{fontWeight:'bolder',}}>
           
            <Nav.Link href='/Main'>HOME</Nav.Link>
            <Nav.Link href='/Catogory'>CATOGORIES</Nav.Link>
            <Nav.Link href='/Allitem'>ALL ITEM</Nav.Link>
            <Nav.Link href='/Fav'>FAVOURITE</Nav.Link>
            <Nav.Link href='/Country'>COUNTRY</Nav.Link>
           

      

    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
    <Outlet/>
    </div>
  );
}

export default BasicExample;