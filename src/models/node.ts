export class Node {
    data: any;
    next: Node | null;

    constructor(data: any, next: Node | null = null) {
        this.data = data;
        this.next = next;
    }
}