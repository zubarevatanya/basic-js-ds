const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }


  root() {
      return this.rootNode;
  }


  add(value) {
    console.log("Add value: " + value)
    this.rootNode = addNode(this.rootNode, value);
    function addNode(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.value === value) {
        return node;
      }
      if (value < node.value) {
        node.left = addNode(node.left, value)
      }
      else {
        node.right = addNode(node.right, value)
      }
      return node;
    }
  }

  has(value) {
    console.log("Has value: " + value)
    return searchNode(this.rootNode, value);
    function searchNode(node, value) {
      if (!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      }
      if (value < node.value) {
        return searchNode(node.left, value)
      }
      else {
        return searchNode(node.right, value)
      }
    }
  }

  find(value) {
    console.log("Find value: " + value)
    return searchNode(this.rootNode, value);
    function searchNode(node, value) {
      if (!node) {
        return null;
      }
      if (node.value === value) {
        return node;
      }
      if (value < node.value) {
        return searchNode(node.left, value)
      }
      else {
        return searchNode(node.right, value)
      }
    }
  }

  remove(value) {
    console.log("Remove value: " + value)
    this.root = removeNode(this.rootNode, value);
    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      }
      else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;
        node.right = removeNode(node.right, minFromRight.value);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.value;

  }
}

module.exports = {
  BinarySearchTree
};