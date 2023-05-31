const { Queue } = require('../DS');
const { filtraQueue }= require('../repaso');

describe('filtraQueue', () => {
  it('Debe agregar a la Queue los elementos no numéricos', () => {
    const arg = [1, 'a', 2, 'b', 3];
    const expectedResult = new Queue();
    expectedResult.enqueue('a');
    expectedResult.enqueue('b');

    const result = filtraQueue(arg);

    expect(result).toEqual(expectedResult);
  });

  it('Debe retornar una Queue vacía si todos los elementos son números', () => {
    const arg = [1, 2, 3, 4, 5];
    const expectedResult = new Queue();

    const result = filtraQueue(arg);

    expect(result).toEqual(expectedResult);
  });
});