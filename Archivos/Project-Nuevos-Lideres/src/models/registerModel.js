import mongoose from "mongoose";
const { Schema, model } = mongoose;

const registerSchema = new Schema({
    invoice: {
        type: String
    },

    tuition: {
        type: Number
    },

    code: {
        type: String
    },

    dateOfAdmission: {
        type: String,
        required: [true, "El campo dateOfAdmission es requerido"]
    },

    nameAlumn: {
        type: String,
        required: [true, "El campo nameAlumn es requerido"]
    },

    birthdate: {
        type: String,
        required: [true, "El campo birthdate es requerido"]
    },

    country: {
        type: String,
        required: [true, "El campo country es requerido"]
    },

    birthDepartment: {
        type: String,
        required: [true, "El campo birthDepartment es requerido"]
    },

    municipalityOfBirth: {
        type: String,
        required: [true, "El campo municipalityOfBirth"]
    },

    docNum: {
        type: Number,
        required: [true, "El campo docNum es requerido"]
    },

    countryOfIssueOfDocument: {
        type: String,
        required: [true, "El campo countryOfIssueOfDocument es requerido"]
    },

    documentIssuanceDepartment: {
        type: String,
        required: [true, "El campo documentIssuanceDepartment es requerido"]
    },

    municipalityOfDocumentIssuance: {
        type: String,
        required: [true, "El campo municipalityOfDocumentIssuance es requerido"]
    },

    residenceAdress: {
        type: String,
        required: [true, "El campo ResidenceAdress es requerido"]
    },

    commune: {
        type: String,
        required: [true, "El campo commune es requerido"]
    },

    neighborhood: {
        type: String,
        required: [true, "El campo neighborhood es requerido"]
    },

    fieldEPS: {
        type: String,
        required: [true, "El campo fileEPS es requerido"]
    },

    fieldAllergies: {
        type: String,
    },

    fieldSpecialCare: {
        type: String
    },

    nameDad: {
        type: String
    },

    docNumDad: {
        type: Number
    },

    occupationDad: {
        type: String
    },

    nameMother: {
        type: String
    },

    docNumMother: {
        type: Number
    },

    occupationMother: {
        type: String
    },

    nameAttendant: {
        type: String,
        required: [true, "El campo nameAttendant es requerido"]
    },

    docNumAttendant: {
        type: Number,
        required: [true, "El campo nameAttendant es requerido"]
    },

    docEmailAttendant: {
        type: String,
        required: [true, "El campo docEmailAttendant es requerido"]
    },

    numberPhoneAttendant: {
        type: Number,
        required: [true, "El campo numberPhoneAttendant es requerido"]
    },

    numberPhoneAttendant2: {
        type: Number,
    },

    attendantKinship: {
        type: String,
        required: [true, "El campo attendantKinship es requerido"]
    },

    nameAttendantNumber2: {
        type: String,
        required: [true, "El campo nameAttendant es requerido"]
    },

    docNumAttendantNumber2: {
        type: Number,
        required: [true, "El campo nameAttendant es requerido"]
    },

    docEmailAttendantNumber2: {
        type: String,
        required: [true, "El campo docEmailAttendant es requerido"]
    },

    numberPhoneAttendantNumber2: {
        type: Number,
        required: [true, "El campo numberPhoneAttendant es requerido"]
    },

    numberPhoneAttendantNumber2_2: {
        type: Number,
    },

    attendantKinshipNumber2: {
        type: String,
        required: [true, "El campo attendantKinship es requerido"]
    },

    lastDegreeCompleted: {
        type: Number
    },

    currentYear: {
        type: Number
    },

    displacedCondition: {
        type: String,
        required: [true, "El campo displacedCondition es requerido"],
        enum: ["SI", "NO"]
    },

    parentCommitment: {
        type: String,
        // required: [true, "El campo parentCommitment es requerido"]
    },

    authorizationImgStudents: {
        type: String,
        // required: [true, "El campo authorizationImgStudents es requerido"]
    },

    establishmentCourse: {
        type: String,
    },

    aspect1: {
        type: String
    },

    aspect2: {
        type: String
    },

    aspect3: {
        type: String
    },

    relationshipSiblings: {
        type: String
    },

    authority: {
        type: String,
        required: [true, "El campo authority es requerido"]
    },

    corrective: {
        type: String,
        required: [true, "El campo corrective es requerido"]
    },

    award: {
        type: String,
        required: [true, "El campo award es requerido"]
    },

    calledAttention: {
        type: String,
        required: [true, "El campo calledAttention es requerido"]
    },

    otherObservations: {
        type: String,
        required: [true, "El campo otherObservations es requerido"]
    },
},
    {
        timestamps: true
    });

export const registerModel = model("register", registerSchema);