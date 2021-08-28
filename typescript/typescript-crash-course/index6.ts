// Advance topics

let numberOrString = "Laith Harb";

numberOrString = "LeBron James";

numberOrString = 24;

// Union Type
let numberOrString2: string | number | boolean | undefined | null = "Laith Harb";

numberOrString2 = 4;
numberOrString2 = true;

let array: (string | number | {})[] = ["", 4, null, undefined, {}];

let object: {
  hello: string | number;
};

// Literal Types
let rainbowColor: "red" | "orange" | "yellow" | "blue" | "indigo" | "violet" = "red";

rainbowColor = "orange";

rainbowColor = "red";

rainbowColor = "green";

// Enums
enum RainbowTypes {
  RED,
  ORANGE,
  YELLOW,
  BLUE,
  INDIGO,
  VIOLET,
};

let rainbowColors2: RainbowTypes = RainbowTypes.RED;

// How to make things optional
let obj: {
  property: string;
  property2: string | undefined;
  property3?: string;
} = {
  property: "",
  property2: undefined,
  property3: 3,
};
