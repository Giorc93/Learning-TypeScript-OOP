//Datatype: After creating a variable, the datatype must be specified using var:datatype.

//String

let str: string | number = "Giorc93@hotmail.com"; //Using the pipe allows to asign another datatype to the variable

str = 12;

//Number

let age: number = 26;

//Boolean

let bool: boolean = true;

//Any

let anthg: any = "sadfasdf";

//Arrays

var arr: Array<string> = ["PHP", "Javascript", "Typescript"]; //To assign datatype to an array use arr: Array<dataype> OR
let nmbrs: number[] = [12, 23, 45, 56]; //It is also posible to assign the datatype usign arr: datatype[]

//Creating a datatype

type alphnm = string | number;

var alph: alphnm = "Test";
console.log(alph);
alph = 12;
console.log(alph);

//Difference between LET & VAR: let establishes a "block" variable, while "var" establishes the variable globally

console.log(bool);
console.log(str);
console.log(age);
console.log(anthg);
