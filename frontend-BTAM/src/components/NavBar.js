import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {Nav,Navbar, Form} from 'react-bootstrap'
import AuthService from '../components/auth/auth-service'


class NavBar extends Component {
    constructor(props){
      super(props)
      this.state = {loggedInUser: null}
      this.service = new AuthService ()
    }

    componentWillReceiveProps(nextProps){
      this.setState({...this.state, loggedInUser:nextProps["userInSession"]})
    }

    logoutUser = () =>{
      this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);  
      })
    }
  
     render(){
          if(this.state.loggedInUser){
            return(
              <div className= "">
              <Navbar className="Navbar" expand="lg" bg="dark" variant="dark">
                <Link to = '/'><Navbar.Brand >BTAM</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                  
                     </Nav>
                     <Form inline>
                   
                       <Navbar.Brand>{this.state.loggedInUser.nombre}</Navbar.Brand >
                     </Form>
                     <Form inline>
                     <Link to='/perfil'>
                       <Navbar.Brand>Perfil</Navbar.Brand >
                      </Link>
                      </Form>
                     <Form inline>
                     <Link to='/'>
                       <Navbar.Brand onClick={() => this.logoutUser()}>Salir</Navbar.Brand >
                      </Link>
                      </Form>


               </Navbar.Collapse>
             </Navbar>
            </div>

            )
          } else {
            return(
              <div className= "">
              <Navbar className="Navbar" expand="lg" >
                <Link to = '/'><Navbar.Brand >BTAM</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                  
                    </Nav>
                    <Form inline>
                    <Link to='/login'><Navbar.Brand >Inicia Sesión</Navbar.Brand ></Link>
                    <Link to='/signup'><Navbar.Brand >Registrate</Navbar.Brand ></Link> 
                     
                    </Form>
                    <Form inline>

                    </Form>
              </Navbar.Collapse>
            </Navbar>
           </div>
            )
          }


    //   if (this.state.loggedInUser){
    //   return(
    //         <div className= "">
    //           <Navbar className="Navbar" expand="lg">
    //             <Navbar.Brand ><Link to = '/'>BTAM</Link></Navbar.Brand>
    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="mr-auto">
                  
    //                 </Nav>
    //                 <Form inline>
    //                   <Button variant="outline-danger">Iniciar Sesion</Button>
    //                 </Form>
    //           </Navbar.Collapse>
    //         </Navbar>
    //        </div>
        
    //   )
    }

}


export default NavBar;