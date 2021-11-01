// Types by Inference
let helloWorld = 'Hello World';

// Defining Types
interface User {
  name: string;
  id: number;
};

const user: User = {
  name: 'Hayes',
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
};

const newUser: User = new UserAccount('Murphy', 1);

function getAdminUser(): User {
  return // ...
}

function deleteUser(user: User) {
  return // ...
}

// Composing Types - Unions
type MyBool = true | false;

type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}

function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
  }
  return obj;
}

// Composing Types - Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;
const object = backpack.get();
backpack.add('23');

// Structural Type System
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point); // logs "12, 26"
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
const rect = { x: 33, y: 3, width: 30, heigth: 80 };
logPoint(rect); // logs "33, 3"

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
