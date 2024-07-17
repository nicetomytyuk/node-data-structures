import { LinkedList } from "./models/linkedList";

function start() {
    const ll = new LinkedList();
    ll.insertHead(5);
    ll.insertHead(15);
    ll.insertHead(55);
    ll.insertLast(25);
    ll.printData();
}

start();