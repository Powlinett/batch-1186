// This function determine if a tile can move or not

const canMove = (tile) => {
  // 1. GET CURRENT TILE POSITION
  const tileColumnIndex = tile.cellIndex;
  const tileRowIndex = tile.parentElement.rowIndex;

  // 2. GET THE EMPTY TILE POSITION
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumnIndex = emptyTile.cellIndex;
  const emptyTileRowIndex = emptyTile.parentElement.rowIndex;

  // 3. CHECK IF EMPTY NEIGHBORS
  const emptyUp = emptyTileColumnIndex === tileColumnIndex && tileRowIndex + 1 === emptyTileRowIndex;
  const emptyDown = emptyTileColumnIndex === tileColumnIndex && tileRowIndex - 1 === emptyTileRowIndex;
  const emptyRight = emptyTileRowIndex === tileRowIndex && tileColumnIndex - 1 === emptyTileColumnIndex;
  const emptyLeft = emptyTileRowIndex === tileRowIndex && tileColumnIndex + 1 === emptyTileColumnIndex;

  return emptyUp || emptyDown || emptyRight || emptyLeft;
};

const moveTile = (tile) => {
  const emptyTile = document.querySelector('.empty');

  const text = tile.innerText;
  emptyTile.innerText = text;
  emptyTile.classList.remove('empty');

  tile.innerText = ''; // OR event.target
  tile.classList.add('empty');
};


// TODO

// HINT BUTTON - Display hint on click

const button = document.getElementById('show-hint');

button.addEventListener('click', (event) => {
  const hint = document.querySelector('.hint');
  hint.classList.add('active');
});


// GAME - Reorder the tiles to win

// Chercher toutes les tuiles - OK
// écouter le click sur chaque tuile - OK
// on click, on vérifie qu'on peut bouger la tuile - OK
// si oui, on change le innerText de la tuile active + de la tuile
// et on change aussi le background
// si non? rien

const order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''].toString();

const tiles = document.querySelectorAll('td');

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    const movable = canMove(event.target); // OR tile
    if (movable) {
      moveTile(event.target); // OR tile
    }

    const tilesOrder = [];
    tiles.forEach((tile) => tilesOrder.push(tile.innerText));

    const tilesOrderAsString = tilesOrder.toString();

    const gameWon = order === tilesOrderAsString;
    if (gameWon) {
      setTimeout(() => {
        alert('Win!!!');
      }, 1000);
    }
  });
});



