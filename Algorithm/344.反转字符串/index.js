/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length===1){
        return s;
    }
    else{
        s.reverse();
    }
    return s;
};
var s = ["a","e","i","o","u"];
console.log(reverseString(s));

// 利用了数组反转api reverse.