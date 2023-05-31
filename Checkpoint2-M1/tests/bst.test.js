const { BinarySearchTree } = require('../repaso');

describe('BinarySearchTree - método height', () => {
  it('Debe retornar 0 si el árbol está vacío', () => {
    const tree = new BinarySearchTree();
    expect(tree.height()).toBe(0);
  });

  it('Debe retornar 1 si el árbol cuenta con un único nodo', () => {
    const tree = new BinarySearchTree(3);
    tree.insert(5);

    expect(tree.height()).toBe(1);
  });

  it('Debe retornar la altura correcta para un árbol con varios nodos', () => {
    const tree = new BinarySearchTree(5);
    tree.insert(3);
    tree.insert(8);
    tree.insert(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(9);

    expect(tree.height()).toBe(2);
  });
});