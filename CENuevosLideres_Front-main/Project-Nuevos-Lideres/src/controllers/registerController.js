import { response } from "../helpers/response.js";
import { registerModel } from "../models/registerModel.js";

const registerCtrl = {};

registerCtrl.addRegister = async (req, reply) => {
    try {
        const newRegister=await registerModel.create(req.body);
        
        return response(reply, 201, true, newRegister, "Regristro creado");
    } catch (error) {
        return response(reply, 500, false, "", error.message);
    }
};

registerCtrl.listAll = async (req, reply) => {
    try {
        const register = await registerModel.find().sort({ createdAt: -1 });

        return response(reply, 200, true, register, "Lista de registros");
    } catch (error) {
        return response(reply, 500, false, "", error.message);
    }
};

registerCtrl.listOne = async (req, reply) => {
    try {
        const { id } = req.params;
        const register = await registerModel.findById(id);

        if (!register) {
            return response(reply, 404, false, "", "Registro no encontrado")
        };

        return response(reply, 200, true, register, "Registro encontrado")
    } catch (error) {
        return response(reply, 500, false, "", error.message);
    }
};

registerCtrl.update = async (req, reply) => {
    try {
        const { id } = req.params;
        const register = await registerModel.findById(id);

        if (!register) {
            return response(reply, 404, false, "", "Registro no encontrado")
        };

        await register.updateOne(req.body);
        return response(reply, 200, true, "", "Registro actualizado")
    } catch (error) {
        return response(reply, 500, false, "", error.message);
    }
};

registerCtrl.delete = async (req, reply) => {
    try {
        const { id } = req.params;
        const register = await registerModel.findById(id);

        if (!register) {
            return response(reply, 404, false, "", "Registro no encontrado")
        };

        await register.delteOne();

        return response(reply, 200, true, "", "Registro eliminado");
    } catch (error) {
        return response(reply, 500, false, "", error.message);
    }
};

export default registerCtrl;