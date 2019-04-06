const express = require ('express');
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
const User= require ('../models/User')



const router = express.Router()

router.put('/user/:id', (req,res,next)=>{
  if (!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({menssage:'id no es valido'})
    return
}
User.findByIdAndUpdate(req.params.id, req.body)
.then(()=>{
  res.json({menssage:`Se actualizo correctamente el usuario ${req.params.id}`})
})
.catch(err=>{
        res.json(err)
    })

})

module.exports = router