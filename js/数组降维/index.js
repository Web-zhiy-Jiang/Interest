var arrs = [1,3,[2,4],[4,5,1,[4,7,[7,8]]]]
function Arr(arrs = []){
    var key = 0;
    for(i in arrs ){
        if(arrs[i] instanceof Array){
            arrs=arrs.flat();
            return Arr(arrs);
        }
    }
    return arrs;
}
console.log(Arr(arrs));