import React, { Component } from 'react'
import axios from 'axios'
import EditTrabajos from './EditTrabajos'

 import { Link } from 'react-router-dom';


class TrabajosDetails extends Component {
    constructor(props){
        super(props)
        this.state={}
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
            console.log(trabajo)
            return (
                <div>
                    <div>{this.renderEditForm()}</div>
                    <button onClick={()=>this.deleteTrabajo(this.state._id)}>Borrar</button>
                </div>
            )
        }
    }


    render(){
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
              <div >{this.ownershipCheck(this.state)}aqui
                </div>

              {/* <div>{this.renderEditForm()}</div>
              <button onClick={() => this.deleteTrabajo(this.state._id)}>Delete TRabajo</button> */}
              <Link to={'/trabajos'}>REgresar</Link>
           </div>
        )
    }
}

export default TrabajosDetails