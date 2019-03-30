const express = require ('express');
const mongoose = require('mongoose');
const User = require ('../models/User')
const nodemailer = require('nodemailer');

const router = express.Router()

router.get('/perfil',(req, res, next)=>{
    User.find()
    .then(allTheperfil=>{
        res.json(allTheperfil)
    })
    .catch(err=>{
        res.json (err)
    })
})

router.put('/perfil/:id', (req,res,next)=>{
  if (!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({menssage:'id no es valido'})
    return
}
User.findByIdAndUpdate(req.params.id, req.body)
.then(()=>{
  res.json({menssage:`Se actualizo correctamente el usuario ${res.params.id}`})
})
.catch(err=>{
        res.json(err)
    })

})

router.post('/email', (req, res, next )=>{
  var data= req.body

  var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'danielgoycocheardz@gmail.com',
      pass: 'Tricuricus1982'
    }
  })

  const mailOptions={
    from: 'danielgoycocheardz@gmail.com',
    to: 'rodago_x@hotmail.com',
    subject: 'Subject of your email',
    html:`<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
  
  }
  transporter.sendMail(mailOptions)
  .then(()=>{
    res.json({menssage:`Se envio correo a ${data.name}`})
  })
  .catch(err=>{
          res.json(err)
      })
})


module.exports = router