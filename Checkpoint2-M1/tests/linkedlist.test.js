const { LinkedList } = require('../repaso');

describe('LinkedList - método size', () => {
  test('Debe retornar 0 para una lista enlazada vacía', () => {
    const list = new LinkedList();
    expect(list.size()).toBe(0);
  });

  test('Debe retornar el tamaño correcto para una lista enlazada con nodos', () => {
    const list = new LinkedList();
    list.add(3);
    list.add(2);
    list.add(1);

    expect(list.size()).toBe(3);
  });
});