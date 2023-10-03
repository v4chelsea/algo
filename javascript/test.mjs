import { Node, LinkedList } from "./LinkedList.mjs";
import { Stack } from "./stack.mjs";

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);
// console.log(node2.next.data);


// let list = new LinkedList();

// console.log("======== insertAt 6회 호출");

// list.insertAt(0, 0);
// list.insertAt(1, 1);
// list.insertAt(2, 2);
// list.insertAt(3, 3);
// list.insertAt(4, 4);
// list.insertAt(5, 5);
// list.printAll();


// console.log("======== insertLast 호출");
// list.insertLast(6);
// list.insertLast(7);
// list.insertLast(8);
// list.insertLast(9);
// list.printAll();


// console.log("======== getNodeAt 호출");
// list.getNodeAt(3);
// list.getNodeAt(8);
// list.getNodeAt(1);
// list.getNodeAt(2);

// console.log("======== deleteAt 호출");
// console.log(list.deleteAt(1).data);
// list.printAll();
// console.log(list.deleteAt(3).data)
// list.printAll();


// console.log("======== Clear 호출");
// list.clear();
// list.printAll();


let stack = new Stack();

console.log("===========  첫번째 스택 ===============");

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);



console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
