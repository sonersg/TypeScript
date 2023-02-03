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
const greet = (hello) => {
    if (hello.one) {
        return `Hello ${hello.one.toUpperCase()}`;
    }
    return "Hello unknown friend!";
};
// ENUMS
// "Unlike most TypeScript features, Enums aren't a type-level addition
// to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 0] = "B";
    Grade[Grade["C"] = 1] = "C";
})(Grade || (Grade = {}));
let multiply = function (c, d) {
    return c * d;
};
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// CLASSES
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
class Coder {
    constructor(name, nation, age, lang = "TypeScript") {
        this.name = name;
        this.nation = nation;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.nation = nation;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I am ${this.age}`;
    }
}
const area = document.querySelector(".area");
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
    constructor(computer, name, nation, age) {
        super(name, nation, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
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
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
        }
        else
            throw new Error("Param is not array of strings!");
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
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = Peeps.count;
    }
}
Peeps.count = 0;
const Scott = new Peeps("Scott");
const Nouman = new Peeps("Nouman");
console.log(Peeps.count);
console.log(Scott.id);
console.log(Nouman.id);
class SonerG {
    constructor(name, book) {
        this.name = name;
        this.book = book;
    }
    read(action) {
        return `Do not disturb me! ${action}`;
    }
}
const r = new SonerG("Soner", "Quran");
console.log(r.read("reading"));
