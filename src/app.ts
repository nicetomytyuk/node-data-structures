import { demoLinkedList } from "./demo/demoLinkedList";
import * as readline from 'readline';
import { demoStack } from "./demo/demoStack";

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
    console.log("3. Exit");

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                runDemo(demoLinkedList);
                break;
            case "2":
                runDemo(demoStack);
                break;
            case "3":
                exit();
            default:
                console.log("Invalid choice. Please try again.");
                menu();
                break;
        }
    });
}

menu();