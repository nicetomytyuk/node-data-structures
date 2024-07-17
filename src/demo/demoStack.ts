import { Stack } from "../models/stack";

export function demoStack() {
    const stack = new Stack();
    console.log("\nStack Operations:");

    // Push elements
    stack.push(10);
    stack.push(20);
    stack.push(30);
    
    // Peek element
    console.log(`Top element: ${stack.peek()}`);

    // Pop elements
    console.log(`Popped element: ${stack.pop()}`);
    console.log(`Popped element: ${stack.pop()}`);

    // Check if stack is empty
    console.log(`Is stack empty? ${stack.isEmpty()}`);

    // Get size of the stack
    console.log(`Size of the Stack: ${stack.getSize()}`);
}