const formRegister = document.querySelector(".form-register");
const inputName = document.getElementById('userName')
const inputLastName  = document.getElementById('userLastName')
const selectDocType = document.getElementById('docType')
const inputDocNum = document.getElementById('docNum')
const inputEmail = document.getElementById('userEmail')
const inputPass = document.getElementById('userPassword')
const toggleButton = document.getElementById('btn-toggle')
const inputNumPhone = document.getElementById('numberPhone')
const alertaError = document.querySelector(".form-register .alerta-error");
const alertaExito = document.querySelector(".form-register .alerta-exito");

const userNameRegex = /^[a-zA-Z\s]{4,40}$/;
const userLastNameRegex = /^[a-zA-Z\s]{4,40}$/;
const userDocNumRegex = /^[0-9]{1,13}$/;
export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{10,30}$/;
const userNumPhoneRegex = /^[0-9]{10}$/;

export const estadoValidacionCampos = {
  userName: false,
  userLastName: false,
  docNum: false,
  userEmail: false,
  userPassword: false,
  numberPhone: false
};

document.addEventListener("DOMContentLoaded", () => {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarFormulario(formRegister,alertaError,alertaExito);
  });

  inputName.addEventListener("input", () => {
    validarCampo(userNameRegex,inputName,"El Nombre tiene que ser de 4 a 16 dígitos, no se permiten numeros y caracteres especiales");
  });

  inputLastName.addEventListener("input", () => {
    validarCampo(userLastNameRegex,inputLastName,"Los Apellidos tienen que ser de 4 a 16 dígitos, no se permiten numeros y caracteres especiales");
  });

  selectDocType.addEventListener("select", () => {
    validarCampo(selectDocType,"Debes seleccionar tu tipo de identificación");
  });

  inputDocNum.addEventListener("input", () => {
    validarCampo(userDocNumRegex,inputDocNum,"Solo se permiten numeros, sin espacio ni caracteres especiales");
  });

  inputEmail.addEventListener("input", () => {
    validarCampo(emailRegex,inputEmail,"El correo solo puede contener letras, números, puntos, guiones y guíon bajo.");
  });

  inputPass.addEventListener("input", () => {
    validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de por lo menos 10 dígitos, debe contener una letra mayuscula y un caracter especial o subrayado");
  });

  inputNumPhone.addEventListener("input", () => {
    validarCampo(userNumPhoneRegex,inputNumPhone,"El número de teléfono debe tener 10 dígitos numéricos");
  });
});

  toggleButton.addEventListener('click', function()  {
    const type = inputPass.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPass.setAttribute('type', type)

    const iconPass = this.querySelector('i');
    if (type === 'password') {
        iconPass.classList.remove('bx-hide');
        iconPass.classList.add('bx-show')
    } else {
      iconPass.classList.remove('bx-show');
      iconPass.classList.add('bx-hide') 
    }
  })

export function validarCampo(regularExpresion, campo, mensaje) {
  const validarCampo= regularExpresion.test(campo.value);
  if (validarCampo) {
    eliminarAlerta(campo.parentElement.parentElement);
    estadoValidacionCampos[campo.name] = true;
    campo.parentElement.classList.remove("error");
    return;
  }
  estadoValidacionCampos[campo.name] = false;
  campo.parentElement.classList.add("error");
  mostrarAlerta(campo.parentElement.parentElement,mensaje);
}

function mostrarAlerta(referencia,mensaje) {
  eliminarAlerta(referencia);
  const alertaDiv = document.createElement("div");
  alertaDiv.classList.add("alerta");
  alertaDiv.textContent = mensaje;
  referencia.appendChild(alertaDiv);
}

function eliminarAlerta(referencia) {
  const alerta = referencia.querySelector(".alerta");

  if (alerta) alerta.remove();
}

export function enviarFormulario(form, alertaError,alertaExito) {
  //VALIDAMOS EL ENVIO DE NUESTRO FORMULARIO

  if (estadoValidacionCampos.userName && estadoValidacionCampos.userLastName && estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword && estadoValidacionCampos.docNum && estadoValidacionCampos.numberPhone) {
    //Se agregó estas 3 líneas de código que evitan un error al mostrar las alertas , lo que hacen es resetear los valores del objeto
    estadoValidacionCampos.userName = false;
    estadoValidacionCampos.userLastName = false;
    estadoValidacionCampos.docNum = false;
    estadoValidacionCampos.userEmail = false;
    estadoValidacionCampos.userPassword = false;
    estadoValidacionCampos.numberPhone = false;

    form.reset();
    alertaExito.classList.add("alertaExito");
    alertaError.classList.remove("alertaError");
    setTimeout(() => {
      alertaExito.classList.remove("alertaExito");
    }, 3000); 
    return;
  }
  
  alertaExito.classList.remove("alertaExito");
  alertaError.classList.add("alertaError");
  setTimeout(() => {
    alertaError.classList.remove("alertaError");
  }, 3000);
}