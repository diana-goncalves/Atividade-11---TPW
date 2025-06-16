const { calcularValorComImposto } = require("../js/utils");
describe("calcularValorComImposto", () => {
  test("calcula corretamente com 10% de imposto", () => {
    expect(calcularValorComImposto(100, 10)).toBe(110);
  });
  test("retorna 0 quando o valor é 0", () => {
    expect(calcularValorComImposto(0, 10)).toBe(0);
  });
  test("mantém o valor se a taxa for 0", () => {
    expect(calcularValorComImposto(100, 0)).toBe(100);
  });
  test("trabalha com decimais corretamente", () => {
    expect(calcularValorComImposto(99.99, 5.5)).toBeCloseTo(105.48945);
  });
  test("lança erro se os parâmetros não forem números", () => {
    expect(() => calcularValorComImposto("abc", 10)).toThrow(
      "Os parâmetros devem ser números"
    );
    expect(() => calcularValorComImposto(100, "xyz")).toThrow(
      "Os parâmetros devem ser números"
    );
  });
});
