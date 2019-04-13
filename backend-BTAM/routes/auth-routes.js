const express       = require ('express')
const authRoutes    = express.Router()
const passport      = require ('passport')
const bcrypt        = require('bcryptjs')
const User          = require ('../models/User')
const mongoose      = require('mongoose')
mongoose.set('useFindAndModify', false);

authRoutes.post ('/signup', (req, res, next)=>{
  const username = req.body.username
  const password = req.body.password
  const nombre = req.body.nombre
  const apellido = req.body.apellido

  if(!username||!password){
    res.status(400).json({message:'proporciona username y password'})
    return
  }

  if(password.length < 7){
    res.status(400).json ({message:'proporcione una contraseña mayor de 8 caracteres'})
    return
  }

  User.findOne({username},(err, foundUser)=>{
    if(err){
      res.status(500).json ({message:"La verificiacion no fue correcta"})
      return
    }

    if(foundUser){
      res.status(400).json({message:'nombre de usuario ya existe'})
      return
    }

    const salt      = bcrypt.genSaltSync(10)
    const hashPass  = bcrypt.hashSync(password, salt);

    const aNewUser  = new User ({
      nombre:nombre,
      apellido:apellido,
      username:username,
      password:hashPass,
           
    });

    aNewUser.save(err=>{
      if(err){
        res.status(400).json({message:'Algo salio mal en la base de datos'})
        return
      }

      req.login(aNewUser, (err)=>{
        if (err) {
          res.status(500).json ({message:"No fue posible iniciar sesion"})
          return
        }
        res.status(200).json(aNewUser)

      })
    })
  })
})


authRoutes.post('/login', (req,res, next)=>{
  passport.authenticate('local',(err, theUser,failureDetails)=>{
    if (err){
      res.status(500).json({message:"Algo salio mal en la authentificacion"})
      return
    }
    if(!theUser){
      res.status(401).json(failureDetails)
      return;
    }
    req.login(theUser, (err)=>{
      if(err){
        res.status(500).json({message:'La sesion se guardo mal'})
        return
      }
      res.status(200).json(theUser)
    })
  })(req, res, next)
})

authRoutes.post('/logout', (req, res, next)=>{
  req.logout();
  res.status(200).json({message:'Se realizo el logout'})
});

authRoutes.get('/loggedin',(req,res,next)=>{
  if(req.isAuthenticated()){
    res.status(200).json(req.user)
    return
  }
  res.status(403).json({message:'UnauthorizedN no esta logeado'})
})

authRoutes.put('/update/:id', (req,res,next)=>{
  if (!req.isAuthenticated()){
    res.status(400).json({menssage:'id no es valido'})
    return
}
User.findByIdAndUpdate(req.params.id, req.body)
.then(()=>{
  res.json({message:`Se actualizo correctamente el usuario ${req.params.id}`})
  return
})
.catch(err=>{
        res.json(err)
    })

})


authRoutes.get('/user/:id', (req,res, next)=>{
  if (!req.isAuthenticated()){
    res.status(400).json({menssage:'id no es valido'})
    return
  }
  User.findById(req.params.id)
  .then(response=>{
      res.status(200).json (response);
  })
  .catch(err=>{
      res.json(err);
  })

})

module.exports = authRoutes;