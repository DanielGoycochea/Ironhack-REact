import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap'


class SendEmail extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            to:'',
            subject:'',
            message:''
            
        }
    }

    handleFormSubmit=(event)=>{
        event.preventDefault()
        const name = this.state.name
        const to = this.state.to
        const subject = this.state.subject
        const message = this.state.message
        
        axios.post(process.env.REACT_APP_API_EMAIL,
        {name, 
        to, 
        subject, 
        message},{withCredentials:true})
        .then(()=>{
            this.setState({
            name:'',
            to:'',
            subject:'',
            message:''
            
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
                    <Form.Control type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}placeholder="Indique el nombre del puesto" />
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
                    <Form.Control type="text" name="message" value={this.state.message} onChange={e => this.handleChange(e)}placeholder="Indique el nombre del puesto" />
                </Form.Group>

                <input type="submit" value ="Submit"/>
                
                </Form>
                
            </div>
        );
    }
}

export default SendEmail;