const btnMatricula = document.getElementById("matricula-yes");
const btnCerrarSesion = document.getElementById("close-sesion");

const enviar = () => {
  window.location.href = "../pages/form_matricula.html";
};

btnMatricula.addEventListener("click", (e) => {
  //Para que no se recargue la pag al dar click
  e.preventDefault();
  enviar();
});

// Cerrar Sesion

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

const close = () => {
  sessionStorage.removeItem("sRole");
  sessionStorage.removeItem("sActiva");
  localStorage.removeItem("authToken");
  redirectionLogIn();
};

btnCerrarSesion.addEventListener("click", (e) => {
  close();
});
