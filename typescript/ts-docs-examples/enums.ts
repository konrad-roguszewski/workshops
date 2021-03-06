// Numeric enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipent: string, message: UserResponse): void {
  // ...
}
respond("Princess Caroline", UserResponse.Yes);

// String enums
enum newDirection {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// Computed and constant members
enum E {
  X,
}

enum E1 {
  X,
  Y,
  Z,
}

enum E2 {
  A = 1,
  B,
  C,
}

enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = "123".length,
}

// Union enums and enum member types
enum ShapeKind {
  Circle,
  Square,
}
 
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
 
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

// Enums at runtime
enum D {
  X,
  Y,
  Z,
}
 
function f(obj: { X: number }) {
  return obj.X;
}
 
// Works, since 'D' has a property named 'X' which is a number.
f(D);
