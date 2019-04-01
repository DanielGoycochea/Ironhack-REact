const express = require ('express');
const mongoose = require('mongoose');
const Profile = require ('../models/Profile')



const router = express.Router()


router.get('/perfil', (req, res, next)=>{
  Profile.find()
  .then (alltheprofile=>{
    res.json(alltheprofile)
  })
  .catch(err=>{
    res.json(err)
  })
})

router.post('/perfil', (req, res, next)=>{
  Profile.create({
  categoria : req.body.categoria,
  descripcion : req.body.descripcion,
  fechaNacimiento : req.body.fechaNacimiento,
  escolaridad : req.body.escolaridad,
  profesion : req.body.profesion,
  ultimoTrabajo : req.body.ultimoTrabajo,
  edad: req.body.edad,
  owner: req.user._id,
  perfilCreado: req.body.perfilCreado
  })
  .then(response=>{
    res.json(response)
  })
  .catch(err=>{
    res.json(err)
  })
})


router.put('/perfil/:id', (req,res,next)=>{
  if (!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({menssage:'id no es valido'})
    return
}
Profile.findByIdAndUpdate(req.params.id, req.body)
.then(()=>{
  res.json({menssage:`Se actualizo correctamente el usuario ${req.params.id}`})
})
.catch(err=>{
        res.json(err)
    })

})




module.exports = router