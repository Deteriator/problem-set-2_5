// Question 1
const shoutout = function() {
  for(let i= 0; i < arguments.length;i++){
    console.log(arguments[i]);
  }
};

// Question 2
const reverseArray = function() {
 let newArray = [];
  for (let i = arguments.length - 1; i >= 0; i--) {
   newArray.push(arguments[i]);
  }
  return newArray;
};

// Question 3
const indexOf = function(array,string) {
    for(let i = 0; i < array.length; i++){
      if(array[i] === string){
        return i;
      }
    }
    return -1;
};

// Question 4
const join = function(array,seperator) {
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
const push = function(array,value) {
      let newArray = array;
      newArray[array.length] = value;
      return newArray.length;
};

// Question 6
const pop = function(array) {
    let popped = array[array.length - 1];
    array.length -= 1;
    return (popped);
};

// Question 7
const unshift = function(array,value) {
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
const lastIndexOf = function(array,value) {
  let index = -1;
    for(let i = 0; i < array.length; i++){
      if(array[i] === value){
        index = i;
      }
    }
    return index;
};

// Question 10
const slice = function(array,start,end) {
    let newArray = [];
    if(end !==undefined && end < array.length){
      for(let i = 0;i < end - 2; i++){
        if(start >=0){
          newArray[i] = array[i + start];
        }
        else{
          newArray[i] = array[i];
        }
      }
    }
    else{
      for(let i = 0; i < array.length;i++){
        newArray[i] = array[i];
      }
    }
  return newArray;
};

// Question 11
const splice = function() {

};

// Question 12
const spliceForReal = function() {

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
