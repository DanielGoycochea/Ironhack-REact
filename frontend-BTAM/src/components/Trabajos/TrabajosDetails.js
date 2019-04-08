import React, { Component } from 'react'
import axios from 'axios'
import EditTrabajos from './EditTrabajos'
import SendEmail from '../Resume/SendEmail';
import {Button, Modal} from 'react-bootstrap'

 import { Link } from 'react-router-dom';


class TrabajosDetails extends Component {
    constructor(props, context){
        super(props, context)
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state={
            show: false,
        }
    }
    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    componentDidMount(){
        console.log('hola')
        this.getSingleTrabajo()
    }
    
    getSingleTrabajo= () =>{
        const {params} = this.props.match
        axios.get (`${process.env.REACT_APP_API_SERVER}${params.id}`, {withCredentials:true})
        .then (responseFromApi=>{
            const theTrabajo = responseFromApi.data
            this.setState(theTrabajo)
        })
        .catch ((err)=>{
            console.log(err)
        })
    }

    renderEditForm= () =>{
        if(!this.state.puesto){
            this.getSingleTrabajo()
        }else {
            return <EditTrabajos theTrabajos={this.state} getTheTrabajo={this.getSingleTrabajo} {...this.props}/>
        }
    }

    deleteTrabajo =(id)=>{
        const {params} = this.props.match;
        axios.delete(`${process.env.REACT_APP_API_SERVER}${params.id}`, {withCredentials:true})
        .then ( responseFromApi=>{
            this.props.history.push ('/trabajos')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    ownershipCheck = (trabajo) => {
        
        if(this.props.loggedInUser && trabajo.owner === this.props.loggedInUser._id){
          return (
            <div>
              {/* <div>{this.renderEditForm()} </div> */}
              <Button onClick={() => this.deleteTrabajo (this.state._id)}>Delete project</Button>
            </div>
          )
        } 
      }


    render(){
        
        if(this.props.loggedInUser){
            return(
             <div className="container">
              <img src={this.state.image} alt="logo"/>
              <h1>{this.state.puesto}</h1>
              <p>{this.state.ubicacion }</p>
              <p>{this.state.horario}</p>              
              <p>{this.state.categoria}</p>
              <p>{this.state.descripcion}</p>
              <p>{this.state.sueldo}</p>
              <p>{this.state.nomEmpresa}</p>
              <p>{this.state.detallesEmpresa}</p>
              <p>{this.state.sitio}</p>
              <p>{this.state.to}</p>
              <div >{this.ownershipCheck(this.state)}</div><br/>
                
                
              <Button variant="primary" onClick={this.handleShow}>
                Postulate
              </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SendEmail {...this.props} correo={this.state.correo} puesto={this.state.puesto}  nomEmpresa={this.state.nomEmpresa}/></Modal.Body>
                    <Button variant="danger" onClick={this.handleClose}>
                    Cerrar
                    </Button>
                </Modal>
           
            
                <Link to={'/trabajos'}>REgresar</Link>

              </div>
            )
        }else{
            return(
                <div className="container">
                    <img src={this.state.image} alt="logo"/>
                    <h1>{this.state.puesto}</h1>
                    <p>{this.state.ubicacion }</p>
                    <p>{this.state.horario}</p>              
                    <p>{this.state.categoria}</p>
                    <p>{this.state.descripcion}</p>
                    <p>{this.state.sueldo}</p>
                    <p>{this.state.nomEmpresa}</p>
                    <p>{this.state.detallesEmpresa}</p>
                    <p>{this.state.sitio}</p>
                    <Link to={'/trabajos'}>Regresar</Link>
         
           </div>
            )
        }
        
    }
}

export default TrabajosDetails