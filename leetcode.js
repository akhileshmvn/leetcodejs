/**Leetcode 1 - Two Sums - 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.*/ 
const nums = [2,7,11,15]
const target = 9

var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length; i++){
        complement = target - nums[i]
        if(nums.contains(complement)){
            return [i,nums.indexOf(complement)]
        }
    }
};
console.log(twoSum(nums, target))