const maze = [
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0],
];
const start = [0, 0]
const end = [5, 4]
const visited = [start]
const queue = [start]
displayMaze(maze);
findAdjacentSpaces(maze, start, visited);
console.log(visited)
console.log(queue)

function displayMaze(maze) {
    for (let i = 0; i <= maze.length - 1; i++) {
        let row = ""
        for (let j = 0; j <= maze[i].length - 1; j++) {
            row += maze[i][j] + " "
        }
        console.log(row)
    }

}
//before adding to queue, check that the coordinate to add is not: visited before, out of bounds, or a wall
function isVisitedCoordinate(visited, coord) {

    return visited.some(visitedCoord => visitedCoord[0] === coord[0] && visitedCoord[1] === coord[1])
}
function isWall(maze, coord) {
    return maze[coord[0]][coord[1]] === 1
}
function isOutOfBounds(maze, direction, coord) {
    console.log(coord[0])
    if (direction === "up") {
        return coord[0] < 0
    }

    if (direction === "left") {
        return coord[1] < 0
    }

    if (direction === "down") {
        return coord[0] > maze.length
    }
    if (direction === "right") {
        return coord[1] > maze[0].length
    }
}
function isValidCoord(visited, coord, maze, direction) {
    console.log(!isOutOfBounds(maze, direction, coord))
    console.log(!isVisitedCoordinate(visited, coord))
    console.log(!isWall(maze, coord))
    return !isOutOfBounds(maze, direction, coord) && !isVisitedCoordinate(visited, coord) && !isWall(maze, coord)
}
function findAdjacentSpaces(maze, coord, visited) {

    const down = [coord[0] + 1, coord[1]];
    const right = [coord[0], coord[1] + 1];
    const up = [coord[0] - 1, coord[1]];
    const left = [coord[0], coord[1] - 1]

    if (isValidCoord(visited, down, maze, "down")) {
        queue.push(down)
        visited.push(down)
    }

    if (isValidCoord(visited, up, maze, "up")) {
        console.log("up")

        queue.push(up)
        visited.push(up)
    }

    if (isValidCoord(visited, left, maze, "left")) {
        console.log("left")
        queue.push(left)
        visited.push(left)
    }

    if (isValidCoord(visited, right, maze, "right")) {
        console.log("right")
        queue.push(right)
        visited.push(right)
    }


}
// need to be able to find all the legal adjacent spaces, and put them all in a queue
// keep going until the 2 points in the maze meet
// a coord is legal if: it does not exceed the boundaries of the maze, and if it is not a source coord, and if it is not a wall,
// and if it has not been visited before
// adjacent meaning up, down, left and right
//todo check for validity, if the coord passes then push into queue

