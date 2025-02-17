import task from './maps.mjs';

const symbols = {
  car: '🚗',
  goal: '🏁',
  path: '⬛',
  wall: '⬜'
};
const FRAME_RATE = 25; // 20 updates/sec

let grid = [];
let currentRow = null;
let currentCol = null;
let currentDirection = 'W';
const directions = ['N', 'E', 'S', 'W'];
let currentDirectionIndex = 3;
let map = task.five; // one, two, three, four, five – different mazes == tasks. Also 'four' fails...

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
    console.log('Starting position (🚗) not found in maze');
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

        const originalDirection = currentDirectionIndex;
        const directions = [];

        for (let i = 0; i < 4; i++) {
            turn();
            if (peek() && Math.abs(currentDirectionIndex - originalDirection) !== 2) {
                directions.push(currentDirectionIndex);
            }
        }

        if (directions.length === 0) {
            for (let i = 0; i < 4; i++) {
                turn();
                if (peek()) {
                    directions.push(currentDirectionIndex);
                }
            }
        }

        if (directions.length > 0) {
            const randomIndex = Math.floor(Math.random() * directions.length);
            const targetDirection = directions[randomIndex];

            while (currentDirectionIndex !== targetDirection) {
                turn();
                await new Promise(r => setTimeout(r, FRAME_RATE/2));
            }
        } else {
            console.log("Finished!");
            break;
        }
    }
}

initialize();
draw();
navigate();
