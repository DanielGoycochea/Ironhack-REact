import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap'


class SendEmail extends Component {
    constructor(props){
        super(props)
        this.state={
            nombre: this.props.loggedInUser.nombre,
            to:'',
            subject:'',
            message:'',
            apellido:this.props.loggedInUser.apellido,
            edad: this.props.loggedInUser.edad,
            descripcion: this.props.loggedInUser.descripcion,
            escolaridad:this.props.loggedInUser.escolaridad,
            profesion: this.props.loggedInUser.profesion,
            ultimoTrabajo: this.props.loggedInUser.ultimoTrabajo,
            telefono:this.props.loggedInUser.telefono,
            username:this.props.loggedInUser.username,
                          
        }
    }

    handleFormSubmit=(event)=>{
        event.preventDefault()
        
        const to = this.state.to
        const subject = this.state.subject
        const message = this.state.message
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
        message,
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
            this.setState({
            name:'',
            to:'',
            subject:'',
            message:'',
            
            })
            
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
                    <Form.Control disabled type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChange(e)} placeholder="Indique el nombre del puesto" />
                </Form.Group>
                <Form.Group controlId="to">
                    <Form.Label>Para</Form.Label>
                    <Form.Control type="text" name="to" value={this.state.to} onChange={e => this.handleChange(e)}placeholder="Indique el nombre del puesto" />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="text" name="subject" value={this.state.subject} onChange={e => this.handleChange(e)}placeholder="Indique el nombre del puesto" />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows="3" name="message" value={this.state.message} onChange={e => this.handleChange(e)}placeholder="ingresa tus dtaos"/>
                </Form.Group>

                <input type="submit" value ="Submit"/>
                
                </Form>
                
            </div>
        );
    }
}

export default SendEmail;