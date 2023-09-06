const gameBoard = document.getElementById("game-board");

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gameBoard.appendChild(cell);
}

const drone = {
  position: { x: 0, y: 0 },
  direction: "right",
};

if (event.keyCode === 39) {
  drone.position.x += 1;
  drone.direction = "right";
  updateDronePosition;
}

function updateDronePosition() {
  const droneElement = document.getElementById("drone");
  droneElement.style.top = drone.position.y * 50 + "px";
  droneElement.style.left = drone.position.x * 50 + "px";
}

function placeDrone() {
  const droneX = document.getElementById("drone-x").value;
  const droneY = document.getElementById("drone-y").value;

  drone.position.x = droneX;
  drone.position.y = droneY;

  const droneElement = document.getElementById("drone");
  droneElement.style.display = "block";
  droneElement.style.top = drone.position.y * 50 + "px";
  droneElement.style.left = drone.position.x * 50 + "px";
}
