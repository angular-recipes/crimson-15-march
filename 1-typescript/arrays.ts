let nums = [2,3,88,1,-23, -11];

//double add elements
// let doubles = [];
// for(let i = 0; i < nums.length; i++) {
//     doubles.push(nums[i]*2);
// }

let doubles = nums.map( n => n*2 );
console.log(doubles);

nums.forEach( n => console.log('->' + n));

for(let e of nums) {
    console.log(e-1);
}

let positives = nums.filter( n => n > 0);
console.log(positives);

// let negativeNumber = nums.find( n => n < 0);
// console.log(negativeNumber);


let sum = nums.reduce( (res, n) => res + n, 0);
console.log(sum);

let largest = nums.reduce( (res,n) =>  n > res ? n : res,nums[0]);
console.log(largest);

let smallestPositive = nums
    .filter( n => n >0)
    .reduce( (res, n) => n < res ? n : res, nums[0]);
console.log(smallestPositive);



