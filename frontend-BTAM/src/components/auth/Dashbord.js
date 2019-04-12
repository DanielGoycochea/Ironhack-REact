import React, { Component } from 'react';
import {Col, Row, Button, Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class Dashbord extends Component {
    constructor(props){
        super(props)
        this.state={
            show: true
        }
    }
  
   
    render() {
        const handleHide = () => this.setState({ show: false });
   
        if(this.props.loggedInUser){
        return (
            <div className="container">
             <Alert show={this.state.show} variant="warning">
                <Alert.Heading>MUY IMPORTANTE!!!</Alert.Heading>
                <p>
                Mantén actualizado tu perfil ya que a través de él, los reclutadores estarán en contacto contigo por lo que es muy importante si aún no los has llenado tomate unos minutos para hacerlo en la seccion de Curriculum  
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={handleHide} variant="outline-warning">
                    Cerrar
                    </Button>
                </div>
            </Alert>

        
                        <div style={{marginTop:'30px'}}>
                            <h1 style={{textAlign:"center"}}>Bienvenido {this.props.loggedInUser.nombre}</h1>
                        </div>
                <Row>
                
                    <Col>
                       
                        <div>
                            <Row ><img className="image-perfil"src={this.props.loggedInUser.imagen} alt="perfil"/></Row>
                            <Row className="button-perfil">
                                <Link to='/addperfil'><Button >Editar Foto</Button></Link>
                            </Row>
                        </div>
                        <Row>
                            <section>
                                <h1>Encuentre Empleo </h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium aperiam maiores culpa nulla earum totam, consequuntur dolores voluptas nostrum voluptate ex labore unde a, doloribus quisquam dolore. Nulla, aut.</p>
                                <Link to="/trabajos"><Button variant="info">Encuentre un empleo</Button></Link>
                            
                            </section>
                        </Row>
                    
                    </Col>
                    <Col className="">
                        <Row>
                        <section>
                            <h1>Curriulum </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum perspiciatis repellat vitae fugiat, quis nam molestiae ex ullam perferendis! Delectus quisquam repudiandae ducimus rerum quis veritatis doloremque sint esse.
                            </p>
                            <Link to="/addperfil"><Button variant="info">Encuentre un empleo</Button></Link>
                        </section>
                        </Row>
                       
                        <Row>
                            <section>
                                <h1>Agregar Empleo</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, magnam veritatis voluptas voluptate perferendis corrupti nobis, assumenda sit repudiandae eveniet impedit dolore dolorum consequatur esse in modi eligendi odio. Dolore.</p>
                                <Link to="/addtrabajo"><Button variant="info">Agrege un empleo</Button></Link>
                            </section>
                        </Row>
                        
                    </Col>
                </Row>
                
            </div>
        );}
    }
}

export default Dashbord;