import { LinkedList } from "./linkedList.js";

let list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("ape");
list.pop();
console.log(list.toString());
console.log(list.at(3));
console.log(list.contains("ape"));
console.log(list.find("dog"));