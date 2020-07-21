const maze = [
    [2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2],
];
for (i = 0; i <= 4; i++) {
    let row = "";
    for (j = 0; j <= 4; j++) {
        row += maze[i][j] + " ";

    }
    console.log(row)
}
