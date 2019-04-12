import React, { Component } from 'react'
import axios from 'axios'
import EditTrabajos from './EditTrabajos'
import SendEmail from '../Resume/SendEmail';
import {Button, Modal, ButtonToolbar} from 'react-bootstrap';
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
              
              <Button onClick={() => this.deleteTrabajo (this.state._id)} variant="danger">Delete project</Button>
            </div>
          )
        } 
      }


    render(){
        
        if(this.props.loggedInUser){
            return(
             <div className="container div-det">
                <div>
                    <img src={this.state.image} alt="logo"/>
                </div>
                <div className="text-det">
                    <h1><b>Puesto:</b> {this.state.puesto}</h1>
                    <p><b>Descripción:</b> <br/>
                     {this.state.descripcion}</p>
                    <p><b>Edad minima: </b>{this.state.edad}</p>
                    <p><b>Ubicación:</b>  {this.state.ubicacion }</p>
                    <p><b>Horario:</b> {this.state.horario}</p>              
                    <p><b>Categoria:</b> {this.state.categoria}</p>
                    
                    <p><b>Salario:</b> $ {this.state.sueldo}</p>
                    <p><b>Empresa: </b>{this.state.nomEmpresa}</p>
                    <p><b> Detalles de la Empresa: </b><br/>
                    {this.state.detallesEmpresa}</p>
                </div>
              <div >{this.ownershipCheck(this.state)}</div><br/>
                
              <ButtonToolbar >
                <div>
                    <Button variant="info" onClick={this.handleShow}>
                        Postulate
                    </Button>
                </div>
                <div className="button-det">
                
                    <Link className="link-botton" to={'/trabajos'}><Button variant="primary">Regresar</Button></Link>
                </div>
             </ButtonToolbar> 

             

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmacion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SendEmail {...this.props} correo={this.state.correo} puesto={this.state.puesto}  nomEmpresa={this.state.nomEmpresa}/></Modal.Body>
                </Modal>
           
            
                

              </div>
            )
        }else{
            return(
                <div className="container">
                   <div>
                    <img src={this.state.image} alt="logo"/>
                </div>
                <div className="text-det">
                    <h1><b>Puesto:</b> {this.state.puesto}</h1>
                    <p><b>Ubicación:</b>  {this.state.ubicacion }</p>
                    <p><b>Horario:</b> {this.state.horario}</p>              
                    <p><b>Categoria:</b> {this.state.categoria}</p>
                    <p><b>Descripción:</b> <br/>
                     {this.state.descripcion}</p>
                    <p><b>Salario:</b> $ {this.state.sueldo}</p>
                    <p><b>Empresa: </b>{this.state.nomEmpresa}</p>
                    <p><b> Detalles de la Empresa: </b><br/>
                    {this.state.detallesEmpresa}</p>
                    <p><b>Sitio de Internet: </b>{this.state.sitio}</p>
                    <Link className="link-botton" to={'/trabajos'}><Button variant="primary">Regresar</Button></Link>
                </div>
         
           </div>
            )
        }
        
    }
}

export default TrabajosDetails