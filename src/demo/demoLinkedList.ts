import { LinkedList } from '../models/linkedList';

export function demoLinkedList() {
    const ll = new LinkedList();
    console.log("Linked List Operations:");

    // Insert elements
    ll.insertHead(5);
    ll.insertHead(15);
    ll.insertHead(55);
    ll.insertLast(25);
    
    // Print all elements
    console.log("After insertions:");
    ll.printData();

    // Search element at index
    const searchIndex = 2;
    console.log(`Search at index ${searchIndex}: ${ll.search(searchIndex)}`);

    // Remove element at index
    ll.remove(1);
    console.log("After removing element at index 1:");
    ll.printData();

    // Insert element at a specific index
    ll.insertAt(10, 1);
    console.log("After inserting 10 at index 1:");
    ll.printData();

    console.log(`Size of the Linked List: ${ll.getSize()}`);
}