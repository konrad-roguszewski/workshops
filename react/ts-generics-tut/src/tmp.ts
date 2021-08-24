// Array
// last
// makeArr: 2 generics, return, overwrite inference, default value
// addFullName: extends
// interfaces
// props
// useState
// jsx generic

export {}

// example 1

type numArray = Array<number>;

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);

const l2 = last<string>(['a', 'b', 'c']);
