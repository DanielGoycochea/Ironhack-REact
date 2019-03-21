const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  ubicacion: String,
  imagen: {type:String, default: 'https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'},
  categoria: String,
  descripcion: String,
  fechaNacimiento: {type: Date},
  trabajosPublicados:[{type: Schema.Types.ObjectId, ref:'Trabajos'}],
  cv:{
    escolaridad:String,
    profesion:String,
    ultimoTRabajo:String

  },
  },{
    timestamps:{
      createdAt:"created_at",
      updatedAt:"updated_at"
    }
  })


const User = mongoose.model('User', userSchema);
module.exports = User