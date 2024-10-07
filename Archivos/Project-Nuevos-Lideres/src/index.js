import Fastify from "fastify";
import cors from "@fastify/cors";
import formBody from "@fastify/formbody";
import connectDB from "./database.js";
import userRoutes from "./routes/userRoute.js";
import "dotenv/config";
import fastifyEnv from "@fastify/env";
import { optionsEnv } from "./configEnv.js";
import registerRoles from "./routes/registerRoute.js";

const fastify = Fastify({ logger: true, pluginTimeout: 60000 });


fastify.register(fastifyEnv, optionsEnv).ready((err) => {
    if (err) console.error(err);
});


fastify.register(cors, { origin: "*" });
fastify.register(formBody);

fastify.register(connectDB, { uri: process.env.MONGO_URI });

fastify.register(userRoutes, { prefix: "/user" });
fastify.register(registerRoles, {prefix: "/register"})

const start = async () => {
    try {
        await fastify.ready();
        fastify.listen({ port: process.env.PORT || 3000, host: process.env.HOST });
        console.log("Servidor corriendo correctamente");
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();