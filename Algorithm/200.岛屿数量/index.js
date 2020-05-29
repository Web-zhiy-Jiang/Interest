/**
 * @param {character[][]} grid
 * @return {number}
 */
// 力扣中数组的值是字符，因此，判断时不能用三个等于号。
var grid = [[1,1,0,0,1],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]];
var numIslands = function(grid) {
    var result = 0;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0;col <grid[0].length;col++)
        {
            if(grid[row][col]===1){
                result += dfs(row,col);
            }
        }
    }
    
    function dfs(row,col){
        if(row < 0||row>grid.length-1||col<0||col>grid[0].length-1||grid[row][col]===0){
            return 0;
        }
        grid[row][col] = 0;
        dfs(row-1,col);//判断左边是否存在且为1
        dfs(row+1,col);//判断左边是否存在且为1
        dfs(row,col-1);//判断下边是否存在且为1
        dfs(row,col+1);//判断上边是否存在且为1
        return 1;
    }
    return result;
};
console.log("岛屿数量："+numIslands(grid))