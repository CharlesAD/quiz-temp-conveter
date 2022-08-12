import tryConvert from "./index.js";

describe("testing temperature functions", () => {
  test("testing to see if function correctly converts temperatures", () => {
    expect(tryConvert(100, "toFahrenheit")).toBe("212");
  });
});

test("testing to see if function correctly converts temperatures", () => {
  expect(tryConvert(100, "toCelsius")).toBe("37.778");
});
