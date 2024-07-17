import { Queue } from "../models/queue";

export function demoQueue() {
    const queue = new Queue();
    console.log("Queue Operations:");

    // Enqueue elements
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    // Front element
    console.log(`Front element: ${queue.front()}`);

    // Dequeue elements
    console.log(`Dequeued element: ${queue.dequeue()}`);
    console.log(`Dequeued element: ${queue.dequeue()}`);

    // Check if queue is empty
    console.log(`Is queue empty? ${queue.isEmpty()}`);

    // Get size of the queue
    console.log(`Size of the Queue: ${queue.getSize()}`);
}