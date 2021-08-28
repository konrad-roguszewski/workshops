// Functions

const add = (num1, num2) => {
  return num1 + num2;
};

add(true, null);

const subtract = (num1: number, num2: number) => {
  return num1 - num2;
};

subtract(4, 5);

const compare = (num1: number, num2: number): boolean => {
  // some additional logic
  // logic
  // logic
  return num1 > num2;
};

const log = (): void => {
  console.log("hello");
};
