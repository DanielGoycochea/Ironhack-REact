import React, {Component} from 'react'
import AuthService from './auth-service'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap';

class Signup extends Component {
    constructor(props){
        super(props)
            this.state = {
                username:'',
                password:''
            }
            this.service = new AuthService()
        }

    handlerFormSumit =(event) =>{
        event.preventDefault()

        const username = this.state.username
        const password = this.state.password

        this.service.signup(username, password)
        .then( response =>{
            this.setState({
                username: "",
                password: ""
            })
            //this.props.getUser(response)
        })
        .catch(error => console.log(error))
    }

    handleChange = (event) =>{
        const { name, value}= event.target
        this.setState({[name]: value})
    }


    
        render(){
            return(
                <div>
                    <Form onSubmit={this.handlerFormSumit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control name='username' value={this.state.username}type="text" placeholder="Ingresa Correo electronico" onChange={e=> this.handleChange(e)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name='password' value={this.state.password}type="password" placeholder="Ingresa Contraseña" onChange={e=>this.handleChange(e)}/>
                        </Form.Group>
                      
                        <Button variant="primary" type="submit" value="Signup">
                            Submit
                        </Button>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.<Link to={"/"}> Login</Link>
                        </Form.Text>
                    </Form>

                </div>
            )
        }
}

export default Signup
