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
    prepend: function (value) {},
    at: function (index) {},
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
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.toString();
