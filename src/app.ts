import { demoLinkedList } from "./demo/demoLinkedList";
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\nSelect a demo to run:");
    console.log("1. Linked List Demo");
    console.log("3. Exit");

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                demoLinkedList();
                menu();
                break;
            case "3":
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                menu();
                break;
        }
    });
}

menu();