const nodemailer = require('nodemailer');
const express = require ('express');

const router = express.Router()

router.post('/email', (req, res, next )=>{
  var data = req.body
  
  var transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
      type: 'OAuth2',
      user: process.env.NODEMAILER_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  })

  const mailOptions={
    
    to:      `${data.to}` ,
    subject: `Postulante a la vacante ${data.subject}`,
    html:    `<h1>Estoy interesado en la vacante ${data.puesto}</h1>
              <h4>Mis Datos son:</h4>
              <p>Nombre: ${data.nombre}</p>
              <p>Apellido: ${data.apellido}</p>
              <p>Edad: ${data.edad}</p>
              <p>Descripción: ${data.descripcion}</p>
              <p>Escolaridad: ${data.escolaridad}</p>
              <p>Ultimo Trabajo: ${data. ultimoTrabajo}</p>
              <p>Correo: ${data.username}</p>
              <p>Telefono: ${data.telefono}</p>
              <p>Información enviada desde Bolsa de Trabajo parat el adulto mayor</p>`
  
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
