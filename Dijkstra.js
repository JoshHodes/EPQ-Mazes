const maze = [
    [2, 8, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0],
];
const start = [0, 0]
const end = [5, 4]
displayMaze(maze);
findAdjacentSpaces(maze, start);
function displayMaze(maze) {
    for (i = 0; i <= maze.length - 1; i++) {
        let row = "";
        for (j = 0; j <= maze[i].length - 1; j++) {
            row += maze[i][j] + " ";

        }
        console.log(row)
    }
}

function findAdjacentSpaces(maze, coord) {

    const down = [coord[0] + 1, coord[1]];
    const right = [coord[0], coord[1] + 1];
    const up = [coord[0] - 1, coord[1]];
    const left = [coord[0], coord[1] - 1]

}
// need to be able to find all the legal adjacent spaces, and put them all in a queue
// keep going until the 2 points in the maze meet
// a coord is legal if: it does not exceed the boundaries of the maze, and if it is not a source coord, and if it is not a wall,
// and if it has not been visited before
// adjacent meaning up, down, left and right
//todo check for validity, if the coord passes then push into queue