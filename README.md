# Node.js Data Structures

This repository contains implementations of various data structures in Node.js, along with unit tests using Vitest. The aim is to provide a clear, modular, and well-tested implementation of data structures to aid learning and development.

## Table of Contents

- [Installation](#installation)
- [Directory Structure](#directory-structure)
- [Implemented Data Structures](#implemented-data-structures)
  - [Linked List](#linked-list)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/node-data-structures.git
cd node-data-structures
npm install
```

## Directory Structure

```bash
src/
  |-- demos/
  |   |-- demoLinkedList.ts
  |   |-- demoStack.ts
  |
  |-- interfaces/
  |   |-- ILinkedList.ts
  |   |-- IStack.ts
  |
  |-- models/
  |   |-- node.ts
  |   |-- linkedList.ts
  |   |-- stack.ts
  |
  |-- tests/
  |   |-- linkedList.test.ts
  |   |-- stack.test.ts
  |
  |-- app.ts
```

## Implemented Data Structures

### Linked List

A linked list implementation with the following methods:

- `insertHead(data: any): void`
- `insertLast(data: any): void`
- `insertAt(data: any, index: number): void`
- `search(index: number): any`
- `remove(index: number): void`
- `printData(): void`
- `getSize(): number`

### Stack

A stack implementation with the following methods:

- `push(data: any): void`
- `pop(): any`
- `peek(): any[]`
- `isEmpty(): boolean`
- `getSize(): number`

## Running the Application

To build and run the application:

```bash
npm run build
npm start
```

This will compile the TypeScript files and start the application.

## Running Tests

This project uses [Vitest](https://vitest.dev/) for testing. To run the tests:

```bash
npm run test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/nicetomytyuk/node-data-structures/blob/main/LICENSE) file for details.