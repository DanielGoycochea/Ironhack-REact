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
    subject: `Se han postulado para la vacante de ${data.subject}`,
    html:    `<h2> Se han postulado para la vacante de ${data.puesto} través de Bolsa de Trabajo para el Adulto Mayor</h2>
              <h4>Los datos del interesado son:</h4>
              <p><b>Nombre:</b> ${data.nombre}</p>
              <p><b>Apellido:</b> ${data.apellido}</p>
              <p><b>Edad:</b> ${data.edad}</p>
              <p><b>Descripción:</b> ${data.descripcion}</p>
              <p><b>Escolaridad:</b> ${data.escolaridad}</p>
              <p><b>Ultimo </b>Trabajo: ${data. ultimoTrabajo}</p>
              <p><b>Correo:</b> ${data.username}</p>
              <p><b>Telefono:</b> ${data.telefono}</p>
              <p><b>Información </b>enviada desde Bolsa de Trabajo para el Adulto Mayor</p>`
  
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
