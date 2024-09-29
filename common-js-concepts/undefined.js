// ! 8 ways to get undefine

// * 1. Variable that is not initialized
let first;
console.log(first);

// * 2. function with no return value
function second(a, b) {
  const total = a + b;
}
const result = second();
console.log(result);

// * 3. function with missing parameters. missing parameters will be undefined.
function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
third(2, 5);

// * 4. if return has nothing on the right side will return undefined
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
console.log(noNegative(-2, 3));

// * 5. property that doesn't exist on an object will give undefined
const fifth = { id: 5, name: "foo", age: 36 };
console.log(fifth.age, fifth.salary);

// * 6. accessing array elements outside of the index range.
const sixth = [4, 5, 2, 6, 7];
console.log(sixth[1], sixth[7]);

// * 7. deleting an element inside an array
delete sixth[1]; // ? should not do it. should use splice instead.
console.log(sixth);

// * 8. set a value directly to undefined
const eighth = undefined;

// ?  do this instead
const ninth = null;
const data = {results: [], updated: null}
console.log(typeof undefined); // undefined
console.log(typeof null); // object
