// Arrays

const arrayOfStrings = ["string1", "string2", "string3"];
const arrayOfStrings2: (string | boolean)[] = ["string1", "string2", "string3"];

arrayOfStrings.push("string4");
arrayOfStrings2.push(true);

const arrayOfBooleans: boolean[] = [true, false, true, false];
arrayOfBooleans.push(true);

const arrayOfNumbers = [1,2,3,4,5];

const array: string[] = [];

array.push(true);
array.push("");
array.push(5);

let arrayOfObjects: {
  name: string;
  age: number;
  gender: boolean;
}[] = [];

arrayOfObjects.push({
  name: "",
  age: 2,
  gender: true,
});

const arrayOfArrays = [["", "", ""], ["", ""]];
const arrayOArraysOfArrays: string[][][] = [[[""]]];
