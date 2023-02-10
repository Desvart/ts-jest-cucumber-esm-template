import Bar from '@/module-X/domain/entity/bar';

describe('Sample test suite', () => {
  test('should be able to compare numbers', () => {
    expect(2).toEqual(2);
  });

  test('should be able to create a new instance of class Bar', () => {
    const s = new Bar('test');
    expect(s.foo()).toEqual('test');
  });
});
