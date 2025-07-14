const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let score = 0;

let directionChanged = false;

const maxCols = canvas.width / box;
const maxRows = canvas.height / box;

let snake = [{ x: 9 * box, y: 10 * box }];
let direction = "RIGHT";

let food = {
  x: Math.floor(Math.random() * (canvas.width / box)) * box,
  y: Math.floor(Math.random() * (canvas.height / box)) * box,
};

document.addEventListener("keydown", changeDirection);

let touchStartX = 0;
let touchStartY = 0;

canvas.addEventListener("touchstart", function (e) {
  const touch = e.touches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, false);

canvas.addEventListener("touchend", function (e) {
  const touch = e.changedTouches[0];
  const dx = touch.clientX - touchStartX;
  const dy = touch.clientY - touchStartY;

  // Ignore small swipes
  if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return;

  if (Math.abs(dx) > Math.abs(dy)) {
    // Horizontal swipe
    if (dx > 0 && direction !== "LEFT") direction = "RIGHT";
    else if (dx < 0 && direction !== "RIGHT") direction = "LEFT";
  } else {
    // Vertical swipe
    if (dy > 0 && direction !== "UP") direction = "DOWN";
    else if (dy < 0 && direction !== "DOWN") direction = "UP";
  }

  directionChanged = true; // To prevent double input (if you're using that fix)
}, false);

function changeDirection(event) {
  if (directionChanged) return; // Ignore extra input this frame

  const key = event.key;

  if (key === "ArrowLeft" && direction !== "RIGHT") {
    direction = "LEFT";
    directionChanged = true;
  } else if (key === "ArrowUp" && direction !== "DOWN") {
    direction = "UP";
    directionChanged = true;
  } else if (key === "ArrowRight" && direction !== "LEFT") {
    direction = "RIGHT";
    directionChanged = true;
  } else if (key === "ArrowDown" && direction !== "UP") {
    direction = "DOWN";
    directionChanged = true;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // Move snake
  let head = { ...snake[0] };
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;

  
  // Wrap around edges
  if (head.x < 0) head.x = (maxCols - 1) * box;
  if (head.x >= maxCols * box) head.x = 0;
  if (head.y < 0) head.y = (maxRows - 1) * box;
  if (head.y >= maxRows * box) head.y = 0;

      // Correct wall collision check
  if (collision(head, snake)) {
  clearInterval(game);
  setTimeout(() => {
    alert("Game Over");
    resetGame();
  }, 10);
  return;
  } 


  // Eat food
  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
    food = {
      x: Math.floor(Math.random() * (canvas.width / box)) * box,
      y: Math.floor(Math.random() * (canvas.height / box)) * box,
    };
  } else {
    snake.pop();
  }

  if(score === 69) {
    victory();
  }

  snake.unshift(head);
  directionChanged = false;
}

function collision(head, body) {
  for (let i = 0; i < body.length; i++) {
    if (head.x === body[i].x && head.y === body[i].y) {
      return true;
    }
  }
  return false;
}

let game = setInterval(draw, 80);

function resetGame() {
  score = 0;
  document.getElementById("score").textContent = `Score: ${score}`;
  
  snake = [{ x: 9 * box, y: 10 * box }];
  direction = "RIGHT";

  food = {
    x: Math.floor(Math.random() * maxCols) * box,
    y: Math.floor(Math.random() * maxRows) * box,
  };

  clearInterval(game);
  game = setInterval(draw, 80);
}

function victory() {
  alert("You won! The word is 'love'.");
  window.location.href = "../newpage.html";
}