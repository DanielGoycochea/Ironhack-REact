const express       = require ('express')
const authRoutes    = express.Router()

const passport      = require ('passport')
const bcrypt        = require('bcryptjs')

const User          = require ('../models/User')

authRoutes.post ('/signup', (req, res, next)=>{
  const username = req.body.username
  const password = req.body.password

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
      username:username,
      password: hashPass
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

module.exports = authRoutes;