// any
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;

// Type Annotations on Variables
let myName: string = 'Alice';
let yourName = 'John';

// Functions - Parameter Type Annotations
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// Functions - Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}

// Anonymous Functions
const names = ['Alice', 'Bob', 'Eve'];
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Object Types
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is" + pt.x);
  console.log("The coordinate's y value is" + pt.y);
}
printCoord({ x: 3, y: 7 });
// Object Types - Optional Properties
function printName(obj: { first: string; last?: string }) {
  console.log(obj.last.toUpperCase());
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
  console.log(obj.last?.toUpperCase());
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// Union Types - Defining a Union Type
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101);
printId("202");

// Union Types - Working with Union Types
function newPrintId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
function welcomePeople(x: string[] | string) {
  if(Array.isArray(x)) {
    console.log('Hello, ' + x.join(' and '));
  } else {
    console.log('Welcome lone traveler ' + x);
  }
}
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

// Type Aliases
type Point = {
  x: number;
  y: number;
};
function newPrintCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
newPrintCoord({ x: 100, y: 100 });

type ID = number | string;

declare function getInput(): string;
declare function sanitize(str: string): string;
type UserInputSanitizedString = string;
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
let userInput = sanitizeInput(getInput());
userInput = "new input"

// Interfaces
interface NewPoint {
  x: number;
  y: number;
}
function testPrintCoord(pt: NewPoint) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
testPrintCoord({ x: 100, y: 100 });

// Type Assertions
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myAlternativeCanvas = <HTMLCanvasElement>document.getElementById("main_cnavas");

declare const expr: any;
type T = { a: 1; b: 2; c: 3 };
const a = (expr as any) as T;

// Literal Types
let changingString = 'Hello World';
changingString = 'Ola Mundo';
changingString;
const constantString = 'Hello World';
constantString;

let x: 'hello' = 'hello';

function printText(s: string, alignment: 'left' | 'right' | 'center') {
  // ...
}
printText('Hello, world', 'center');

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}
function configure(x: Options | 'auto') {
  // ...
}
configure({ width: 100 });
configure("auto");

// Literal Inference
const newObj = { counter: 0 };
declare const someCondition: boolean;
if (someCondition) {
  obj.counter = 1;
}

declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: 'https://example.com', method: 'GET' as 'GET' };
handleRequest(req.url, req.method as 'GET');

const newReq = { url: 'https://example.com', method: 'GET' } as const;
handleRequest(req.url, req.method);

// null and undefined
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}

// Non-null Assertion Operator (Postfix !)
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
