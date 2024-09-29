// JavaScript is a dynamic typed language

// primitive types values.
const a = 5;
const b = "string";
const c = true;

// non-primitive types values
const ages = [34, 54, 56, 60];
const students = {
  name: "John Doe",
  age: 25,
};

// console.log(typeof a, typeof b, typeof ages, typeof students, typeof c);

let x = 5;
let y = x;
console.log(x, y);
y= 7;
console.log(x, y);

let p = {job: 'web-developer'};
let q = p;
console.log(p,q);
q.job = 'frontend';
console.log(p,q);
q = {job: 'backend-developer'};
console.log(p,q);