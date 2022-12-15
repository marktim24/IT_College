const { nodeName } = require("jquery");

class LinkedList {




	add(value) {
		if (this.size === 0) {
			this.root = new Node(value);
			this.size += 1;
			return true;
		}
		while (node.next) {
			node = node.next;
		}
		let newNode = new Node(value);
		value.next = new Node;
		this.size += 1;
	}

	getSize() {
		return this.size
	}

	print() {
		let result = [];
		while(node) {
			result.push(node.value);
			node = node.value;
		}
		console.log(result);
	}
}

class Node {
	constructor(value) {
		this.value = value; 
		this.next = null; 
	}
}

const list = new LinkedList();
list.add(2);
list.add(1);
list.add(3);
list.add(5);
list.add(7);

list.print();