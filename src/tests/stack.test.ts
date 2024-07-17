import { beforeEach, describe, expect, test } from "vitest";
import { Stack } from "../models/stack";

describe("Stack", () => {
    let stack: Stack;
    
    beforeEach(() => {
        stack = new Stack();
    });

    test("push should add an element to the stack", () => {
        stack.push(1);
        expect(stack.peek()).toBe(1);
        expect(stack.getSize()).toBe(1);
    });

    test("pop should remove the last element from the stack", () => {
        stack.push(1);
        stack.push(2);
        stack.pop();
        expect(stack.peek()).toBe(1);
        expect(stack.getSize()).toBe(1);
    });

    test("peek should return the last element of the stack", () => {
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        expect(stack.getSize()).toBe(2);
    });

    test("isEmpty should return true if the stack is empty", () => {
        expect(stack.isEmpty()).toBe(true);
    });

    test("getSize should return the size of the stack", () => {
        stack.push(1);
        stack.push(2);
        expect(stack.getSize()).toBe(2);
    });
})