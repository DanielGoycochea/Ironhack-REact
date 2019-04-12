const express = require ('express');
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
const User= require ('../models/User')
const uploadCloud = require("../config/cloudinary")



const router = express.Router()

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