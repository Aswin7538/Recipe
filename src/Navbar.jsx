import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Nav.css'
import { Link, Outlet } from 'react-router-dom';


function BasicExample() {
  return (<div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className=' float-lg-start '>My kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{fontWeight:'bolder',}}>
           
           
          <Nav.Link as={Link} to='/Main'>HOME</Nav.Link>
<Nav.Link as={Link} to='/Catogory'>CATEGORIES</Nav.Link>
<Nav.Link as={Link} to='/AllItem'>ALL ITEM</Nav.Link>
<Nav.Link as={Link} to='/Fav'>FAVOURITE</Nav.Link>
<Nav.Link as={Link} to='/Country'>COUNTRY</Nav.Link>

      

    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
    <Outlet/>
    </div>
  );
}

export default BasicExample;