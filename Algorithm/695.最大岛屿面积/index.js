// function dfs(row,col){
//     if(row < 0||row>grid.length-1||col<0||col>grid[0].length-1||grid[row][col]===0){
//         return 0;
//     }
//     grid[row][col] = 0;
//     count = 1;
//     count +=dfs(row-1,col);
//     count +=dfs(row+1,col);
//     count +=dfs(row,col-1);
//     count +=dfs(row,col+1);
//     return count;
// }

// var grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]];
// var result = 0;
// for(let row = 0; row < grid.length; row++){
//     for(let col = 0;col <grid[0].length;col++)
//     {
//         if(grid[row][col]===1){
//             const count = dfs(row,col);
//             result = Math.max(result,count);
//         }
//     }
// }
// console.log('最大岛屿面积为：' + result);
/**
 * @param {number[][]} grid
 * @return {number}
 */
var grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]];
var maxAreaOfIsland = function(grid) {
    function dfs(row,col){
        if(row < 0||row>grid.length-1||col<0||col>grid[0].length-1||grid[row][col]==0){
            return 0;
        }
        grid[row][col] = 0;
        count = 1;
        count +=dfs(row-1,col);//判断左边是否存在且为1
        count +=dfs(row+1,col);//判断左边是否存在且为1
        count +=dfs(row,col-1);//判断下边是否存在且为1
        count +=dfs(row,col+1);//判断上边是否存在且为1
        return count;
    }
    var result = 0;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0;col <grid[0].length;col++)
        {
            if(grid[row][col]==1){
                const count = dfs(row,col);
                result = Math.max(result,count);
            }
        }
    }
    return result;
};

console.log('最大岛屿面积为：' + maxAreaOfIsland(grid));