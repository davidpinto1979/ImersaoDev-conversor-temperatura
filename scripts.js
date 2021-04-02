function CelsFarh() {
  // 1.Declarar variaveis
  var fahr, cels;

  // 2.Atribuir valores às variaveis
  fhar = document.getElementById("idFahr").value;

  // 3. Ver se os inputs sao numeros
  if (isNaN(fhar) || fhar == "") {
    cels = "ERRO! Introduza número.";
  }
  // 3.1 Calcular resultado
  else {
    cels = (parseInt(fhar) - 32) * 0.5556;
    cels = cels.toFixed(2);
  }

  // 3.2 Usar variavel resultado para erro

  // 4. Escrever o resultado no paragrafo
  document.getElementById("pCels").innerHTML = cels;
}
