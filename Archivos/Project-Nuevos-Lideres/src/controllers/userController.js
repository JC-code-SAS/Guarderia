import { encryptPassword } from "../helpers/encryptPassword.js";
import { generateToken } from "../helpers/generateToken.js";
import { response } from "../helpers/response.js"
import { userModel } from "../models/userModel.js";

const userCtrl = {}

//controller para registrar un nuevo usuario
userCtrl.register = async (req, reply) => {
    try {
        const {email, password, name, lastname, docType, docNum, numberPhone, role} = req.body;
        // const {email, password, name, role} = req.body;
        const user = await userModel.findOne({email})

        if(user){
            return response(reply, 409, false, "", "El correo ya esta registrado en otro usuario")
        };

        const passwordEncrypt = encryptPassword(password)

        const newUser = new userModel({
            email, password: passwordEncrypt, name, docType, docNum, lastname, numberPhone, role
        });

        await newUser.save();

        const token = generateToken({user: newUser._id})

        response(reply, 201, true, {...newUser._doc, token, password: null}, "Usuario registrado")
    } catch (error) {
        response(reply, 500, false, "", error.message)
    }
};


//controller para iniciar sesion
userCtrl.login = async(req, reply) => {
    try {
        const {password, email} = req.body;
        const user = await userModel.findOne({email});

        if(user && user.matchPassword(password)){
            const token = generateToken({user: user._id})

            return response(reply, 200, true, {...user._doc, password: null, token}, "Bienvenido")
        };

        response(reply, 400, false, "", "Correo o contraseña incorrectos")
    } catch (error) {
        response(reply, 500, false, "", error.message)
    }
}

export default userCtrl;