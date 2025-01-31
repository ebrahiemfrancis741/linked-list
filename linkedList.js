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
    pop: function () {},
    contains: function (value) {},
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
list.toString();
list.append("apple");
list.prepend("banana");
list.prepend("orange");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.toString();
console.log(list.at(2));
