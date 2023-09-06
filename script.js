const gameBoard = document.getElementById("game-board");

// Fetches the game-board element from the html file

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gameBoard.appendChild(cell);
}

// Generates the 10 x 10 grid.

const drone = {
  position: { x: 0, y: 0 },
  direction: "right",
};

// Defines the drone

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 39) {
    drone.position.x += 1;
    updateDronePosition();
  }
});

function updateDronePosition() {
  const droneElement = document.getElementById("drone");
  droneElement.style.top = drone.position.y * 50 + "px"; // Takes the current unit position and multiplies it by 50 to determine the y position
  droneElement.style.left = drone.position.x * 50 + "px"; // Takes the current unit position and multiplies it by 50 to determine the x position
}

// Keeps tracks of the drones positioning

function placeDrone() {
  const droneX = document.getElementById("drone-x").value; // Fetches drone-x from the html file. Assigns variable droneX to the x input from the html
  const droneY = document.getElementById("drone-y").value; // Fetches drone-y from the html file. Assigns variable droneY to the y input from the html

  drone.position.x = droneX;
  drone.position.y = droneY;

  // These lines assign the values obtained from the input fields to the x and y properties of a drone object.

  const droneElement = document.getElementById("drone"); // Fetches drone ID from html
  droneElement.style.display = "block"; // Changes current style display of drone from none to block
  updateDronePosition(); // Calls the updateDronePosition function
}

// Places the drone
