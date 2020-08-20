var climbStairs = function(n) {
    if(n < 3) return n;
    let a1 = 1;
    let a2 = 2;
    let a3;
    while(n>2){
        a3 = a1 + a2;
        a1 = a2;
        a2 = a3;
        n--;
    }
    return a3;
};
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));
console.log(climbStairs(8));