const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  edad:Number,
  fechaNacimiento: {type: Date},
  trabajosPublicados:[{type: Schema.Types.ObjectId, ref:'Trabajos'}],
  categoria: String,
  descripcion: String, 
  escolaridad:String,
  profesion:String,
  ultimoTrabajo:String,
  owner: {type: Schema.Types.ObjectId, ref:'User'},
  perfilCreado:{type:Boolean, default: false}

},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
})

const Profile = mongoose.model('Profile', ProfileSchema)
module.exports = Profile