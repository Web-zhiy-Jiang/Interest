var twoSum = function(nums, target) {
    let arr = []; //坐标放进去
    // for (let i = 0;  i < nums.length; i++) {  //暴力解法
    //   // 循环一遍
    //   for (let j = i + 1;  j < nums.length; j++) { 
    //     if (nums[i] + nums[j] === target) {
    //       arr = [i, j];
    //       return arr;
    //     }
    //   }
    // }
    nums.forEach(function(e,i){
        arr[e]=i;
    });
    for(let i = 0;i < nums.length;i++){
        let j = arr[target - nums[i]];
        if(j&&j!==i){
            return [i,j]
        }
    }
 }
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums,target))

