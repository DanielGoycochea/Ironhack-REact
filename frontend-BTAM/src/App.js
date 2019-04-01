import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import TrabajosList from './components/Trabajos/TrabajosList';
import TrabajosDetails from './components/Trabajos/TrabajosDetails'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import AuthService from './components/auth/auth-service'
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/protected-route'
import Dashbord from './components/auth/Dashbord'
import AddTrabajos from './components/Trabajos/AddTrabajos'
import AddResume from './components/Resume/AddResume'



class App extends Component {
        constructor(props){
          super(props)
          this.state = {
            loggedInUser: null
          }
          this.service = new AuthService()
        }

        fetchUser(){
          if(this.state.loggedInUser==null){
            this.service.loggedin ()
            .then(response=>{
              this.setState({
                loggedInUser: response
              })
            })
            .catch( err =>{
              this.setState({
                loggedInUser: false
              })
            })
          }
        }

        getTheUser= (userObj) => {
          this.setState({
            loggedInUser: userObj
          })
        }






  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
         <NavBar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
         <Switch>
           <Route user={this.state.loggedInUser} exact path='/' component={Home}/>
           <ProtectedRoute user={this.state.loggedInUser}  exact path="/perfil" component={Dashbord}/>
           <ProtectedRoute user={this.state.loggedInUser}  exact path="/trabajos" component={TrabajosList}/>
           <ProtectedRoute user={this.state.loggedInUser}  exact path="/trabajos/:id" component={TrabajosDetails} />
           <ProtectedRoute user={this.state.loggedInUser}  exact path="/addtrabajo" component={AddTrabajos} />
           <ProtectedRoute user={this.state.loggedInUser}  exact path="/addperfil" component={AddResume}/>
         </Switch>
       </div>
      )
    } else {
      return (
        <div className="App">
         <NavBar userInSession={this.state.loggedInUser} />
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/signup'  render={() => <Signup getUser={this.getTheUser}/>}/>
           <Route exact path='/login'   render={() => <Login getUser={this.getTheUser}/>}/>
           <Route   exact path="/trabajos" component={TrabajosList}/>
           <Route   exact path="/trabajos/:id" component={TrabajosDetails} />
           <ProtectedRoute user={this.state.loggedInUser}  exact path="/addtrabajo" component={AddTrabajos} />
           <ProtectedRoute user={this.state.loggedInUser}  exact path="/perfil" component={Dashbord}/>
         </Switch>
       </div>
      )
    }

  
  }
}

export default App;
