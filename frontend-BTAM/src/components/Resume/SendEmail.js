import React, { Component } from 'react';
import axios from 'axios';
import {Form, Modal} from 'react-bootstrap'
import { Lion as Button } from 'react-button-loaders'


class SendEmail extends Component {
    state = {
        sendState: ''
      }
        componentDidMount(){
        this.getDataUser()
    }
      
      getDataUser= () =>{
        
        axios.get (`${process.env.REACT_APP_API_EMAIL_USER}${this.props.loggedInUser._id}`, {withCredentials:true})
        .then (responseFromApi=>{
            const theUser = responseFromApi.data
            this.setState(theUser)
        })
        .catch ((err)=>{
            console.log(err)
            
        })
    }
      
    
    handleFormSubmit=(event)=>{
        event.preventDefault()
        
        const to = this.props.correo
        const subject = this.props.puesto
        const puesto = this.props.puesto
        const nombre= this.state.nombre
        const apellido=this.state.apellido
        const edad= this.state.edad
        const descripcion = this.state.descripcion
        const escolaridad = this.state.escolaridad
        const profesion = this.state.profesion
        const telefono = this.state.telefono
        const ultimoTrabajo = this.state.ultimoTrabajo
        const username = this.state.username
        
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
        console.log("mensaje enviado")
                    })
        .catch(error=> console.log(error))
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    handleClick = () => {
        this.setState({sendState: 'loading'})
          setTimeout(() => {
          this.setState({sendState: 'finished'})
        }, 3000)
      }
      

        render() {
        return (
            <div>
                <h1>Estimado (a) {this.state.nombre}</h1>
            <Form onSubmit = {this.handleFormSubmit}>
               <p> Se enviaran tus datos a la empresa {this.props.nomEmpresa}, para el puesto de {this.props.puesto} ,  pulsa enviar si esta de acuerdo.</p>
               <Modal.Footer>
               <Button  onClick={this.handleClick} state={this.state.sendState} bgColor="#28a745" bgLoading="#007bff" type="submit" value ="Submit">Enviar</Button>
               </Modal.Footer>
            </Form>
                
            </div>
        );
    }
}

export default SendEmail;