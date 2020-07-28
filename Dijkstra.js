const maze = [
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0],
];
for (i = 0; i <= maze.length - 1; i++) {
    let row = "";
    for (j = 0; j <= maze[i].length - 1; j++) {
        row += maze[i][j] + " ";

    }
    console.log(row)
}
