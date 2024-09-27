// ! chain.js
// ? data access
// * it's not a object. it's the object inside a array
const data = [{ id: 1, name: "abul", address: "Dhaka" }];

// console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "Asus laptop", price: 6500 },
    { id: 2, name: "Macbook", price: 16500 },
  ],
};
// second product price
// console.log(products.data[1].price);

const user = {
  id: 5001,
  name: "John",
  address: {
    street: {
      number: 123,
      name: "Main Street",
    },
    city: "New York",
  },
};
const user2 = {
  id: 5002,
  name: "Jane",
  address: {
    city: "Los Angeles",
    country: "USA",
  },
};
// * normally if a property is not available like name in user2 it will throw an error while accessing it. but if ? is used then it means 'is there street? if yes then name. otherwise undefined.' so it won't throw error.
// console.log(user.address.street?.name);
// console.log(user2.address.street?.name);

// ! map.js
const numbers = [4, 5, 2, 8, 10];

// * old way
// const doubled =[];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);

// * new way using map()
// ? map ==> loops through each element of the array and do the operation that you passed in the callback function and hold the result from each operation in an array and finally returns the array.
// * 1st way
function doubleIt(num) {
  // console.log('num now: ', num);
  return num * 2;
}

const results = numbers.map(doubleIt);
// console.log(results);

// * 2nd way
const double2 = (n) => n * 2;
const output = numbers.map(double2);
// console.log(output);

// * 3rd way
const output2 = numbers.map((n) => n * 2);
// console.log(output2);

// ! more-map.js
const numbers2 = [3, 4, 3, 4, 7, 11];
const doubled2 = numbers2.map((n) => n * 2);
// console.log(doubled2);
const fiveBonus = numbers2.map((n) => n + 5);
const halves = numbers2.map((n) => n / 2);

const friends = ["Tom", "Fred", "John", "Oliver"];
const lengths = friends.map((frnd) => frnd.length);
// console.log(lengths);
const firstLetter = friends.map((frnd) => frnd[0]);
// console.log(firstLetter);

// ! foreach.js
// * map returns the operation in an array. but foreach don't return.
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const result = numbers3.forEach(n => console.log(n));

// ! filter.js
// * filter selects elements based on a condition and returns an array with the elements that fulfilled the conditions.
const players = [7.5, 6.5, 7.2, 6.4, 6.3, 7.1];
const selected = players.filter((p) => p > 7.0);
const selected2 = players.filter((p) => p > 6.0 && p < 7.0);
const selected3 = players.filter((p) => (p * 10) % 2 === 1);
// console.log(selected, selected2, selected3);
const oddFriends = friends.filter((f) => f.length % 2 === 0);
// console.log(oddFriends);

// ! find.js
// * filter selects elements based on a condition and returns an array with all the elements that fulfilled the condition.
// * find selects first elements that meet the condition and returns but not in a array.
const selected4 = players.find((p) => p > 7.0);
// console.log(selected4);

// ! reduce.js
const numbers4 = [4, 5, 7, 1, 2, 3, 9];
const total = numbers4.reduce((previous, current) => previous + current, 0);
// console.log(total);
const sum = numbers4.reduce((prev, curr) => prev + curr, 0);
// console.log(sum);

// ! array-of-objects.js

const students = [
  { id: 1, name: "John", grade: 85 },
  { id: 2, name: "Jane", grade: 92 },
  { id: 3, name: "Tom", grade: 78 },
  { id: 4, name: "Alice", grade: 88 },
  { id: 5, name: "Bob", grade: 95 },
];
// * map
const names = students.map((name) => name.name);
const grades = students.map((grade) => grade.grade);
// console.log(names, grades);

// * forEach
// students.forEach(id=>console.log(id.id));

// * filter
const passed = students.filter((passed) => passed.grade > 90);
// console.log(passed);

// * find
const lowest = students.find((grade) => grade.grade < 80);
// console.log(lowest);

// * reduce
const totalGrade = students.reduce(
  (previous, current) => previous + current.grade, 0
);
console.log(totalGrade);