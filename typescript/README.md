# docs
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Intro to the TSConfig Reference](https://www.typescriptlang.org/tsconfig)
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Migrating from JavaScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)
- [React+TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react)
- [Type Definitions](https://reactjs.org/docs/static-type-checking.html#type-definitions)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

# notes
- TypeScript extends set of primitive types with:
  - any (allow anything)
  - unknown (ensure someone using type declares what the type is)
  - never (it's not possible that this type could happen)
  - void (a function which returns undefined or has no return value)
- There are two syntaxes for building types:
  - interface (preffered)
  - type (when specific features are needed)
- With TypeScript, you can create complex types by combining simple ones:
  - with a union, you can declare that a type could be one of many types
  - generics provide variables to types
- In a structural type system, if two objects have the same shape, they are considered to be of the same type. There is no difference between how classes and objects conform to shapes.
- Process of contextual typing - the context that the function occured within informs what type it should have.
