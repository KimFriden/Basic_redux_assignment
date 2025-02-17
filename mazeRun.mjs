import task from './maps.mjs';

const symbols = {
  car: '🚗',
  goal: '🏁',
  path: '⬛',
  wall: '⬜'
};
const FRAME_RATE = 25; // Updates 40 times a second.

let grid = [];
let currentRow = null;
let currentCol = null;
let currentDirection = 'W';
const directions = ['N', 'E', 'S', 'W'];
let currentDirectionIndex = 3;
let map = task.uno; // uno, dos, tres, cuatro, cinco (1, 2, 3, 4, 5)

function initialize() {
    grid = map.trim().split('\n').map(row => Array.from(row));
  
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === symbols.car) {
          currentRow = row;
          currentCol = col;
          grid[row][col] = symbols.path;
          return;
        }
      }
    }
  }
  
function getDirection() {
  switch(currentDirection) {
    case 'N': return [-1, 0];
    case 'E': return [0, 1];
    case 'S': return [1, 0];
    case 'W': return [0, -1];
  }
}

function isValidPosition(row, col) {
  return row >= 0 && row < grid.length &&
         col >= 0 && col < grid[0].length &&
         grid[row][col] !== symbols.wall;
}

function move() {
  if (currentRow === null) initialize();
  const [dRow, dCol] = getDirection();
  const newRow = currentRow + dRow;
  const newCol = currentCol + dCol;

  if (isValidPosition(newRow, newCol)) {
    currentRow = newRow;
    currentCol = newCol;
    draw();
  }
}

function turn() {
  currentDirectionIndex = (currentDirectionIndex + 1) % 4;
  currentDirection = directions[currentDirectionIndex];
}

function peek() {
  const [dRow, dCol] = getDirection();
  return isValidPosition(currentRow + dRow, currentCol + dCol);
}

function atGoal() {
return currentRow !== null &&
        currentCol !== null &&
        grid[currentRow][currentCol] === symbols.goal;
}

function draw() {
    const CLEAR = '\x1B[2J\x1B[0f';
    let display = CLEAR;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            display += row === currentRow && col === currentCol ?
                      symbols.car : grid[row][col];
        }
        display += '\n';
    }
    console.log(display);
}

async function navigate() {
    while (!atGoal()) {
        while (peek()) {
            move();
            await new Promise(r => setTimeout(r, FRAME_RATE));
        }

        let originalDirection = currentDirectionIndex;
        let foundPath = false;

        for (let i = 0; i < 4; i++) {
            turn();
            await new Promise(r => setTimeout(r, FRAME_RATE/2));

            if (peek()) {
                if (Math.abs(currentDirectionIndex - originalDirection) !== 2) {
                    foundPath = true;
                    break;
                }
            }
        }

        if (!foundPath) {
            console.log("Finish!"); // It never doesn't find a path, so this works as goal post, lol.
            break;
        }
    }
}

initialize();
draw();
navigate();
