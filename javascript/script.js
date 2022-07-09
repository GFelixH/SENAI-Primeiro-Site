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
