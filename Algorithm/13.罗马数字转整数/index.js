/**
 * @param {string} s
 * @return {number}
 */
// 消耗内存有点大
var romanToInt = function(s) {
    var key = [];
    for (let i = 0;i<s.length;i++){
        switch(s[i]){
            case "I":{
                key.push(1);
                continue;
            }
            case "V":{
                key.push(5);
                continue;
            }
            case "X":{
                key.push(10);
                continue;
            }
            case "L":{
                key.push(50);
                continue;
            }
            case "C":{
                key.push(100);
                continue;
            }
            case "D":{
                key.push(500)
                continue;
            }
            case "M":{
                key.push(1000)
                continue;
            }
            default:
                continue;
        }
    }
    var sum=0;
    for(let i = 0;i<s.length-1;i++){
        if(key[i]>=key[i+1]){
            sum +=key[i];
        }
        else{
            sum -=key[i];
        }
    }
    sum +=key[s.length-1];
    return sum;
};
var s="III"
console.log(romanToInt(s))