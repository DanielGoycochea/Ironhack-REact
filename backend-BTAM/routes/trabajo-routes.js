const express = require ('express');
const mongoose = require('mongoose');
const Trabajos = require ('../models/Trabajos')


const router = express.Router();

router.get('/trabajos',(req, res, next)=>{
    Trabajos.find()
    .then(allTheTrabajos=>{
        res.json(allTheTrabajos)
    })
    .catch(err=>{
        res.json (err)
    })
})

router.post('/trabajos', (req, res, next)=>{
    Trabajos.create({
        puesto:req.body.puesto,
        ubicacion: req.body.ubicacion,
        horario: req.body.horario,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        sueldo: req.body.sueldo,
        detallesEmpresa: req.body.detallesEmpresa,
        nomEmpresa: req.body.nomEmpresa,
        sitio: req.body.sitio,
        owner: req.user._id, 
        correo: req.body.correo
        })
        .then(response=>{
            res.json(response)
        })
        .catch(err=>{
            res.json(err)
        })
})


router.get('/trabajos/:id', (req,res, next)=>{
    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.status(400).json({menssage:' el id no eexiste'})
    }
    Trabajos.findById(req.params.id)
    .then(response=>{
        res.status(200).json (response);
    })
    .catch(err=>{
        res.json(err);
    })

})

router.put('/trabajos/:id',(req, res, next)=>{
    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.status(400).json({menssage:'id no es valido'})
        return
    }
    Trabajos.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        res.json({menssage:`Se actualizo correctamente el trabajo ${res.params.id}`})
    })
    .catch(err=>{
        res.json(err)
    })
})

router.delete('/trabajos/:id',(req, res, next)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.status(400).json({menssage:'id no es valido'})
        return
    }
    Trabajos.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.jason({menssage: `Se elimino ${req.params.id}`});
    })
    .catch(err=>{
        res.json(err)
    })
})

module.exports = router