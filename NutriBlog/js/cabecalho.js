/*MUDAR COR DO CABEÇALHO*/
window.addEventListener("scroll", function() {
    var menu = document.querySelector("header");
    menu.classList.toggle("scroll", window.scrollY > 500); /* adiciona a classe "scroll" quando a posição do scroll é maior que 0 */
  });

//Calculadora IMC
function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura_cm = parseFloat(document.getElementById("altura").value);
  
  if (isNaN(peso) || isNaN(altura_cm)) {
      document.getElementById("resultado").innerHTML = "Por favor, insira um peso e uma altura válidos.";
      return;
  }
  
  if (peso <= 0 || altura_cm <= 0) {
      document.getElementById("resultado").innerHTML = "Por favor, insira valores positivos para peso e altura.";
      return;
  }

  // Convertendo altura de centímetros para metros
  var altura_m = altura_cm / 100;
  
  var imc = peso / (altura_m * altura_m);
  document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);
}

//Limpar campos 
function limparCampos() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").innerHTML = "";
}