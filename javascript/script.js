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
let arrayElementos = [];
arrayElementos.push(document.body);
arrayElementos.push(document.getElementById("banner"));
arrayElementos.push(document.getElementById("destaques"));
modoBttn.addEventListener("click", (evento) => {
  arrayElementos.forEach((elemento) => {
    elemento.classList.toggle("branco");
  });
});
//validador de formulário
function validateForm() {
  let x = document.forms["formLogin"]["email_login"].value;
  if (x == "") {
    alert("Adicionar um email.");
  }
  let y = document.forms["formLogin"]["password_login"].value;
  if (y == "") {
    alert("Adicionar uma senha");
    return false;
  }
}
