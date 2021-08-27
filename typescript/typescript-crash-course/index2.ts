// Inference vs assignment

// Inference case
let height = 160;

height = "200";

let height2: number = 120;

height2 = "200";

// Assignment case
let amount : number;
let amount2 : number | string;

amount = 120;
amount2 = "Laith";
amount = true;
amount = [];
amount = {};

// also arrays, objects and functions should have assigned types
