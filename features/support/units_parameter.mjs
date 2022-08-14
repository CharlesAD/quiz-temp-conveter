import { defineParameterType } from "@cucumber/cucumber";
// This file is for our custom type
defineParameterType({
  name: "units",
  regexp: /C|F|Celsius|Fahrenheit/,
  transformer(conversion) {
    // the transformers job is to take the parameter and do something with it
    return conversion.startsWith("C") ? "toCelsius" : "toFahrenheit";
  },
});
