import { IStack } from "../interfaces/IStack";

export class Stack implements IStack {
    private items: any[];
    private size: number;

    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(data: any): void {
        this.items.push(data);
        this.size++;
    }

    pop(): any {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }

        this.size--;
        return this.items.pop();
    }

    peek(): any[] {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }

        return this.items[this.size - 1];
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    getSize(): number {
        return this.size;
    }

}