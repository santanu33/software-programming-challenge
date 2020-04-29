/*
    given an array of numbers, print all the possible numbers which could add up to specified sum.
 */

function possibleCombinations(numbers, target, partial=[]){
    let sum = partial.reduce((acc,number) => acc + number, 0)
    if(target - sum < 0)
        return;
    if(target - sum == 0)
        console.log(`combination => ${partial}`);

    for(let [index, value] of numbers.entries()){
        let remainingArr =  numbers.slice(index+1);
        possibleCombinations(remainingArr, target,partial.concat(value))
    }

}

possibleCombinations([3,9,8,4,5,7,10],15);

/*
    this code find all possible combinations of numbers and check with their sum


 */
