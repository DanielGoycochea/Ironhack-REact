import React from 'react'
import {Link} from "react-router-dom"
import {Button, Row, Col} from 'react-bootstrap';



const Home=() =>{
    return(
     
           <div className= "">
           <div className='text-home'>
            <img className="d-block w-100 image-carusel" src='https://res.cloudinary.com/dzxpqumj0/image/upload/v1553575789/abuelo-home.jpg' alt="First slide"/>  
           
            <div className="centrado">
                <Row className="Navbar home-login">
                    <Col xs={12} md={6} >
                    <div>
                    <div>BOLSA DE TRABAJO PARA EL ADULTO MAYOR</div>
                    <Link to = '/trabajos'><Button  className="input"  variant="info" size="lg">Encuentra Empleo</Button></Link>
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