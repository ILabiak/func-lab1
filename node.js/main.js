"use strict";

const DoubleLinkedList = require("./linked-list");

let linkedList = new DoubleLinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);

const singleton = (arg) => {
  let list = new DoubleLinkedList();
  list.append(arg);
  return list;
};

const nullF = (list) => {
  if (typeof list.head !== "object" || list.head === null) {
    return true;
  }
  return false;
};

const snoc = (list, el) => {
  let linkedList = list;
  linkedList.append(el);
  return linkedList;
};

const length = (list) => {
  if (!list.head || typeof list !== "object") return 0;
  let counter = 1;
  let element = list.head;
  while (element.next) {
    counter++;
    element = element.next;
  }
  return counter;
};

console.log("Making list with one argument using singletone function\n")
let list = singleton(1)
list.showList()
console.log("\nChecking if the list is empty using nullF function\n")
console.log(nullF(list))
console.log("\nAdding element to the list using snoc function\n")
snoc(list,2)
list.showList()
console.log("\nGetting list length using length function\n")
console.log(length(list))