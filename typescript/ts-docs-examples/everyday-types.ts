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

