function Node(key, value) {
    this.key = key ||null;
    this.value = value || null;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this._root = null;
}

module.exports = {
  BinarySearchTree,

  //WARNING!!!
  //PROVIDE BST STRUCTURE FOR TESTS {STRING}
  root: '_root',
  left: 'left',
  right: 'right',
  //NAME FOR REPORTS
  student: 'STUDENT NAME'
};



BinarySearchTree.prototype.root = function() {
  if (!this._root) return null
    else return this._root.value;
}

BinarySearchTree.prototype.insert = function(key, value) {
  var node = new Node(key, value);
  if (!this._root) {
    this._root = node;
  } else {
        var current = this._root;
        while (current) {
          if (node.value > current.value) {
            if (current.right === null) {
              current.right = node;
              break;
            } else {
              current = current.right;
            }
          } else if (node.value < current.value) {
            if (current.left === null) {
              current.left = node;
              break;
            } else {
              current = current.left;
            }
          } else {
            break;
          }
        }
    }
  
}

BinarySearchTree.prototype.search = function(key){
    var node = this._root;
    while (node) {
      if (node.key === key ) return node.value;
      else if (node.key > key) node = node.left; 
      else if (node.key < key) node = node.right;
    }
    return null;
}

BinarySearchTree.prototype.contains = function(value) {
    var node = this._root;
    if(!node) {
      return false;
    }
    else while (node) {
        if (value === node.value) {
            return true;
        } else if (value > node.value) {
            node = node.right;
        } else if (value < node.value) {
            node = node.left;
        } else return false;
    }
}

