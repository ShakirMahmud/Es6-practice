// ! always use ===
// ! equal comparison doesn't work for non-primitive types. if comparison needed then have to use loops.



const first = 2;
// const second = 2;
const second = '2';
// * === check if both value and type is same
if(first === second){
    console.log("Both numbers are equal");
}
else{
    console.log("Both numbers are not equal");
}
// * == check if only value is same
if(first == second){
    console.log("Both numbers are equal");
}
else{
    console.log("Both numbers are not equal");
}


// * it will give true for ==. as == type cast/ type coercion/ type convert true to 1.
const third = 1;
const fourth = true;
if(third == fourth){
    console.log("Both values are equal");
}else{
    console.log("Both values are not equal");
}

// * for non-primitive variables it will give false as they check for reference
const fifth = [];
const sixth = [];
if(fifth === sixth){
    console.log("Both arrays are equal");
}else{
    console.log("Both arrays are not equal");
}
