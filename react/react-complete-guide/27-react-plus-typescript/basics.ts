// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// Type aliases

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32,
};

let people: Person[];

// Type inference and union types

let course: string | number = 'React - The Complete Guide';

course = 123;

// Functions & types

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}
