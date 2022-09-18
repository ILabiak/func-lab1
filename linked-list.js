"use strict";

class Node {
  constructor(data, prev = null, next = null) {
    if (data.length >= 1) {
      this.data = data;
      this.prev = prev;
      this.next = next;
    } else {
      throw new Error("There is no data");
    }
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(el) {
    let node = new Node(el);
    if (this.length === 0) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(el, currentNode);
    }
    this.length++;
  }

  showList() {
    let currentNode = this.head;

    while (currentNode) {
      let prevEl;
      let nextEl;
      if (currentNode.prev) {
        prevEl = currentNode.prev.data;
      } else {
        prevEl = null;
      }
      if (currentNode.next) {
        nextEl = currentNode.next.data;
      } else {
        nextEl = null;
      }
      console.log(
        `previous: ${prevEl}, el: ${currentNode.data} , next: ${nextEl}`
      );
      currentNode = currentNode.next;
    }
  }

  insert(index, el) {
    if (index < 0 || index > this.length || typeof index !== "number") {
      throw new Error("Invalid index");
    }
    if (index === this.length) {
      this.append(el);
      return;
    }
    let node = new Node(el);
    if (index == 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      let indexCount = 0;
      let prevNode;
      let currentNode = this.head;
      while (indexCount < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        indexCount++;
      }
      prevNode.next = node;
      currentNode.prev = node;
      node.prev = prevNode;
      node.next = currentNode;
    }
    this.length++;
  }

  delete(index) {
    if (index < 0 || index > this.length || typeof index !== "number") {
      throw new Error("Invalid index");
    }
    let currentNode = this.head;

    if (index === 0) {
      this.head = currentNode.next;
      this.head.prev = null;
    } else {
      let prevNode = null;
      let indexCount = 0;

      while (indexCount < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        indexCount++;
      }

      prevNode.next = currentNode.next;
      if (currentNode.next) {
        currentNode.next.prev = prevNode;
      }
    }
    this.length--;
    return currentNode.data;
  }

  get(index) {
    if (index < 0 || index >= this.length || typeof index !== "number") {
      throw new Error("Invalid index");
    }
    let indexCount = 0;
    let currentNode = this.head;
    while (indexCount != index) {
      currentNode = currentNode.next;
      indexCount++;
    }
    return currentNode.data;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
}

module.exports = DoubleLinkedList;
