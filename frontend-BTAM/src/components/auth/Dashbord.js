import React, { Component } from 'react';
import {Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class Dashbord extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
  
   
    render() {
      
   
        if(this.props.loggedInUser){
        return (
            <div className="container ">
                  
                 <div style={{marginTop:'30px'}}>
                    <h1 style={{textAlign:"center"}}>Bienvenido {this.props.loggedInUser.nombre}</h1>
                 </div>
                    <Col>
                    <section >
                            <h1>Actualiza tu Perfil</h1>
                            <h3><b>¡MUY IMPORTANTE!</b></h3>
                            <p>Actualiza tu perfil ya que es el medio mediante el cual los reclutadores estarán en contacto contigo.
                            </p>
                            <Link to="/addperfil"><Button size='lg' variant="info">Actualiza tu Perfil</Button></Link>
                        </section>
                        <section>
                             <h1>Encuentra Empleo </h1>
                             <p>Aquí encontraras las ofertas de trabajo que hay actualmente revísalas y si encuentras alguna postúlate para enviar tus datos al reclutador. </p>
                             <Link to="/trabajos"><Button size='lg' variant="info">Encuentra un empleo</Button></Link>
                        </section>          
                        <section>
                                <h1>Agrega Empleo</h1>
                                <p><b>¿Quieres ofrecer algún empleo? </b>entra en la siguiente sección para empezar a agregar empleos y estar en contacto con los interesados.</p>
                                <Link to="/addtrabajo"><Button size='lg' variant="warning">Agrega un empleo</Button></Link>
                        </section>
                    </Col>
            </div>
        );}
    }
}

export default Dashbord;