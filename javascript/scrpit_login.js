$(function () {
  $("#navBttn").click(() => {
    $("#navbar").toggleClass("hide");
  });

  $("#xNavBttn").click(() => {
    $("#navbar").addClass("hide");
  });

  let arrayElementos = [];
  arrayElementos.push(document.body);
  arrayElementos.push(document.getElementById("banner"));
  arrayElementos.push(document.getElementById("destaques"));
  $("#switchBttn").click(() => {
    arrayElementos.forEach((elemento) => {
      elemento.classList.toggle("branco");
    });
  });
  //end jquery
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
