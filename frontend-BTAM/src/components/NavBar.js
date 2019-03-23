import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {Nav,Navbar, Form, Button} from 'react-bootstrap'
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
              <Navbar className="Navbar" expand="lg">
                <Navbar.Brand ><Link to = '/'>BTAM</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                  
                     </Nav>
                     <Form inline>
                       <Button variant="outline-danger">{this.state.loggedInUser.username}</Button>
                     </Form>
                     <Link to='/'>
                       <button onClick={() => this.logoutUser()}>Logout</button>
                      </Link>


               </Navbar.Collapse>
             </Navbar>
            </div>

            )
          } else {
            return(
              <div className= "">
              <Navbar className="Navbar" expand="lg">
                <Navbar.Brand ><Link to = '/'>BTAM</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                  
                    </Nav>
                    <Form inline>
                     <Button variant="outline-danger"><Link to='/signup'>Signup</Link> </Button>
                    </Form>
                    <Form inline>
                    <Button variant="outline-danger"><Link to='/login'>Login</Link> </Button>
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