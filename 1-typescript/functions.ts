// let add = function (n1, n2) {
//     return n1 + n2;
// }

//fat arrow syntax
// let add = (n1, n2) => {
//     return n1 + n2;
// }
let add = (n1, n2) => n1 + n2;
let square = n => n*n;

console.log(square(3));
console.log(add('Hello',6));

let average = (n1 : number, n2 : number, f: Function) => f(n1, n2)/2;
console.log(average(2,7, (n1,n2) => n1 + n2));




