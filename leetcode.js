/**Leetcode 1 - Two Sums - 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.*/ 
const nums = [2,7,11,15]
const target = 9

var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length; i++){
        complement = target - nums[i]
        if(nums.includes(complement) && nums.indexOf(complement) !== i){
            return [i,nums.indexOf(complement)]
        }
    }
};
console.log(twoSum(nums, target))

//===============================================================================

/**
 * Leetcode 7 - Reverse Integer -
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
 * then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned). 
 */
//const x = 123
// const x = -123
// const x = 120
// const x = 0
 const x = 1534236469 
var reverse = function(x) {
    let reversed = 0
    let sign = x < 0 ? -1 : 1
    x = Math.abs(x)
    while (x > 0) {
        reversed = reversed * 10 + x % 10
        x = Math.floor(x / 10)
    }
    reversed *= sign
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0
    }
    return reversed
};
console.log(reverse(x))

//===============================================================================