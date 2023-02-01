"use strict";
// tsc main.ts
// tsc main.ts -w
// tsc --init
// tsc --noEmitOnError -w
// tsc -w
let username = "Soner";
console.log(username);
let a = 12;
let b = "6";
let c = 2;
console.log(a / c);
console.log(a * c);
let d;
let e;
let f;
let g = ["klkl", 4545, { name: "" }];
let myTuple = ["lkl", 25, true];
let evh = {
  one: "klkl",
  two: false,
  three: [false, 12],
};
const greet = hello => {
  if (hello.one) {
    return `Hello ${hello.one.toUpperCase()}`;
  }
  return "Hello unknown friend!";
};

// Enums
// "Unlike most TypeScript features, Enums aren't a type-level
// addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
  Grade[(Grade["A"] = 0)] = "A";
  Grade[(Grade["B"] = 0)] = "B";
  Grade[(Grade["C"] = 1)] = "C";
})(Grade || (Grade = {}));
