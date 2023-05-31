// QUEUE
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (x) {
  this.array.push(x);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

// Linked List
function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
LinkedList.prototype.add = function (value) {
  var nuevoNodo = new Node(value);

  if (!this.head) {
      this.head = nuevoNodo;
  } else {
    var current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = nuevoNodo;
  }
};

// Binary Search Tree
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (this.value > value) {
    if (!this.left) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  } else if (this.value < value) {
    if (!this.right) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  }
};

module.exports = {
  Queue,
  LinkedList,
  BinarySearchTree
};