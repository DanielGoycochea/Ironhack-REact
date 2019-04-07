const express = require ('express');
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
const User= require ('../models/User')
const uploadCloud = require("../config/cloudinary")



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

router.post('/upload', uploadCloud.single('photo'), (req, res, next) => {
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  const newMovie = new Movie({imgPath, imgName})
  newMovie.save()
  .then(movie => {
    res.redirect('/');
  })
  .catch(error => {
    console.log(error);
  })
});




module.exports = router