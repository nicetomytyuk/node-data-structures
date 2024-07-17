import { expect, test, describe, beforeEach } from 'vitest'
import { LinkedList } from "../models/linkedList";

describe("LinkedList", () => {
    let linkedList: LinkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    test("insertHead should add an element to the beginning", () => {
        linkedList.insertHead(1);
        linkedList.insertHead(2);
        linkedList.insertHead(3);
        expect(linkedList.search(0)).toBe(3);
        expect(linkedList.search(1)).toBe(2);
    });

    test("insertLast should add an element to the end", () => {
        linkedList.insertLast(1);
        linkedList.insertLast(2);
        linkedList.insertLast(3); 
        expect(linkedList.search(0)).toBe(1);
        expect(linkedList.search(1)).toBe(2);
    });

    test("insertAt should add an element at the specified index", () => {
        linkedList.insertHead(1);
        linkedList.insertHead(2);
        linkedList.insertAt(15, 0); 
        expect(linkedList.search(0)).toBe(15);
    });

    test("inserAt should throw an error for invalid index", () => {
        linkedList.insertHead(1);
        linkedList.insertHead(2);

        expect(() => linkedList.insertAt(15, -1)).toThrow("Index out of bounds");
        expect(() => linkedList.insertAt(15, 3)).toThrow("Index out of bounds");
    });

    test("search should return the element at the specified index", () => {
        linkedList.insertHead(1);
        linkedList.insertHead(2);
        linkedList.insertHead(3); 
        expect(linkedList.search(0)).toBe(3);
    });

    test("search should throw an error for invalid index", () => {
        linkedList.insertHead(1);
        linkedList.insertHead(2);

        expect(() => linkedList.search(-1)).toThrow("Index out of bounds");
        expect(() => linkedList.search(3)).toThrow("Index out of bounds");
    });

    test("remove should remove the element at the specified index", () => {
        linkedList.insertHead(1);
        linkedList.insertHead(2);
        linkedList.insertHead(3); 
        linkedList.remove(1);
        expect(linkedList.search(1)).toBe(1);
    });

    test("remove should throw an error for invalid index", () => {
        linkedList.insertHead(1);
        linkedList.insertHead(2);

        expect(() => linkedList.remove(-1)).toThrow("Index out of bounds");
        expect(() => linkedList.remove(3)).toThrow("Index out of bounds");
    });
    test("getSize should return the size of the linked list", () => {
        linkedList.insertHead(1);
        linkedList.insertHead(2);
        linkedList.insertHead(3); 

        expect(linkedList.getSize()).toBe(3);
    });
});