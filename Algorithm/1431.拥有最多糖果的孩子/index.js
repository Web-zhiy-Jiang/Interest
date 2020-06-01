/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//First
// var kidsWithCandies = function(candies, extraCandies) {
//     var arr = [];
//     for(let i = 0;i<candies.length;i++){
//         let key = candies[i];
//         candies[i] = candies[i] +extraCandies;
//          调用了Math.max.apply(null,arr)函数
//         let value = Math.max.apply(null,candies)==key+extraCandies? true : false;
//         arr.push(value);
//         candies[i] = key;
//     }    
//     return arr;
// };
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// var kidsWithCandies = function(candies, extraCandies) {
//     var arr = [];
//     var arr1 = candies;
//     for(let i = 0;i<candies.length;i++){
//         let key = candies[i];
//         candies[i] = candies[i] +extraCandies;
//         // arr1.sort(numbersort);
//         let value = Math.max.apply(null,arr1)==key+extraCandies? true : false;
//         //判断第 i 个加额外的糖果的数量是否排在最后，或者跟拍照最后的数相等
//         // let value=key+extraCandies==arr1[candies.length-1]? true : false;
//         arr.push(value);
//         candies[i] = key;
//         // arr1 = [];   
//         // console.log(candies);

//     }
//     // function numbersort(a,b){
//     //     return a-b;
//     // }
    
//     return arr;
// };
//Second
var kidsWithCandies = function(candies, extraCandies) {
    var arr = [];
    let key = Math.max.apply(null,candies) - extraCandies;
    for(i in candies){
        let value = key <=candies[i] ? true:false;
        arr.push(value);
    }
    return arr;
};

candies = [2,3,5,1,3];
extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));