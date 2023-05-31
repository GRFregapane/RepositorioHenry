const { espejo, restar } = require('../repaso');

describe('espejo', () => {
  it('Debe retornar el string invertido', () => {
    const str = 'hola, susana';
    const reversedStr = 'anasus ,aloh'
    const str2 = 'Hello, World!';
    const reversedStr2 = '!dlroW ,olleH';
    expect(espejo(str)).toBe(reversedStr);
    expect(espejo(str2)).toBe(reversedStr2);
  });
});

describe('restar', () => {
  test('Debe retornar un array vacío cuando num es 0', () => {
    const num = 0;
    expect(restar(num)).toEqual([]);
  });

  test('Debe retornar un array con números de num a 1 en orden descendente', () => {
    const num = 5;
    const expectedArray = [5, 4, 3, 2, 1];
    expect(restar(num)).toEqual(expectedArray);
  });

  test('Debe retornar un array con un único elemento cuando num es 1', () => {
    const num = 1;
    expect(restar(num)).toEqual([1]);
  });
});