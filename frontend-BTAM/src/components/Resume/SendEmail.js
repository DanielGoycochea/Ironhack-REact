import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap'


class SendEmail extends Component {
    
    handleFormSubmit=(event)=>{
        event.preventDefault()
        
        const to = this.props.correo
        const subject = this.props.puesto
        const puesto = this.props.puesto
        const nombre= this.props.loggedInUser.nombre
        const apellido=this.props.loggedInUser.apellido
        const edad= this.props.loggedInUser.edad
        const descripcion = this.props.loggedInUser.descripcion
        const escolaridad = this.props.loggedInUser.escolaridad
        const profesion = this.props.loggedInUser.profesion
        const telefono = this.props.loggedInUser.telefono
        const ultimoTrabajo = this.props.loggedInUser.ultimoTrabajo
        const username = this.props.loggedInUser.username
        
        axios.post(process.env.REACT_APP_API_EMAIL,
        { 
        to, 
        subject,
        puesto,
         nombre, 
         apellido, 
         edad, 
         descripcion,
         escolaridad, 
         profesion,
         telefono,
         ultimoTrabajo, 
         username
        },{
            withCredentials:true
        })
        .then(()=>{
            alert ("correo enviado")
                    })
        .catch(error=> console.log(error))
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }


    render() {
        return (
            <div>
                <Form onSubmit = {this.handleFormSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control disabled type="text" name="nombre" value={this.props.loggedInUser.nombre} onChange={e => this.handleChange(e)} placeholder="Indique el nombre del puesto" />
                </Form.Group>
                <Form.Group controlId="to">
                    <Form.Label>Para</Form.Label>
                    <Form.Control disabled type="text" name="to" value={this.props.correo} onChange={e => this.handleChange(e)}placeholder="Indique el nombre del puesto" />
                   
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="text" name="subject" value={this.props.puesto} onChange={e => this.handleChange(e)}placeholder="Indique el nombre del puesto" />
                </Form.Group>
                
                <input type="submit" value ="Submit"/>
                
                </Form>
                
            </div>
        );
    }
}

export default SendEmail;