import React from 'react'
import {Link} from "react-router-dom"
import {Form, Button, Carousel, Row, Col} from 'react-bootstrap';
import AddTrabajos from "./Trabajos/AddTrabajos";



const NavBar =() =>{
    return(
     
           <div className= "">
            
<Carousel className="container carusel">
        <Carousel.Item>
            <img
            className="d-block w-100 image-carusel"

            src="https://cdn.pixabay.com/photo/2014/06/02/22/37/old-age-360714__340.jpg"
            
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Registrate</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="primary" size="lg">
            Registrate
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 image-carusel"
            src="https://cdn.pixabay.com/photo/2015/06/28/20/49/grandma-824867__340.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Encuentra empleo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button   variant="primary" size="lg">
            Encuentra Empleo
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 image-carusel"
            src="https://cdn.pixabay.com/photo/2019/01/31/13/27/grandfather-3966888_960_720.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Crea Empleos</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Button variant="primary" size="lg">
            Crea Empleos
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel> 
<div className="">
    <Row className="Navbar home-login">
        <Col xs={12} md={6} >
        <h3>Encuentra trabajo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum provident quas necessitatibus cum placeat itaque sequi ullam facilis accusantium. Ipsa nam aut dolorum in quis alias neque doloremque nemo.</p>
        <Link to = '/trabajos'>TRabjaos</Link>
        </Col>
        <Col xs={12} md={6}><Form>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa Correo electronico" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresa Contraseña" />
    </Form.Group>
    <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    </Col>
  </Row>
  </div>




            <AddTrabajos></AddTrabajos>
           </div>
     
     
    )
}


export default NavBar;