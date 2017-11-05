function Node(key, value) {
    this.key = key;
    this.value = value;
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
    student: 'Mary Bobkova'
};

BinarySearchTree.prototype.root = function() {
    if (!this._root) {
        return null;
    }
    else {
        return this._root.value;
    }
}

BinarySearchTree.prototype.insert = function(key, value) {
    var node = new Node(key, value);
    if (!this._root) {
        this._root = node;
    } else {
        var current = this._root;
        while (current) {
            if (node.key > current.key) {
                if (current.right === null) {
                current.right = node;
                break;
            } else {
                current = current.right;
            }
            } else if (node.key < current.key) {
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
        if (node.key === key ) {
            return node.value;
        } else if (node.key > key) {
            node = node.left; 
        } else if (node.key < key) {
            node = node.right;
        }
    }
    return null;
}

BinarySearchTree.prototype.contains = function(value) {
    if (!this._root) { 
        return false
    } 
    var node = this._root;             
    var childQueue = []; 
    childQueue.push(node); 
    while (childQueue.length > 0) { 
        node = childQueue.shift(); 
        if (node.value == value) {
            return true;   
        }   
        if (node.left) {
            childQueue.push(node.left);
        }
        if (node.right) {
            childQueue.push(node.right);
        }
    }      
    return false;                 
}

BinarySearchTree.prototype.traverse = function(flag){
    var node = this._root;
    var childQueue = [];
    var nodes = [];
    var sortedValues = []
    childQueue.push(node); 
    while (childQueue.length > 0) {
        node = childQueue.shift();
        nodes.push(node);
        if (node.left) { 
            childQueue.push(node.left);           
        }
        if (node.right) {
            childQueue.push(node.right);          
        }
    }   
    nodes.sort(function(a, b) {
        if (flag) {
            return a.key > b.key;
        } else {
            return a.key < b.key;
        }       
    })
    for (var i = 0; i < nodes.length; i++) {
        sortedValues.push(nodes[i].value);
    }
    return sortedValues;
}

BinarySearchTree.prototype.verify = function() {
    var node = this._root;             
    var childQueue = []; 
    childQueue.push(node);
    while (childQueue.length > 0) { 
        node = childQueue.shift(); 
        if (node.left) { 
            if (node.key < node.left.key) {
                return false;
            } else if (node.key > node.left.key)  {
                childQueue.push(node.left);
            }
        }
        if (node.right) {
            if (node.key > node.right.key) {
                return false;
            } else if (node.key < node.right.key) {
                childQueue.push(node.right);
            } 
        }
    } 
    return true;     
}

