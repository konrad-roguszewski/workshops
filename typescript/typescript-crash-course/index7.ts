// Types & interfaces

const obj: {
  firstName: string;
  lastName: string;
  age: number;
  gender: boolean;
} = {
  firstName: 'Laith',
  lastName: 'Harb',
  age: 24,
  gender: false
};

const obj2: {
  firstName: string;
  lastName: string;
  age: number;
  gender: boolean;
} = {
  firstName: 'Laith',
  lastName: 'Harb',
  age: 24,
  gender: false
};

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  gender: boolean;
}

const obj3: Person = {
  firstName: 'Laith',
  lastName: 'Harb',
  age: 24,
  gender: false
};

const obj4: Person = {
  firstName: 'Laith',
  lastName: 'Harb',
  age: 24,
  gender: false
};

type PersonType = {
  firstName: string;
  lastName: string;
  age: number;
  gender: boolean;
}[];

const obj5: PersonType = [
  {
    firstName: 'Laith',
    lastName: 'Harb',
    age: 24,
    gender: false
  }
];
