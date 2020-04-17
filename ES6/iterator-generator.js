console.log("=============== basic of generator ====================");
/*    A generator is a function which return iterator !
      Generator functions are indicated by a star character (*) after the function keyword and use the new yield keyword.

      let generator = *() => {} // this is invalid because no function keyword

      The yield keyword pauses generator function execution and the value of the expression following the yield keyword is
      returned to the generator's caller. It can be thought of as a generator-based version of the return keyword.
*/
function *gen(){
    yield 4;
    yield 6;
}

for(let i of gen()) {
    console.log(i); //4 and 6
}

console.log("=============== understanding the done and value property ====================");

/*
 A for-of loop calls next() on an iterable each time the loop executes and stores the value from the result object in a variable.
 The loop continues this process until the returned object's done property is true
*/


function *generator(){
   return "foo";
}

console.log(generator().next()); // { value: 'foo', done: true }

for(let i of generator()) {
    console.log(i); //doesn't print anything because using return keyword has done true
}

console.log("=============== Play with yield keyword ====================");

/* Yield returns a value only once, and the next time you call the same function it will move on to the next yield statement.

 */

function * withYield(a) {
    let b = 5;
    yield a + b;
    b = 6; // it will be re-assigned after first execution
    yield a * b;
}

const calcSix = withYield(6);

console.log(calcSix.next().value); // 11
console.log(calcSix.next().value); // 36

console.log("=============== Yield delegation ====================");

/*
    yield delegation


*/

function * anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function * generator(i) {
    yield * anotherGenerator(i);

}

var gen = generator(1);
console.log(gen)
console.log(gen.next().value) // 2
console.log(gen.next().value) // 3
console.log(gen.next().value) // 4;




