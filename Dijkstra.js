const maze = [
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 2, 0],
];
displayMaze(maze);

const start = {
    x: 0,
    y: 0,
    depth: 0
}
const end = {
    x: 5,
    y: 4
}


console.log(startMaze(maze, start, end))

function startMaze(maze, start, end) {
    const visited = [start]
    const queue = [start]
    while (queue.length > 0) {
        const currentMazeLocation = queue.shift();
        const adjacentSpaces = findAdjacentSpaces(maze, currentMazeLocation, visited);
        const isFound = adjacentSpaces.find(adjacentSpace => adjacentSpace.x === end.x && adjacentSpace.y === end.y);
        if (isFound) {
            return isFound.depth;
        }
        visited.push(...adjacentSpaces);
        queue.push(...adjacentSpaces);

    }
}


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
    // change so its .x and .y
    return visited.some(visitedCoord => visitedCoord.x === coord.x && visitedCoord.y === coord.y)
}
function isWall(maze, coord) {
    return maze[coord.x][coord.y] === 1
}
function isOutOfBounds(maze, direction, coord) {
    if (direction === "up") {
        return coord.x < 0
    }

    if (direction === "left") {
        return coord.y < 0
    }

    if (direction === "down") {
        return coord.x > maze.length - 1
    }
    if (direction === "right") {
        return coord.y > maze[0].length - 1
    }
}
function isValidCoord(visited, coord, maze, direction) {
    return !isOutOfBounds(maze, direction, coord) && !isVisitedCoordinate(visited, coord) && !isWall(maze, coord)
}
function findAdjacentSpaces(maze, currentCoord, visited) {


    const down = {
        x: currentCoord.x + 1,
        y: currentCoord.y,
        depth: currentCoord.depth + 1
    }

    const right = {
        x: currentCoord.x,
        y: currentCoord.y + 1,
        depth: currentCoord.depth + 1
    }

    const up = {
        x: currentCoord.x - 1,
        y: currentCoord.y,
        depth: currentCoord.depth + 1
    }

    const left = {
        x: currentCoord.x,
        y: currentCoord.y - 1,
        depth: currentCoord.depth + 1
    }

    const newCoords = [];

    if (isValidCoord(visited, down, maze, "down")) {
        newCoords.push(down)
    }

    if (isValidCoord(visited, up, maze, "up")) {
        newCoords.push(up)
    }

    if (isValidCoord(visited, left, maze, "left")) {
        newCoords.push(left)
    }

    if (isValidCoord(visited, right, maze, "right")) {
        newCoords.push(right)
    }
    return newCoords;
}





// need to be able to find all the legal adjacent spaces, and put them all in a queue
// keep going until the 2 points in the maze meet
// a coord is legal if: it does not exceed the boundaries of the maze, and if it is not a source coord, and if it is not a wall,
// and if it has not been visited before
// adjacent meaning up, down, left and right
//todo check for validity, if the coord passes then push into queue

