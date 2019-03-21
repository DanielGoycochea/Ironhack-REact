import React, { Component } from 'react';
import axios from 'axios'
// import {AddTrabajos} from "./AddTrabajos";

import {Link} from 'react-router-dom'



class TrabajosList extends Component{
    constructor(){
        super ()
        this.state={listOfTrabajos:[]}
    }
    getAllTrabajos= () =>{
        axios.get(/*`process.env.REACT_APP_API_SERVER`*/'http://localhost:3005/api/trabajos')
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
            <div>
                <div className="container">
                    {this.state.listOfTrabajos.map((trabajo, index)=>{
                        return(
                            <div key= {trabajo._id}>
                            <Link to ={`/trabajos/${trabajo._id}`}>
                                {trabajo.puesto}
                            </Link>
                            <p>{trabajo.descripcion}</p>
                            </div>
                        )})
                        }
                </div>
                <div>
                    {/* <AddTrabajos getData={()=> this.getAllTrabajos ()}/> */}
                </div>

            </div>
        )
    }
}

export default TrabajosList