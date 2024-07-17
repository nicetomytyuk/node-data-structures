import * as readline from 'readline';
import { demoLinkedList, demoQueue, demoStack } from './demo';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function runDemo(demo: () => void) {
    demo();
    console.log("Demo complete.");

    rl.question("Do you want to run another demo? (y/n) ", (answer) => {
        if (answer.toLowerCase() === "y") {
            menu();
        } else {
            exit();
        }
    });
}

function exit() {
    rl.close();
    process.exit(1);
}

function menu() {
    console.log("\nSelect a demo to run:");
    console.log("1. Linked List Demo");
    console.log("2. Stack Demo");
    console.log("3. Queue Demo");
    console.log("4. Exit");

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                runDemo(demoLinkedList);
                break;
            case "2":
                runDemo(demoStack);
                break;
            case "3":
                runDemo(demoQueue);
                break;
            case "4":
                exit();
            default:
                console.log("Invalid choice. Please try again.");
                menu();
                break;
        }
    });
}

menu();