//navbar button
const navBttn = document.getElementById("navBttn");
const navbar = document.getElementById("navbar");
const xNavBttn = document.getElementById("xNavBttn");
navBttn.addEventListener("click", (evento) => {
  navbar.classList.toggle("hide");
});
xNavBttn.addEventListener("click", (evento) => {
  navbar.classList.add("hide");
});
//toggle modo claro
const modoBttn = document.getElementById("switchBttn");
modoBttn.addEventListener("click", () => {
  console.log(document.body);
  document.body.classList.toggle("branco");
});
//validador de formulário
//se vazio
function validateForm() {
  let x = document.forms["formLogin"]["email_login"].value;
  if (x == "") {
    alert("Adicionar um email.");
  }
  let y = document.forms["formLogin"]["password_login"].value;
  if (y == "") {
    alert("Adicionar uma senha");
  }
  //validador de senha
  var input = document.getElementById("password_login");
  input.oninvalid = function (event) {
    event.target.setCustomValidity(
      "Senha deve conter de 6 a 12 caracteres, com pelo menos um maiúsculo, um minúsculo e um número."
    );
  };
}
