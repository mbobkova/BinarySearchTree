function BinarySearchTree() {
	this._root = null;
}

function Node(key, value) {
	this.key = key; 
	this.value = value;
	this._left = null;
	this._right = null;	
	this.parentNodes = [];
}

BinarySearchTree.prototype.root = function() {
	return this._root;
}

BinarySearchTree.prototype.insert = function(key, value) {
	var currentNode = new Node(key, value);
	var currentKey = currentNode.key;
	if(!this._root) {
		this._root = currentNode;
	} else {
			if ()
		}
	}
}


