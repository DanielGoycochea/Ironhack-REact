import React, {Component} from 'react'
import AuthService from './auth-service'
import {Link, Redirect} from 'react-router-dom'
import {Form, Button, Col, Row, ButtonToolbar} from 'react-bootstrap';
import swal from 'sweetalert';

class Signup extends Component {
    constructor(props){
        super(props)
            this.state = {
                username: "",
                password: "",
                nombre:"",
                apellido:"",
                isLoggedin: false
            }
            this.service = new AuthService()
        }

    handleFormSubmit =(event) =>{
        event.preventDefault()

        const username = this.state.username
        const password = this.state.password
        const nombre = this.state.nombre
        const apellido = this.state.apellido
        

        this.service.signup(username, password, nombre, apellido)
        .then( response =>{
            this.setState({
                username: "",
                password: "",
                nombre:"",
                apellido:"",
                isLoggedin: true
               
            })
            this.props.getUser(response)
            swal("registro", "Correctamente", "success");
            
        })
        .catch(error => swal("Error", "verifique sus datos", "error"))
        
    }

    handleChange = (event) =>{
        const { name, value}= event.target
        this.setState({[name]: value})
    }


    
        render(){
            let componente;
            if(this.state.isLoggedin)
                componente=<Redirect to="/perfil"/>
                else
                componente = ""
            return(
                <div >
                {componente} 
                    <Row>
                        <Col xs={12} md={6}>
                        <div>
                        <img style={{height:'94vh', width:'100%', overflow:'hidden'}} src="https://res.cloudinary.com/dzxpqumj0/image/upload/v1555132049/iStock-627779744.jpg" alt="img"/>
                        </div>

                        </Col>
                        <Col xs={12} md={5} className="form-margin">
                        <h1>REGISTRATE</h1><br/>
                            <Form onSubmit={this.handleFormSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="nombre">
                                        <Form.Label className='label'>Nombre</Form.Label>
                                        <Form.Control size="lg" className="input" required name='nombre' value={this.state.nombre}type="text" placeholder="Ingresa su Nombre" onChange={e=> this.handleChange(e)}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="apellido">
                                        <Form.Label className='label'>Apellidos</Form.Label>
                                        <Form.Control size="lg" className="input" name='apellido' value={this.state.apellido}type="text" placeholder="Ingresa sus Apellidos" onChange={e=> this.handleChange(e)}/>
                                    </Form.Group>
                                </Form.Row>

                                <br/>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className='label'>Correo Electrónico</Form.Label>
                                    <Form.Control  size="lg" className="input"required name='username' value={this.state.username}type="email" placeholder="Ingresa Correo Electrónico" onChange={e=> this.handleChange(e)}/>
                                </Form.Group>
                                <br/>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className='label'>Contraseña</Form.Label>
                                    <Form.Control  size="lg" className="input" required name='password' value={this.state.password}type="password" placeholder="Ingresa Contraseña de mas de 8 caracteres" onChange={e=>this.handleChange(e)}/>
                                </Form.Group>
                                <br/>
                                <ButtonToolbar >
                                    <div>
                                    <Button className="input" size="lg" variant="info" type="submit" value="Signup">
                                    Enviar
                                </Button>
                                    </div>
                                    <div className="button-det">
                                    
                                        <Link   className="link-botton" to={'/'}><Button className="input" size="lg" variant="outline-info">Regresar</Button></Link>
                                    </div>
                            </ButtonToolbar>
                            
                               
                                <Form.Text className="text-muted">
                                <br/>Ya tienes cuenta ingresa<Link to={"/login"}> aqui</Link>
                                </Form.Text>
                            </Form>
                    </Col>
                    </Row>

                </div>
            )
        }
}

export default Signup
