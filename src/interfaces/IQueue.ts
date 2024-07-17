export interface IQueue {
    enqueue(data: any): void;
    dequeue(): any;
    front(): any;
    isEmpty(): boolean;
    getSize(): number;
}