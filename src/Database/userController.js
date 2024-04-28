const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Importa el paquete JWT
const expressJwt= require('express-jwt')

const Users = require('./users');

const signToke= _id =>jwt.sign({_id}, 'mi-secret') ;
const User = {
    create: async (req, res) =>{
        try {
            const { email, password } = req.body;

            const isUser = await Users.findOne({ email });
            if (isUser) {
                return res.status(403).send('Usuario ya existe');
            }

            const salt = await bcrypt.genSalt(10); // Establece un cost factor fijo
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new Users({ email, password: hashedPassword });
            
           await newUser.save();
           const sign= signToke(newUser._id);
            
            res.status(201).send("Usuario creado correctamente");
        } catch (e) {
            console.error(e); // Para depuración
            res.status(500).send("Error en el servidor");
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await Users.findOne({ email });
            if (!user) {
                return res.status(401).json({ error: 'Credenciales incorrectas' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                // Asegúrate de tener una clave secreta y definir el tiempo de expiración del token
                const token = jwt.sign({ id: user._id }, 'tu_clave_secreta');
                res.status(200).json({ token }); // Devuelve el token
            } else {
                res.status(403).json({ error: 'Usuario y/o contraseña inválidos' });
            }
        } catch (e) {
            console.error(e); // Para depuración
            res.status(500).json({ error: 'Error en el servidor' });
        }
    }
};

module.exports = User;
