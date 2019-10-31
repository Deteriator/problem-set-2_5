// Question 1
const shoutout = function() {
  for(let i= 0; i < arguments.length;i++){
    console.log(arguments[i]);
  }
};

// Question 2
const reverseArray = function(array) {
 let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
   newArray.push(array[i]);
  }
  return newArray;
};

// Question 3
const indexOf = function(array, string) {
    for(let i = 0; i < array.length; i++){
      if(array[i] === string){
        return i;
      }
    }
    return -1;
};

// Question 4
const join = function(array, seperator) {
  let str ="";
  for(let i = 0; i < array.length; i++){
    if(seperator === undefined){
    str += array[i] + ",";
    }
  else{
    str += array[i] + seperator;
    }
  }
  str = str.substring(0, str.length - 1);
  return str;
};
// Question 5
const push = function(array, value) {
      array[array.length] = value;
      return array.length;
};

// Question 6
const pop = function(array) {
    let popped = array[array.length - 1];
    array.length -= 1;
    return (popped);
};

// Question 7
const unshift = function(array, value) {
    for(let i = array.length - 1;i >=0; i--){
      array[i + 1] = array[i];
    }
    array[0] = value;
    return array.length;
};

// Question 8
const shift = function(array) {
    let element = array[0];
    for( let i = 1; i < array.length; i++){
      array[i - 1] = array[i];
    }
    array.length = array.length - 1;
    return element;
};

// Question 9
const lastIndexOf = function(array, value) {
  let index = -1;
    for(let i = 0; i < array.length; i++){
      if(array[i] === value){
        index = i;
      }
    }
    return index;
};

// Question 10
const slice = function(arr, start = 0,end = arr.length) {
  let sliced = [];
  for(let i = start; i < end; i++){
    push(sliced, arr[i]);
  }
  return sliced;
};
// Question 11
const splice = function(arr, start, deleteCount) {
  let cutValues = slice(arr, start, start + deleteCount);
  for(let i = start; i < arr.length; i++){
      arr[i] = arr[i + deleteCount];
    }
    arr.length = arr.length - deleteCount;
    return cutValues;
};

// Question 12
const spliceForReal = function(arr, start, deleteCount, ...insertItems) {
  let cutValues = splice(arr,start,deleteCount);
   console.log(cutValues)
};

// Question 13
const concat = function() {

};

// Question 14
const shallowCompare = function() {

};

// Question 15
const deepCompare = function() {

};

shoutout();

// Write all your code ABOVE this line
module.exports = {
  reverseArray,
  indexOf,
  join,
  push,
  pop,
  unshift,
  shift,
  lastIndexOf,
  slice,
  splice,
  spliceForReal,
  concat,
  shallowCompare,
  deepCompare,
};
