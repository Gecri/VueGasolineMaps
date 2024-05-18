const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Importa el paquete JWT
const expressJwt = require('express-jwt');

const Users = require('./users');



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
           const token = jwt.sign({id: newUser._id},process.env.SECRET,{
            expiresIn: 60 *60 *42
           })             
            res.status(201).json({auth:true, token})
        } catch (e) {
            console.error(e); 
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
              
                const token = jwt.sign({ id: user._id }, process.env.SECRET);
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
