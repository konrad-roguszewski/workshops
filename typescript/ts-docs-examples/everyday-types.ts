// any
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;

// Type Annotations on Variables
let myName: string = 'Alice';

// Functions - Parameter Type Annotations
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// Functions - Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}
