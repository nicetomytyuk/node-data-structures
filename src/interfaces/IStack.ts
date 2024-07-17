export interface IStack {
    push(data: any): void;
    pop(): any;
    peek(): any[];
    isEmpty(): boolean;
    getSize(): number;
}