var reverseString = function(s) {
    if(s.length< 1){
        return undefined;
    }
    else{
        let key = s.shift()//shift 从数组中删掉第一个值并且也等于这个值
        reverseString(s);
        s.push(key)
    }
    return s;
};
var s = ["a","e","i","o","u"];
console.log(reverseString(s));
var s1 = [];
console.log(reverseString(s1));
// 使用slice 会改变 S 的定义.