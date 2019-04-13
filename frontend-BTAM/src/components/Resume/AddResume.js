import React, { Component } from 'react';
import axios from 'axios';
import {Form, ButtonToolbar, Button} from 'react-bootstrap'
import {Redirect, Link } from 'react-router-dom'
import swal from 'sweetalert';

class AddResume extends Component {
    constructor(props){
        super(props)
        this.state={
            edad: this.props.loggedInUser.edad,
            fechaNacimiento:this.props.loggedInUser.fechaNacimiento,
            descripcion:this.props.loggedInUser.descripcion,
            escolaridad: this.props.loggedInUser.escolaridad,
            profesion:this.props.loggedInUser.profesion,
            ultimoTrabajo: this.props.loggedInUser.ultimoTrabajo,
            telefono:this.props.loggedInUser.telefono,
            perfilCreado: false
        }
    }

    handleFormSumit=(event)=>{
        event.preventDefault()
        const edad= this.state.edad
        const fechaNacimiento= this.state.fechaNacimiento
        const descripcion = this.state.descripcion
        const escolaridad = this.state.escolaridad
        const profesion = this.state.profesion
        const ultimoTrabajo = this.state.ultimoTrabajo
        const telefono= this.state.telefono
        

        axios.put(`${process.env.REACT_APP_API_PROFILE}${this.props.loggedInUser._id}`, {
            edad,
            fechaNacimiento,
            descripcion,
            escolaridad,
            profesion,
            ultimoTrabajo,
            telefono
        },{withCredentials:true})
        .then(()=>{
            this.setState({
            edad:'',
            fechaNacimiento:'',
            descripcion:'',
            escolaridad:'',
            profesion:'',
            ultimoTrabajo:'',
            telefono:'',
            perfilCreado: true
            })
            swal("Se actualizo", "Correctamente", "success");
        })
        .catch(error=> swal("Error", "verifique sus datos", "error"))
    }
    
    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }
    render() {
        if(this.state.perfilCreado){
            return(
                <Redirect to="/perfil"/>
                
            )
        }else{
            return (
                    <div className='container' >
                    <h1 className="centrar">Actualiza tu perfil</h1>
                    <Form onSubmit = {this.handleFormSumit} >
                        <Form.Group controlId="edad">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control  size="lg" type="number" name="edad" value={this.state.edad} placeholder="Ingresa tu edad"  onChange={e => this.handleChange(e)} />
                        </Form.Group>
                        <Form.Group controlId="fechaNacimiento">
                            <Form.Label>Fecha Nacimiento</Form.Label>
                            <Form.Control size="lg" type="date" name="fechaNacimiento" value={this.state.fechaNacimiento} onChange={e => this.handleChange(e)} />
                        </Form.Group>
                        <Form.Group controlId="descripcion">
                            <Form.Label>Describe quién eres y que te gusta hacer</Form.Label>
                            <Form.Control size="lg" as="textarea" rows="3" name="descripcion" value ={this.state.descripcion}placeholder="Describe quién eres y que te gusta hacer" onChange={e=>this.handleChange(e)}/>
                        </Form.Group>
                        <Form.Group controlId="escolaridad">
                            <Form.Label>Escolaridad</Form.Label>
                            <Form.Control as="select" size="lg" type="text" name="escolaridad" value={this.state.escolaridad} onChange={e => this.handleChange(e)}>
                                     <option>Seleccione una opción ...</option>	
                                     <option>Primaria</option>	
                                     <option>Secundaria</option>
                                     <option>Bachillerato</option>
                                     <option>Licenciatura</option>
                                     <option>Maestría</option>
                                     <option>Doctorado</option>
                                     <option>Otros </option>
                            </Form.Control>
                        </Form.Group>
                       
                        <Form.Group controlId="profesion">
                            <Form.Label>Oficio / Profesión </Form.Label>
                            <Form.Control  size="lg" type="text" name="profesion" value={this.state.profesion} onChange={e => this.handleChange(e)} />
                        </Form.Group>
                        <Form.Group controlId="ultimoTrabajo">
                            <Form.Label>Ultimo Trabajo</Form.Label>
                            <Form.Control size="lg" type="text" name="ultimoTrabajo" value={this.state.ultimoTrabajo} placeholder="Ingresa tu Ultimo Trabajo"  onChange={e => this.handleChange(e)} />
                          
                        </Form.Group>
                        <Form.Group controlId="telefóno">
                            <Form.Label>Ingresa tu Telefono</Form.Label>
                            <Form.Control size="lg" type="text" name="telefono" value={this.state.telefono} placeholder="Ingresa tu Telefono" onChange={e => this.handleChange(e)} />
                        </Form.Group>
                        <ButtonToolbar >
                             <div>
                             <Button size="lg" className="input" variant="info" type="submit" value="Submit">
                                 Enviar
                             </Button>
                             </div>
                             <div className="button-det">

                                 <Link   className="link-botton" to={'/perfil'}><Button className="input" size="lg" variant="outline-info">Regresar</Button></Link>
                             </div>
                        </ButtonToolbar>
                           
                    </Form>
    
                    
                    </div>
                
            );
            
        }

        
    }
}

export default AddResume;