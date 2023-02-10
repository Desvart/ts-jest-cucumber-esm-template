export default class Bar {
  private readonly value: string;

  constructor(value0: string) {
    this.value = value0;
  }

  foo() {
    return this.value;
  }

  foo2() {
    return this.value;
  }
}
