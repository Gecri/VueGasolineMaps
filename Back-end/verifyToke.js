const jwt= require('jsonwebtoken')

function verifyToken(req,res,next){
    const token = req.header['x-acces-token'] 
    if(!token){
        return res.status(401).json({
            auth:false,
            message:'No Token Provided'
        })
    }

    const decoded = jwt.verify(token,process.env.SECRET)
    req.userId= decoded.id;
    next();
}

module.exports =verifyToken;