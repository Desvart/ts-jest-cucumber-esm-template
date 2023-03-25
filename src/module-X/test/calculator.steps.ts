import * as assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';
import Calculator from '../domain/entity/calculator';

Given(/^toto$/, function given(a: number, b: number): void {
  console.log(`test ${a} ${b}`);
});

// @given(/^toto ([.*])$/)
// function givenAValue(value: string): void {
//   console.log('test 2');
// };

When(/^I add (-?\d+) and (-?\d+)$/, function when(a: number, b: number) {
  this.a = a;
  this.b = b;
});

Then(
  /^the result of the addition is (-?\d+)$/,
  function then(expectedResponse: number) {
    const calc = new Calculator();
    assert.equal(calc.add(this.a, this.b), expectedResponse);
  }
);

When(/^I sub (-?\d+) and (-?\d+)$/, function when(a: number, b: number) {
  this.a = a;
  this.b = b;
});

Then(
  /^the result of the substraction is (-?\d+)$/,
  function then(expectedResponse: number) {
    const calc = new Calculator();
    assert.equal(calc.sub(this.a, this.b), expectedResponse);
  }
);
