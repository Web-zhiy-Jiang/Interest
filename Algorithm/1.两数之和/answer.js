var twoSum = function( nums ,target){
    let arr = [];
    for(let i=0;i<nums.length-1;i++){
        let restnum = target - nums [i];
        for(let j=i+1;j<nums.length;j++){
            if(restnum==nums[j]) {
                arr.push(i);
                arr.push(j);
                break;
            }
        }
    }
    return arr;
};
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums,target))