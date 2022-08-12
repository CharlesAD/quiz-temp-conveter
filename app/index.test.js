import { tryConvert, celsius, fahrenheit } from "./index.js";

describe("testing temperature functions", () => {
  test("testing to see if function correctly converts temperatures", () => {
    expect(tryConvert(100, fahrenheit)).toBe(38);
  });

  test("testing to see if function correctly converts temperatures", () => {
    expect(tryConvert(100, celsius)).toBe(212);
  });
});
