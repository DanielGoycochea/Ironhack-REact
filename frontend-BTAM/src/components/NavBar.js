import React from 'react'
// import {Link} from "react-router-dom"
import {Nav,Navbar, Form, Button} from 'react-bootstrap'


const NavBar =() =>{
    return(
     
           <div className= "">
              <Navbar className="Navbar" expand="lg">
                <Navbar.Brand href="#home">BTAM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                  
                    </Nav>
                    <Form inline>
                      <Button variant="outline-danger">Iniciar Sesion</Button>
                    </Form>
              </Navbar.Collapse>
            </Navbar>
           </div>
     
     
    )
}


export default NavBar;