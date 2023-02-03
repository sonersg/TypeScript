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

// convert to more or less specific
type one = string;
type two = string | number;
type three = "string";
// let a: one = "hello";
// let b = a as two; // less specific
// let c = a as three; // more specific

// let d = <one>"world"; // same as above but u can't
// let e = <string | number>"world"; // use this in React

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// FUNCTIONS
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}
let multiply: mathFunction = function (c, d) {
  return c * d;
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// CLASSES
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public nation: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.nation = nation;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello I am ${this.age}`;
  }
}
const area = document.querySelector(".area") as HTMLElement;
const Soner = new Coder("Soner", "Türk", 25);
console.log(Soner.getAge(), "here");
area.innerHTML = Soner.getAge();
// area.innerHTML = Soner.age.toString();

////////////////////////////////////////////////
////////////////////////////////////////////////
// INHERITANCE
////////////////////////////////////////////////
////////////////////////////////////////////////
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    nation: string,
    age: number
  ) {
    super(name, nation, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}
const Kerim = new WebDev("Casper", "Benim adım Kerim", "Severim", 42);
console.log(Kerim.getLang());
// console.log(Kerim.age);
// console.log(Kerim.lang);

//////////////////////////////////////////
//////////////////////////////////////////
//  GETTERS AND SETTERS
//////////////////////////////////////////
//////////////////////////////////////////
class Sextillion {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(el => typeof el === "string")) {
      this.dataState = value;
    } else throw new Error("Param is not array of strings!");
  }
}
const n = new Sextillion();
n.data = ["Million", "Billion"];
console.log(n.data);
n.data = [...n.data, "...", "Sextillion"];
console.log(n.data);

//////////////////////////////////////////
//////////////////////////////////////////
//  STATIC
//////////////////////////////////////////
//////////////////////////////////////////
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = Peeps.count;
  }
}
const Scott = new Peeps("Scott");
const Nouman = new Peeps("Nouman");
console.log(Peeps.count);
console.log(Scott.id);
console.log(Nouman.id);

//////////////////////////////////////////
//////////////////////////////////////////
//  INTERFACE
//////////////////////////////////////////
//////////////////////////////////////////
interface Reader {
  name: string;
  book: string;
  read(action: string): string;
}
class SonerG implements Reader {
  name: string;
  book: string;

  constructor(name: string, book: string) {
    this.name = name;
    this.book = book;
  }

  read(action: string): string {
    return `Do not disturb me! ${action}`;
  }
}
const r = new SonerG("Soner", "Quran");
console.log(r.read("reading"));

//////////////////////////////////////////
//////////////////////////////////////////
//  INDEX SIGNATURE
//////////////////////////////////////////
//////////////////////////////////////////
interface Student {
  [index: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}
