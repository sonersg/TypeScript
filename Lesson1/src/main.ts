// tsc main.ts
// tsc main.ts -w
// tsc --init
// tsc --noEmitOnError -w
// tsc -w

let username = "Soner";
console.log(username);

let a: number = 12;
let b: string = "6";
let c: number = 2;
console.log(a / c);
console.log(a * c);

let d: any;
let e: boolean | number;
let f: RegExp;
let g = ["klkl", 4545, { name: "" }];
let myTuple: [string, number, boolean] = ["lkl", 25, true];

// type hello = {
//   one?: string;
//   two: boolean;
//   three: (number | boolean)[];
// };
interface hello {
  one?: string;
  two: boolean;
  three: (number | boolean)[];
}
let evh: hello = {
  one: "klkl",
  two: false,
  three: [false, 12],
};
const greet = (hello: hello) => {
  if (hello.one) {
    return `Hello ${hello.one.toUpperCase()}`;
  }
  return "Hello unknown friend!";
};

// ENUMS
// "Unlike most TypeScript features, Enums aren't a type-level addition
// to JavaScript but something added to the language and runtime."
enum Grade {
  A,
  B = 0,
  C,
}

// FUNCTIONS
// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}
let multiply: mathFunction = function (c, d) {
  return c * d;
};
