/**
 * @param {number[][]} points
 * @return {number}
 */

//  时间 - 27.97% - 148ms; 内存消耗 - 10.53% - 45.5MB
var findMinArrowShots = function(points) {
    var count=points.length;//记录需要的弓箭数量
    points.sort((x,y)=>x[1]-y[1]);//对气球直径终点的位置进行排序
    var end = points[0];
    for(var i=1;i<points.length;i++){
        if(end[1]>=points[i][0]){//边界值考虑
            count--;
        }
        else{
            end = points[i];
        }
    }
    return count;

};
/* 
    时间 - 97.90% - 108ms; 内存消耗 - 12.28% - 45.4MB
 */
var findMinArrowShots2 = function(points) {
    if(points.length==0){
        return 0;
    }
    var count=1;//记录需要的弓箭数量
    points.sort((x,y)=>x[1]-y[1]);//对气球直径终点的位置进行排序
    var end = points[0];
    for(var i=1;i<points.length;i++){
        if(end[1]<points[i][0]){//边界值考虑
            end = points[i];
            count++;
        }
    }
    return count;

};
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))