import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
    try {
        const token = jwt.sign(payload, process.env.TOKEN_PASSWORD, {
            expiresIn: "62d"
        });

        return token;
    } catch (error) {
        console.log("Error en generateToken", error.message)
    }
}