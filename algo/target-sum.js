let nums = [1, 1, 1, 1, 1];
let T = 3;
let f = findway(nums, T, 0, 0)
console.log(f);


function findway(nums, T, sum, index){

    if(index ==  nums.length){
        return T == sum ? 1 :0;
    }

    return findway(nums, T, sum+nums[index], index+1) +
        findway(nums, T, sum-nums[index], index+1)

}
