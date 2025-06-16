const { calcularValorComImposto } = require("./utils");
function handleCalculo() {
  const valor = parseFloat(document.getElementById("valor").value);
  const imposto = parseFloat(document.getElementById("imposto").value);
  try {
    const resultado = calcularValorComImposto(valor, imposto);
    document.getElementById("resultado").textContent = `Total:
${resultado.toFixed(2)}`;
  } catch (error) {
    document.getElementById("resultado").textContent = error.message;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcular").addEventListener("click", handleCalculo);
});
