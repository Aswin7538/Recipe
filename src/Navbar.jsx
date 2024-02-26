import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Main } from './Main';
import './Nav.css'


function BasicExample() {
  return (<div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className=' float-lg-start '>My kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{fontWeight:'bolder',}}>
           
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">ALL ITEM</Nav.Link>
            <Nav.Link href="#home">FAVOURITE</Nav.Link>
            <Nav.Link href="#link">COUNTRY</Nav.Link>

      

    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Main/>
    </div>
  );
}

export default BasicExample;