function calcularValorComImposto(valor, taxaImposto) {
  if (typeof valor !== "number" || typeof taxaImposto !== "number") {
    throw new Error("Os parâmetros devem ser números");
  }
  return valor + valor * (taxaImposto / 100);
}
module.exports = { calcularValorComImposto };
