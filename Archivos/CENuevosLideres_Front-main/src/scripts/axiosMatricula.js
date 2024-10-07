const btnSubmitMatricula = document.getElementById("btnSubmitMatricula");

const containerFormRegistroMatricula =
  document.getElementById("registroMatricula");

// Campos de Registro Matricula
const dateOfAdmission = document.getElementById("dateOfAdmission");
const nameAlumn = document.getElementById("nameAlumn");
const birthdate = document.getElementById("birthdate");
const country = document.getElementById("country");
const birthDepartment = document.getElementById("birthDepartment");
const municipalityOfBirth = document.getElementById("municipalityOfBirth");
const docNum = document.getElementById("docNum");
const countryOfIssueOfDocument = document.getElementById(
  "countryOfIssueOfDocument"
);
const documentIssuanceDepartment = document.getElementById(
  "documentIssuanceDepartment"
);
const municipalityOfDocumentIssuance = document.getElementById(
  "municipalityOfDocumentIssuance"
);
const fieldEPS = document.getElementById("fieldEPS");
const fieldAllergies = document.getElementById("fieldAllergies");
const fieldSpecialCare = document.getElementById("fieldSpecialCare");
const ResidenceAdress = document.getElementById("ResidenceAdress");
const neighborhood = document.getElementById("neighborhood");
const commune = document.getElementById("commune");

const nameDad = document.getElementById("nameDad");
const docNumDad = document.getElementById("docNumDad");
const occupationDad = document.getElementById("occupationDad");

const nameMother = document.getElementById("nameMother");
const docNumMother = document.getElementById("docNumMother");
const occupationMother = document.getElementById("occupationMother");

const nameAttendant = document.getElementById("nameAttendant");
const docNumAttendant = document.getElementById("docNumAttendant");
const docEmailAttendant = document.getElementById("docEmailAttendant");
const numberPhoneAttendant = document.getElementById("numberPhoneAttendant");
const numberPhoneAttendant2 = document.getElementById("numberPhoneAttendant2");
const attendantKinship = document.getElementById("attendantKinship");

const nameAttendantNumber2 = document.getElementById("nameAttendantNumber2");
const docNumAttendantNumber2 = document.getElementById(
  "docNumAttendantNumber2"
);
const docEmailAttendantNumber2 = document.getElementById(
  "docEmailAttendantNumber2"
);
const numberPhoneAttendantNumber2 = document.getElementById(
  "numberPhoneAttendantNumber2"
);
const numberPhoneAttendantNumber2_2 = document.getElementById(
  "numberPhoneAttendantNumber2_2"
);
const attendantKinshipNumber2 = document.getElementById(
  "attendantKinshipNumber2"
);
const establishmentCourse = document.getElementById("establishmentCourse");
const LastDegreeCompleted = document.getElementById("LastDegreeCompleted");
const currentYear = document.getElementById("currentYear");
const displacedCondition = document.getElementById("displacedCondition");
const parentCommitment = document.getElementById("parentCommitment");
const authorizationImgStudents = document.getElementById(
  "authorizationImgStudents"
);

const aspect1 = document.getElementById("aspect1");
const aspect2 = document.getElementById("aspect2");
const aspect3 = document.getElementById("aspect3");
const relationshipSiblings = document.getElementById("relationshipSiblings");
const authority = document.getElementById("authority");
const corrective = document.getElementById("corrective");
const award = document.getElementById("award");
const calledAttention = document.getElementById("calledAttention");
const otherObservations = document.getElementById("otherObservations");


// Este codigo sirve para la form_matricula y el dashboardAdmin

const url = "https://project-nuevos-lideres-2.onrender.com/register";

const getMatriculas = async () => {
  try {
    const matriculas = await axios.get(`${url}/allRegister`, {
      role: admin,
    });
    //Falta mandar el rol para que funcione
    console.log(matriculas.data);
  } catch (error) {
    alert(error.response.data.message);
  }
};

const addMatricula = async () => {
  try {
    const userForRegister = await axios.post(`${url}/add`, {

      dateOfAdmission: dateOfAdmission.value,
      nameAlumn: nameAlumn.value,
      birthdate: birthdate.value,
      country: country.value,
      birthDepartment: birthDepartment.value,
      municipalityOfBirth: municipalityOfBirth.value,
      docNum: docNum.value,
      countryOfIssueOfDocument: countryOfIssueOfDocument.value,
      documentIssuanceDepartment: documentIssuanceDepartment.value,
      municipalityOfDocumentIssuance: municipalityOfDocumentIssuance.value,
      fieldEPS: fieldEPS.value,
      fieldAllergies: fieldAllergies.value,
      fieldSpecialCare: fieldSpecialCare.value,
      ResidenceAdress: ResidenceAdress.value,
      neighborhood: neighborhood.value,
      commune: commune.value,

      nameDad: nameDad.value,
      docNumDad: docNumDad.value,
      occupationDad: occupationDad.value,

      nameMother: nameMother.value,
      docNumMother: docNumMother.value,
      occupationMother: occupationMother.value,

      nameAttendant: nameAttendant.value,
      docNumAttendant: docNumAttendant.value,
      docEmailAttendant: docEmailAttendant.value,
      numberPhoneAttendant: numberPhoneAttendant.value,
      numberPhoneAttendant2: numberPhoneAttendant2.value,
      attendantKinship: attendantKinship.value,

      nameAttendantNumber2: nameAttendantNumber2.value,
      docNumAttendantNumber2: docNumAttendantNumber2.value,
      docEmailAttendantNumber2: docEmailAttendantNumber2.value,
      numberPhoneAttendantNumber2: numberPhoneAttendantNumber2.value,
      numberPhoneAttendantNumber2_2: numberPhoneAttendantNumber2_2.value,
      attendantKinshipNumber2: attendantKinshipNumber2.value,
      establishmentCourse: establishmentCourse.value,
      LastDegreeCompleted: LastDegreeCompleted.value,
      currentYear: currentYear.value,
      displacedCondition: displacedCondition.value,
      parentCommitment: parentCommitment.value,
      authorizationImgStudents: authorizationImgStudents.value,

      aspect1: aspect1.value,
      aspect2: aspect2.value,
      aspect3: aspect3.value,
      relationshipSiblings: relationshipSiblings.value,
      authority: authority.value,
      corrective: corrective.value,
      award: award.value,
      calledAttention: calledAttention.value,
      otherObservations: otherObservations.value,
    });

    console.log(userForRegister.data);
    if (userForRegister.data.ok == true) {
      // Mostrar alerta de bienvenida
      alert(userForRegister.data.message);
    } else {
      alert(userForRegister.data.message);
    }
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};
