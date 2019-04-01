import React, { Component } from 'react';
import AuthService from './auth-service'
import {Link} from 'react-router-dom'
import {Button, Form} from 'react-bootstrap';
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
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
                password: ''
            })
            this.props.getUser(response)
            swal("Inicio de Sesión", "Correctamente", "success");
        })
        .catch( error => console.log(error))
            swal("Error", "verifique sus datos", "error");
    }

    handleChange = (event) =>{
        const {name, value} = event.target
        this.setState({[name]: value});
    }



    render() {
        return (
            <div>
                
                <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control name='username' value={this.state.username}type="text" placeholder="Ingresa Correo electronico" onChange={e=> this.handleChange(e)}/>
                         
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name='password' value={this.state.password}type="password" placeholder="Ingresa Contraseña" onChange={e=>this.handleChange(e)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" value="Login">
                            Submit
                        </Button>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.<Link to={"/"}> Registrate</Link>
                        </Form.Text>
                        
                    
                </Form>
                   

                
                
            </div>
        )
    }
}

export default Login;