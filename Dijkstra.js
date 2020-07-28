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
// need to be able to find all the legal adjacent spaces, and put them all in a queue
// keep going until the 2 points in the maze meet
// a coord is legal if: it does not exceed the boundaries of the maze, and if it is not a source coord, and if it is not a wall,
// and if it has not been visited before
// adjacent meaning up, down, left and right