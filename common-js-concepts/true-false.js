/*
truthy:
1.true
2. any number (+ve) (-ve) will be truthy except 0 
3. any string other than empty string
4. '0', 'false'
5. {} empty object or with value
6. [] empty array or with value

falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
6. 

*/
const x = false;
if (x) {
  console.log('Condition is truthy');
} else {
  console.log('Condition is falsy');
}

// optional
// check falsy
const y = ''
if(!y){
    console.log('Condition is falsy');
}else{
    console.log('Condition is truthy');
}
// check truthy
const z = ' ';
if(!!z){
    console.log('Condition is truthy');
}else{
    console.log('Condition is falsy');
}