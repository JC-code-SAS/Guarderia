const btnSingIn = document.getElementById("sing-in"),
  btnSingUp = document.getElementById("sing-up");
(containerFormRegister = document.querySelector(".register")),
  (containerFormLogin = document.querySelector(".login"));


// Register
const userName = document.getElementById("userName");
const userLastname = document.getElementById("userLastName");
const docType = document.getElementById("docType");
const docNum = document.getElementById("docNum");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const numberPhone = document.getElementById("numberPhone");

// Login
const email = document.getElementById("email");
const password = document.getElementById("password");

const btnLogIn = document.getElementById("log-in");
const btnLogUp = document.getElementById("log-up");

const url = "https://project-nuevos-lideres-2.onrender.com/user";

const sesionActiva = false;
// Inicio de sesion
const logIn = async () => {
  try {
    const user = await axios.post(`${url}/login`, {
      email: email.value,
      password: password.value,
    });

    // Eliminar este clg despues del desarrollo
    if (user.data.ok == true) {
      const token = user.data.data.token;
      localStorage.setItem("authToken", token);
      alert(user.data.message);
      const sesionActiva = true;
      const role = user.data.data.role;
      sessionStorage.setItem("sActiva", sesionActiva);
      sessionStorage.setItem("sRole", role);

      if (sesionActiva == true) {
        redirectionLogIn();
      }
    } else {
      alert(user.data.response.data.message);
    }
  } catch (error) {
    alert(error.message);
  }
};


function redirectionLogIn() {
  const role = sessionStorage.getItem("sRole");
  switch (role) {
    case "admin":
      window.location.href = "/src/pages/dashboardAdmin.html";
      break;
    case "user":
      window.location.href = "/src/pages/dashboardUser.html";
      break;
    default:
      window.location.href = "/src/pages/login.html";
      break;
  }
}

// Boton de sesion
btnLogIn.addEventListener("click", (e) => {
  //Para que no se recargue la pag al dar click
  e.preventDefault();
  logIn();
});

// Registro
const logUp = async () => {
  try {
    const userForRegister = await axios.post(`${url}/register`, {
      name: userName.value,
      lastname: userLastname.value,
      docType: docType.value,
      docNum: docNum.value,
      email: userEmail.value,
      password: userPassword.value,
      numberPhone: numberPhone.value,
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

// Boton de registrar
btnLogUp.addEventListener("click", (e) => {
  //Para que no se recargue la pag al dar click
  e.preventDefault();
  logUp();
});

// Funcionalidad de cambiar entre inicio de sesion y registro
btnSingIn.addEventListener("click", (e) => {
  containerFormRegister.classList.add("hide");
  containerFormLogin.classList.remove("hide");
});

btnSingUp.addEventListener("click", (e) => {
  containerFormLogin.classList.add("hide");
  containerFormRegister.classList.remove("hide");
});
