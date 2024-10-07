import userCtrl from "../controllers/userController.js";
import { validRoles, verifyToken } from "../middleware/auth.js";

const middleware = (validRoles) => (req, reply, done) => {
    verifyToken(req, reply, done, validRoles)
}

const userRoutes = (fastify, opts, done) => {

    //la ruta login se usa en el front para usar la ruta en el backend para logearse
    fastify.post("/login", userCtrl.login);

    //la ruta register se usara en el login para llevar al controller register para hacer accion
    fastify.post("/register", userCtrl.register)
    // {preValidation: middleware([validRoles.admin])}

    done();
};

export default userRoutes;