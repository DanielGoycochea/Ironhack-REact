import React, { Component } from 'react';
import {Col, Row, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Dashbord extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        if(this.props.loggedInUser){
        return (
            <div className="container">
                
                <Row>
                
                    <Col className="centrar">
                    <h1>Bienvenido {this.props.loggedInUser.nombre}</h1>
                    <Row ><img className="image-perfil"src={this.props.loggedInUser.imagen} alt="perfil"/></Row>
                    <Row className="button-perfil"><Button >Editar Peril</Button></Row>
                    
                    </Col>
                    <Col className="">
                    <Row>
                        <section>
                            <h1>Encuentre Empleo </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium aperiam maiores culpa nulla earum totam, consequuntur dolores voluptas nostrum voluptate ex labore unde a, doloribus quisquam dolore. Nulla, aut.</p>
                            <button>Encuentre un empleo</button>
                        
                        </section>
                    </Row>
                    <Row>
                        <section>
                            <h1>Agregar Empleo</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, magnam veritatis voluptas voluptate perferendis corrupti nobis, assumenda sit repudiandae eveniet impedit dolore dolorum consequatur esse in modi eligendi odio. Dolore.</p>
                            <Link to="/addtrabajo"><button>Agrege un empleo</button></Link>
                        </section>
                    </Row>
                    <Row><section>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum perspiciatis repellat vitae fugiat, quis nam molestiae ex ullam perferendis! Delectus quisquam repudiandae ducimus rerum quis veritatis doloremque sint esse.
                    </section></Row>
                    </Col>
                </Row>
                
            </div>
        );}
    }
}

export default Dashbord;