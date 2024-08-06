const maze = document.getElementById("maze");

function generateMaze() {
  maze.innerHTML = "";

  const rows = Math.floor(Math.random() * 10) + 5;
  const cols = Math.floor(Math.random() * 10) + 5;

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    maze.appendChild(row);

    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);

      if (i === rows - 1 && j === cols - 1) {
        cell.classList.add("end");
      } else if (Math.random() > 0.7) {
        cell.classList.add("wall");
      }
    }
  }
}
