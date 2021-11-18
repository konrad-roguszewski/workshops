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
