import { ILinkedList } from "../interfaces/ILinkedList";
import { Node } from "./node";

export class LinkedList implements ILinkedList {
    head: Node | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertHead(data: any): void {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data: any): void {
        const node = new Node(data);
        let current = this.head;

        if (!current) {
            this.insertHead(data);
            return;
        } else {
            while (current?.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data: any, index: number): void {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }

        if (index === 0) {
            this.insertHead(data);
            return;
        }

        const node = new Node(data);
        let previous = null;
        let current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current!.next;
            count++;
        }

        node.next = current;
        previous!.next = node;
        this.size++;
    }

    search(index: number): any {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }

        let count = 0;
        let current = this.head;

        let data = null;

        while (current) {
            if (count === index) {
                data = current.data;
                break;
            }
            current = current.next;
            count++;
        }

        return data;
    }

    remove(index: number): void {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }

        let current = this.head;
        let previous = null;

        if (index === 0) {
            this.head = current!.next;
        } else {
            let count = 0;
            while (count < index) {
                previous = current;
                current = current!.next;
                count++;
            }
            previous!.next = current!.next;
            this.size--;
        }
    }

    printData(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    getSize(): number {
        return this.size;
    }

}