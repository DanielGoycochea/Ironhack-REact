import React, { Component } from 'react';
import AuthService from './auth-service'
import {Link, Redirect} from 'react-router-dom'
import {Button, Form, Row, Col, Container} from 'react-bootstrap';
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            isLoggedin: false
        }
        this.service = new AuthService()
        
    }

    handleFormSubmit = (event) =>{
        event.preventDefault()
        const username = this.state.username
        const password =  this.state.password
        

        this.service.login(username, password)
        .then(response=>{
            this.setState({
                username: '',
                password: '',
                isLoggedin: true
                
            })
            this.props.getUser(response)
            swal("Inicio de Sesión", "Correctamente", "success");
            
        })
        .catch( error => swal("Error", "verifique su correo y/o contraseña", "error"))
            ;
    }

    handleChange = (event) =>{
        const {name, value} = event.target
        this.setState({[name]: value});
    }



    render() {
        let componente;
        if(this.state.isLoggedin)
            componente=<Redirect to="/perfil"/>
            else
            componente = ""
       
        return (
            <div>
            {componente} 
            <Row>
                <Col xs={12} md={6}>
                    <div >
                        <img style={{height:'90vh', overflow:'hidden'}} className="image-login" src="https://res.cloudinary.com/dzxpqumj0/image/upload/v1554767848/iStock-522170875.jpg" alt="img"/>
                    </div>
                </Col>
                <Col xs={12} md={5} className="form-margin"> <h1>INICIA SESIÓN</h1><br/>
                    <Container> 
                       
                    <Form onSubmit={this.handleFormSubmit} >
                   
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label required className='label'>Correo Electrónico</Form.Label>
                                <Form.Control size="lg" className="input" name='username' value={this.state.username}type="email" placeholder="Ingresa tu Correo Electrónico" onChange={e=> this.handleChange(e)}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label  className='label'>Contraseña</Form.Label>
                                <Form.Control required size="lg" className="input" name='password' value={this.state.password}type="password" placeholder="Ingresa tu Contraseña" onChange={e=>this.handleChange(e)}/>
                            </Form.Group>
                            <br/>
                            <Button size="lg" className="input" variant="primary" type="submit" value="Login">
                               Enviar
                            </Button>
                            
                            <Form.Text className="text-muted "><br/>
                            Aun no tines cuenta registarte  <Link to={"/signup"}> Aquí</Link>
                            </Form.Text>
                            

                    </Form>
                    </Container>
                </Col>
             </Row>
            </div>
        )
    }
}

export default Login;