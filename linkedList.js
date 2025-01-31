import { createNode } from "./node.js";

function createLinkedList() {
  return {
    head: null,
    tail: null,
    size: 0,
    append: function (value) {
      if (this.size == 0) {
        this.head = createNode(value);
        this.tail = this.head;
      } else {
        this.tail.next = createNode(value);
        this.tail = this.tail.next;
      }
      this.size++;
    },
    prepend: function (value) {
      let temp = this.head;
      this.head = createNode(value);
      this.head.next = temp;
      this.size++;
    },
    at: function (index) {
      if (index < 0) {
        return undefined;
      } else {
        let i = 0;
        let value;
        let node = this.head;
        while (node != null) {
          if (i == index) {
            return node.value;
          }
          i++;
          node = node.next;
        }
        return value;
      }
    },
    pop: function () {
      let node = this.head;
      // loop until 2nd last element
      for (let i = 1; i <= this.size - 2; i++) {
        node = node.next;
      }
      // remove last element and make element before it the tail
      node.next = null;
      this.tail = node;
      this.size--;
    },
    contains: function (value) {
      let node = this.head;
      for (let i = 0; i < this.size; i++) {
        if ((node.value = value)) {
          return true;
        }
        node = node.next;
      }
      return false;
    },
    find: function (value) {},
    toString: function () {
      let node = this.head;
      if (node == null) {
        console.log("( null )");
        return;
      }
      let string = "";
      while (node != null) {
        string += `( ${node.value} ) -> `;
        node = node.next;
      }
      string += "null";
      console.log(string);
    },
    insertAt: function (value, index) {},
    removeAt: function (index) {},
  };
}

let list = createLinkedList();
list.append("apple");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.toString();

if (list.contains("turtle")) console.log("yes");
else console.log("no");
