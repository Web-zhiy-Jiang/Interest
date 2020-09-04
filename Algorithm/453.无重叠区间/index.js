//贪心算法
/* 
    思路：对数组中的每一项的第二个值进行从小到大的排序，sort()
        按顺序计算每一项的第一个值小于第一项的第二个值的数量
        然后，当没有了比它大的数时，此时的值为现在比较项的第二个值，
        在按顺序比较，
        依次下去
        时间 - 88.67% - 76ms; 内存消耗 - 77.59% - 39.7MB

*/
var eraseOverlapIntervals = function(intervals) {
    var count=0;//记录要删除区间的数量
    intervals.sort((a,b)=>a[1]-b[1])//数组以每一项第二个数的大小来排序
    var end = intervals[0];//
    for(var i=1;i<intervals.length;i++){
        if(end[1]>intervals[i][0]){
            count++;
        }
        else{
            end=intervals[i];
        }
        
    }
    return count;
};
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]))