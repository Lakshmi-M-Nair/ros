
	

import React, {Component} from "react";
import {Container ,Navbar,Nav} from "react-bootstrap";

class Header extends Component {
    
    render ( ){
        return(
          <Container>
        
        <Navbar bg="dark" variant="dark" expand="lg">
        
          <Navbar.Brand href="#home">NAVITROLLEY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              
  
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
      </Container>
      );
    }
}

export default Header;