import registerCtrl from "../controllers/registerController.js";
import { verifyRoles, validRoles } from "../middleware/auth.js";

const registerRoles = (fastify, opts, done) => {
    fastify.get("/allRegister", {preHandler: verifyRoles([validRoles.admin])}, registerCtrl.listAll);

    fastify.get("/allRegister/:id", {preHandler: verifyRoles([validRoles.admin])}, registerCtrl.listOne);

    fastify.post("/add", {preHandler: verifyRoles([validRoles.admin, validRoles.user])}, registerCtrl.addRegister);

    fastify.put("/update/:id", {preHandler: verifyRoles([validRoles.admin])}, registerCtrl.update);

    fastify.delete("/delete/:id", {preHandler: verifyRoles([validRoles.admin])}, registerCtrl.delete);

    done();
};

export default registerRoles;