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

router.post('/upload', uploadCloud.single("imagen"),
  (req, res, next) => {
    console.log(req.user, req.file)
    User.findByIdAndUpdate(req.user._id, { imagen: req.file.url })
      .then(response => {
        res.status(200).json({
          image: req.user.image,
          message: "User logged"
        })
      })
      .catch(e => console.log(e))
  }
)

module.exports = router



module.exports = router