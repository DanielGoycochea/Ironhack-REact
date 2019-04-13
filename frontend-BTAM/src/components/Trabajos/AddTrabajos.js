import React, { Component } from 'react';
import axios from 'axios'
import {Form,Button, ButtonToolbar} from 'react-bootstrap'
import swal from 'sweetalert';
import {Link, Redirect} from 'react-router-dom'



class AddTrabajos extends Component{
    constructor (props){
        super(props);
        this.state ={
        puesto: '',
        ubicacion: '',
        horario: '',
        categoria: '',
        descripcion: '',
        sueldo: '',
        detallesEmpresa: '',
        nomEmpresa: '',
        correo:'',
        perfilActualizado: false
        
        }
    }
        handleFormSubmit = (event)=>{
            event.preventDefault()
            const puesto =this.state.puesto 
            const ubicacion =this.state.ubicacion
            const horario =this.state.horario
            const categoria =this.state.categoria
            const descripcion =this.state.descripcion
            const sueldo =this.state.sueldo
            const detallesEmpresa =this.state.detallesEmpresa
            const nomEmpresa =this.state.nomEmpresa
            const edad =this.state.edad
            const correo =this.state.correo

            axios.post(process.env.REACT_APP_API_SERVER,
            {puesto,
            ubicacion,
            horario,
            categoria,
            descripcion,
            sueldo,
            detallesEmpresa,
            nomEmpresa,
            correo,
            edad}, {withCredentials:true})
            .then(()=>{
                this.setState({
                    puesto: '',
                    ubicacion: '',
                    horario: '',
                    categoria: '',
                    descripcion: '',
                    sueldo: '',
                    detallesEmpresa: '',
                    nomEmpresa: '',
                    edad: '',
                    correo:'',
                    perfilActualizado: true
                })
                swal("Guardado", "Correctamente", "success");
            })
            .catch(error=> swal("Error", "Intente de nuevo", "error") )
        }

        handleChange = (event) =>{
            const {name, value} = event.target;
            this.setState({[name]:value})
        }
        
        render(){
            if(this.state.perfilActualizado){
                return(
                    <Redirect to="/perfil"/>
                    
                )
            }else{
          
            return(
                <div className="container">
                    <h1 className="centrar" style={{marginTop:'50px'}}><b>Agrega un empleo</b> </h1><br/>
                       <Form onSubmit = {this.handleFormSubmit}>
                                <Form.Group controlId="puesto">
                                    <Form.Label>Puesto</Form.Label>
                                    <Form.Control type="text" name="puesto" value={this.state.puesto} onChange={e => this.handleChange(e)}placeholder="Indique el nombre del puesto" />
                                </Form.Group>
                                <Form.Group controlId="descripcion">
                                    <Form.Label>Descripción del Trabajo</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="descripcion" value ={this.state.descripcion} onChange={e=>this.handleChange(e)} placeholder="Describa las funciones del puesto" />
                                </Form.Group>
                                <Form.Group controlId="nomEmpresa">
                                    <Form.Label>Nombre de la Empresa</Form.Label>
                                    <Form.Control required type="text" name="nomEmpresa" value={this.state.nomEmpresa} onChange={e => this.handleChange(e)}placeholder="Indique el nombre de la Empresa" />
                                </Form.Group>
                                <Form.Group controlId="detallesEmpresa">
                                    <Form.Label>Descripción de la Empresa</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="detallesEmpresa" value ={this.state.detallesEmpresa} onChange={e=>this.handleChange(e)} placeholder="Describa los detalles de la empresa" />
                                </Form.Group>
                                <Form.Group controlId="ubicacion">
                                    <Form.Label>Ubicación del trabajo</Form.Label>
                                    <Form.Control as="select" name="ubicacion" value={this.state.ubicacion} onChange={e => this.handleChange(e)}>
                                     <option>Seleccione una opción --</option>	
                                     <option>Coyoacán</option>	
                                     <option>Azcapotzalco</option>	
                                     <option>Cuajimalpa de Morelos</option>	
                                     <option>Gustavo A. Madero</option>
                                     <option>Iztacalco</option>	
                                     <option>Iztapalapa</option>
                                     <option>La Magdalena Contreras</option>	
                                     <option>Milpa Alta</option>	
                                     <option>Álvaro Obregón</option>	
                                     <option>Tláhuac</option>	
                                     <option>Tlalpan</option>	
                                     <option>Xochimilco</option>	
                                     <option>Benito Juárez</option>	
                                     <option>Cuauhtémoc</option>	
                                     <option>Miguel Hidalgo</option>	
                                     <option>Venustiano Carranza</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="horario">
                                    <Form.Label>Horario</Form.Label>
                                    <Form.Control as="select" name ="horario" value={this.state.horario} onChange ={e=> this.handleChange(e)}>
                                     <option>Seleccione una opción ...</option>	
                                     <option>Tiempo Completo</option>	
                                     <option>Medio Tiempo</option>	
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="categoria">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Control as="select" name ="categoria" value={this.state.categoria} onChange ={e=> this.handleChange(e)} >
                                     <option>Seleccione una opción ...</option>	
                                     <option>Administración / Oficina</option>	
                                     <option>Oficios</option>
                                     <option>Atención al Cliente / Call Center </option>
                                     <option>Ventas / Desarrollo de Negocio</option>
                                     <option>Recursos Humanos</option>
                                     <option>Compras / Logística y Distribución</option>
                                     <option>Control de Calidad / Seguridad en el Trabajo </option>
                                     <option>Educación y Formación</option>
                                     <option>Hotelería / Restauración / Turismo</option>
                                     <option>Instalación / Mantenimiento / Reparación</option>
                                     <option>Servicios de Seguridad</option>
                                     <option>Otros</option>
                                    </Form.Control>
                                </Form.Group>
                                
                                <Form.Group controlId="sueldo">
                                    <Form.Label>Sueldo</Form.Label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    
                                    <Form.Control type="text" name="sueldo" value={this.state.sueldo} onChange={e => this.handleChange(e)}placeholder="Indique el sueldo (opcional)" />
                                    <span className="input-group-text">.00</span>
                                </div></Form.Group>
                                
                                <Form.Group controlId="edad">
                                    <Form.Label>Edad minima requerida</Form.Label>
                                    <Form.Control type="number" min="55"name="edad" value={this.state.edad} onChange={e => this.handleChange(e)}placeholder="55"/>
                                </Form.Group>
                                <Form.Group controlId="correo">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type="correo" name="correo" value={this.state.correo} onChange={e => this.handleChange(e)}placeholder="Indique el correo de contacto" />
                                </Form.Group>
                                  <ButtonToolbar >
                                    <div>
                                        <Button type="submit" value ="Submit"  size="lg" variant="info">Enviar</Button>
                                    </div>
                                    <div className="button-det">
                                        <Link to="/perfil"><Button type="submit" value ="Submit"  size="lg" variant="outline-info">Regresar</Button></Link>
                                    </div>
                                </ButtonToolbar >
                        </Form>
                </div>
            )
        }
    }
}

export default AddTrabajos