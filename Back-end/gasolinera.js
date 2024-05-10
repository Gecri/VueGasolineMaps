const mongoose = require('mongoose');

const Gasolineras = mongoose.model('Gasolineras',{
    gasolinera: { 
        type: String, 
        required: true, 
        minlength: 5 
      },
      direccion: { 
        type: String, 
        required: true, 
        minlength: 4 
      },
      regular: { 
        type: Number, 
        required: true 
      },
      premium: { 
        type: Number, 
        required: false 
      },
      diesel: { 
        type: Number, 
        required: false 
      }
})
module.exports = Gasolineras;