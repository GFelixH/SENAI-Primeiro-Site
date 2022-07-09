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
