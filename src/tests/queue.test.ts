import { beforeEach, describe, expect, test } from "vitest";
import { Queue } from "../models/queue";

describe("Queue", () => {
    let queue: Queue;

    beforeEach(() => {
        queue = new Queue();
    });
    test("enqueue should add an element to the queue", () => {
        queue.enqueue(1);
        expect(queue.front()).toBe(1);
        expect(queue.getSize()).toBe(1);
    });

    test("dequeue should remove the first element from the queue", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();

        expect(queue.front()).toBe(2);
        expect(queue.getSize()).toBe(1);
    });

    test("dequeue should throw an error if the queue is empty", () => {
        expect(() => queue.dequeue()).toThrow("Queue is empty");
    });

    test("front should return the first element of the queue", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).toBe(1);
        expect(queue.getSize()).toBe(2);
    });

    test("front should throw an error if the queue is empty", () => {
        expect(() => queue.front()).toThrow("Queue is empty");
    });

    test("isEmpty should return true if the queue is empty", () => {
        expect(queue.isEmpty()).toBe(true);
    });

    test("getSize should return the size of the queue", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.getSize()).toBe(2);
    });
});