import { Given, When, Then } from "@cucumber/cucumber";
import tryConvert from "../../app/index.js";
import { expect } from "expect";

Given("I have a temperature of {float}° {units}", function (temp2Convert, _) {
  this.temp2Convert = temp2Convert;
});

When("I convert it to degrees {units}", function (units) {
  this.convertedTemp = tryConvert(this.temp2Convert, units);
});

Then("I see {float}° {units}", function (expected, _) {
  const expectHelper = () => {
    expect(this.convertedTemp).toBe(expected.toString());
  };
  expectHelper();
});
