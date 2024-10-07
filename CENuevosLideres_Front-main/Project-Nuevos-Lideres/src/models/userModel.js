import mongoose from "mongoose";
const { Schema, model } = mongoose;
import bcrypt from "bcrypt"

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "El campo name es requerido"]
    },

    lastname: {
        type: String,
        required: [true, "El campo lastname es requerido"]
    },

    docType: {
        type: String,
        required: [true, "El campo docType es requerido"],
        enum: ["CC", "TEP", "CE"]
    },

    docNum: {
        type: String,
        required: [true, "El campo cc es requerido"],
        unique: true
    },

    email: {
        type: String,
        required: [true, "El campo email es requerido"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "El campo password es requerido"]
    },

    numberPhone: {
        type: String,
        required: [true, "El campo numberPhone es requerido"]
    },

    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
},
    {
        timestamps: true
    });

userSchema.methods.matchPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

export const userModel = model("user", userSchema);