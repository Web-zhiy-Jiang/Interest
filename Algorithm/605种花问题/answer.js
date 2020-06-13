var canPlaceFlowers = function(flowerbed,n){
    var key = 0;
    flowerbed.unshift(0);
    flowerbed.push(0)
    // console.log(flowerbed);
    var sum = 0;
    for(let i = 0;i<flowerbed.length;i++){
        if(flowerbed[i] == 0){
            if(i!=flowerbed.length-1){
                sum++;
            }
            else{
                sum++;
                key = key+parseInt((sum-1)/2);
            }            
            // console.log(0)
        }
        else{
            key = key+parseInt((sum-1)/2);
            sum = 0;
            console.log(key)
        }
    }
    // console.log(flowerbed)
    console.log(key)
    return key>=n;
}

var flowerbed = [0,1,0]
console.log(canPlaceFlowers(flowerbed,1))