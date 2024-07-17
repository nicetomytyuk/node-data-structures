import { IQueue } from "../interfaces/IQueue";

export class Queue implements IQueue {
    private items: any[] = [];
    private size: number;

    constructor() {
        this.items = [];
        this.size = 0;
    }

    enqueue(data: any): void {
        this.items.push(data);
        this.size++;
    }

    dequeue(): any {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        this.size--;
        return this.items.shift();
    }

    front(): any {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        return this.items[0];
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    getSize(): number {
        return this.size;
    }
    
}