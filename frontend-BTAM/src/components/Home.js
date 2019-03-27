import React from 'react'
import {Link} from "react-router-dom"
import {Button, Row, Col} from 'react-bootstrap';
// import Login from './auth/Login'


const Home=() =>{
    return(
     
           <div className= "">
           <div className='text-home'>
            <img className="d-block w-100 image-carusel" src='https://res.cloudinary.com/dzxpqumj0/image/upload/v1553575789/abuelo-home.jpg' alt="First slide"/>  
           
            <div className="centrado">
                <Row className="Navbar home-login">
                    <Col xs={12} md={6} >
                    <div>
                    <h1>BOLSA DE TRABAJO PARA EL ADULTO MAYOR</h1>
                    <Link to = '/trabajos'><Button variant="info" size="lg">Encuentra Empleo</Button></Link>
                    </div>
                    </Col>
                    

                    
                    <Col xs={12} md={6}>
                        
                </Col>
            </Row>
            </div>
            </div>

       
      </div>
     
     
    )
}


export default Home