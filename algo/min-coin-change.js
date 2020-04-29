/*
    Given an array of ascending sorted numbers, assume you can use all elements infinite number of times. print the min  numbers needed
    to achieve a sum.

 */

// version 1 iteration brute force find all solution

// function coinChanges (coins, amount, changes = []){
//
//     if(amount == 0){
//         console.log(changes);
//         return 0;
//     }
//
//     for(let coin of coins){
//         if(amount - coin >= 0){
//             coinChanges(coins, amount - coin, changes.concat(coin));
//         }
//     }
// }


// version 2 iteration brute force find count


// coin change brute force


// function coinChanges(coins, amount, results = []){
//
//     if(amount == 0){
//         console.log(results);
//         return 0;
//     }
//     let minCoins = +Infinity;
//     for(let coin of coins){
//         if(amount - coin >=0 ){
//             // returns 0 for last coin
//             let currMinCoins = coinChanges (coins, amount - coin, results.concat (coin));
//             if (currMinCoins < minCoins){
//                 console.log(`minCoins ${minCoins} currMinCoins ${currMinCoins} results ${results}`)
//                  minCoins = currMinCoins;
//              }
//         }
//     }
//     return minCoins + 1;
// }

// function coinChanges(coins, amount){
//
//     let dpArr = new Array(amount).fill(0);
//     dpArr[0] = 1;
//     for( let [key, coin] of coins.entries()){
//         for(let [index, value] of dpArr.entries()){
//             if(index >= coin){
//                 dpArr[index] = dpArr[index] + dpArr[index - coin];
//             }
//         }
//         console.log(dpArr);
//        // Array.from(dpArr).forEach((index, value) =>process.stdout.write(`${index}, ${value}`));
//     }
//     return dpArr[dpArr.length]
//
// }

function coinChanges(coins, amount) {
    const cache = []; // {1}
    const makeChange = (value) => { // {2}
        if (!value) { // {3}
            return [];
        }
        if (cache[value]) { // {4}
            return cache[value];
        }
        let min = [];
        let newMin;
        let newAmount;
        for (let i = 0; i < coins.length; i++) { // {5}
            const coin = coins[i];
            newAmount = value - coin; // {6}
            if (newAmount >= 0) {
                newMin = makeChange(newAmount); // {7}
            }
            if (
                newAmount >= 0 && // {8}
                (newMin.length < min.length - 1 || !min.length) && // {9}
                (newMin.length || !newAmount) // {10}
            ) {
                min = [coin].concat(newMin); // {11}
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[value] = min); // {12}
    };
    return makeChange(amount); // {13}
}


let result = coinChanges([1, 5, 10] , 8);
console.log(result);
