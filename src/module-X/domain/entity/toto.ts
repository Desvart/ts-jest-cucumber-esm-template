import Bar from '@/module-X/domain/entity/bar';

export default class Toto {
  private readonly a: string;

  private readonly b: Bar;

  constructor(b: string) {
    this.a = b;
    this.b = new Bar('test');
  }

  foo(value: string[]) {
    const c = value;
    const value2 = ['a', 'b', 'c'];
    const obj = {
      prop1: 'toto',
      prop2: 'toao',
    };
    console.log(`${value2} + ${this.a} + ${this.b.foo()}s ${c}`);
  }
}
