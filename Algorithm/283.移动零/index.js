var nums = [0,1,0,3,25,16];
// var moveZeroes = function(nums) {
//     var key = 0;// 设置 0 的个数
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===0){
//             key++;
//         }
//         else{
//             nums[i-key] = nums[i];
//         }
//     }
//     for(let i = key;i>0;i--){
//         nums[nums.length-i] = 0;
//     }
//     return nums;
// };

var moveZeroes = function(nums) {
    var key = 0;// 设置 非 0 的个数
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[key] = nums[i];
            key++;

        }
    }
    for(let i = key;i<nums.length;i++){
        nums[i] = 0;
    }
    return nums;
};
console.log(moveZeroes(nums));