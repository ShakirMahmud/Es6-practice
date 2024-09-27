// ! Var: no reason to use var
// ! Let: allow it to reassign variables
// ! const: do not allow it to reassign

// ! Default
// ? default --> if  value is not provided, take this as the default value
function add_(num1 = 88, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}
// const sum  = add_(5, 6);
// const sum  = add_(5);
// const sum  = add_();

// ? default for string
function fullName(first, last = "") {
  const full = first + " " + last;
  return full;
}
// const name = fullName('Shakir');
// const name = fullName('Shakir', 'Mahmud');
// console.log(name);
// ? default for array
function friends(numbs = []) {}
// ? default for object
function person(human = {}) {}

// ! template.js
const first = "Shakir";
const last = "Mahmud";
// if we want to place a space we need to type + ' ' every time.
const name = first + " " + last;

// another example of too much work for a simple task
const a = 10;
const b = 20;
const result = "The sum of " + a + " and " + b + " is " + (a + b);
// console.log(result);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const student = { name: "Nazmul", age: 5 };
// * to solve the problem
const math = `The sum of ${a} and ${b} is ${a + b} and heres another number: ${
  numbers[0]
} and name of a student: ${student.name}`;
// console.log(math);

const email = "Hi John \n" + "new line \n" + "another line";
// console.log(email);

const challenge = `Hi John
new line without using '+' or '\\n'
another new line`;
// console.log(challenge);

// ! Arrow.js
// ? function declaration
function add(a, b) {
  // const result = a + b;
  return a + b;
}

//? function expression / anonymous function
const add2 = function (a, b) {
  return a + b;
};

//? arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

// const sum = add(5, 90);
// const sum2 = add2(25, 90);
// const sum3 = add3(55, 90);
// const sum4 = add4(55, 90, 12, 45);
// console.log(sum);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
const mult = multiply(3, 10);
// console.log(mult);

// ! More-Arrow.js
const difference = (x, y) => x - y;

const multiply2 = (first, second, third) => first * second * third;

// ? if it is single parameter then we can use () or not.
const getAge = (person) => person.age;
const student2 = { name: "Student", age: 17 };
const age = getAge(student2);
// console.log(age);
const getThird = (numbers) => numbers[2];
const third = getThird([1, 2, 3]);
// console.log(third);

// ? no parameter
const getPI = () => Math.PI;
// console.log(getPI());

// ? multiple line function
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  // * if it is multiple line then we need to write return.
  return result;
};
// console.log(doMath(1,2,3));

// ! spread.js
const max = Math.max(6, 44, 34, 3, 56, 43);
// console.log(max);
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const arrayMax = Math.max(numbers2); // * it won't works
// console.log(arrayMax);
const arrayMax2 = Math.max(...numbers2); // * make it work, we need to use '...'
// console.log(arrayMax2);

// ? use spread operator to copy
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const nums2 = nums;
const nums3 = [nums]; // * 12 will be pushed into nums, nums2 and nums3
nums.push(12);
// console.log(nums2);
// console.log(nums);
// console.log(nums3);
// * to solve
const nums4 = [...nums]; // * it will copy nums into nums4
nums.push(100); // * 100 won't be pushed into otherthan nums.
// console.log(nums4);
// console.log(nums);

// ? advanced
const nums5 = [...nums, 9999]; // * add extra elements while coping.
// console.log(nums5);

// ! destructuring.js
// ? object destructuring
const actor = {
  name: "John",
  age2: 45,
  role: "Actor",
  phone: "01445242242",
  money: 42424242,
};

// ? old way
// console.log(actor.phone);
// console.log(actor.phone);
// console.log(actor.phone);
// console.log(actor.phone);

// ? new way
// const phone = actor.phone;
// const name2 = actor.name;
// * If right side is an object left side of destructuring will be object as well.
const { phone, money, age2: age3 } = actor; // * destructure the object
// console.log(phone);
// console.log(money);
// console.log(age3); // * changing the variable name

// ? array destructuring
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8];
const [first2, second, third3, fourth, fifth, sixth, seventh] = numbers3;
const [x, y] = [12, 66];

//
function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [doubledFirst, doubledSecond] = doubleThem(6, 9);
// console.log(doubledFirst, doubledSecond);

// ! keys.js      // * keys: value
const glass = { 
    name: "glass", 
    color: "golden", 
    price: 12, 
    isCleaned: true 
};
// ? all properties names
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
// ? all properties value
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
const entries = Object.entries(glass);
// ? array of array/ 2d array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//  ]

// console.log(keys);
// console.log(values);
// console.log(entries);
// console.log(glass);
// ? to delete
delete glass.isCleaned;
// console.log(glass);
// { name: 'glass', color: 'golden', price: 12, isCleaned: true }
// { name: 'glass', color: 'golden', price: 12 }
// ? another way to delete using destructuring:
const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// ? freeze
Object.freeze(glass);
glass.source = 'Bangladesh'; // it won't be added.
glass.price = 500; // also won't allow to reassign 
// console.log(glass);

// ? seal. won't allow to add but can reassign
Object.seal(glass);
glass.source = 'Bangladesh'; // it won't be added.
glass.price = 500; // also won't allow to reassign 
// console.log(glass);

// ! looping.js
const numbers4 = [1, 2, 3, 4, 5, 5];
// for(let i = 0; i < numbers4.length; i++){}
// ? for of can be use in array or string
for (const num of numbers4){}
const nobab = 'Siraj Ud Doula';
for(const char of nobab){};

// ? for object we have to use for in
for (const key in glass){
    const value = glass[key]; // to access value we need to use [].
    // console.log(key, value);
}
// ? optional
const keys2 = Object.keys(glass); // it will make the glass object into array
// so now we can use for of
for(const key of keys2){
    const value = glass[key];
    console.log(key, value);
}
