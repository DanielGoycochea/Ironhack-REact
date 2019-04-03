import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap'

class AddResume extends Component {
    constructor(props){
        super(props)
        this.state={
            edad:'',
            fechaNacimiento:'',
            categoria: '',
            descripcion:'',
            escolaridad: '',
            profesion:'',
            ultimoTrabajo:''
        }
    }

    handleFormSumit=(event)=>{
        event.preventDefault()
        const edad= this.state.edad
        const fechaNacimiento= this.state.fechaNacimiento
        const categoria = this.state.categoria
        const descripcion = this.state.descripcion
        const escolaridad = this.state.escolaridad
        const profesion = this.state.profesion
        const ultimoTrabajo = this.state.ultimoTrabajo

        axios.post ('https://back-btam.herokuapp.com/api/perfil/', {
            edad,
            fechaNacimiento,
            categoria,
            descripcion,
            escolaridad,
            profesion,
            ultimoTrabajo,
            perfilCreado:true
        },{withCredentials:true})
        .then(()=>{
            this.setState({
            edad:'',
            fechaNacimiento:'',
            categoria: '',
            descripcion:'',
            escolaridad:'',
            profesion:'',
            ultimoTrabajo:''
            })
            alert("RE REALIZO")
        })
        .catch(error=> console.log(error))
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }


    render() {
        return (
            <div className='container'>
                <Form onSubmit = {this.handleFormSumit}>
                    <Form.Group controlId="edad">
                        <Form.Label>edad</Form.Label>
                        <Form.Control type="number" name="edad" value={this.state.edad} onChange={e => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="fechaNacimiento">
                        <Form.Label>Fecha Nacimiento</Form.Label>
                        <Form.Control type="date" name="fechaNacimiento" value={this.state.fechaNacimiento} onChange={e => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="categoria">
                        <Form.Label>categoria</Form.Label>
                        <Form.Control type="text" name="categoria" value={this.state.categoria} onChange={e => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="descripcion">
                        <Form.Label>Descripción Quien eres</Form.Label>
                        <Form.Control as="textarea" rows="3" name="descripcion" value ={this.state.descripcion} onChange={e=>this.handleChange(e)} placeholder="Describa las funciones del puesto" />
                    </Form.Group>
                    <Form.Group controlId="escolaridad">
                        <Form.Label>escolaridad</Form.Label>
                        <Form.Control type="text" name="escolaridad" value={this.state.escolaridad} onChange={e => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="profesion">
                        <Form.Label>profesion</Form.Label>
                        <Form.Control type="text" name="profesion" value={this.state.profesion} onChange={e => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="ultimoTrabajo">
                        <Form.Label>ultimoTrabajo</Form.Label>
                        <Form.Control type="text" name="ultimoTrabajo" value={this.state.ultimoTrabajo} onChange={e => this.handleChange(e)} />
                    </Form.Group>

                    <input type="submit" value ="Submit"/>
                </Form>

                
                
            </div>
        );
    }
}

export default AddResume;