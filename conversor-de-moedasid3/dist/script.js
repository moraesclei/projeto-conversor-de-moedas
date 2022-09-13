function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Resultado em dólar para real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
  var valorElemento2 = document.getElementById("valor2");
  var valor2 = valorElemento2.value;
  var valorEmRealNumerico2 = parseFloat(valor2);

  var valorEmDolar = valorEmRealNumerico2 / 5;
  console.log(valorEmDolar);

  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 =
    "O Resultado em reais para dólar é US$ " + valorEmDolar;
  elementoValorConvertido2.innerHTML = valorConvertido2;
}