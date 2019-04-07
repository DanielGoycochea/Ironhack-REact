const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const trabajosSchema = new Schema({
  puesto:String,
  ubicacion: String,
  horario: String,
  categoria: String,
  descripcion: String,
  sueldo: String,
  detallesEmpresa: String,
  nomEmpresa: String,
  sitio: String,
  image: {type:String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOgd1j1aOvHf-wmpZjxei0YTNTXJZ0kuq9BX5QmEG3HYHLdwcng'},
  owner: {type: Schema.Types.ObjectId, ref:'User'},
  correo: String 
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
})

const Trabajos = mongoose.model('Trabajos', trabajosSchema);
module.exports = Trabajos