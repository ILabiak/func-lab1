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
  return (typeof list.head !== "object" || list.head === null)
};

const snoc = (list, el) => {
  let newLinkedList = new DoubleLinkedList();
  let currentNode = list.head;
  let index = 0;
  while (index < length(list)) {
    newLinkedList.append(currentNode.data);
    currentNode = currentNode.next;
    index++;
  }
  newLinkedList.append(el);
  return newLinkedList;
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

console.log("Making list with one argument using singletone function\n");
let list = singleton(1);
list.showList();
console.log("\nChecking if the list is empty using nullF function\n");
console.log(nullF(list));
console.log("\nAdding element to the list using snoc function\n");
let secondList = snoc(list, 2);
secondList.showList();
console.log("\nGetting list length using length function\n");
console.log(length(secondList));
