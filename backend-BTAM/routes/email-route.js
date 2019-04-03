const nodemailer = require('nodemailer');
const express = require ('express');

const router = express.Router()

router.post('/email', (req, res, next )=>{
  var data= req.body

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
    
    to:  `${data.to}` ,
    subject: `${data.subject}`,
    html:`<p>${data.name}</p>
          <p>${data.to}</p>
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
