import React, { Component } from 'react';
import axios from 'axios'
import{Table} from 'react-bootstrap'

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

                <Table>
                    <thead>
                        <tr>
                            <th>Puesto</th>
                            <th>Descripción</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.listOfTrabajos.map((trabajo, index)=>{
                        return(
                            <tr key= {trabajo._id}>
                                <td>{trabajo.puesto}</td>
                                <td>{trabajo.descripcion}</td>
                                <td><Link to ={`/trabajos/${trabajo._id}`}>Ver Detalle</Link></td>
                            </tr>
                        )
                    })
                        }

                    </tbody>
                </Table>
               
               
               
                <div>
             
                </div>

            </div>
        )
    }
}

export default TrabajosList