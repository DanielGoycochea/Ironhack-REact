const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  nombre: String,
  apellido: String,
  username:String,
  password: String,
  edad:Number,
  imagen: {type:String, default: 'https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'},
  fechaNacimiento: {type: Date},
  trabajosPublicados:[{type: Schema.Types.ObjectId, ref:'Trabajos'}],
  cv:{
    categoria: String,
    descripcion: String, 
    escolaridad:String,
    profesion:String,
    ultimoTrabajo:String

  },
  },{
    timestamps:{
      createdAt:"created_at",
      updatedAt:"updated_at"
    }
  })


const User = mongoose.model('User', userSchema);
module.exports = User