import Bar from '@/module-X/domain/entity/bar';
export default class Toto {
    a;
    b;
    constructor(b) {
        this.a = b;
        this.b = new Bar('test');
    }
    foo(value) {
        const c = value;
        const value2 = ['a', 'b', 'c'];
        const obj = {
            prop1: 'toto',
            prop2: 'toao',
        };
        console.log(`${value2} + ${this.a} + ${this.b.foo()}s ${c}`);
    }
}
//# sourceMappingURL=toto.js.map