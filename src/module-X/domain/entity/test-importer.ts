export class Test0 {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello() {
    return `Hello, my name is ${this.name}.`;
  }
}
