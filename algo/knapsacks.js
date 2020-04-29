let keys = [10, 2, 1, 3]
let values = [10, 5, 10, 10];
let sumToAchieve = 20;


function allCombinationToGetSum(values, sumToAchieve, combinations, indexes) {
    if(sumToAchieve < 0){
        return;
    }
    if(sumToAchieve >=0){
        console.log(`${combinations} ......... ${indexes}`);
    }
    for(let [index, value] of values.entries()){
        allCombinationToGetSum(values, sumToAchieve - value, combinations.concat(value), indexes.concat(index) );
    }
}

allCombinationToGetSum(values, sumToAchieve, [], []);
