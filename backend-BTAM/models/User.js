const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  nombre: String,
  apellido: String,
  username:String,
  password: String,
  imagen: {type:String, default: 'https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'},
  edad:Number,
  fechaNacimiento: {type: Date},
  trabajosPublicados:[{type: Schema.Types.ObjectId, ref:'Trabajos'}],
  categoria: String,
  descripcion: String, 
  escolaridad:String,
  profesion:String,
  ultimoTrabajo:String,
  telefono:String, 
 
},{
    timestamps:{
      createdAt:"created_at",
      updatedAt:"updated_at"
    }
  })


const User = mongoose.model('User', userSchema);
module.exports = User