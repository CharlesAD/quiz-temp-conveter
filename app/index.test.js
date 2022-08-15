import tryConvert from "./index.js";

describe("testing temperature functions", () => {
  test("testing to see if function correctly converts temperatures from celsius to fahrenheit", () => {
    expect(tryConvert(100, "toFahrenheit")).toBe("212");
  });
});

test("testing to see if function correctly converts temperatures from fahrenheit to celsius", () => {
  expect(tryConvert(50, "toCelsius")).toBe("10");
});

test("testing to see if the function correctly converts non-numerical inputs to Celsius", () => {
  expect(tryConvert("abc", "toCelsius")).toBe("");
});

test("testing to see if the function correctly converts non-numerical inputs to Fahrenheit", () => {
  expect(tryConvert("abc", "toFahrenheit")).toBe("");
});
