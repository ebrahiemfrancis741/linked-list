import { createNode } from "./node";

function createLinkedList() {
  return {
    head: null,
    tail: null,
    size: 0,
    append: function (value) {
      if (this.size == 0) {
        this.head = createNode(value);
        this.tail = this.head;
      }
      else{
        this.tail.next = createNode(value);
      }
    },
    prepend: function (value) {},
    at: function (index) {},
    pop: function () {},
    contains: function (value) {},
    find: function (value) {},
    toString: function () {},
    insertAt: function (value, index) {},
    removeAt: function (index) {},
  };
}
