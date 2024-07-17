export interface ILinkedList {
    insertHead(data: any): void;
    insertLast(data: any): void;
    insertAt(data: any, index: number): void;
    search(index: number): any;
    remove(index: number): void;
    printData(): void;
    getSize(): number;
}