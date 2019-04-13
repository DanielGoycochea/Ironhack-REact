import React, { Component } from 'react';
import axios from 'axios'
import{Table, Button, ButtonToolbar} from 'react-bootstrap'



import {Link} from 'react-router-dom'



class TrabajosList extends Component{
    constructor(){
        super ()
        this.state={listOfTrabajos:[]}
    }
    getAllTrabajos= () =>{
        axios.get(process.env.REACT_APP_API_SERVER, {withCredentials:true})
        .then (responsefromApi=>{
            this.setState({
                listOfTrabajos: responsefromApi.data
            })
        })
    }
    componentDidMount(){
        this.getAllTrabajos()
    }
    render(){
       
        return(
            <div className="container">
                <div className="text-list">
                    <h1 style={{textAlign: "center",fontSize:"50px" }} >BOLSA DE TRABAJO PARA EL ADULTO MAYOR </h1><br/>
                    <h3><b>¿Qué hacemos?</b></h3><br/>               
                    <p>Somos la conexión entre las empresas que están interesadas en apoyar al adulto mayor, ofreciendo empleos, aprovechando su experiencia y dando oportunidad de generar sus propios recursos.</p>
                    <br/>
                </div>
                <h1 style={{textAlign: "center"}}>Encuentra empleo</h1><br/>
                
                <Table  responsive style={{border:'1px solid #ddd' }} hover >
                    
                    <thead className="bg-info" >
                        <tr className="text-list" style={{color:"#ffffff"}} >
                            <th>Puesto</th>
                            <th>Descripción</th>
                            <th >Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.listOfTrabajos.map((trabajo, index)=>{
                        return(
                            <tr key= {trabajo._id} className="text-list" >
                                <td style={{verticalAlign:"middle"}}>{trabajo.puesto}</td>
                                <td  style={{width:'720px', overflowX : 'auto', textAlign:'left'}}>{trabajo.descripcion}</td>
                                <td><Link to ={`/trabajos/${trabajo._id}`}><Button variant="info">Ver Detalle</Button></Link></td> 
                            </tr>
                        )
                    })
                        }

                    </tbody>
                </Table>
                <ButtonToolbar>
                    <div>
                <Link className="link-botton" to={'/'}><Button size="lg" variant="outline-info">Regresar</Button></Link>
                </div>
                </ButtonToolbar><br/><br/>
            </div>
        )
    }
}

export default TrabajosList