console.log("Hello World");

let n : number = 3;
let person : string;
person = 'Sam';
let c : string = 'a';

let x;

x = 23;
x = 'David';

let y = true;
//y = 12; //Error

//Arrays
let numbers : number[] = [1,2,4,6,-1, 1.2];
console.log(numbers[0]);

numbers.push(12);
console.log(numbers);

let lastElement = numbers.pop();
console.log(numbers, lastElement);

//Strings
let city = "Banglore";
let area = "Kadubheshanhalli";
// let address =   city + ', ' + area;
let address = ` ----------
${city}, ${area}
-----------`;
console.log(address);
console.log(address.charAt(2));
console.log(address.toUpperCase());

//boolean
let isIndian = false;

//null
let val = null;
let someVariable = undefined;

//comment
/*
comment
*/





