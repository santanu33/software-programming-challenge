/*


    // Add and remove
    push()      // Insert an element at the end. Returns the length of the new array
    unshift()   // Inserts an element in the beginning. Returns the length of the new array
    pop()       // Remove an element from the end. returns the removed element.
    shift()     // Remove first element
    splice()    // let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])


    // Iterating
    forEach()   // Iterates an array
    filter()    // Iterates an array and result is filtered array
    map()       // Iterates an array and result is new array
    reduce()    // "Reduces" the array into single value (accumulator)
    for..of     // const months = ['Jan', 'March', 'April', 'June'];
                    for (const n of months) {
                      console.log(n);
                    }


    // Others
    slice()     // Returns desired elements in a new array
    concat()    // Append one or more arrays with given array
    fill()      // create an array with length 12 and all elements as 0. new Array(12).fill(0)


Joins multiple arrays and returns a copy of the joined arrays.

every


Iterates every element of the array, verifying the desired condition (function) until false is returned.

filter


Creates an array with each element that evaluates to true in the function provided.

forEach


Executes a specific function on each element of the array.

join


Joins all the array elements into a string.

indexOf


Searches the array for specific elements and returns its position.

lastIndexOf


Returns the position of the last item in the array that matches the search criterion.

map


Creates a new array from a function that contains the criterion/condition and returns the elements of the array that match the criterion.

reverse


Reverses the array so that the last item becomes the first and vice versa.

slice


Returns a new array from the specified index.

some


Iterates every element of the array, verifying the desired condition (function) until true is returned.

sort


Sorts the array alphabetically or by the supplied function.

toString


Returns the array as a string.

valueOf


Similar to the toString method, returns the array as a string.


The following is a list of the new methods added in ES2015 and ES2016:

Method


Description

@@iterator


Returns an iterator object that contains the key/value pairs of the array that can be synchronously called to retrieve key/value of the array elements.

copyWithin


Copies a sequence of values of the array into the position of a start index.

entries


Returns @@iterator, which contains key/value pairs.

includes


Returns true if an element is found in the array, and false otherwise. This was added in ES2016.

find


Searches for an element in the array given the desired condition (callback function) and returns the element if it is found.

findIndex


Searches for an element in the array given the desired condition (callback function) and returns the element index if it is found.

fill


Fills the array with a static value.

from


Creates a new array from an existing one.

keys


Returns @@iterator, which contains the keys of the array.

of


Creates a new array from the arguments passed to the method.

values


Returns @@iterator, which contains the values of the array.

Along with these methods, the Array API also provides a way of iterating the array which uses the Iterator object that can be retrieved from the array instance and used in the for...of loop.


*/

/*

    In JavaScript, an array is a mutable object.
    We can easily add new elements to it. The object will grow dynamically as we add new elements to it.
    In many other languages, such as C and Java, we need to determine the size of the array, and if we need to add more elements to the array,
    we need to create a completely new array; we cannot simply add new elements to it as we need them.

 */

let numbers = [1];
numbers[100] = 2; // no error , all other elements from index 1 to 99 is undefined


process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}
