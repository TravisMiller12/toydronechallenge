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

function updateDronePosition() {
  const droneElement = document.getElementById("drone"); // Fetches the HTML element ID "drone" and assigns it the variable "droneElement"
  const cellSize = 50; // Assuming each cell is 50px in size
  const xOffset = (cellSize - droneElement.offsetWidth) / 2;
  const yOffset = (cellSize - droneElement.offsetHeight) / 2;

  droneElement.style.transform = `translate(${drone.position.x * cellSize + xOffset
    }px, ${drone.position.y * cellSize + yOffset}px)`;
}

// Keeps tracks of the drones positioning

function placeDrone() {
  const droneX = document.getElementById("drone-x").value;
  const droneY = document.getElementById("drone-y").value;

  drone.position.x = droneX - 1;
  drone.position.y = droneY - 1;

  const droneElement = document.getElementById("drone");
  droneElement.style.display = "block";

  setTimeout(() => {
    updateDronePosition();
  }, 0);
}



// Places the drone

document.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key); // Add this line
  const speed = 1; // Adjust the speed of movement as needed

  switch (event.key) {
    case "ArrowUp":
      drone.position.y = Math.max(drone.position.y - speed, 0);
      break;
    case "ArrowDown":
      drone.position.y = Math.min(drone.position.y + speed, 9);
      break;
    case "ArrowLeft":
      drone.position.x = Math.max(drone.position.x - speed, 0);
      break;
    case "ArrowRight":
      drone.position.x = Math.min(drone.position.x + speed, 9);
      break;
    default:
      return; // Do nothing for other keys
  }

  updateDronePosition();
});
