/*
Perhaps the most interesting feature of default parameter values is that the default value need not be a primitive value.
You can, for example, execute a function to retrieve the default parameter value, like this:
*/

function getValue() {
    return value + 5;
}

function add(first, second = getValue()) {
    return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));  //    7

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function add(first = second, second) {
    return first + second;
}

console.log(add(1, 1));         // 2
console.log(add(undefined, 1)); // throws error

// The calls to add(1, 1) and add(undefined, 1) in this example now map to this code behind the scenes:

// JavaScript representation of call to add(1, 1)
let first = 1;
let second = 1;

// JavaScript representation of call to add(undefined, 1)
let first = second;
let second = 1;

